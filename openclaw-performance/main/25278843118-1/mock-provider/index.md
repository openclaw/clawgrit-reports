# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-03T121300Z
- Generated: 2026-05-03T12:14:15.969Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25278843118-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 635 MB | 635 MB | 635 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 156 % | 156 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,156 ms | 6,156 ms | 6,156 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,174 ms | 6,174 ms | 6,174 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,821 ms | 5,821 ms | 5,821 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,813 ms | 5,813 ms | 5,813 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, and CLI startup numbers are in [source/index.md](source/index.md).
