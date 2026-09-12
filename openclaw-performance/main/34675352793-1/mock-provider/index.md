# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260912-052219-863d8c
- Generated: 2026-09-12T05:25:34.865Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, PASS: 5
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 666 MB | 667 MB | 667 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 666 MB | 667 MB | 667 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 181 % | 509 % | 545 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.8 ms | 11 ms | 11 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 574 MB | 575 MB | 575 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 164 % | 169 % | 170 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,362 ms | 2,389 ms | 2,392 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,304 ms | 2,310 ms | 2,311 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,365 ms | 2,402 ms | 2,406 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,264 ms | 2,292 ms | 2,295 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":138.8,"upper":544.9} | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.mock-provider.maxCpuPercent | {"lower":0,"upper":544.9} | <= 150 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.maxCpuPercent | {"lower":138.8,"upper":544.9} | <= 300 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: e451374ce00c25b33af86d4b45cb4f87b0053788
- Workflow ref: main
- Workflow SHA: e451374ce00c25b33af86d4b45cb4f87b0053788
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10292281559](https://github.com/openclaw/openclaw/actions/runs/34675352793/artifacts/10292281559); its checksum is published under the bundles directory.
