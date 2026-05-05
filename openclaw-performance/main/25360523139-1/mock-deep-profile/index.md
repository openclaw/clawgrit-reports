# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-2026-05-05T060250Z
- Generated: 2026-05-05T06:03:45.511Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25360523139-1/mock-deep-profile

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 829 MB | 829 MB | 829 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 161 % | 161 % | 161 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,113 ms | 5,113 ms | 5,113 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,140 ms | 5,140 ms | 5,140 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,609 ms | 4,609 ms | 4,609 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,557 ms | 4,557 ms | 4,557 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: a17d4371d101da101d8a263698d5499d681d066c
- Workflow ref: main
- Workflow SHA: a17d4371d101da101d8a263698d5499d681d066c
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: mock
- Lane model: gpt-5.4
- Lane repeat: 1
- Include filters: scenario:fresh-install scenario:gateway-performance scenario:agent-cold-warm-message
