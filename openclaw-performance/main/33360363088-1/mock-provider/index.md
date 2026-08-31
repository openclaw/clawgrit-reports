# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260831-052502-3b3cf6
- Generated: 2026-08-31T05:27:50.161Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 588 MB | 590 MB | 590 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 588 MB | 590 MB | 590 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 134 % | 138 % | 138 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 395 MB | 501 MB | 513 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 126 % | 129 % | 129 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 1,972 ms | 2,079 ms | 2,090 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 1,981 ms | 2,094 ms | 2,107 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 1,773 ms | 1,805 ms | 1,809 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 1,828 ms | 1,900 ms | 1,908 ms |

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
- Tested SHA: 0ee6e0575a90f8c3fce8cd54e173d6b31b0923ef
- Workflow ref: main
- Workflow SHA: 0ee6e0575a90f8c3fce8cd54e173d6b31b0923ef
- Kova repository: openclaw/Kova
- Kova ref: 81919463ef9620722373c813192c688573f2b533
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9746553575](https://github.com/openclaw/openclaw/actions/runs/33360363088/artifacts/9746553575); its checksum is published under the bundles directory.
