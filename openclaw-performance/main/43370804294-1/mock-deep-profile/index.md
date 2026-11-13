# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261113-051841-d58949
- Generated: 2026-11-13T05:41:36.200Z
- Target: local-build:/home/runner/work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,735 MB | 1,735 MB | 1,735 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,735 MB | 1,735 MB | 1,735 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 268 % | 268 % | 268 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 98.2 ms | 98.2 ms | 98.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,879 MB | 1,879 MB | 1,879 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 318 % | 318 % | 318 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 38,001 ms | 38,001 ms | 38,001 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 34,959 ms | 34,959 ms | 34,959 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 38,161 ms | 38,161 ms | 38,161 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 34,014 ms | 34,014 ms | 34,014 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceCpuCoverage | ["Product CPU interval or terminal wait accounting is incomplete"] | complete CPU interval evidence |
| gateway-performance | many-bundled-plugins | startupResourceCoverage | cpu-incomplete | continuous Gateway startup through matching ready and terminal CPU read |
| gateway-performance | many-bundled-plugins | warmReadyMs | 18,936 | <= 15000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,735 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,945 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.maxCpuPercent | {"lower":296.3,"upper":474.6} | <= 450 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.maxCpuPercent | {"lower":157,"upper":303.6} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | {"lower":296.3,"upper":317.5} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 38,161 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
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
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 14013517452](https://github.com/openclaw/openclaw/actions/runs/43370804294/artifacts/14013517452); its checksum is published under the bundles directory.
