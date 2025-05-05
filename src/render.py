import datetime
from pathlib import Path

import jinja2
import markupsafe
import markdown


INDEX_TEXT = """
I like to build and understand things.
"""


posts = []
for file in Path("posts").glob("**/*.md"):
    with open(file, "r") as f:
        posts.append(
            {
                "content": f.read(),
                "slug": file.stem,
            }
        )

print(posts)

env = jinja2.Environment(loader=jinja2.FileSystemLoader("templates/"))
md = markdown.Markdown(extensions=["meta"])
env.filters["markdown"] = lambda text: markupsafe.Markup(md.convert(text))
env.globals["get_title"] = lambda: md.Meta["title"][0]
env.trim_blocks = True
env.lstrip_blocks = True

# render index and blog
home_template = env.get_template("home.jinja")
blog_template = env.get_template("blog.jinja")
post_template = env.get_template("post.jinja")

with open("site/index.html", "w") as f:
    f.write(home_template.render(content=INDEX_TEXT, title="Neev Parikh"))

with open("site/blog.html", "w") as f:
    f.write(blog_template.render(posts=posts, title="Blog | Neev Parikh"))

for post in posts:
    with open(f"site/posts/{post['slug']}.html", "w") as f:
        f.write(post_template.render(content=post["content"], title=post["title"]))
