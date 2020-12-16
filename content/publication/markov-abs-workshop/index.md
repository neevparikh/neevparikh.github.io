---
title: "Learning Markov State Abstractions for Deep Reinforcement Learning"
authors:
- Cameron Allen, Neev Parikh, George Konidaris
date: "2020-12-11"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2020-10-06T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "NeurIPS 2020. Workshop on Deep Reinforcement Learning"
publication_short: "DRL Workshop, NeurIPS 2020"

abstract: "We introduce a method of learning an abstract state representation for Markov Decision Processes (MDPs) with rich observations. We begin by proving that a combination of three conditions is sufficient for a learned state abstraction to retain the Markov property. We then describe a practical training procedure that combines inverse model estimation and temporal contrastive learning to learn an abstraction that approximately satisfies these conditions. We evaluate our approach with a proof-of-concept visual gridworld experiment, where the learned representation captures the underlying structure of the domain and enables substantially improved learning performance over end-to-end deep RL, matching the performance achieved with hand-designed compact state information."

# Summary. An optional shortened abstract.
summary: "We introduce a method of learning an abstract state representation for Markov Decision Processes (MDPs) with rich observations."

tags:
- Markov Abstraction
- Unsupervised learning
- State abstraction

featured: false

links:

image:
  caption: 'Learned Markov Abstraction'
  focal_point: ""
  preview_only: false
---
