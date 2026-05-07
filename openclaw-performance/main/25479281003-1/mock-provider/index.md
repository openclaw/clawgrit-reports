# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-07T061638Z
- Generated: 2026-05-07T06:17:58.286Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25479281003-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 702 MB | 704 MB | 704 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 137 % | 137 % | 137 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,572 ms | 3,895 ms | 3,931 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,573 ms | 3,915 ms | 3,953 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,512 ms | 3,553 ms | 3,557 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,400 ms | 3,677 ms | 3,708 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: a2efabf4c93baf23b9be0d161d8672f71cccdb21
- Workflow ref: main
- Workflow SHA: a2efabf4c93baf23b9be0d161d8672f71cccdb21
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: mock
- Lane model: gpt-5.4
- Lane repeat: 3
- Include filters: scenario:fresh-install scenario:gateway-performance scenario:bundled-plugin-startup scenario:bundled-runtime-deps scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, and CLI startup numbers are in [source/index.md](source/index.md).
