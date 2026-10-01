# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261001-052732-35f640
- Generated: 2026-10-01T05:32:24.453Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 4, PASS: 2
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,216 MB | 1,249 MB | 1,253 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,216 MB | 1,249 MB | 1,253 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 241 % | 276 % | 280 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 22.7 ms | 29.9 ms | 30.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,108 MB | 1,157 MB | 1,162 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 213 % | 223 % | 224 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,255 ms | 6,354 ms | 6,365 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,835 ms | 6,043 ms | 6,066 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,283 ms | 6,371 ms | 6,381 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,937 ms | 6,043 ms | 6,054 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,253 | <= 1177 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,216 | <= 1177 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,213 | <= 1177 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,162 | <= 1150 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: f3f02417f117c1b3779f380ac8f278b3b5a2e02a
- Workflow ref: main
- Workflow SHA: f3f02417f117c1b3779f380ac8f278b3b5a2e02a
- Kova repository: openclaw/Kova
- Kova ref: 4b8b1681446b868a44193ed6e97253a6c8bcbbbf
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11143370234](https://github.com/openclaw/openclaw/actions/runs/36819696853/artifacts/11143370234); its checksum is published under the bundles directory.
