# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-03T061222Z
- Generated: 2026-05-03T06:13:08.100Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25271678413-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 2,522 MB | 2,579 MB | 2,586 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 366 % | 367 % | 368 % |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 2,586 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 2,586 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.runtime-staging.peakRssMb | 1,260 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 2,522 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 2,522 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 2,077 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 2,077 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, and CLI startup numbers are in [source/index.md](source/index.md).
