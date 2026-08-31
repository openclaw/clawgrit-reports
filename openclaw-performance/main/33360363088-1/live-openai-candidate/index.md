# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260831-052510-86dd7b
- Generated: 2026-08-31T05:26:27.259Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1
- Repeat: 1

## Key metrics

- No sampled key metrics were available; inspect the blocking records below.

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.missing | missing | configured primary resource role observed in product samples |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 0ee6e0575a90f8c3fce8cd54e173d6b31b0923ef
- Workflow ref: main
- Workflow SHA: 0ee6e0575a90f8c3fce8cd54e173d6b31b0923ef
- Kova repository: openclaw/Kova
- Kova ref: 81919463ef9620722373c813192c688573f2b533
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9746527197](https://github.com/openclaw/openclaw/actions/runs/33360363088/artifacts/9746527197); its checksum is published under the bundles directory.
