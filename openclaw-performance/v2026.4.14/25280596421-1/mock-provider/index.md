# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-03T133510Z
- Generated: 2026-05-03T13:38:27.412Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/v2026.4.14/25280596421-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 686 MB | 692 MB | 692 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 148 % | 149 % | 149 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 9,701 ms | 10,059 ms | 10,099 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 9,819 ms | 10,196 ms | 10,238 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,458 ms | 7,494 ms | 7,498 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 9,648 ms | 9,957 ms | 9,992 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,128 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,128 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | agentStatusWorks | 0 | post-agent status command succeeds |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | agentStatusWorks | 0 | post-agent status command succeeds |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | agentStatusWorks | 0 | post-agent status command succeeds |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: v2026.4.14
- Tested SHA: 323493fa1b6adc1e10b9954a68d5eaa5a6ef1170
- Workflow ref: main
- Workflow SHA: 6d9df1f25ade50d5f75cbbb2e1aceecaef1ab7bf
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: mock
- Lane model: gpt-5.4
- Lane repeat: 3
- Include filters: scenario:fresh-install scenario:gateway-performance scenario:bundled-plugin-startup scenario:bundled-runtime-deps scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, and CLI startup numbers are in [source/index.md](source/index.md).
