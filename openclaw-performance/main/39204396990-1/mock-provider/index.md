# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261019-052611-dbd906
- Generated: 2026-10-19T05:47:23.331Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,700 MB | 1,743 MB | 1,748 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,700 MB | 1,743 MB | 1,748 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 249 % | 265 % | 267 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 45 ms | 49.6 ms | 50.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,326 MB | 1,344 MB | 1,346 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 213 % | 219 % | 220 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,732 ms | 6,872 ms | 6,887 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,732 ms | 6,872 ms | 6,887 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,748 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,024 | <= 1440 |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,697 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,917 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 984 | <= 900 |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,700 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,920 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 975 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,302 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,485 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | missingDependencyErrors | 1 | <= 0 |
| agent-cold-warm-message | mock-openai-provider | agentResponseOk | 0 | true |
| agent-cold-warm-message | mock-openai-provider | agentTurn.responseOk | none | usable assistant response |
| agent-cold-warm-message | mock-openai-provider | agentTurn.expectedTextPresent | none | KOVA_AGENT_OK |
| agent-cold-warm-message | mock-openai-provider | agentProviderRequestMissing | none | provider request during agent command |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | null | finite non-negative turn measurement |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | no-provider-request | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,346 | <= 1150 |

_Only first 20 of 37 violations shown._

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
- Tested SHA: b0055b677826295be67e67cf30d8b629b351d7fb
- Workflow ref: main
- Workflow SHA: b0055b677826295be67e67cf30d8b629b351d7fb
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

The complete Kova bundle remains in [Actions artifact 12165711736](https://github.com/openclaw/openclaw/actions/runs/39204396990/artifacts/12165711736); its checksum is published under the bundles directory.
