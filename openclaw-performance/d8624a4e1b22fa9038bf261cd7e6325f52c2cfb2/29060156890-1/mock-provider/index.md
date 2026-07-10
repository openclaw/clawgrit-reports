# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-10T003201Z
- Generated: 2026-07-10T00:39:10.997Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 7,892 ms | 9,899 ms | 10,122 ms |
| fresh-install | fresh | TCP Listening | 7,776 ms | 9,824 ms | 10,051 ms |
| fresh-install | fresh | Health p95 | 32 ms | 41 ms | 42 ms |
| fresh-install | fresh | Primary RSS | 891 MB | 951 MB | 958 MB |
| fresh-install | fresh | Gateway RSS | 891 MB | 951 MB | 958 MB |
| fresh-install | fresh | Max CPU | 50 % | 108 % | 114 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Health Ready | 7,810 ms | 9,439 ms | 9,620 ms |
| fresh-install | onboarded-user | TCP Listening | 7,768 ms | 9,347 ms | 9,522 ms |
| fresh-install | onboarded-user | Health p95 | 50 ms | 67.1 ms | 69 ms |
| fresh-install | onboarded-user | Primary RSS | 845 MB | 854 MB | 855 MB |
| fresh-install | onboarded-user | Gateway RSS | 845 MB | 854 MB | 855 MB |
| fresh-install | onboarded-user | Max CPU | 57.9 % | 95.8 % | 100 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 6,838 ms | 7,024 ms | 7,045 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 6,771 ms | 6,997 ms | 7,022 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 31 ms | 40.9 ms | 42 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 816 MB | 824 MB | 825 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 816 MB | 824 MB | 825 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 59.3 % | 118 % | 125 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Health Ready | 7,106 ms | 7,942 ms | 8,035 ms |
| bundled-plugin-startup | fresh | TCP Listening | 7,039 ms | 7,933 ms | 8,032 ms |
| bundled-plugin-startup | fresh | Health p95 | 18 ms | 51.3 ms | 55 ms |
| bundled-plugin-startup | fresh | Primary RSS | 844 MB | 844 MB | 844 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 844 MB | 844 MB | 844 MB |
| bundled-plugin-startup | fresh | Max CPU | 64.3 % | 73.8 % | 74.9 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 727 MB | 729 MB | 730 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 142 % | 144 % | 144 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,678 ms | 2,801 ms | 2,815 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,603 ms | 2,800 ms | 2,822 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,681 ms | 2,682 ms | 2,682 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,577 ms | 2,689 ms | 2,701 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 7,111 ms | 7,492 ms | 7,534 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 7,020 ms | 7,471 ms | 7,521 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 28 ms | 29.8 ms | 30 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 810 MB | 825 MB | 826 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 810 MB | 825 MB | 826 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 112 % | 112 % | 112 % |
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
- Tested ref: d8624a4e1b22fa9038bf261cd7e6325f52c2cfb2
- Tested SHA: d8624a4e1b22fa9038bf261cd7e6325f52c2cfb2
- Workflow ref: release-ci/d8624a4e1b22-1783643303
- Workflow SHA: d8624a4e1b22fa9038bf261cd7e6325f52c2cfb2
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
