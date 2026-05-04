# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-04T061810Z
- Generated: 2026-05-04T06:19:31.088Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25304121855-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 634 MB | 651 MB | 652 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 144 % | 152 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,013 ms | 4,321 ms | 4,356 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,015 ms | 4,343 ms | 4,379 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,909 ms | 3,972 ms | 3,979 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,850 ms | 4,111 ms | 4,140 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 70850d15ee7ab0912779dccd0929fbb3c9acee8b
- Workflow ref: main
- Workflow SHA: 70850d15ee7ab0912779dccd0929fbb3c9acee8b
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: mock
- Lane model: gpt-5.4
- Lane repeat: 3
- Include filters: scenario:fresh-install scenario:gateway-performance scenario:bundled-plugin-startup scenario:bundled-runtime-deps scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, and CLI startup numbers are in [source/index.md](source/index.md).
