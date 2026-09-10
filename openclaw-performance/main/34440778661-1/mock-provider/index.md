# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260910-052335-463581
- Generated: 2026-09-10T05:26:26.058Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 626 MB | 627 MB | 627 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 626 MB | 627 MB | 627 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 164 % | 165 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.2 ms | 10.6 ms | 10.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 546 MB | 553 MB | 554 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 154 % | 155 % | 155 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,281 ms | 2,437 ms | 2,454 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,138 ms | 2,158 ms | 2,160 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,287 ms | 2,453 ms | 2,471 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,180 ms | 2,317 ms | 2,332 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: a26cbeb6350fdaae04455c6e28e9696066218b4b
- Workflow ref: main
- Workflow SHA: a26cbeb6350fdaae04455c6e28e9696066218b4b
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

The complete Kova bundle remains in [Actions artifact 10137940309](https://github.com/openclaw/openclaw/actions/runs/34440778661/artifacts/10137940309); its checksum is published under the bundles directory.
