# OpenClaw Performance Report

- Lane: live-gpt54
- Run: kova-2026-05-04T061757Z
- Generated: 2026-05-04T06:18:49.344Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25304121855-1/live-gpt54

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 628 MB | 628 MB | 628 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 140 % | 140 % | 140 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,890 ms | 3,890 ms | 3,890 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,910 ms | 3,910 ms | 3,910 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,518 ms | 3,518 ms | 3,518 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,692 ms | 3,692 ms | 3,692 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 70850d15ee7ab0912779dccd0929fbb3c9acee8b
- Workflow ref: main
- Workflow SHA: 70850d15ee7ab0912779dccd0929fbb3c9acee8b
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: live
- Lane model: gpt-5.4
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message
