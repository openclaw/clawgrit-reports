# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261018-052245-3a5971
- Generated: 2026-10-18T05:43:28.774Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,694 MB | 1,717 MB | 1,719 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,694 MB | 1,717 MB | 1,719 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 258 % | 269 % | 271 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 38 ms | 42.6 ms | 43.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,300 MB | 1,322 MB | 1,325 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 227 % | 228 % | 229 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,974 ms | 6,006 ms | 6,010 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,974 ms | 6,006 ms | 6,010 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,694 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,914 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,654 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,873 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 1,056 | <= 900 |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,719 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,938 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,300 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,483 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | missingDependencyErrors | 1 | <= 0 |
| agent-cold-warm-message | mock-openai-provider | agentResponseOk | 0 | true |
| agent-cold-warm-message | mock-openai-provider | agentTurn.responseOk | none | usable assistant response |
| agent-cold-warm-message | mock-openai-provider | agentTurn.expectedTextPresent | none | KOVA_AGENT_OK |
| agent-cold-warm-message | mock-openai-provider | agentProviderRequestMissing | none | provider request during agent command |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | null | finite non-negative turn measurement |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | no-provider-request | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,280 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,463 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | missingDependencyErrors | 1 | <= 0 |

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
- Tested SHA: 0a80f9e0b10e5bec3bbfe342ce8fd70e9135ae86
- Workflow ref: main
- Workflow SHA: 0a80f9e0b10e5bec3bbfe342ce8fd70e9135ae86
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

The complete Kova bundle remains in [Actions artifact 12126762924](https://github.com/openclaw/openclaw/actions/runs/39100239041/artifacts/12126762924); its checksum is published under the bundles directory.
