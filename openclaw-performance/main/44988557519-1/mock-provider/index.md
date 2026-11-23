# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261122-051746-2cfe01
- Generated: 2026-11-22T06:03:08.954Z
- Target: local-build:/home/runner/work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,492 MB | 1,506 MB | 1,508 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,492 MB | 1,506 MB | 1,508 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 188 % | 220 % | 224 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 85.7 ms | 89 ms | 89.3 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,479 MB | 1,571 MB | 1,582 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 249 % | 261 % | 262 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 12,504 ms | 12,681 ms | 12,701 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 11,390 ms | 11,454 ms | 11,461 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 12,566 ms | 12,746 ms | 12,766 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 12,004 ms | 12,156 ms | 12,173 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,482 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,533 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":133,"upper":204.5} | <= 200 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,492 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,528 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":129.8,"upper":209.4} | <= 200 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,508 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,619 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,479 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,857 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,854 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,065 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,854 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,065 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,582 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,966 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,011 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,234 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,011 | <= 10000 |

_Only first 20 of 29 violations shown._

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
- Tested SHA: c0e3bc0fbff265919efaf4e5b52688c5feed28b2
- Workflow ref: main
- Workflow SHA: c0e3bc0fbff265919efaf4e5b52688c5feed28b2
- Kova repository: openclaw/Kova
- Kova ref: 7c162a3276a31fbbb60c362d94124b6cad5187ca
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 14742526192](https://github.com/openclaw/openclaw/actions/runs/44988557519/artifacts/14742526192); its checksum is published under the bundles directory.
