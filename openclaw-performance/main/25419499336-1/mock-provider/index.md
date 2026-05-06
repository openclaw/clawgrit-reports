# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-06T061243Z
- Generated: 2026-05-06T06:14:15.016Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25419499336-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 679 MB | 681 MB | 681 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 145 % | 147 % | 147 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,582 ms | 4,913 ms | 4,950 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,595 ms | 4,924 ms | 4,960 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,328 ms | 4,723 ms | 4,767 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,340 ms | 4,714 ms | 4,756 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 6921a47562e5ee23a50a6a11c7b126ca41341b29
- Workflow ref: main
- Workflow SHA: 6921a47562e5ee23a50a6a11c7b126ca41341b29
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: mock
- Lane model: gpt-5.4
- Lane repeat: 3
- Include filters: scenario:fresh-install scenario:gateway-performance scenario:bundled-plugin-startup scenario:bundled-runtime-deps scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, and CLI startup numbers are in [source/index.md](source/index.md).
