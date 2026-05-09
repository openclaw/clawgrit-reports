# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-09T060341Z
- Generated: 2026-05-09T06:05:05.183Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25593625837-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 650 MB | 828 MB | 848 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 150 % | 151 % | 151 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,783 ms | 3,877 ms | 3,887 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,798 ms | 3,898 ms | 3,909 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,469 ms | 3,498 ms | 3,501 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,563 ms | 3,643 ms | 3,652 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 6b090b8cc8728159bb8928b03ef2833e5f98d791
- Workflow ref: main
- Workflow SHA: 6b090b8cc8728159bb8928b03ef2833e5f98d791
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: mock
- Lane model: gpt-5.4
- Lane repeat: 3
- Include filters: scenario:fresh-install scenario:gateway-performance scenario:bundled-plugin-startup scenario:bundled-runtime-deps scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, and CLI startup numbers are in [source/index.md](source/index.md).
