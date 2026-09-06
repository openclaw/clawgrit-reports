# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260906-052240-c503ca
- Generated: 2026-09-06T05:24:02.547Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 640 MB | 640 MB | 640 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 129 % | 129 % | 129 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,523 ms | 4,523 ms | 4,523 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,566 ms | 4,566 ms | 4,566 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,700 ms | 3,700 ms | 3,700 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 1,794 ms | 1,794 ms | 1,794 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: bcef3b3526dd1d015e0b1c1030a1dea12cf1b517
- Workflow ref: main
- Workflow SHA: bcef3b3526dd1d015e0b1c1030a1dea12cf1b517
- Kova repository: openclaw/Kova
- Kova ref: 81919463ef9620722373c813192c688573f2b533
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9983298425](https://github.com/openclaw/openclaw/actions/runs/34013735016/artifacts/9983298425); its checksum is published under the bundles directory.
