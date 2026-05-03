# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-03T124403Z
- Generated: 2026-05-03T12:45:22.365Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/v2026.5.2/25279501566-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 618 MB | 619 MB | 620 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 142 % | 147 % | 148 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,646 ms | 3,669 ms | 3,671 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,496 ms | 3,672 ms | 3,692 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,279 ms | 3,617 ms | 3,654 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,503 ms | 3,535 ms | 3,538 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: v2026.5.2
- Tested SHA: 8b2a6e57fef6c582ec6d27b85150616f9e3a7ba4
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
