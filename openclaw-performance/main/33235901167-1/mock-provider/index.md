# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260829-052035-1f6b49
- Generated: 2026-08-29T05:23:23.140Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 572 MB | 584 MB | 585 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 572 MB | 584 MB | 585 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 133 % | 137 % | 137 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 419 MB | 433 MB | 434 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 124 % | 126 % | 126 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 1,791 ms | 1,809 ms | 1,811 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 1,799 ms | 1,817 ms | 1,819 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 1,642 ms | 1,659 ms | 1,661 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 1,657 ms | 1,673 ms | 1,675 ms |

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
- Tested SHA: 4ee2216cd76ba9cedcb8e62d81dd02e0b531ffb5
- Workflow ref: main
- Workflow SHA: 4ee2216cd76ba9cedcb8e62d81dd02e0b531ffb5
- Kova repository: openclaw/Kova
- Kova ref: 1fe2f4081877bb12b7f7ed355349f98b8a0a6882
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9709945692](https://github.com/openclaw/openclaw/actions/runs/33235901167/artifacts/9709945692); its checksum is published under the bundles directory.
