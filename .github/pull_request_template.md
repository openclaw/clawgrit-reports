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
In a few plain-language sentences, explain what someone is trying to do, what
is wrong or missing, and why it matters. Include the trigger when known.
For example, a reader comparing two benchmark runs needs to know whether the
reports measured the same lane and source revision; describe the actual gap
rather than only saying that JSON or Markdown files changed.
For documentation or maintenance work, explain the need without inventing a failure.
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
