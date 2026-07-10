# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-10T000725Z
- Generated: 2026-07-10T00:15:05.799Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 7,227 ms | 8,554 ms | 8,701 ms |
| fresh-install | fresh | TCP Listening | 7,053 ms | 8,445 ms | 8,600 ms |
| fresh-install | fresh | Health p95 | 38 ms | 53.3 ms | 55 ms |
| fresh-install | fresh | Primary RSS | 863 MB | 871 MB | 872 MB |
| fresh-install | fresh | Gateway RSS | 863 MB | 871 MB | 872 MB |
| fresh-install | fresh | Max CPU | 83.4 % | 117 % | 121 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Health Ready | 6,366 ms | 7,352 ms | 7,461 ms |
| fresh-install | onboarded-user | TCP Listening | 6,282 ms | 7,204 ms | 7,306 ms |
| fresh-install | onboarded-user | Health p95 | 111 ms | 145 ms | 149 ms |
| fresh-install | onboarded-user | Primary RSS | 844 MB | 856 MB | 857 MB |
| fresh-install | onboarded-user | Gateway RSS | 844 MB | 856 MB | 857 MB |
| fresh-install | onboarded-user | Max CPU | 74.2 % | 97.4 % | 100 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 6,198 ms | 7,244 ms | 7,360 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 6,045 ms | 7,167 ms | 7,292 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 82 ms | 131 ms | 136 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 863 MB | 876 MB | 877 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 863 MB | 876 MB | 877 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 68.7 % | 96.9 % | 100 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Health Ready | 6,170 ms | 6,271 ms | 6,282 ms |
| bundled-plugin-startup | fresh | TCP Listening | 6,026 ms | 6,254 ms | 6,279 ms |
| bundled-plugin-startup | fresh | Health p95 | 31 ms | 35.5 ms | 36 ms |
| bundled-plugin-startup | fresh | Primary RSS | 840 MB | 907 MB | 914 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 840 MB | 907 MB | 914 MB |
| bundled-plugin-startup | fresh | Max CPU | 83.3 % | 98.3 % | 100 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 715 MB | 717 MB | 717 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 144 % | 145 % | 145 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,997 ms | 3,001 ms | 3,002 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,006 ms | 3,015 ms | 3,016 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,779 ms | 2,813 ms | 2,817 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,880 ms | 2,882 ms | 2,882 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 6,880 ms | 7,157 ms | 7,188 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 6,806 ms | 7,017 ms | 7,040 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 77 ms | 90.5 ms | 92 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 865 MB | 895 MB | 899 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 865 MB | 895 MB | 899 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 122 % | 138 % | 140 % |
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
- Tested ref: 28ec7e0ff8654f327b650dbde9f94c36cde480ff
- Tested SHA: 28ec7e0ff8654f327b650dbde9f94c36cde480ff
- Workflow ref: codex/perf-baseline-publisher-v2
- Workflow SHA: 28ec7e0ff8654f327b650dbde9f94c36cde480ff
- Kova repository: openclaw/Kova
- Kova ref: a18f4c018151f5885d980804d863643bc78933b3
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.5
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).
