# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260920-052238-a40201
- Generated: 2026-09-20T05:26:35.526Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,112 MB | 1,112 MB | 1,113 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,112 MB | 1,112 MB | 1,113 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 219 % | 430 % | 454 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 29.2 ms | 29.7 ms | 29.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 936 MB | 955 MB | 958 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 230 % | 239 % | 240 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,531 ms | 4,698 ms | 4,717 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,986 ms | 4,198 ms | 4,221 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,560 ms | 4,725 ms | 4,743 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,192 ms | 4,310 ms | 4,324 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":157.4,"upper":453.8} | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.mock-provider.maxCpuPercent | {"lower":0,"upper":226.9} | <= 150 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,279 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.maxCpuPercent | {"lower":162.4,"upper":907.5} | <= 300 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,279 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,262 | <= 1200 |

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
- Tested SHA: 9cf4837995ff570f0b25e1f404eb8ec069debf03
- Workflow ref: main
- Workflow SHA: 9cf4837995ff570f0b25e1f404eb8ec069debf03
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

The complete Kova bundle remains in [Actions artifact 10599347320](https://github.com/openclaw/openclaw/actions/runs/35491455305/artifacts/10599347320); its checksum is published under the bundles directory.
