# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-10T044037Z
- Generated: 2026-07-10T04:48:23.284Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 9,917 ms | 10,111 ms | 10,132 ms |
| fresh-install | fresh | TCP Listening | 9,784 ms | 10,032 ms | 10,059 ms |
| fresh-install | fresh | Health p95 | 31 ms | 32.8 ms | 33 ms |
| fresh-install | fresh | Primary RSS | 874 MB | 879 MB | 879 MB |
| fresh-install | fresh | Gateway RSS | 874 MB | 879 MB | 879 MB |
| fresh-install | fresh | Max CPU | 51.1 % | 114 % | 121 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Health Ready | 8,414 ms | 10,571 ms | 10,811 ms |
| fresh-install | onboarded-user | TCP Listening | 8,272 ms | 10,536 ms | 10,788 ms |
| fresh-install | onboarded-user | Health p95 | 36 ms | 44.1 ms | 45 ms |
| fresh-install | onboarded-user | Primary RSS | 852 MB | 880 MB | 884 MB |
| fresh-install | onboarded-user | Gateway RSS | 852 MB | 880 MB | 884 MB |
| fresh-install | onboarded-user | Max CPU | 50.2 % | 54.5 % | 55 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 8,804 ms | 9,591 ms | 9,678 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 8,785 ms | 9,457 ms | 9,532 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 27 ms | 30.6 ms | 31 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 815 MB | 855 MB | 860 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 815 MB | 855 MB | 860 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 46.1 % | 64.6 % | 66.6 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 22.6 ms | 25.1 ms |
| bundled-plugin-startup | fresh | Health Ready | 8,035 ms | 8,543 ms | 8,599 ms |
| bundled-plugin-startup | fresh | TCP Listening | 8,023 ms | 8,477 ms | 8,527 ms |
| bundled-plugin-startup | fresh | Health p95 | 30 ms | 30.9 ms | 31 ms |
| bundled-plugin-startup | fresh | Primary RSS | 853 MB | 893 MB | 897 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 853 MB | 893 MB | 897 MB |
| bundled-plugin-startup | fresh | Max CPU | 52.8 % | 60 % | 60.8 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 704 MB | 731 MB | 734 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 141 % | 142 % | 142 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,956 ms | 3,089 ms | 3,104 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,879 ms | 3,105 ms | 3,130 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,615 ms | 2,926 ms | 2,960 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,855 ms | 2,905 ms | 2,911 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 7,538 ms | 7,792 ms | 7,820 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 7,519 ms | 7,751 ms | 7,777 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 25 ms | 30.4 ms | 31 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 885 MB | 906 MB | 908 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 885 MB | 906 MB | 908 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 100 % | 100 % | 100 % |
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
- Tested ref: 811ddd96180583bae00001f71971419182ae0520
- Tested SHA: 811ddd96180583bae00001f71971419182ae0520
- Workflow ref: main
- Workflow SHA: d7d210f7e0b990478f290be49b0fb27d622d422e
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
