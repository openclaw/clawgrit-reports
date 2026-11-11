# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261111-051802-8fa620
- Generated: 2026-11-11T05:47:18.958Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,478 MB | 1,487 MB | 1,488 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,478 MB | 1,487 MB | 1,488 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 200 % | 209 % | 210 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 42.4 ms | 45.6 ms | 45.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,388 MB | 1,432 MB | 1,437 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 193 % | 198 % | 199 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 8,456 ms | 9,995 ms | 10,166 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 7,348 ms | 7,886 ms | 7,946 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 8,483 ms | 10,131 ms | 10,314 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 8,179 ms | 9,625 ms | 9,785 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,468 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,569 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,478 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,578 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,488 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,588 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,388 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,570 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,367 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,548 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,437 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,618 | <= 1400 |

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
- Tested SHA: 36aa3b591d54def192ec6f189e4b7f96e824ed91
- Workflow ref: main
- Workflow SHA: 36aa3b591d54def192ec6f189e4b7f96e824ed91
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

The complete Kova bundle remains in [Actions artifact 13832450071](https://github.com/openclaw/openclaw/actions/runs/42964528585/artifacts/13832450071); its checksum is published under the bundles directory.
