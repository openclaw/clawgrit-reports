# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261007-052913-327a10
- Generated: 2026-10-07T05:52:47.117Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,340 MB | 1,343 MB | 1,343 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,340 MB | 1,343 MB | 1,343 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 184 % | 210 % | 212 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 19.9 ms | 50.4 ms | 53.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,118 MB | 1,129 MB | 1,130 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 164 % | 172 % | 172 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,598 ms | 6,621 ms | 6,623 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,586 ms | 6,603 ms | 6,605 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,458 ms | 6,608 ms | 6,625 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,338 ms | 6,391 ms | 6,397 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,343 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,629 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,340 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,627 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,326 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,615 | <= 1440 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 6041559b4eb155794bce6d87af5e828143cb3395
- Workflow ref: main
- Workflow SHA: 6041559b4eb155794bce6d87af5e828143cb3395
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11463462721](https://github.com/openclaw/openclaw/actions/runs/37576335321/artifacts/11463462721); its checksum is published under the bundles directory.
