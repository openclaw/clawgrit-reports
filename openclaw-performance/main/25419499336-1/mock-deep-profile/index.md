# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-2026-05-06T061227Z
- Generated: 2026-05-06T06:13:54.059Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25419499336-1/mock-deep-profile

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 796 MB | 796 MB | 796 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 157 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,685 ms | 5,685 ms | 5,685 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,702 ms | 5,702 ms | 5,702 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,358 ms | 5,358 ms | 5,358 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,092 ms | 5,092 ms | 5,092 ms |

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
- Lane auth: mock
- Lane model: gpt-5.4
- Lane repeat: 1
- Include filters: scenario:fresh-install scenario:gateway-performance scenario:agent-cold-warm-message
