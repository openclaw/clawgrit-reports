# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260805-060720-4de546
- Generated: 2026-08-05T06:09:28.576Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 965 MB | 978 MB | 980 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 965 MB | 978 MB | 980 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 162 % | 162 % | 162 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 16.3 ms | 16.7 ms | 16.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 879 MB | 885 MB | 886 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 154 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,350 ms | 3,423 ms | 3,431 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,363 ms | 3,434 ms | 3,442 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,150 ms | 3,208 ms | 3,214 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,223 ms | 3,293 ms | 3,301 ms |

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
- Tested SHA: 046a6881bb4c86f6e79af355dc7fe426965e6178
- Workflow ref: main
- Workflow SHA: 046a6881bb4c86f6e79af355dc7fe426965e6178
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

The complete Kova bundle remains in [Actions artifact 8919896863](https://github.com/openclaw/openclaw/actions/runs/30980224394/artifacts/8919896863); its checksum is published under the bundles directory.
