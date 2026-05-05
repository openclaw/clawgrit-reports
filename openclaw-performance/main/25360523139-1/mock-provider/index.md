# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-05T060248Z
- Generated: 2026-05-05T06:04:05.004Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25360523139-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 682 MB | 691 MB | 692 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 141 % | 141 % | 141 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,806 ms | 4,057 ms | 4,085 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,807 ms | 4,073 ms | 4,103 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,741 ms | 3,791 ms | 3,796 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,668 ms | 3,854 ms | 3,875 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: a17d4371d101da101d8a263698d5499d681d066c
- Workflow ref: main
- Workflow SHA: a17d4371d101da101d8a263698d5499d681d066c
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: mock
- Lane model: gpt-5.4
- Lane repeat: 3
- Include filters: scenario:fresh-install scenario:gateway-performance scenario:bundled-plugin-startup scenario:bundled-runtime-deps scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, and CLI startup numbers are in [source/index.md](source/index.md).
