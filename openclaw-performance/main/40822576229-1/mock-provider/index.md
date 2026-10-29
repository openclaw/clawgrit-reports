# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261029-052017-dec91c
- Generated: 2026-10-29T05:43:25.159Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,546 MB | 1,590 MB | 1,595 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,546 MB | 1,590 MB | 1,595 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 184 % | 186 % | 187 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 33.1 ms | 39.2 ms | 39.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,452 MB | 1,516 MB | 1,523 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 214 % | 224 % | 225 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,537 ms | 7,593 ms | 7,599 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,855 ms | 7,060 ms | 7,083 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,573 ms | 7,642 ms | 7,650 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 7,229 ms | 7,278 ms | 7,284 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,546 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,858 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,595 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,902 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 1,027 | <= 900 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,544 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,851 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,452 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,730 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,451 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,729 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,523 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,800 | <= 1400 |

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
- Tested SHA: c419c72cf8451e611a2728cf3e3a8c7e306cc6ff
- Workflow ref: main
- Workflow SHA: c419c72cf8451e611a2728cf3e3a8c7e306cc6ff
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

The complete Kova bundle remains in [Actions artifact 12875783054](https://github.com/openclaw/openclaw/actions/runs/40822576229/artifacts/12875783054); its checksum is published under the bundles directory.
