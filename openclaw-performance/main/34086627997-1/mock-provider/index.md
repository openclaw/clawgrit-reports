# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260907-052519-5e9bfd
- Generated: 2026-09-07T05:27:57.855Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 609 MB | 610 MB | 610 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 609 MB | 610 MB | 610 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 134 % | 142 % | 143 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.4 ms | 10.6 ms | 10.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 431 MB | 536 MB | 548 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 140 % | 144 % | 144 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 1,923 ms | 2,327 ms | 2,372 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 1,928 ms | 2,347 ms | 2,394 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 1,834 ms | 1,944 ms | 1,956 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 1,828 ms | 2,186 ms | 2,226 ms |

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
- Tested SHA: d4ac1bcb9a94584f4763555412ab77db15f307dd
- Workflow ref: main
- Workflow SHA: d4ac1bcb9a94584f4763555412ab77db15f307dd
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

The complete Kova bundle remains in [Actions artifact 10005506811](https://github.com/openclaw/openclaw/actions/runs/34086627997/artifacts/10005506811); its checksum is published under the bundles directory.
