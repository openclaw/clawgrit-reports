# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261101-051714-ee89f7
- Generated: 2026-11-01T05:38:47.779Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,565 MB | 1,611 MB | 1,617 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,565 MB | 1,611 MB | 1,617 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 192 % | 222 % | 225 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 37.1 ms | 40.2 ms | 40.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,435 MB | 1,482 MB | 1,487 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 198 % | 198 % | 198 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,618 ms | 6,669 ms | 6,674 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,984 ms | 6,001 ms | 6,003 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,651 ms | 6,705 ms | 6,711 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,374 ms | 6,426 ms | 6,431 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | warmReadyMs | 18,590 | <= 15000 |
| gateway-performance | many-bundled-plugins | warmReadyMs | 20,384 | <= 15000 |
| gateway-performance | many-bundled-plugins | warmReadyMs | 18,061 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,435 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,619 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,424 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,607 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,487 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,671 | <= 1600 |

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
- Tested SHA: 8d15b0fa2a17c3513728095f53acb8391d635d3d
- Workflow ref: main
- Workflow SHA: 8d15b0fa2a17c3513728095f53acb8391d635d3d
- Kova repository: openclaw/Kova
- Kova ref: 7bd7c2f9531476bf86b9bd13c63f748182c727bb
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13070909881](https://github.com/openclaw/openclaw/actions/runs/41276174214/artifacts/13070909881); its checksum is published under the bundles directory.
