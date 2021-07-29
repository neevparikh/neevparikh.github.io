---
title: "Graph Embedding Priors for Multi-task Deep Reinforcement Learning"
authors:
- Neev Parikh*, Zachary Horvitz*, Naveen Srinivasan*, Aansh Shah, George Konidaris
date: "2020-12-11"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2020-10-11T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "NeurIPS 2020. 4th KR2ML workshop"
publication_short: "KR2ML Workshop, NeurIPS 2020"

abstract: " Humans appear to effortlessly generalize knowledge of similar objects and relations when learning new tasks. For example, humans playing Minecraft can learn how to use a tool to mine one block, then rapidly generalize that skill to mine others. We leverage graph-encoded object priors to capture this property and improve the performance of reinforcement learning agents across multiple tasks. We introduce a novel, flexible architecture that utilizes graph convolutional networks (GCNs), which provide a natural method to combine relational information over connected nodes. We evaluate our approach on a procedurally-generated, multi-task environment: Symbolic Procgen. Our experiments demonstrate that the method generalizes across many tasks and scales to domains with hundreds of objects and relations. Additionally, we perform ablation studies that demonstrate robustness to noisy graph priors, suggesting that the method is suitable for leveraging graphs generated from large, unstructured sources of knowledge in real-world settings."

# Summary. An optional shortened abstract.
summary: "We leverage graph-encoded object priors to capture this property and improve the performance of reinforcement learning agents across multiple tasks. We introduce a novel, flexible architecture that utilizes graph convolutional networks (GCNs), which provide a natural method to combine relational information over connected nodes."

tags:
- Graph Embedding
- Multi-task RL
- Priors
- GCN

featured: false

links:
- name: Poster
  url: https://kr2ml.github.io/2020/papers/KR2ML_20_poster.pdf
- name: Workshop link
  url: https://kr2ml.github.io/2020/papers/

url_pdf: https://kr2ml.github.io/2020/papers/KR2ML_20_paper.pdf

image:
  caption: 'Architecture'
  focal_point: ""
  preview_only: false
---