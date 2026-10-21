# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261021-052517-7e51b2
- Generated: 2026-10-21T05:48:02.401Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,888 MB | 1,939 MB | 1,945 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,888 MB | 1,939 MB | 1,945 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 268 % | 269 % | 270 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 53.4 ms | 54.1 ms | 54.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,573 MB | 1,620 MB | 1,625 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 222 % | 228 % | 229 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 8,878 ms | 9,175 ms | 9,207 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 8,140 ms | 8,164 ms | 8,167 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 8,917 ms | 9,246 ms | 9,282 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 8,629 ms | 8,859 ms | 8,884 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,945 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,163 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 1,009 | <= 900 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,876 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,093 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 966 | <= 900 |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,888 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,105 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 947 | <= 900 |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,538 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,724 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,573 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,760 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,625 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,811 | <= 1400 |

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
- Tested SHA: 45aaaf3577c8179b0ad07da7bedb87350e33e7f2
- Workflow ref: main
- Workflow SHA: 45aaaf3577c8179b0ad07da7bedb87350e33e7f2
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

The complete Kova bundle remains in [Actions artifact 12323289414](https://github.com/openclaw/openclaw/actions/runs/39549287330/artifacts/12323289414); its checksum is published under the bundles directory.
