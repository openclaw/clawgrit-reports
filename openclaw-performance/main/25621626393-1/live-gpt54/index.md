# OpenClaw Performance Report

- Lane: live-gpt54
- Run: kova-2026-05-10T061710Z
- Generated: 2026-05-10T06:18:29.348Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25621626393-1/live-gpt54

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 859 MB | 859 MB | 859 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 148 % | 148 % | 148 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,109 ms | 4,109 ms | 4,109 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,117 ms | 4,117 ms | 4,117 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,962 ms | 3,962 ms | 3,962 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,845 ms | 3,845 ms | 3,845 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 1d65f965e81b872b8e0e557ecc1913de55ee4616
- Workflow ref: main
- Workflow SHA: 1d65f965e81b872b8e0e557ecc1913de55ee4616
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: live
- Lane model: gpt-5.4
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message
