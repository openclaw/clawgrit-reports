# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-2026-05-11T062432Z
- Generated: 2026-05-11T06:26:06.535Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25653916367-1/mock-deep-profile

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 805 MB | 805 MB | 805 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 161 % | 161 % | 161 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 8,409 ms | 8,409 ms | 8,409 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 8,459 ms | 8,459 ms | 8,459 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,468 ms | 7,468 ms | 7,468 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 7,722 ms | 7,722 ms | 7,722 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 7adb4770ccbe3e055d6fa383093fd48c62944f03
- Workflow ref: main
- Workflow SHA: 7adb4770ccbe3e055d6fa383093fd48c62944f03
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: mock
- Lane model: gpt-5.4
- Lane repeat: 1
- Include filters: scenario:fresh-install scenario:gateway-performance scenario:agent-cold-warm-message
