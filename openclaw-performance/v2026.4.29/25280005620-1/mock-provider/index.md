# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-03T130714Z
- Generated: 2026-05-03T13:14:42.464Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/v2026.4.29/25280005620-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 3,529 MB | 3,585 MB | 3,591 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 304 % | 318 % | 320 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 70,088 ms | 77,750 ms | 78,602 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 71,311 ms | 79,203 ms | 80,080 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 46,853 ms | 50,151 ms | 50,517 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 69,872 ms | 77,462 ms | 78,306 ms |
| agent-cold-warm-message | mock-openai-provider | Runtime Deps Staging | 4,632 ms | 5,891 ms | 6,031 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | agentTurnMs | 80,080 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | agentTurnMs | 50,517 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 3,591 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 3,591 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.package-manager.peakRssMb | 2,809 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 3,591 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.maxCpuPercent | 301 | <= 300 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 3,591 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | 301 | <= 300 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 79,777 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 50,348 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 80,080 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 50,517 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 79,777 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 50,348 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | agentTurnMs | 71,311 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | agentTurnMs | 46,853 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 3,318 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 3,318 | <= 1400 |

_Only first 20 of 48 violations shown._

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: v2026.4.29
- Tested SHA: a448042c2edd94a4e8ee86d5ed90a5ed9fe8e4cd
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
