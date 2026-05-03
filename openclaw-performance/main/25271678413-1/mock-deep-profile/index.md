# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-2026-05-03T061214Z
- Generated: 2026-05-03T06:12:50.768Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1
- Repeat: 1
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25271678413-1/mock-deep-profile

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 2,541 MB | 2,541 MB | 2,541 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 364 % | 364 % | 364 % |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 2,541 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 2,541 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.runtime-staging.peakRssMb | 1,262 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |
