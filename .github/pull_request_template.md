<!--
Write for someone inspecting OpenClaw performance reports who has not read the
code. The title and opening explanation should make sense without the diff or
a linked issue. Name the affected task and the symptom or outcome rather than
leading with filenames, internal identifiers, or implementation details.

Example title: "fix: make the latest report link open the matching benchmark run"
Rather than: "fix: update pointer path serialization"
For maintenance-only work, name the actual contributor or operator workflow.
Link related issues or report runs when useful; do not invent a bug or benefit.
-->

## What Problem This Solves

<!--
In 1–3 plain sentences, say who is affected, what happens today, and why it
matters to them. For a bug, name the trigger if known. For a feature or internal
work, describe the need in the actual workflow without inventing harm.
Could a reader understand the problem without knowing your proposed fix?

Good: "Background checks can use up a new user's model allowance before they've
asked the assistant to monitor anything."
Bad: "Turn off periodic checks on fresh installs."
-->

## User Impact

<!--
Lead with what report readers, contributors, or operators can now do or expect.
For internal-only work, say there is no user-visible change. Keep important
risks, compatibility changes, and required actions visible here.
Distinguish archive/navigation improvements from measured OpenClaw performance
changes; editing report guidance does not establish a benchmark improvement.
-->

## Why This Change Was Made

<!--
Briefly explain how the change addresses the need. Keep implementation details
only when they clarify behavior or a material tradeoff. Put long file lists,
root-cause walkthroughs, or other supporting detail in links or optional
<details>; do not hide risks or required actions there.
-->

## Evidence

<!--
Start with the behavior checked and the observed result, not a list of commands.
For a report or latest-pointer change, useful evidence may show that the linked
summary exists and matches the intended source revision, run, attempt, and lane.
For a performance claim, identify the compared runs, measurement conditions,
and limitations; do not imply a live-provider run is equivalent to a mock run.
For maintenance or documentation changes, describe the relevant inspection or
focused check and its result. Include meaningful gaps and what was not tested.
Link reports, CI, redacted output, or other relevant proof. Exact commands,
commit hashes, and long output can go in links or optional <details> after the
plain-language result. Use only evidence actually collected.
-->
