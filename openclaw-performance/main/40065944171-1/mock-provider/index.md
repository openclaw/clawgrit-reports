# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261024-052340-15be96
- Generated: 2026-10-24T05:45:36.943Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,857 MB | 1,864 MB | 1,865 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,857 MB | 1,864 MB | 1,865 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 263 % | 269 % | 269 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 132 ms | 183 ms | 189 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,424 MB | 1,425 MB | 1,425 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 205 % | 210 % | 211 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,895 ms | 6,917 ms | 6,920 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,380 ms | 6,394 ms | 6,396 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,922 ms | 6,947 ms | 6,950 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,653 ms | 6,681 ms | 6,684 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,827 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,046 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 949 | <= 900 |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,857 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,071 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,865 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,079 | <= 1440 |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,425 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,611 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,423 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,608 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,424 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,610 | <= 1400 |

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
- Tested SHA: 210a582b4658cfe82adf107d7e0004a1abe24e58
- Workflow ref: main
- Workflow SHA: 210a582b4658cfe82adf107d7e0004a1abe24e58
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

The complete Kova bundle remains in [Actions artifact 12550510058](https://github.com/openclaw/openclaw/actions/runs/40065944171/artifacts/12550510058); its checksum is published under the bundles directory.
