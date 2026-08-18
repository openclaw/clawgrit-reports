# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260818-052001-256f20
- Generated: 2026-08-18T05:23:06.538Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,253 MB | 1,253 MB | 1,253 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,253 MB | 1,253 MB | 1,253 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 164 % | 165 % | 165 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 12.3 ms | 13.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 945 MB | 959 MB | 960 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 161 % | 163 % | 163 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,158 ms | 4,519 ms | 4,559 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,174 ms | 4,556 ms | 4,598 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,819 ms | 3,842 ms | 3,844 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,981 ms | 4,339 ms | 4,379 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,253 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,253 | <= 1200 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,253 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,253 | <= 1200 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,248 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,248 | <= 1200 |

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
- Tested SHA: 2eec0470652d6d6a559c355a9c517d45f0c066ae
- Workflow ref: main
- Workflow SHA: 2eec0470652d6d6a559c355a9c517d45f0c066ae
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9312085657](https://github.com/openclaw/openclaw/actions/runs/32102422776/artifacts/9312085657); its checksum is published under the bundles directory.
