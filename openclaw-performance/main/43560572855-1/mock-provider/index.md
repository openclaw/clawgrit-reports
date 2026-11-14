# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261114-051805-02ff22
- Generated: 2026-11-14T06:04:55.020Z
- Target: local-build:/home/runner/work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,750 MB | 1,776 MB | 1,779 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,750 MB | 1,776 MB | 1,779 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 224 % | 234 % | 235 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 96.1 ms | 104 ms | 105 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,499 MB | 1,603 MB | 1,614 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 239 % | 247 % | 248 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 15,353 ms | 15,678 ms | 15,714 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 13,018 ms | 13,111 ms | 13,121 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 15,480 ms | 15,813 ms | 15,850 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 13,965 ms | 14,307 ms | 14,345 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | warmReadyMs | 17,101 | <= 15000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,733 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,913 | <= 1440 |
| gateway-performance | many-bundled-plugins | warmReadyMs | 17,156 | <= 15000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,779 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,957 | <= 1440 |
| gateway-performance | many-bundled-plugins | warmReadyMs | 16,884 | <= 15000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,750 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,950 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,499 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,753 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,386 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 14,000 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 15,480 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,386 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 14,000 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,614 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,884 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,531 | <= 10000 |

_Only first 20 of 33 violations shown._

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
- Tested SHA: ca2bf94f193b583f1efa810e648d5fbf628e7231
- Workflow ref: main
- Workflow SHA: ca2bf94f193b583f1efa810e648d5fbf628e7231
- Kova repository: openclaw/Kova
- Kova ref: a50c81c878f417e7e56dc64b7063d9a117db5ad3
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 14100854448](https://github.com/openclaw/openclaw/actions/runs/43560572855/artifacts/14100854448); its checksum is published under the bundles directory.
