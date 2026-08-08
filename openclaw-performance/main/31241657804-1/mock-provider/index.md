# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260808-052631-726bfb
- Generated: 2026-08-08T05:28:35.824Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 966 MB | 967 MB | 967 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 966 MB | 967 MB | 967 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 161 % | 161 % | 161 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 912 MB | 916 MB | 917 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 153 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,349 ms | 3,362 ms | 3,363 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,361 ms | 3,372 ms | 3,373 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,175 ms | 3,196 ms | 3,198 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,230 ms | 3,239 ms | 3,240 ms |

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
- Tested SHA: 733512b612e5fcfa96ca0764ac1851990406f187
- Workflow ref: main
- Workflow SHA: 733512b612e5fcfa96ca0764ac1851990406f187
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

The complete Kova bundle remains in [Actions artifact 9017242966](https://github.com/openclaw/openclaw/actions/runs/31241657804/artifacts/9017242966); its checksum is published under the bundles directory.
