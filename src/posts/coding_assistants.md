---
title: Coding assistants, a retrospective
date: 2025-12-29
description: What design features matter?
draft: false
tags: 
 - post
---

Last July, I wrote an unpublished draft post that described why I thought coding assistants were going to look more like autonomous code-monkeys and less like IDE integrations.[^1] I had two basic reasons:
  1. You're going to want to run *many* instances at a time. 
  2. Autonomous agents scale better with model capabilities. 

I never ended up finishing that draft, and I thought it would be interesting to revisit this idea now, as 2025 comes to a close.

### You're using just one?

My main reasoning here was that, by far, the greatest promise of AI agents compared to humans (at least in the near term before they're wildly superintelligent) would arise from being able to run many simultaneous copies at increased serial speed. Multiple agents can explore different ideas in parallel, combining and searching over what works similar to classic best-of-N approaches. Compare this to older coding assistant UXs that were integrated into the IDE and were fundamentally designed to be used in close collaboration with the developer. Users would focus on developing one feature at a time, akin to how one would pair-program with a colleague. AI edits required frequent interaction. If you wanted to parallelize, you would need to open multiple IDE instances and constantly context switch, a much less compelling user experience. 

I think this mostly ended up being true, with the rise of git-worktree-based solutions (like [Cursor's](https://cursor.com/docs/configuration/worktrees) or the guide in [Claude Code](https://code.claude.com/docs/en/common-workflows)). People did parallelize Cursor by manually opening many instances but this was clunky and has mostly gone away now. Multi-agent workflows are burgeoning in popularity now, with Claude Code's subagent design pattern. 

### Look they're much better!

As AI models get more capable, they are able to perform longer, increasingly complex tasks. The maximum length of task (as measured by how long it takes a capable-but-unfamiliar expert human) has been [growing exponentially](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/) for many years (and may have recently sped up). This means that coding agent designs that are unconstrained in the "length" of tasks that they can handle will scale better as the underlying models improve. 

For example, coding assistant interfaces that design for frequent developer interaction points are constrained by this feedback cycle. The entire point of having an IDE-centric UX is that I can frequently interact with the agent's changes and co-develop, but this means that the "length" of the tasks that the agent does autonomously is bounded by this feedback cycle. As you delegate more and more work to the agent, in order to take advantage of the model being able to complete longer tasks, an IDE-like UX makes increasingly less sense. This is easier to see in the limit; if my agents are doing week-long tasks, I want to see a Linear or Jira-style dashboard, not an IDE!

A key selling point of a tight interaction loop is you, as the developer, get to review and course-correct AI work. As agents get more reliable and competent, this is going to be less necessary. In certain workloads, this still makes sense, where the task is particularly underdetermined and you, as the developer, don't exactly know what the solution should look like.

I think this also mostly ended up being true. The trend *has* continued, and models like Claude Opus 4.5 are indeed more reliable and competent at tasks where many people feel comfortable orchestrating at a higher level of abstraction. Claude Code has experienced a [meteoric rise in popularity](https://x.com/bcherny/status/2004887829252317325?s=20), and people have started talking about [Claude Code moments](https://x.com/AndrewCurran_/status/2004896859954053303?s=20) for other fields besides software engineering. Cursor has recently shipped several new features to support this kind of workflow, with [cloud](https://cursor.com/docs/cloud-agent) and [cli](https://cursor.com/docs/cli/overview). 

However, I think I missed the rise of fast, moderately intelligent agents, like [Composer](https://cursor.com/blog/composer). I also underestimated how useful having your IDE and agent in one place is, with the ability to cross-reference things where needed and leverage shared tooling.

### What seems to be next?

I think a key missing UX element is effective control over orchestration. We're beginning to see examples of this kind of thing with multi-agent setups, where you have an orchestrator or "lead-agent". However, this likely doesn't transfer nicely to other task distributions, where it's harder to specify what delegation or coordination should look like. At least in the short-term, I'd expect developers to want greater insight and control over subagents, e.g. what ideas they're pursuing, cost, searching over solutions, etc. 

I also think Cursor et. al.'s will stick around for a while. The features it provides are still useful when you want to tackle problems in partly manual way. You may want to do this for a whole host of reasons, even as models get increasingly better, such as learning a new concept, tackling a problem where it's hard to write a good spec, etc. 

I do think 2026 is the year we'll see more tooling around reviewing outputs and orchestrating tasks and interacting less with the underlying codebase manually as much, similar to what Andrej describes [here](https://x.com/karpathy/status/2005421816110862601?s=20). The best UX for this is likely not a terminal or an IDE, but something else. 

I'll revisit this sometime next year, to see how this evolves. 

[^1]: I'm not talking about AI-assisted *autocomplete*. I think that provides a different type of value and will stick around. 
