# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260921-052942-3e61cb
- Generated: 2026-09-21T05:36:14.643Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 4, BLOCKED: 1, PASS: 1
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,000 MB | 1,005 MB | 1,006 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,000 MB | 1,005 MB | 1,006 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 201 % | 263 % | 270 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 26.5 ms | 27 ms | 27 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 933 MB | 937 MB | 937 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 211 % | 223 % | 225 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,433 ms | 4,569 ms | 4,584 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,482 ms | 3,673 ms | 3,694 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,472 ms | 4,625 ms | 4,642 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,226 ms | 4,296 ms | 4,303 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,209 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":231.7,"upper":269.9} | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.maxCpuPercent | {"lower":231.7,"upper":320.1} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | statusMs | 61,527 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | statusMs | 61,551 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | statusMs | 61,661 | <= 10000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 90a39a0547e833231a1419aa52716327a86bf777
- Workflow ref: main
- Workflow SHA: 90a39a0547e833231a1419aa52716327a86bf777
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

The complete Kova bundle remains in [Actions artifact 10624395276](https://github.com/openclaw/openclaw/actions/runs/35564448949/artifacts/10624395276); its checksum is published under the bundles directory.
