# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-03T132828Z
- Generated: 2026-05-03T13:33:26.519Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/v2026.4.15/25280447486-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 837 MB | 991 MB | 1,008 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 19,760 ms | 25,520 ms | 26,160 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 19,903 ms | 25,949 ms | 26,621 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 17,238 ms | 17,388 ms | 17,405 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 19,674 ms | 25,392 ms | 26,028 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | statusMs | 10,643 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,008 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,008 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,008 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 26,485 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 17,335 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 17,405 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 26,485 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 17,335 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | statusMs | 10,365 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 19,815 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 16,988 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 17,040 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 19,815 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 16,988 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | statusMs | 10,348 | <= 10000 |

_Only first 20 of 27 violations shown._

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: v2026.4.15
- Tested SHA: 041266a6699cac3baef8ef39db41fa26f29f9db3
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
