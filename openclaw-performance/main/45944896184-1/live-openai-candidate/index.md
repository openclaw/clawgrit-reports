# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261127-052029-963347
- Generated: 2026-11-27T05:24:35.239Z
- Target: local-build:/home/runner/work/openclaw/openclaw
- Statuses: BLOCKED: 1
- Repeat: 1

## Key metrics

- No sampled key metrics were available; inspect the blocking records below.

## Violations

Found 2 violations. Each row shows one example from the Kova report.

| Kind | Metric | Count | Example scenario | State | Actual | Expected |
| --- | --- | ---: | --- | --- | ---: | --- |
| resource | resourceByRole.agent-process.missing | 1 | agent-cold-warm-message | mock-openai-provider | missing | configured primary resource role observed in product samples |
| diagnostics | openclawTimelineAvailable | 1 | agent-cold-warm-message | mock-openai-provider | 0 | available |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 9e787b7b0c0adb863497699c483caa2ea5f84f99
- Workflow ref: main
- Workflow SHA: 9e787b7b0c0adb863497699c483caa2ea5f84f99
- Kova repository: openclaw/Kova
- Kova ref: 5f1ac692af2058217c793aa06af9e28dbf46c1bd
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 15175080049](https://github.com/openclaw/openclaw/actions/runs/45944896184/artifacts/15175080049); its checksum is published under the bundles directory.
