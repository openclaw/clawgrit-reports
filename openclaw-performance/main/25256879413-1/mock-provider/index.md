# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-02T165046Z
- Generated: 2026-05-02T16:51:35.958Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1
- Repeat: 1
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25256879413-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 2,590 MB | 2,590 MB | 2,590 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 358 % | 358 % | 358 % |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 2,590 | <= 900 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, and CLI startup numbers are in [source/index.md](source/index.md).
