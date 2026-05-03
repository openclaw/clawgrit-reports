# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-03T130718Z
- Generated: 2026-05-03T13:15:10.601Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/v2026.4.26/25280005629-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 1,128 MB | 1,146 MB | 1,148 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 183 % | 190 % | 191 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 70,083 ms | 71,679 ms | 71,856 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 71,210 ms | 72,875 ms | 73,060 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 48,668 ms | 48,950 ms | 48,981 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 69,909 ms | 71,564 ms | 71,748 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | agentTurnMs | 71,210 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | agentTurnMs | 48,668 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | statusMs | 16,010 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,125 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,125 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,125 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 71,031 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 48,595 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 71,210 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 48,668 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 71,031 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 48,595 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | agentTurnMs | 70,095 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | agentTurnMs | 47,095 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | statusMs | 13,676 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,148 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,148 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,148 | <= 900 |

_Only first 20 of 42 violations shown._

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: v2026.4.26
- Tested SHA: be8c24633aaa7ef0425ae1178f096ee8dd6226c0
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
