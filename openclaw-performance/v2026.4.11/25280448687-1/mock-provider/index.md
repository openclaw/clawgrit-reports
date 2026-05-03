# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-03T132831Z
- Generated: 2026-05-03T13:32:02.269Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/v2026.4.11/25280448687-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 711 MB | 722 MB | 723 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 151 % | 152 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 9,393 ms | 9,717 ms | 9,753 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 9,506 ms | 9,849 ms | 9,887 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,252 ms | 7,282 ms | 7,285 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 9,348 ms | 9,625 ms | 9,655 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: v2026.4.11
- Tested SHA: 769908ec3f713ecde067eb8c8aa54d8f57217aff
- Workflow ref: main
- Workflow SHA: 97cdd73aa628ee6bcaacc20f71c5c7061b7d2f5f
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: mock
- Lane model: gpt-5.4
- Lane repeat: 3
- Include filters: scenario:fresh-install scenario:gateway-performance scenario:bundled-plugin-startup scenario:bundled-runtime-deps scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, and CLI startup numbers are in [source/index.md](source/index.md).
