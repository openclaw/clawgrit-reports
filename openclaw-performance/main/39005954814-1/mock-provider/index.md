# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261017-052253-e22569
- Generated: 2026-10-17T05:44:49.277Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,625 MB | 1,665 MB | 1,669 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,625 MB | 1,665 MB | 1,669 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 266 % | 275 % | 277 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 48.2 ms | 50.6 ms | 50.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,425 MB | 1,560 MB | 1,576 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 225 % | 233 % | 234 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,564 ms | 8,400 ms | 8,493 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 7,238 ms | 7,501 ms | 7,530 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,581 ms | 8,448 ms | 8,544 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 7,338 ms | 7,627 ms | 7,659 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,625 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,836 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,669 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,882 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,625 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,837 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,576 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,772 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,425 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,621 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,416 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,617 | <= 1400 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: a05b8f6e552c11340df8ab706e7a8ab180701dec
- Workflow ref: main
- Workflow SHA: a05b8f6e552c11340df8ab706e7a8ab180701dec
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

The complete Kova bundle remains in [Actions artifact 12091307320](https://github.com/openclaw/openclaw/actions/runs/39005954814/artifacts/12091307320); its checksum is published under the bundles directory.
