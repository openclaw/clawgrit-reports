# OpenClaw Performance Report

- Lane: live-gpt54
- Run: kova-2026-05-07T061635Z
- Generated: 2026-05-07T06:17:39.053Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25479281003-1/live-gpt54

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 693 MB | 693 MB | 693 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 146 % | 146 % | 146 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,367 ms | 5,367 ms | 5,367 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,380 ms | 5,380 ms | 5,380 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,128 ms | 5,128 ms | 5,128 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,091 ms | 5,091 ms | 5,091 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: a2efabf4c93baf23b9be0d161d8672f71cccdb21
- Workflow ref: main
- Workflow SHA: a2efabf4c93baf23b9be0d161d8672f71cccdb21
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: live
- Lane model: gpt-5.4
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message
