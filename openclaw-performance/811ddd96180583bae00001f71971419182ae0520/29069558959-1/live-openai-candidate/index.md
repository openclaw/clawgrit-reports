# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-2026-07-10T044037Z
- Generated: 2026-07-10T04:42:45.939Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 843 MB | 843 MB | 843 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 140 % | 140 % | 140 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,355 ms | 4,355 ms | 4,355 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,369 ms | 4,369 ms | 4,369 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,098 ms | 4,098 ms | 4,098 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,522 ms | 2,522 ms | 2,522 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 811ddd96180583bae00001f71971419182ae0520
- Tested SHA: 811ddd96180583bae00001f71971419182ae0520
- Workflow ref: main
- Workflow SHA: d7d210f7e0b990478f290be49b0fb27d622d422e
- Kova repository: openclaw/Kova
- Kova ref: a2dd84e7d65507e614afaff850d3932d18c859b6
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.5
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message
