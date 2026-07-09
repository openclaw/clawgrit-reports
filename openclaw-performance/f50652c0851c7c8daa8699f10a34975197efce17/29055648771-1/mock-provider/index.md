# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-09T225045Z
- Generated: 2026-07-09T22:57:37.453Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 7,159 ms | 7,292 ms | 7,307 ms |
| fresh-install | fresh | TCP Listening | 7,052 ms | 7,257 ms | 7,280 ms |
| fresh-install | fresh | Health p95 | 56 ms | 57.8 ms | 58 ms |
| fresh-install | fresh | Primary RSS | 869 MB | 873 MB | 873 MB |
| fresh-install | fresh | Gateway RSS | 869 MB | 873 MB | 873 MB |
| fresh-install | fresh | Max CPU | 100 % | 123 % | 125 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Health Ready | 5,843 ms | 6,039 ms | 6,061 ms |
| fresh-install | onboarded-user | TCP Listening | 5,770 ms | 6,008 ms | 6,034 ms |
| fresh-install | onboarded-user | Health p95 | 22 ms | 23.8 ms | 24 ms |
| fresh-install | onboarded-user | Primary RSS | 856 MB | 867 MB | 868 MB |
| fresh-install | onboarded-user | Gateway RSS | 856 MB | 867 MB | 868 MB |
| fresh-install | onboarded-user | Max CPU | 67.9 % | 69.7 % | 69.9 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 5,779 ms | 6,742 ms | 6,849 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 5,777 ms | 6,673 ms | 6,773 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 55 ms | 55.9 ms | 56 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 865 MB | 867 MB | 867 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 865 MB | 867 MB | 867 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 68.9 % | 69.3 % | 69.3 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Health Ready | 2,008 ms | 2,531 ms | 2,589 ms |
| bundled-plugin-startup | fresh | TCP Listening | 2,006 ms | 2,462 ms | 2,513 ms |
| bundled-plugin-startup | fresh | Health p95 | 8 ms | 32.3 ms | 35 ms |
| bundled-plugin-startup | fresh | Primary RSS | 639 MB | 759 MB | 772 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 639 MB | 759 MB | 772 MB |
| bundled-plugin-startup | fresh | Max CPU | 136 % | 142 % | 143 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 724 MB | 751 MB | 754 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 140 % | 141 % | 141 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,536 ms | 2,551 ms | 2,553 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,527 ms | 2,539 ms | 2,540 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,459 ms | 2,545 ms | 2,554 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,444 ms | 2,454 ms | 2,455 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 6,119 ms | 6,157 ms | 6,161 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 6,024 ms | 6,025 ms | 6,025 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 60 ms | 147 ms | 157 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 872 MB | 884 MB | 885 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 872 MB | 884 MB | 885 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 120 % | 136 % | 138 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: f50652c0851c7c8daa8699f10a34975197efce17
- Tested SHA: f50652c0851c7c8daa8699f10a34975197efce17
- Workflow ref: codex/perf-baseline-publisher-v2
- Workflow SHA: f50652c0851c7c8daa8699f10a34975197efce17
- Kova repository: openclaw/Kova
- Kova ref: 18845804182190e25d9a40901c0fc0e2211330dc
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.5
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).
