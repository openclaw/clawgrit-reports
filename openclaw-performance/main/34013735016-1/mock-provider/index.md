# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260906-052234-c1d5e3
- Generated: 2026-09-06T05:25:00.503Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 594 MB | 630 MB | 634 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 594 MB | 630 MB | 634 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 131 % | 136 % | 137 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.4 ms | 11.5 ms | 11.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 444 MB | 447 MB | 447 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 138 % | 139 % | 139 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 1,717 ms | 1,724 ms | 1,725 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 1,723 ms | 1,730 ms | 1,731 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 1,601 ms | 1,605 ms | 1,605 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 1,584 ms | 1,594 ms | 1,595 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: bcef3b3526dd1d015e0b1c1030a1dea12cf1b517
- Workflow ref: main
- Workflow SHA: bcef3b3526dd1d015e0b1c1030a1dea12cf1b517
- Kova repository: openclaw/Kova
- Kova ref: 81919463ef9620722373c813192c688573f2b533
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9983310457](https://github.com/openclaw/openclaw/actions/runs/34013735016/artifacts/9983310457); its checksum is published under the bundles directory.
