# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-10T033158Z
- Generated: 2026-07-10T03:40:59.191Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 10,396 ms | 11,371 ms | 11,479 ms |
| fresh-install | fresh | TCP Listening | 10,114 ms | 10,995 ms | 11,093 ms |
| fresh-install | fresh | Health p95 | 64 ms | 726 ms | 799 ms |
| fresh-install | fresh | Primary RSS | 885 MB | 957 MB | 965 MB |
| fresh-install | fresh | Gateway RSS | 885 MB | 957 MB | 965 MB |
| fresh-install | fresh | Max CPU | 128 % | 129 % | 129 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Health Ready | 9,545 ms | 10,703 ms | 10,832 ms |
| fresh-install | onboarded-user | TCP Listening | 9,331 ms | 10,672 ms | 10,821 ms |
| fresh-install | onboarded-user | Health p95 | 126 ms | 374 ms | 401 ms |
| fresh-install | onboarded-user | Primary RSS | 852 MB | 872 MB | 874 MB |
| fresh-install | onboarded-user | Gateway RSS | 852 MB | 872 MB | 874 MB |
| fresh-install | onboarded-user | Max CPU | 52 % | 95.2 % | 100 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 9,048 ms | 9,271 ms | 9,296 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 9,039 ms | 9,268 ms | 9,293 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 89 ms | 198 ms | 210 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 830 MB | 859 MB | 862 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 830 MB | 859 MB | 862 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 111 % | 134 % | 136 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Health Ready | 8,372 ms | 8,627 ms | 8,655 ms |
| bundled-plugin-startup | fresh | TCP Listening | 8,296 ms | 8,512 ms | 8,536 ms |
| bundled-plugin-startup | fresh | Health p95 | 32 ms | 50 ms | 52 ms |
| bundled-plugin-startup | fresh | Primary RSS | 847 MB | 880 MB | 883 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 847 MB | 880 MB | 883 MB |
| bundled-plugin-startup | fresh | Max CPU | 54.9 % | 65.4 % | 66.6 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 728 MB | 736 MB | 737 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 141 % | 142 % | 142 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,601 ms | 2,603 ms | 2,603 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,539 ms | 2,585 ms | 2,590 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,602 ms | 2,606 ms | 2,606 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,500 ms | 2,504 ms | 2,505 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 8,416 ms | 8,755 ms | 8,793 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 8,282 ms | 8,740 ms | 8,791 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 42 ms | 86.1 ms | 91 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 859 MB | 880 MB | 883 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 859 MB | 880 MB | 883 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 100 % | 114 % | 116 % |
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
- Tested ref: 619a8728905f9d751e86b655efaa8c6129c42b52
- Tested SHA: 619a8728905f9d751e86b655efaa8c6129c42b52
- Workflow ref: main
- Workflow SHA: 6db586a388c639796e312811b4d9801ca6ce1806
- Kova repository: openclaw/Kova
- Kova ref: a2dd84e7d65507e614afaff850d3932d18c859b6
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.5
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).
