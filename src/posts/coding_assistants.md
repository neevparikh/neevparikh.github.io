---
title: Coding Assistants in 2025
date: Git Created
description: What design features matter?
draft: true
tags: 
 - post
---
Increasingly, coding assistants look less like IDE integrations and more like autonomous code-monkeys.[^1] I believe there's three basic reasons:

1. You're going to want to run *many* instances at a time. 
2. Autonomous agents scale better with model capabilities. 
3. Interactive editing plays poorly with high-latency.

### You're using just one?

By far, the largest promise of AI agents compared to humans (at least in the near term before they're wildly superintelligent) arises from being able to run many
simultaneous copies at increased serial speed. Multiple agents can explore different ideas in parallel, combining and searching over what works similar to classic
best-of-N approaches. Compare this to older coding assistant UXs that were integrated into the IDE and were fundamentally designed to be used in close collaboration with
the developer. Users would focus on developing one feature at a time, akin to how one would pair-program with a colleague. AI edits required frequent interaction. If you
wanted to parallelize, you would need to open multiple IDE instances and constantly context switch, a much less compelling user experience. In order to effectively scale
AI assistance, companies have built products around increasingly autonomous agents that allow for longer interaction cycles. 

You already see this in Claude Code's [tutorial](https://docs.anthropic.com/en/docs/claude-code/tutorials#run-parallel-claude-code-sessions-with-git-worktrees) and people
have already started [parallelizing](https://x.com/dionysianagent/status/1929337613292327231?s=46&t=TBkc87H94IpHYSUNWrEM7w) these agents. Cursor themselves have recently
shifted to centering their Composer mode as the default mode (rebranding it to "Agent" mode and relegating the previous chat mode as "Manual"). Recently, Anthropic wrote
about their [multi-agent architecture](https://www.anthropic.com/engineering/built-multi-agent-research-system) for the Research feature in Claude's web product.


### Look they're much better!

As AI models get more capable, they are able to perform longer, increasingly complex tasks. Autonomous AI agents naturally scale to tasks of [increasing
"time-horizon"](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/). Non-autonomous AI assistants seem inherently constrained by developer
interaction points. If the AI assistant pairs with you by completing short tasks before interacting, it's not taking advantage of its ability to complete longer tasks. If
instead your AI assistants do longer tasks while maintaining the same product interface, you're now waiting idly for longer. In the limit or when the length of the task is
sufficiently high, we're back to the autonomous assistant model. 

One possibility is that AI assistants get more capable at one-shot task completions, i.e. writing correct solutions quickly in the first go, for increasingly complex
tasks. However, this is often impractical for many tasks (imagine having to make changes to multiple system components or exploratory work; it's much easier to test
individual systems or try things out). Additionally, AI models are trained to solve tasks via multi-step reinforcement learning, which incentivizes taking multiple
actions in sequence or exploring the environment before writing a solution. Accordingly, it seems more likely that future AI models will be better at solving difficult
tasks by being better _agents_ than coming up with better one-shot solutions. Additionally, a key selling point of a tight interaction loop is you, as the developer, get
to review and course-correct AI work. As agents get more reliable and competent, this is going to be less necessary.  

 
### And now we wait

TODO

### What seems to be next?

The key missing UX element is effective control over orchestration. Anthropic's multi-agent work delegates this responsibility to a "lead researcher" agent. However, this
likely doesn't transfer nicely to other task distributions, where it's harder to specify what delegation or coordination should look like. At least in the short-term, I'd
expect developers to want greater insight and control over subagents, e.g. what ideas they're pursuing, cost, searching over solutions, etc.

Increasingly capable coding assistance may provide significant uplift to AI research, and it is
important to understand 

Note: while nothing in this post is particularly novel, I've been meaning to write it for quite a while. I wanted to experiment with more frequent public writing, so I
figured I'd start with this.

[^1]: I'm talking about something like Cursor's [chat-with-your-codebase](https://docs.cursor.com/chat/overview) as the
    IDE-integration coding assistant. I think AI-assisted *autocomplete* provides a different type of value and will
    stick around.
 <!---
[Lesswrong - The uplift
equation](https://www.lesswrong.com/posts/Zr37dY5YPRT6s56jY/thomas-kwa-s-shortform?commentId=z5Riqicyjo8m3GD67)
Things to write about:
[] go over all the arguments
   1. many uses
        - big agent vibes 
        - parallelize work 
        - efficient / good oversight UX needed
        - cost 
   2. why autonomous agents scale better
        - RL -> autonomous 
        - inherently, your value is planning reviewing -> will get less needed as agents get better
   3. high latency 
        - uplift study -- waiting for generations
        - Uplift equation tkwa 
[] reckon with OpenAI buying windsurf or cursors high valuation
  - mention that it's likely data [OAI <> WS] or they're in a good position to pivot [cursor]
[] 
-->
