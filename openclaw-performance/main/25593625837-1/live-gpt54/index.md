# OpenClaw Performance Report

- Lane: live-gpt54
- Run: kova-2026-05-09T060341Z
- Generated: 2026-05-09T06:04:43.839Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25593625837-1/live-gpt54

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 650 MB | 650 MB | 650 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 148 % | 148 % | 148 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,205 ms | 4,205 ms | 4,205 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,215 ms | 4,215 ms | 4,215 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,006 ms | 4,006 ms | 4,006 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,965 ms | 3,965 ms | 3,965 ms |

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
- Lane auth: live
- Lane model: gpt-5.4
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message
