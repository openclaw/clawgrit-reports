# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-03T132815Z
- Generated: 2026-05-03T13:32:54.438Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/v2026.4.21/25280446581-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 830 MB | 1,054 MB | 1,079 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 175 % | 239 % | 246 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 28,899 ms | 29,167 ms | 29,197 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 29,280 ms | 29,459 ms | 29,479 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 24,192 ms | 27,278 ms | 27,621 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 28,753 ms | 29,001 ms | 29,029 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | statusMs | 10,028 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,079 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,079 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,079 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 29,329 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 17,813 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 17,875 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 29,329 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 17,813 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | statusMs | 14,461 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 19,081 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 24,017 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 24,192 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 19,081 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 24,017 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | statusMs | 15,017 | <= 10000 |

_Only first 20 of 27 violations shown._

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: v2026.4.21
- Tested SHA: f788c88b4c508c335336fb292afed8c900656d6d
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
