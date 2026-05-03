# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-03T132809Z
- Generated: 2026-05-03T13:30:28.478Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/v2026.4.22/25280446112-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 743 MB | 1,030 MB | 1,062 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 151 % | 232 % | 241 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 9,521 ms | 31,371 ms | 33,799 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 9,630 ms | 32,629 ms | 35,184 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,459 ms | 7,473 ms | 7,475 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 9,460 ms | 31,190 ms | 33,604 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,062 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,062 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,062 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 34,983 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 34,983 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |
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
- Tested ref: v2026.4.22
- Tested SHA: 00bd2cf7a376f1fba26291c6c4766f1f15cbdfa5
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
