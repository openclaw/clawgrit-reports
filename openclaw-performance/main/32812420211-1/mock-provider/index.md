# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260825-052105-48c248
- Generated: 2026-08-25T05:24:38.181Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 586 MB | 593 MB | 594 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 586 MB | 593 MB | 594 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 120 % | 122 % | 122 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 64.6 ms | 67.2 ms | 67.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 481 MB | 493 MB | 495 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 126 % | 127 % | 127 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,358 ms | 2,420 ms | 2,426 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,372 ms | 2,440 ms | 2,448 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,016 ms | 2,090 ms | 2,098 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,220 ms | 2,285 ms | 2,292 ms |

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
- Tested SHA: e9017714c2d64cb564b467648d8a5c36dd191bff
- Workflow ref: main
- Workflow SHA: e9017714c2d64cb564b467648d8a5c36dd191bff
- Kova repository: openclaw/Kova
- Kova ref: dfafaff9dcd49b9c76788c6260f1f72dd2ced593
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9550348456](https://github.com/openclaw/openclaw/actions/runs/32812420211/artifacts/9550348456); its checksum is published under the bundles directory.
