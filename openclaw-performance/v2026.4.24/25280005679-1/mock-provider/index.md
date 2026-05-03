# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-03T130721Z
- Generated: 2026-05-03T13:12:15.954Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/v2026.4.24/25280005679-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 996 MB | 1,021 MB | 1,024 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 173 % | 173 % | 174 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 46,938 ms | 48,316 ms | 48,469 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 48,069 ms | 49,455 ms | 49,609 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 25,443 ms | 26,676 ms | 26,813 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 46,818 ms | 48,110 ms | 48,254 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | agentTurnMs | 49,609 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 986 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 986 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 986 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 49,388 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 26,702 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 49,609 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 26,813 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 49,388 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 26,702 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | agentTurnMs | 48,069 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 996 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 996 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 996 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 47,947 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 25,364 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 48,069 | <= 45000 |

_Only first 20 of 36 violations shown._

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: v2026.4.24
- Tested SHA: cbcfdf62c7297bda66009ea7476f053c3e9addab
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
