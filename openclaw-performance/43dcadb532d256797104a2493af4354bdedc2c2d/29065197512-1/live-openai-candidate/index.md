# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-2026-07-10T024224Z
- Generated: 2026-07-10T02:44:45.192Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 762 MB | 762 MB | 762 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 139 % | 139 % | 139 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,350 ms | 4,350 ms | 4,350 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,366 ms | 4,366 ms | 4,366 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,040 ms | 4,040 ms | 4,040 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,590 ms | 2,590 ms | 2,590 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 43dcadb532d256797104a2493af4354bdedc2c2d
- Tested SHA: 43dcadb532d256797104a2493af4354bdedc2c2d
- Workflow ref: main
- Workflow SHA: 7fd426e450a54c34e22d2db82e28244e5f13c2e1
- Kova repository: openclaw/Kova
- Kova ref: a2dd84e7d65507e614afaff850d3932d18c859b6
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.5
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message
