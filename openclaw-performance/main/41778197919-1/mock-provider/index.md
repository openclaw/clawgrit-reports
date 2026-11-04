# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261104-051821-1c13a9
- Generated: 2026-11-04T05:45:02.321Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 3, FAIL: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,570 MB | 1,573 MB | 1,573 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,570 MB | 1,573 MB | 1,573 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 269 % | 280 % | 282 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 45.8 ms | 46.9 ms | 47 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,480 MB | 1,526 MB | 1,531 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 235 % | 242 % | 243 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,801 ms | 8,092 ms | 8,125 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,958 ms | 7,048 ms | 7,058 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,840 ms | 8,151 ms | 8,186 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 7,469 ms | 7,769 ms | 7,802 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,425 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,609 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,480 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,664 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,531 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,715 | <= 1600 |

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
- Tested SHA: 52da7f61d3aaefbdbee2f637efa1c5a924f0b920
- Workflow ref: main
- Workflow SHA: 52da7f61d3aaefbdbee2f637efa1c5a924f0b920
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

The complete Kova bundle remains in [Actions artifact 13299097278](https://github.com/openclaw/openclaw/actions/runs/41778197919/artifacts/13299097278); its checksum is published under the bundles directory.
