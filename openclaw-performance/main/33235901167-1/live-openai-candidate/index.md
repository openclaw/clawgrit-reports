# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260829-052022-cb9b02
- Generated: 2026-08-29T05:21:40.181Z
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
- Tested SHA: 4ee2216cd76ba9cedcb8e62d81dd02e0b531ffb5
- Workflow ref: main
- Workflow SHA: 4ee2216cd76ba9cedcb8e62d81dd02e0b531ffb5
- Kova repository: openclaw/Kova
- Kova ref: 1fe2f4081877bb12b7f7ed355349f98b8a0a6882
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9709925563](https://github.com/openclaw/openclaw/actions/runs/33235901167/artifacts/9709925563); its checksum is published under the bundles directory.
