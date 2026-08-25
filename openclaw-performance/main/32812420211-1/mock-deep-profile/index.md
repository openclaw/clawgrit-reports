# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260825-052102-b23f04
- Generated: 2026-08-25T05:23:28.401Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 595 MB | 595 MB | 595 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 595 MB | 595 MB | 595 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 122 % | 122 % | 122 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 60.7 ms | 60.7 ms | 60.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 673 MB | 673 MB | 673 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 138 % | 138 % | 138 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,254 ms | 5,254 ms | 5,254 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,270 ms | 5,270 ms | 5,270 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,944 ms | 4,944 ms | 4,944 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,325 ms | 4,325 ms | 4,325 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
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
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9550324052](https://github.com/openclaw/openclaw/actions/runs/32812420211/artifacts/9550324052); its checksum is published under the bundles directory.
