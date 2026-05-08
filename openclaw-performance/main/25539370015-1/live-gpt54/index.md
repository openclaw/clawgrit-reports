# OpenClaw Performance Report

- Lane: live-gpt54
- Run: kova-2026-05-08T055037Z
- Generated: 2026-05-08T05:51:35.090Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25539370015-1/live-gpt54

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 662 MB | 662 MB | 662 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 153 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,963 ms | 3,963 ms | 3,963 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,984 ms | 3,984 ms | 3,984 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,557 ms | 3,557 ms | 3,557 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,721 ms | 3,721 ms | 3,721 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: d29201fe4fc5f0280fe3582fddd3778e4e009995
- Workflow ref: main
- Workflow SHA: d29201fe4fc5f0280fe3582fddd3778e4e009995
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: live
- Lane model: gpt-5.4
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message
