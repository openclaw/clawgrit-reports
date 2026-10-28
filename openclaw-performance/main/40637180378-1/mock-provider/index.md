# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261028-052020-9706a4
- Generated: 2026-10-28T05:44:52.257Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,636 MB | 1,665 MB | 1,668 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,636 MB | 1,665 MB | 1,668 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 196 % | 198 % | 198 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 43.7 ms | 56.5 ms | 57.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,564 MB | 1,579 MB | 1,581 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 188 % | 217 % | 220 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,437 ms | 7,793 ms | 7,833 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,841 ms | 7,045 ms | 7,068 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,472 ms | 7,833 ms | 7,873 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 7,098 ms | 7,502 ms | 7,547 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,623 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,815 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,668 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,860 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,636 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,829 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 955 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,564 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,745 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,514 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,791 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,581 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,857 | <= 1400 |

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
- Tested SHA: 702c2957fadc79a4c3ba5d046842d918e2909f12
- Workflow ref: main
- Workflow SHA: 702c2957fadc79a4c3ba5d046842d918e2909f12
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

The complete Kova bundle remains in [Actions artifact 12794599048](https://github.com/openclaw/openclaw/actions/runs/40637180378/artifacts/12794599048); its checksum is published under the bundles directory.
