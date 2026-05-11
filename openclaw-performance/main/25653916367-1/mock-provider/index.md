# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-11T062428Z
- Generated: 2026-05-11T06:26:28.957Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25653916367-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 686 MB | 829 MB | 845 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 147 % | 150 % | 150 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,696 ms | 8,135 ms | 8,295 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,458 ms | 6,945 ms | 6,999 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,708 ms | 8,198 ms | 8,363 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,480 ms | 7,902 ms | 8,060 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
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
- Lane repeat: 3
- Include filters: scenario:fresh-install scenario:gateway-performance scenario:bundled-plugin-startup scenario:bundled-runtime-deps scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, and CLI startup numbers are in [source/index.md](source/index.md).
