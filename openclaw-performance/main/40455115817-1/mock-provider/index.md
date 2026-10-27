# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261027-052603-5ff3e6
- Generated: 2026-10-27T05:47:56.709Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,906 MB | 1,910 MB | 1,910 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,906 MB | 1,910 MB | 1,910 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 249 % | 251 % | 252 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 176 ms | 181 ms | 181 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,591 MB | 1,591 MB | 1,592 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 202 % | 210 % | 211 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,440 ms | 7,455 ms | 7,457 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,783 ms | 6,797 ms | 6,799 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,474 ms | 7,490 ms | 7,492 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 7,180 ms | 7,183 ms | 7,183 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,906 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,008 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,881 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,984 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,910 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,013 | <= 1440 |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,592 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,775 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,591 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,775 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,591 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,773 | <= 1400 |

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
- Tested SHA: 59b1dddaa2f6691317a02ba4bf2dff52182a843e
- Workflow ref: main
- Workflow SHA: 59b1dddaa2f6691317a02ba4bf2dff52182a843e
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

The complete Kova bundle remains in [Actions artifact 12713351126](https://github.com/openclaw/openclaw/actions/runs/40455115817/artifacts/12713351126); its checksum is published under the bundles directory.
