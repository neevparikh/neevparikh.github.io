---
title: "Locally Observable Markov Decision Process"
authors:
- Max Merlin, Neev Parikh, Eric Rosen, George Konidaris
date: "2020-04-13"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2020-05-16T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: "Real-world robot task planning is computationally intractable in part due to the complexity of dealing with partial observability. One approach to reducing planning complexity is to assume additional model structure such as mixed-observability, factored state representations, or temporally-extended actions. We introduce a novel structured formulation, the *Locally Observable Markov Decision Process*, which assumes that partial observability stems from limited sensor range---objects outside sensor range are unobserved, but become fully observed once they are within sensor range. Plans solving tasks of this type have a specific structure: they must necessarily go through *localities* where objects transition from unobserved to fully observed. We introduce a novel planner that reduces planning time via a hierarchy that structures the plan around these localities, and interleaves online and offline planning. We present preliminary results  in a challenging domain that shows that the locality assumption enables robots to plan effectively in the presence of this type of uncertainty."

# Summary. An optional shortened abstract.
summary: "We introduce a novel structured formulation, the *Locally Observable Markov Decision Process*, which assumes that partial observability stems from limited sensor range---objects outside sensor range are unobserved, but become fully observed once they are within sensor range."

tags:
- LOMDP
featured: false

links:
url_pdf: http://arxiv.org/pdf/1512.04133v1
# - name: Custom Link
#  url: http://example.org
# url_code: '#'
# url_dataset: '#'
# url_poster: '#'
# url_project: ''
# url_slides: ''
# url_source: '#'
# url_video: '#'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Localities, robots, and PBJs'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
# - internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
