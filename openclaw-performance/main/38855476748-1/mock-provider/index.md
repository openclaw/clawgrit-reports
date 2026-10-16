# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261016-052424-dda50d
- Generated: 2026-10-16T05:46:15.645Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 2,071 MB | 2,170 MB | 2,181 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 2,071 MB | 2,170 MB | 2,181 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 273 % | 278 % | 278 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 36.1 ms | 73.8 ms | 78 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,540 MB | 1,611 MB | 1,618 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 212 % | 223 % | 224 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,435 ms | 7,497 ms | 7,504 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 7,001 ms | 7,171 ms | 7,190 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,448 ms | 7,522 ms | 7,530 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 7,168 ms | 7,246 ms | 7,254 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 2,071 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,276 | <= 1440 |
| gateway-performance | many-bundled-plugins | eventLoopDelayMentions | 1 | <= 0 |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,935 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,140 | <= 1440 |
| gateway-performance | many-bundled-plugins | eventLoopDelayMentions | 1 | <= 0 |
| gateway-performance | many-bundled-plugins | peakRssMb | 2,181 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,386 | <= 1440 |
| gateway-performance | many-bundled-plugins | eventLoopDelayMentions | 1 | <= 0 |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,540 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,740 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,618 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,814 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,516 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,712 | <= 1400 |

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
- Tested SHA: 08be5ab0bf4891e08e77d2eac577daf9a13173c8
- Workflow ref: main
- Workflow SHA: 08be5ab0bf4891e08e77d2eac577daf9a13173c8
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

The complete Kova bundle remains in [Actions artifact 12027408972](https://github.com/openclaw/openclaw/actions/runs/38855476748/artifacts/12027408972); its checksum is published under the bundles directory.
