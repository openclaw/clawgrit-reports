# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261030-052020-95dfeb
- Generated: 2026-10-30T05:41:32.840Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,574 MB | 1,603 MB | 1,606 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,574 MB | 1,603 MB | 1,606 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 185 % | 185 % | 185 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 33.4 ms | 38.4 ms | 38.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,480 MB | 1,512 MB | 1,516 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 194 % | 198 % | 199 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,530 ms | 6,550 ms | 6,553 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,881 ms | 5,898 ms | 5,900 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,565 ms | 6,585 ms | 6,587 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,290 ms | 6,295 ms | 6,295 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,574 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,881 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,543 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,851 | <= 1440 |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,606 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,918 | <= 1440 |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,516 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,793 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,480 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,757 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,457 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,735 | <= 1400 |

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
- Tested SHA: 3cd0dd6380a1a1586c6db4574b6fc231eb3367df
- Workflow ref: main
- Workflow SHA: 3cd0dd6380a1a1586c6db4574b6fc231eb3367df
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

The complete Kova bundle remains in [Actions artifact 12956214268](https://github.com/openclaw/openclaw/actions/runs/41007629360/artifacts/12956214268); its checksum is published under the bundles directory.
