# OpenClaw Performance Report

- Lane: live-gpt54
- Run: kova-2026-05-05T060247Z
- Generated: 2026-05-05T06:03:40.223Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25360523139-1/live-gpt54

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 650 MB | 650 MB | 650 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 139 % | 139 % | 139 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,016 ms | 4,016 ms | 4,016 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,035 ms | 4,035 ms | 4,035 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,656 ms | 3,656 ms | 3,656 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,817 ms | 3,817 ms | 3,817 ms |

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
- Lane auth: live
- Lane model: gpt-5.4
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message
