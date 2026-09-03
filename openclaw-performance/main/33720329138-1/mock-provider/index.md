# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260903-054900-71f283
- Generated: 2026-09-03T05:51:45.327Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 595 MB | 604 MB | 605 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 595 MB | 604 MB | 605 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 138 % | 142 % | 142 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 392 MB | 508 MB | 521 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 142 % | 144 % | 144 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,016 ms | 2,117 ms | 2,128 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,020 ms | 2,126 ms | 2,138 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 1,935 ms | 1,940 ms | 1,940 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 1,860 ms | 1,950 ms | 1,960 ms |

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
- Tested SHA: a828190b2953483a4a181ff5d23c283e92713d47
- Workflow ref: main
- Workflow SHA: a828190b2953483a4a181ff5d23c283e92713d47
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

The complete Kova bundle remains in [Actions artifact 9880094904](https://github.com/openclaw/openclaw/actions/runs/33720329138/artifacts/9880094904); its checksum is published under the bundles directory.
