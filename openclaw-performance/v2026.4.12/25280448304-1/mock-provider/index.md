# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-03T132842Z
- Generated: 2026-05-03T13:32:28.313Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/v2026.4.12/25280448304-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 714 MB | 722 MB | 723 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 162 % | 164 % | 165 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 11,781 ms | 11,860 ms | 11,869 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 11,965 ms | 12,042 ms | 12,050 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 8,289 ms | 8,412 ms | 8,426 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 11,621 ms | 11,789 ms | 11,808 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,799 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,799 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | agentStatusWorks | 0 | post-agent status command succeeds |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,989 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,989 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | agentStatusWorks | 0 | post-agent status command succeeds |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,303 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,303 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | agentStatusWorks | 0 | post-agent status command succeeds |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: v2026.4.12
- Tested SHA: 1c0672b74f66038fd4ee76fbf1c21715887149d8
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
