# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260922-052733-cd3152
- Generated: 2026-09-22T05:35:26.117Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,042 MB | 1,045 MB | 1,046 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,042 MB | 1,045 MB | 1,046 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 196 % | 200 % | 201 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 23.6 ms | 24.4 ms | 24.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 837 MB | 869 MB | 873 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 251 % | 254 % | 254 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,380 ms | 6,716 ms | 6,753 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,021 ms | 5,575 ms | 5,637 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,451 ms | 6,776 ms | 6,812 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,106 ms | 6,487 ms | 6,530 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,215 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,210 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,212 | <= 1200 |
| agent-cold-warm-message | mock-openai-provider | statusMs | 61,861 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | statusMs | 62,363 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | statusMs | 62,020 | <= 10000 |

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
- Tested SHA: b7f812464c4509191e201249237e52069e5b35bb
- Workflow ref: main
- Workflow SHA: b7f812464c4509191e201249237e52069e5b35bb
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

The complete Kova bundle remains in [Actions artifact 10679000106](https://github.com/openclaw/openclaw/actions/runs/35690492922/artifacts/10679000106); its checksum is published under the bundles directory.
