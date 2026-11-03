# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261103-051830-26b415
- Generated: 2026-11-03T05:40:03.745Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 3, FAIL: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,565 MB | 1,581 MB | 1,583 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,565 MB | 1,581 MB | 1,583 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 198 % | 256 % | 263 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 36.5 ms | 36.6 ms | 36.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,478 MB | 1,479 MB | 1,479 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 193 % | 196 % | 196 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,767 ms | 6,797 ms | 6,800 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,887 ms | 5,909 ms | 5,911 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,813 ms | 6,845 ms | 6,849 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,508 ms | 6,548 ms | 6,553 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,479 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,663 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,467 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,651 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,478 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,662 | <= 1600 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: e375530e380bc457d33b2668e34de425e612d311
- Workflow ref: main
- Workflow SHA: e375530e380bc457d33b2668e34de425e612d311
- Kova repository: openclaw/Kova
- Kova ref: 869493d1be0dcf10b7ddf96371cf35239a9efbd6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13207832062](https://github.com/openclaw/openclaw/actions/runs/41582891298/artifacts/13207832062); its checksum is published under the bundles directory.
