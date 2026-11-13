# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261113-051915-23bcd8
- Generated: 2026-11-13T06:05:10.187Z
- Target: local-build:/home/runner/work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,743 MB | 1,768 MB | 1,771 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,743 MB | 1,768 MB | 1,771 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 223 % | 223 % | 223 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 89.3 ms | 91.4 ms | 91.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,540 MB | 1,611 MB | 1,619 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 217 % | 230 % | 231 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 15,433 ms | 15,847 ms | 15,893 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 13,321 ms | 13,400 ms | 13,409 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 15,539 ms | 15,979 ms | 16,028 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 14,190 ms | 14,221 ms | 14,225 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | warmReadyMs | 16,742 | <= 15000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,736 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,877 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":162.3,"upper":206.9} | <= 200 |
| gateway-performance | many-bundled-plugins | warmReadyMs | 16,718 | <= 15000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,743 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,908 | <= 1440 |
| gateway-performance | many-bundled-plugins | warmReadyMs | 17,011 | <= 15000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,771 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,861 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":158.6,"upper":203.6} | <= 200 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,619 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,890 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,740 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 14,303 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 16,028 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,740 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 14,303 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,491 | <= 1150 |

_Only first 20 of 35 violations shown._

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
- Tested SHA: 30ce1b5cb099be7ae01863a7b30a4b069d638b13
- Workflow ref: main
- Workflow SHA: 30ce1b5cb099be7ae01863a7b30a4b069d638b13
- Kova repository: openclaw/Kova
- Kova ref: a50c81c878f417e7e56dc64b7063d9a117db5ad3
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 14014821422](https://github.com/openclaw/openclaw/actions/runs/43370804294/artifacts/14014821422); its checksum is published under the bundles directory.
