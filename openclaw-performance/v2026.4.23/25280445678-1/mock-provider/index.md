# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-03T132814Z
- Generated: 2026-05-03T13:30:36.056Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/v2026.4.23/25280445678-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 879 MB | 1,111 MB | 1,137 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 154 % | 196 % | 201 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,995 ms | 36,958 ms | 40,288 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,920 ms | 38,530 ms | 42,042 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,956 ms | 6,995 ms | 6,999 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,918 ms | 36,776 ms | 40,094 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,137 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,137 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,137 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 41,843 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 41,843 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | coldWarmDeltaMs | 35,086 | <= 30000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | cold-pre-provider-stall | no cold pre-provider stall |
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
- Tested ref: v2026.4.23
- Tested SHA: a9797214338ba31c52c796adbb75afb16e0684a9
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
