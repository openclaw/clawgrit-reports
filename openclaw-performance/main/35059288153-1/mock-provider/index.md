# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260916-052509-c60f3c
- Generated: 2026-09-16T05:29:13.258Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 941 MB | 952 MB | 954 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 941 MB | 952 MB | 954 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 245 % | 249 % | 249 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 11.5 ms | 14.2 ms | 14.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 611 MB | 625 MB | 627 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 169 % | 171 % | 171 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,479 ms | 4,588 ms | 4,600 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,542 ms | 3,579 ms | 3,583 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,526 ms | 4,652 ms | 4,666 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,270 ms | 4,423 ms | 4,440 ms |

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
- Tested SHA: db1d5d2dccbc9acaffc6232401dcd4f77855d51a
- Workflow ref: main
- Workflow SHA: db1d5d2dccbc9acaffc6232401dcd4f77855d51a
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10431732411](https://github.com/openclaw/openclaw/actions/runs/35059288153/artifacts/10431732411); its checksum is published under the bundles directory.
