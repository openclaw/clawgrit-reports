# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261008-052900-17ca2f
- Generated: 2026-10-08T05:51:31.985Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 5, PASS: 1
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,433 MB | 1,434 MB | 1,435 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,433 MB | 1,434 MB | 1,435 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 187 % | 207 % | 209 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 20.6 ms | 22.3 ms | 22.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,186 MB | 1,202 MB | 1,204 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 189 % | 194 % | 195 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 8,404 ms | 9,006 ms | 9,073 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 8,414 ms | 8,836 ms | 8,883 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 8,222 ms | 8,997 ms | 9,083 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 8,030 ms | 8,664 ms | 8,735 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,433 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,719 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,435 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,719 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 907 | <= 900 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,384 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,669 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,204 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,186 | <= 1150 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 6dd7b2e00b3edaf07383052660f2cb8cddf8575d
- Workflow ref: main
- Workflow SHA: 6dd7b2e00b3edaf07383052660f2cb8cddf8575d
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

The complete Kova bundle remains in [Actions artifact 11530869209](https://github.com/openclaw/openclaw/actions/runs/37732439164/artifacts/11530869209); its checksum is published under the bundles directory.
