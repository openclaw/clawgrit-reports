# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261004-070541-f43b8b
- Generated: 2026-10-04T07:24:12.393Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,266 MB | 1,266 MB | 1,266 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,266 MB | 1,266 MB | 1,266 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 234 % | 241 % | 242 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 21.3 ms | 48.6 ms | 51.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,012 MB | 1,046 MB | 1,050 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 198 % | 212 % | 213 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,110 ms | 6,370 ms | 6,399 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,596 ms | 5,958 ms | 5,998 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,137 ms | 6,392 ms | 6,420 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,883 ms | 6,162 ms | 6,193 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,264 | <= 1177 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,266 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,443 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,266 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,441 | <= 1440 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 9480581481a64c3f4050a6af9b8b615ce209dd05
- Workflow ref: main
- Workflow SHA: 9480581481a64c3f4050a6af9b8b615ce209dd05
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11297032215](https://github.com/openclaw/openclaw/actions/runs/37184653502/artifacts/11297032215); its checksum is published under the bundles directory.
