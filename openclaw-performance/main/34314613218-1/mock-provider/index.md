# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260909-052400-37aaef
- Generated: 2026-09-09T05:26:51.300Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 5, FAIL: 1
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 616 MB | 619 MB | 619 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 616 MB | 619 MB | 619 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 138 % | 323 % | 343 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.2 ms | 10.3 ms | 10.3 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 541 MB | 559 MB | 562 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 154 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,144 ms | 2,258 ms | 2,271 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 1,964 ms | 2,167 ms | 2,189 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,153 ms | 2,263 ms | 2,275 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,049 ms | 2,163 ms | 2,176 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | 343 | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.maxCpuPercent | 343 | <= 300 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: d9216e894e89cec406d42607c175aeecf4a13ee9
- Workflow ref: main
- Workflow SHA: d9216e894e89cec406d42607c175aeecf4a13ee9
- Kova repository: openclaw/Kova
- Kova ref: 3da9582e9c3eef970ef102dc3950595e0876a1d5
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10089697737](https://github.com/openclaw/openclaw/actions/runs/34314613218/artifacts/10089697737); its checksum is published under the bundles directory.
