# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261113-051925-047004
- Generated: 2026-11-13T05:23:52.692Z
- Target: local-build:/home/runner/work/openclaw/openclaw
- Statuses: BLOCKED: 1
- Repeat: 1

## Key metrics

- No sampled key metrics were available; inspect the blocking records below.

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 30ce1b5cb099be7ae01863a7b30a4b069d638b13
- Workflow ref: main
- Workflow SHA: 30ce1b5cb099be7ae01863a7b30a4b069d638b13
- Kova repository: openclaw/Kova
- Kova ref: a50c81c878f417e7e56dc64b7063d9a117db5ad3
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 14012677818](https://github.com/openclaw/openclaw/actions/runs/43370804294/artifacts/14012677818); its checksum is published under the bundles directory.
