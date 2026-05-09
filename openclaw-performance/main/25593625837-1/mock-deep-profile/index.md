# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-2026-05-09T060352Z
- Generated: 2026-05-09T06:05:04.910Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25593625837-1/mock-deep-profile

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 791 MB | 791 MB | 791 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 169 % | 169 % | 169 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,229 ms | 6,229 ms | 6,229 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,285 ms | 6,285 ms | 6,285 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,172 ms | 5,172 ms | 5,172 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,554 ms | 5,554 ms | 5,554 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 6b090b8cc8728159bb8928b03ef2833e5f98d791
- Workflow ref: main
- Workflow SHA: 6b090b8cc8728159bb8928b03ef2833e5f98d791
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: mock
- Lane model: gpt-5.4
- Lane repeat: 1
- Include filters: scenario:fresh-install scenario:gateway-performance scenario:agent-cold-warm-message
