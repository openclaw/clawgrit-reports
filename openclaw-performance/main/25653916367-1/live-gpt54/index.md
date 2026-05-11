# OpenClaw Performance Report

- Lane: live-gpt54
- Run: kova-2026-05-11T062429Z
- Generated: 2026-05-11T06:25:47.417Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25653916367-1/live-gpt54

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 852 MB | 852 MB | 852 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 148 % | 148 % | 148 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,939 ms | 5,939 ms | 5,939 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,956 ms | 5,956 ms | 5,956 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,614 ms | 5,614 ms | 5,614 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,697 ms | 5,697 ms | 5,697 ms |

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
- Lane auth: live
- Lane model: gpt-5.4
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message
