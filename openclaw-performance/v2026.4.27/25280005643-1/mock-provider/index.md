# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-03T130727Z
- Generated: 2026-05-03T13:13:41.282Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/v2026.4.27/25280005643-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 1,154 MB | 1,155 MB | 1,155 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 247 % | 248 % | 248 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 57,655 ms | 58,262 ms | 58,330 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 58,733 ms | 59,420 ms | 59,496 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 36,176 ms | 37,068 ms | 37,167 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 57,515 ms | 58,071 ms | 58,132 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | agentTurnMs | 59,496 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,154 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,154 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,154 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 59,295 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 36,043 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 59,496 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 36,176 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 59,295 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 36,043 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | agentTurnMs | 58,733 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,045 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,045 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,045 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 58,593 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 37,029 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 58,733 | <= 45000 |

_Only first 20 of 36 violations shown._

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: v2026.4.27
- Tested SHA: cbc2ba0931468259f26a7c547131a06e03ca6c6c
- Workflow ref: main
- Workflow SHA: fc570d0e58f7e09efa0cb05d1541d3805afd0952
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: mock
- Lane model: gpt-5.4
- Lane repeat: 3
- Include filters: scenario:fresh-install scenario:gateway-performance scenario:bundled-plugin-startup scenario:bundled-runtime-deps scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, and CLI startup numbers are in [source/index.md](source/index.md).
