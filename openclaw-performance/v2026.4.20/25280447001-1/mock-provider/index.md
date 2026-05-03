# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-03T132810Z
- Generated: 2026-05-03T13:32:19.337Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/v2026.4.20/25280447001-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 811 MB | 1,043 MB | 1,069 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 167 % | 242 % | 250 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 22,144 ms | 27,521 ms | 28,118 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 22,314 ms | 28,025 ms | 28,659 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 18,811 ms | 18,906 ms | 18,917 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 22,076 ms | 27,373 ms | 27,962 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | statusMs | 10,388 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,069 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,069 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,069 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 28,498 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 17,774 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 17,847 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 28,498 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 17,774 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | statusMs | 10,027 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 21,496 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 18,737 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 18,811 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 21,496 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 18,737 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | statusMs | 10,169 | <= 10000 |

_Only first 20 of 27 violations shown._

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: v2026.4.20
- Tested SHA: 115f05d5952adeaa8043311c24c4b8a3803481ba
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
