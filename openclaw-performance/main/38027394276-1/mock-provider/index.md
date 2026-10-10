# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261010-052613-1ae561
- Generated: 2026-10-10T05:46:12.192Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,651 MB | 1,666 MB | 1,668 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,651 MB | 1,666 MB | 1,668 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 239 % | 244 % | 245 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 22.1 ms | 24.4 ms | 24.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,387 MB | 1,461 MB | 1,470 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 181 % | 183 % | 183 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,150 ms | 7,164 ms | 7,166 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,936 ms | 6,968 ms | 6,972 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,159 ms | 7,176 ms | 7,178 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,887 ms | 6,935 ms | 6,941 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,650 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,935 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,668 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,954 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,651 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,936 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 901 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,387 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,487 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,386 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,486 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,470 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,569 | <= 1400 |

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
- Tested SHA: 6866e219d8ed1cadd539e5de2a2db20ac1c1a095
- Workflow ref: main
- Workflow SHA: 6866e219d8ed1cadd539e5de2a2db20ac1c1a095
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

The complete Kova bundle remains in [Actions artifact 11660484459](https://github.com/openclaw/openclaw/actions/runs/38027394276/artifacts/11660484459); its checksum is published under the bundles directory.
