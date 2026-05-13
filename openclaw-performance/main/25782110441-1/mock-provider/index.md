# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-13T062013Z
- Generated: 2026-05-13T06:22:13.615Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25782110441-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 849 MB | 850 MB | 851 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 149 % | 151 % | 151 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,505 ms | 7,197 ms | 7,274 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,530 ms | 7,268 ms | 7,350 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,014 ms | 6,020 ms | 6,021 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,253 ms | 6,907 ms | 6,980 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 0b4f0129dfa6e25a2001ba1ea52e80c3caf2946f
- Workflow ref: main
- Workflow SHA: 63ee74109e28f58e591bb98204c80c87f766519c
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: mock
- Lane model: gpt-5.4
- Lane repeat: 3
- Include filters: scenario:fresh-install scenario:gateway-performance scenario:bundled-plugin-startup scenario:bundled-runtime-deps scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, and CLI startup numbers are in [source/index.md](source/index.md).
