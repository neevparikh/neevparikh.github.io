---
title: "Learning Markov State Abstractions for Deep Reinforcement Learning"
authors:
- Cameron Allen, Neev Parikh, George Konidaris
date: "2021-12-06"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2021-11-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "Neural Information Processing Systems 2021"
publication_short: "NeurIPS 2021"

abstract: "A fundamental assumption of reinforcement learning in Markov decision processes (MDPs) is that the relevant decision process is, in fact, Markov. However, when MDPs have rich observations, agents typically learn by way of an abstract state representation, and such representations are not guaranteed to preserve the Markov property. We introduce a novel set of conditions and prove that they are sufficient for learning a Markov abstract state representation. We then describe a practical training procedure that combines inverse model estimation and temporal contrastive learning to learn an abstraction that approximately satisfies these conditions. Our novel training objective is compatible with both online and offline training: it does not require a reward signal, but agents can capitalize on reward information when available. We empirically evaluate our approach on a visual gridworld domain and a set of continuous control benchmarks. Our approach learns representations that capture the underlying structure of the domain and lead to improved sample efficiency over state-of-the-art deep reinforcement learning with visual features---often matching or exceeding the performance achieved with hand-designed compact state information."

# Summary. An optional shortened abstract.
summary: "We introduce a novel set of conditions and prove that they are sufficient for learning a Markov abstract state representation. We then describe a practical training procedure that combines inverse model estimation and temporal contrastive learning to learn an abstraction that approximately satisfies these conditions."

tags:
- Markov Abstraction
- Unsupervised learning
- State abstraction

featured: false

links:

url_video: https://www.google.com/url?q=https%3A%2F%2Fslideslive.com%2F38941284%2Flearning-markov-state-abstractions-for-deep-reinforcement-learning%3Fref%3Daccount-folder-62083-folders&sa=D&sntz=1&usg=AFQjCNFXjMCQoNvrGqUjNlnhoVqJXK0jnA
url_pdf: https://drive.google.com/file/d/1HM_2ldTdr_5wgdfhECuj8U5zzC1YT_7g/view?usp=sharing

image:
  caption: 'Learned Markov Abstraction'
  focal_point: ""
  preview_only: false
---
