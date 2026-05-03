# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-03T124408Z
- Generated: 2026-05-03T12:45:30.437Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25279501638-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 642 MB | 656 MB | 657 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 145 % | 149 % | 150 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,307 ms | 4,717 ms | 4,763 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,181 ms | 4,744 ms | 4,807 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,923 ms | 4,275 ms | 4,314 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,157 ms | 4,536 ms | 4,578 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: ecb901ca3972345c6a15758ed9b17ae350aeebf9
- Workflow ref: main
- Workflow SHA: ecb901ca3972345c6a15758ed9b17ae350aeebf9
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: mock
- Lane model: gpt-5.4
- Lane repeat: 3
- Include filters: scenario:fresh-install scenario:gateway-performance scenario:bundled-plugin-startup scenario:bundled-runtime-deps scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, and CLI startup numbers are in [source/index.md](source/index.md).
