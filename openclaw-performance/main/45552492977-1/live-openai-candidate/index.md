# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261125-052022-89c75c
- Generated: 2026-11-25T05:25:12.802Z
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
- Tested SHA: af9c697714fbe4be9d060de190c053997e87a4d6
- Workflow ref: main
- Workflow SHA: af9c697714fbe4be9d060de190c053997e87a4d6
- Kova repository: openclaw/Kova
- Kova ref: 80d9aa6268515730f9880ea97add2a0d73f6fc7a
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 14993793553](https://github.com/openclaw/openclaw/actions/runs/45552492977/artifacts/14993793553); its checksum is published under the bundles directory.
