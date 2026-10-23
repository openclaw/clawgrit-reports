# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261023-052457-3edc02
- Generated: 2026-10-23T05:48:55.647Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,858 MB | 1,884 MB | 1,887 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,858 MB | 1,884 MB | 1,887 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 268 % | 269 % | 269 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 139 ms | 154 ms | 156 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,558 MB | 1,706 MB | 1,722 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 235 % | 235 % | 235 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 8,227 ms | 9,037 ms | 9,127 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 7,584 ms | 8,177 ms | 8,243 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 8,267 ms | 9,083 ms | 9,174 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 7,956 ms | 8,757 ms | 8,846 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,887 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,104 | <= 1440 |
| gateway-performance | many-bundled-plugins | eventLoopDelayMentions | 1 | <= 0 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,858 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,075 | <= 1440 |
| gateway-performance | many-bundled-plugins | eventLoopDelayMentions | 1 | <= 0 |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,856 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,074 | <= 1440 |
| gateway-performance | many-bundled-plugins | eventLoopDelayMentions | 1 | <= 0 |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,517 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,701 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,722 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,909 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,558 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,742 | <= 1400 |

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
- Tested SHA: 4c35e9503fd245a3a5222ece69953fbd4a429e2f
- Workflow ref: main
- Workflow SHA: 4c35e9503fd245a3a5222ece69953fbd4a429e2f
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12481162992](https://github.com/openclaw/openclaw/actions/runs/39905456802/artifacts/12481162992); its checksum is published under the bundles directory.
