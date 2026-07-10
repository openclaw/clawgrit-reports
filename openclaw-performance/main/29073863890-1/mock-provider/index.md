# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-10T062844Z
- Generated: 2026-07-10T06:33:58.696Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 9
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Health Ready | 6,951 ms | 9,596 ms | 9,890 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 6,778 ms | 9,492 ms | 9,793 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 29 ms | 32.6 ms | 33 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 865 MB | 893 MB | 896 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 865 MB | 893 MB | 896 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 100 % | 131 % | 134 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 8.5 ms | 9.5 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 6,886 ms | 7,062 ms | 7,082 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 6,770 ms | 6,992 ms | 7,017 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 19 ms | 72.1 ms | 78 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 907 MB | 913 MB | 914 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 907 MB | 913 MB | 914 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 61.8 % | 63.9 % | 64.1 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 759 MB | 771 MB | 773 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 141 % | 143 % | 143 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,579 ms | 2,580 ms | 2,580 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,582 ms | 2,582 ms | 2,582 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,523 ms | 2,534 ms | 2,535 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,479 ms | 2,480 ms | 2,480 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 20bc552590b2e1f31b8dd8534446011661d009d2
- Workflow ref: main
- Workflow SHA: 20bc552590b2e1f31b8dd8534446011661d009d2
- Kova repository: openclaw/Kova
- Kova ref: a2dd84e7d65507e614afaff850d3932d18c859b6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.5
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).
