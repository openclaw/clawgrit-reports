# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260924-052457-71ef7e
- Generated: 2026-09-24T05:29:10.898Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,123 MB | 1,143 MB | 1,146 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,123 MB | 1,143 MB | 1,146 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 203 % | 281 % | 290 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 19.7 ms | 23.3 ms | 23.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 905 MB | 950 MB | 955 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 221 % | 221 % | 221 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,939 ms | 5,984 ms | 5,990 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,917 ms | 5,300 ms | 5,343 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,970 ms | 6,038 ms | 6,046 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,692 ms | 5,705 ms | 5,706 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,314 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":249.7,"upper":289.7} | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,291 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.maxCpuPercent | {"lower":249.7,"upper":342.4} | <= 300 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,284 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.maxCpuPercent | {"lower":191.3,"upper":361.8} | <= 300 |

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
- Tested SHA: fef6b1290e412761888865da5b61ee1c0ce29586
- Workflow ref: main
- Workflow SHA: fef6b1290e412761888865da5b61ee1c0ce29586
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10791698992](https://github.com/openclaw/openclaw/actions/runs/35959711017/artifacts/10791698992); its checksum is published under the bundles directory.
