# OpenClaw Performance Report

- Lane: live-gpt54
- Run: kova-2026-05-06T061237Z
- Generated: 2026-05-06T06:13:32.118Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25419499336-1/live-gpt54

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 671 MB | 671 MB | 671 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 138 % | 138 % | 138 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,115 ms | 4,115 ms | 4,115 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,136 ms | 4,136 ms | 4,136 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,715 ms | 3,715 ms | 3,715 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,883 ms | 3,883 ms | 3,883 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 6921a47562e5ee23a50a6a11c7b126ca41341b29
- Workflow ref: main
- Workflow SHA: 6921a47562e5ee23a50a6a11c7b126ca41341b29
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: live
- Lane model: gpt-5.4
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message
