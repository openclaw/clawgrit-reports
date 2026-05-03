# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-03T130708Z
- Generated: 2026-05-03T13:16:14.962Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/v2026.4.25/25280005622-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 1,230 MB | 1,240 MB | 1,242 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 179 % | 254 % | 262 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 78,398 ms | 78,967 ms | 79,030 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 79,507 ms | 80,128 ms | 80,197 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 56,852 ms | 57,280 ms | 57,328 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 78,226 ms | 78,854 ms | 78,924 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | agentTurnMs | 79,507 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | agentTurnMs | 57,328 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | statusMs | 21,660 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,242 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,242 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,242 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 79,332 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 57,213 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 79,507 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 57,328 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 79,332 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 57,213 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | agentTurnMs | 77,243 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | agentTurnMs | 56,453 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | statusMs | 23,127 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,230 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,230 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,230 | <= 900 |

_Only first 20 of 42 violations shown._

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: v2026.4.25
- Tested SHA: aa36ee670b76211426a2e89a84e9096453c01ee7
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
