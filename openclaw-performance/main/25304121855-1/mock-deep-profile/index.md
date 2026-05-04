# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-2026-05-04T062322Z
- Generated: 2026-05-04T06:24:25.389Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25304121855-1/mock-deep-profile

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 772 MB | 772 MB | 772 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 158 % | 158 % | 158 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,215 ms | 6,215 ms | 6,215 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,232 ms | 6,232 ms | 6,232 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,889 ms | 5,889 ms | 5,889 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,510 ms | 5,510 ms | 5,510 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 70850d15ee7ab0912779dccd0929fbb3c9acee8b
- Workflow ref: main
- Workflow SHA: 70850d15ee7ab0912779dccd0929fbb3c9acee8b
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: mock
- Lane model: gpt-5.4
- Lane repeat: 1
- Include filters: scenario:fresh-install scenario:gateway-performance scenario:agent-cold-warm-message
