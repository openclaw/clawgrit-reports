# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260923-052522-274c02
- Generated: 2026-09-23T05:29:42.536Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 4, PASS: 2
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,135 MB | 1,135 MB | 1,136 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,135 MB | 1,135 MB | 1,136 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 203 % | 203 % | 203 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 23.9 ms | 26.8 ms | 27.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 968 MB | 1,013 MB | 1,018 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 257 % | 271 % | 273 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,981 ms | 6,139 ms | 6,156 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,696 ms | 5,833 ms | 5,959 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,982 ms | 6,208 ms | 6,233 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,707 ms | 5,822 ms | 5,835 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,304 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,304 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,298 | <= 1200 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,018 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 5dd6d230ba802f260feb6d3ef346114392937b8b
- Workflow ref: main
- Workflow SHA: 5dd6d230ba802f260feb6d3ef346114392937b8b
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

The complete Kova bundle remains in [Actions artifact 10733054816](https://github.com/openclaw/openclaw/actions/runs/35822204249/artifacts/10733054816); its checksum is published under the bundles directory.
