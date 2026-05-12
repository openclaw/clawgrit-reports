# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-2026-05-12T061745Z
- Generated: 2026-05-12T06:19:07.785Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25717120803-1/mock-deep-profile

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 770 MB | 770 MB | 770 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 147 % | 147 % | 147 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,250 ms | 7,250 ms | 7,250 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 7,292 ms | 7,292 ms | 7,292 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,449 ms | 6,449 ms | 6,449 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,729 ms | 6,729 ms | 6,729 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: acd8236ef2f05018036eef1c1c19e98cec3f7819
- Workflow ref: main
- Workflow SHA: acd8236ef2f05018036eef1c1c19e98cec3f7819
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: mock
- Lane model: gpt-5.4
- Lane repeat: 1
- Include filters: scenario:fresh-install scenario:gateway-performance scenario:agent-cold-warm-message
