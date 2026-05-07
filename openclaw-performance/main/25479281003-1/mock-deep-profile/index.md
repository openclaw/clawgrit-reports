# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-2026-05-07T061719Z
- Generated: 2026-05-07T06:18:19.289Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25479281003-1/mock-deep-profile

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 794 MB | 794 MB | 794 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 154 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,019 ms | 5,019 ms | 5,019 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,048 ms | 5,048 ms | 5,048 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,466 ms | 4,466 ms | 4,466 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,522 ms | 4,522 ms | 4,522 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: a4b8cc307cd43e2ba945b0826188c43592495192
- Workflow ref: main
- Workflow SHA: a2efabf4c93baf23b9be0d161d8672f71cccdb21
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: mock
- Lane model: gpt-5.4
- Lane repeat: 1
- Include filters: scenario:fresh-install scenario:gateway-performance scenario:agent-cold-warm-message
