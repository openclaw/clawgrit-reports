# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260803-061908-68d390
- Generated: 2026-08-03T06:21:35.673Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 970 MB | 970 MB | 970 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 970 MB | 970 MB | 970 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 156 % | 156 % | 156 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 20.6 ms | 27.1 ms | 27.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 845 MB | 856 MB | 857 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 154 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,894 ms | 3,945 ms | 3,951 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,717 ms | 3,880 ms | 3,898 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,821 ms | 3,954 ms | 3,969 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,734 ms | 3,808 ms | 3,817 ms |

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
- Tested SHA: f5facf8cbfe5c0fcf3a83a2bc9b91424dac34c22
- Workflow ref: main
- Workflow SHA: f5facf8cbfe5c0fcf3a83a2bc9b91424dac34c22
- Kova repository: openclaw/Kova
- Kova ref: 283070760a16655b28835061774158b8b11b4aff
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8846640819](https://github.com/openclaw/openclaw/actions/runs/30789752722/artifacts/8846640819); its checksum is published under the bundles directory.
