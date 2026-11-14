# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261114-051749-56bb36
- Generated: 2026-11-14T05:35:39.095Z
- Target: local-build:/home/runner/work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,701 MB | 1,701 MB | 1,701 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,701 MB | 1,701 MB | 1,701 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 287 % | 287 % | 287 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 73.1 ms | 73.1 ms | 73.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,896 MB | 1,896 MB | 1,896 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 311 % | 311 % | 311 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 27,743 ms | 27,743 ms | 27,743 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 26,895 ms | 26,895 ms | 26,895 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 27,788 ms | 27,788 ms | 27,788 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 25,218 ms | 25,218 ms | 25,218 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceCpuCoverage | ["Product CPU interval or terminal wait accounting is incomplete"] | complete CPU interval evidence |
| gateway-performance | many-bundled-plugins | startupResourceCoverage | cpu-incomplete | continuous Gateway startup through matching ready and terminal CPU read |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,701 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,965 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.maxCpuPercent | {"lower":290.3,"upper":522.6} | <= 450 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | {"lower":290.3,"upper":311.2} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 27,788 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
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
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 14100069878](https://github.com/openclaw/openclaw/actions/runs/43560572855/artifacts/14100069878); its checksum is published under the bundles directory.
