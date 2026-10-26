# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261026-052915-4d7840
- Generated: 2026-10-26T05:52:21.713Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,874 MB | 1,905 MB | 1,908 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,874 MB | 1,905 MB | 1,908 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 260 % | 264 % | 264 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 197 ms | 248 ms | 254 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,479 MB | 1,525 MB | 1,530 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 240 % | 240 % | 240 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,655 ms | 7,669 ms | 7,671 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,938 ms | 6,940 ms | 6,940 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,693 ms | 7,707 ms | 7,709 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 7,410 ms | 7,425 ms | 7,427 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,874 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,088 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 928 | <= 900 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,908 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,124 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 935 | <= 900 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,860 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,075 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 1,013 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,530 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,714 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,479 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,662 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,437 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,621 | <= 1400 |

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
- Tested SHA: 75a1bcebd6a9b5eae2ca6c1d82bed61507d7d706
- Workflow ref: main
- Workflow SHA: 75a1bcebd6a9b5eae2ca6c1d82bed61507d7d706
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

The complete Kova bundle remains in [Actions artifact 12630103042](https://github.com/openclaw/openclaw/actions/runs/40274254859/artifacts/12630103042); its checksum is published under the bundles directory.
