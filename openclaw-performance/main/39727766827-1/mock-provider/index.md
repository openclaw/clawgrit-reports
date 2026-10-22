# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261022-052524-bf47d4
- Generated: 2026-10-22T05:49:12.936Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,887 MB | 1,914 MB | 1,917 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,887 MB | 1,914 MB | 1,917 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 268 % | 272 % | 272 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 51.3 ms | 55.4 ms | 55.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,626 MB | 1,698 MB | 1,706 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 229 % | 243 % | 245 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 9,786 ms | 10,142 ms | 10,182 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 8,873 ms | 9,299 ms | 9,346 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 9,837 ms | 10,210 ms | 10,251 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 9,050 ms | 9,490 ms | 9,539 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,887 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,104 | <= 1440 |
| gateway-performance | many-bundled-plugins | eventLoopDelayMentions | 1 | <= 0 |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,849 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,066 | <= 1440 |
| gateway-performance | many-bundled-plugins | eventLoopDelayMentions | 1 | <= 0 |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,917 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,134 | <= 1440 |
| gateway-performance | many-bundled-plugins | eventLoopDelayMentions | 1 | <= 0 |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,580 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,763 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,706 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,892 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,626 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,813 | <= 1400 |

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
- Tested SHA: c439431bb101f279adc5f57cc118c8a09ad13fd5
- Workflow ref: main
- Workflow SHA: c439431bb101f279adc5f57cc118c8a09ad13fd5
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

The complete Kova bundle remains in [Actions artifact 12404553294](https://github.com/openclaw/openclaw/actions/runs/39727766827/artifacts/12404553294); its checksum is published under the bundles directory.
