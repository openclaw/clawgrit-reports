# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-10T021047Z
- Generated: 2026-07-10T02:19:28.144Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 7,943 ms | 9,618 ms | 9,804 ms |
| fresh-install | fresh | TCP Listening | 7,812 ms | 9,392 ms | 9,567 ms |
| fresh-install | fresh | Health p95 | 6 ms | 32.1 ms | 35 ms |
| fresh-install | fresh | Primary RSS | 863 MB | 877 MB | 879 MB |
| fresh-install | fresh | Gateway RSS | 863 MB | 877 MB | 879 MB |
| fresh-install | fresh | Max CPU | 64.6 % | 122 % | 128 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Health Ready | 8,403 ms | 8,887 ms | 8,941 ms |
| fresh-install | onboarded-user | TCP Listening | 8,311 ms | 8,753 ms | 8,802 ms |
| fresh-install | onboarded-user | Health p95 | 91 ms | 99.1 ms | 100 ms |
| fresh-install | onboarded-user | Primary RSS | 886 MB | 893 MB | 894 MB |
| fresh-install | onboarded-user | Gateway RSS | 886 MB | 893 MB | 894 MB |
| fresh-install | onboarded-user | Max CPU | 61.9 % | 96.2 % | 100 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 9,052 ms | 9,804 ms | 9,888 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 9,048 ms | 9,734 ms | 9,810 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 160 ms | 234 ms | 242 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 864 MB | 892 MB | 895 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 864 MB | 892 MB | 895 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 100 % | 100 % | 100 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Health Ready | 8,763 ms | 10,982 ms | 11,229 ms |
| bundled-plugin-startup | fresh | TCP Listening | 8,552 ms | 10,814 ms | 11,065 ms |
| bundled-plugin-startup | fresh | Health p95 | 23 ms | 34.7 ms | 36 ms |
| bundled-plugin-startup | fresh | Primary RSS | 818 MB | 871 MB | 877 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 818 MB | 871 MB | 877 MB |
| bundled-plugin-startup | fresh | Max CPU | 64.1 % | 111 % | 116 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 715 MB | 722 MB | 723 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 148 % | 149 % | 149 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,136 ms | 3,353 ms | 3,377 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,142 ms | 3,365 ms | 3,390 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,041 ms | 3,118 ms | 3,126 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,986 ms | 3,212 ms | 3,237 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 8,762 ms | 9,877 ms | 10,001 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 8,544 ms | 9,678 ms | 9,804 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 101 ms | 123 ms | 125 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 876 MB | 983 MB | 994 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 876 MB | 983 MB | 994 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 114 % | 128 % | 130 % |
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
- Tested ref: cfb55e29ca68cb08f97f5513f04c2865a915ac56
- Tested SHA: cfb55e29ca68cb08f97f5513f04c2865a915ac56
- Workflow ref: main
- Workflow SHA: cab8040b1436613da1b24306b5cba3033bddd648
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
