# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261006-052749-f74e55
- Generated: 2026-10-06T05:49:22.185Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 4, PASS: 2
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,251 MB | 1,299 MB | 1,304 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,251 MB | 1,299 MB | 1,304 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 197 % | 236 % | 240 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 20.6 ms | 24.2 ms | 24.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,133 MB | 1,202 MB | 1,209 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 178 % | 189 % | 191 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,757 ms | 6,973 ms | 6,997 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,758 ms | 6,988 ms | 7,014 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,666 ms | 6,734 ms | 6,742 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,547 ms | 6,717 ms | 6,736 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,224 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,511 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,304 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,589 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,251 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,537 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,209 | <= 1150 |

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
- Tested SHA: d8612ec864bb4c872616cfda5340c53803655f5f
- Workflow ref: main
- Workflow SHA: d8612ec864bb4c872616cfda5340c53803655f5f
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11392687675](https://github.com/openclaw/openclaw/actions/runs/37418475569/artifacts/11392687675); its checksum is published under the bundles directory.
