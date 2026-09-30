# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260930-052736-dd4614
- Generated: 2026-09-30T05:33:03.604Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,169 MB | 1,175 MB | 1,176 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,169 MB | 1,175 MB | 1,176 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 306 % | 328 % | 330 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 25.8 ms | 28.4 ms | 28.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 992 MB | 1,001 MB | 1,002 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 220 % | 238 % | 241 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,896 ms | 7,007 ms | 7,130 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,588 ms | 5,851 ms | 5,880 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,912 ms | 7,068 ms | 7,196 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,607 ms | 6,532 ms | 6,634 ms |

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
- Tested SHA: b5af519246c82e9c774f40d434066d86c184e3d3
- Workflow ref: main
- Workflow SHA: b5af519246c82e9c774f40d434066d86c184e3d3
- Kova repository: openclaw/Kova
- Kova ref: 4b8b1681446b868a44193ed6e97253a6c8bcbbbf
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11078658454](https://github.com/openclaw/openclaw/actions/runs/36673344868/artifacts/11078658454); its checksum is published under the bundles directory.
