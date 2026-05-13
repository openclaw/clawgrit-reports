# OpenClaw Performance Report

- Lane: live-gpt54
- Run: kova-2026-05-13T062019Z
- Generated: 2026-05-13T06:21:37.197Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25782110441-1/live-gpt54

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 844 MB | 844 MB | 844 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 147 % | 147 % | 147 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,122 ms | 6,122 ms | 6,122 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,129 ms | 6,129 ms | 6,129 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,985 ms | 5,985 ms | 5,985 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,874 ms | 5,874 ms | 5,874 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 0b4f0129dfa6e25a2001ba1ea52e80c3caf2946f
- Workflow ref: main
- Workflow SHA: 63ee74109e28f58e591bb98204c80c87f766519c
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: live
- Lane model: gpt-5.4
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message
