# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260910-052335-d26616
- Generated: 2026-09-10T05:25:01.226Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 603 MB | 603 MB | 603 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 147 % | 147 % | 147 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,515 ms | 4,515 ms | 4,515 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,522 ms | 4,522 ms | 4,522 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,391 ms | 4,391 ms | 4,391 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,374 ms | 2,374 ms | 2,374 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: a26cbeb6350fdaae04455c6e28e9696066218b4b
- Workflow ref: main
- Workflow SHA: a26cbeb6350fdaae04455c6e28e9696066218b4b
- Kova repository: openclaw/Kova
- Kova ref: 3da9582e9c3eef970ef102dc3950595e0876a1d5
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10137906894](https://github.com/openclaw/openclaw/actions/runs/34440778661/artifacts/10137906894); its checksum is published under the bundles directory.
