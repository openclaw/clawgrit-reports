# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-10T061707Z
- Generated: 2026-05-10T06:19:09.823Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25621626393-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 840 MB | 846 MB | 847 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 148 % | 151 % | 151 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,611 ms | 4,753 ms | 4,769 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,581 ms | 4,622 ms | 4,627 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,467 ms | 4,775 ms | 4,809 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,384 ms | 4,543 ms | 4,560 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 1d65f965e81b872b8e0e557ecc1913de55ee4616
- Workflow ref: main
- Workflow SHA: 1d65f965e81b872b8e0e557ecc1913de55ee4616
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: mock
- Lane model: gpt-5.4
- Lane repeat: 3
- Include filters: scenario:fresh-install scenario:gateway-performance scenario:bundled-plugin-startup scenario:bundled-runtime-deps scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, and CLI startup numbers are in [source/index.md](source/index.md).
