import datetime
from pathlib import Path
import jinja2


INDEX_TEXT = """
I like to build and understand things.
"""


def convert_to_slug(text: str) -> str:
    return "_".join(text.lower().split(" ")[:3])


posts = []
for file in Path("posts").glob("**/*.md"):
    with open(file, "r") as f:
        date, title = file.stem.split("-")
        posts.append(
            {
                "date": datetime.datetime.strptime(date, "%Y_%m_%d").strftime(
                    "%d %b, %Y"
                ),
                "title": title,
                "content": f.read(),
                "slug": convert_to_slug(title),
            }
        )

print(posts)

env = jinja2.Environment(loader=jinja2.FileSystemLoader("templates/"))

# render index and blog
home = env.get_template("home.jinja")
blog = env.get_template("blog.jinja")

with open("site/index.html", "w") as f:
    f.write(home.render(content=INDEX_TEXT))

with open("site/blog.html", "w") as f:
    f.write(blog.render(posts=posts))
