# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261112-051848-d03f8f
- Generated: 2026-11-12T05:47:07.053Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,573 MB | 1,630 MB | 1,637 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,573 MB | 1,630 MB | 1,637 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 172 % | 239 % | 247 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 61.1 ms | 76.9 ms | 78.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,414 MB | 1,444 MB | 1,447 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 203 % | 224 % | 226 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 8,423 ms | 8,914 ms | 8,968 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 7,065 ms | 7,276 ms | 7,299 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 8,482 ms | 9,018 ms | 9,077 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 8,133 ms | 8,571 ms | 8,620 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,573 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,847 | <= 1440 |
| gateway-performance | many-bundled-plugins | warmReadyMs | 15,692 | <= 15000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,637 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,910 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,543 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,817 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,414 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,681 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,447 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,715 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,376 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,642 | <= 1400 |

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
- Tested SHA: 231fae1903a04b51df073b25b20906fb4d58799e
- Workflow ref: main
- Workflow SHA: 231fae1903a04b51df073b25b20906fb4d58799e
- Kova repository: openclaw/Kova
- Kova ref: a50c81c878f417e7e56dc64b7063d9a117db5ad3
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13919405667](https://github.com/openclaw/openclaw/actions/runs/43160180278/artifacts/13919405667); its checksum is published under the bundles directory.
