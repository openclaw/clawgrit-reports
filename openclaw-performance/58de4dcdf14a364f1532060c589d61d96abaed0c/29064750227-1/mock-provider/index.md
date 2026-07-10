# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-10T022953Z
- Generated: 2026-07-10T02:37:39.415Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 8,580 ms | 9,131 ms | 9,192 ms |
| fresh-install | fresh | TCP Listening | 8,573 ms | 9,023 ms | 9,073 ms |
| fresh-install | fresh | Health p95 | 40 ms | 40 ms | 40 ms |
| fresh-install | fresh | Primary RSS | 840 MB | 881 MB | 886 MB |
| fresh-install | fresh | Gateway RSS | 840 MB | 881 MB | 886 MB |
| fresh-install | fresh | Max CPU | 120 % | 125 % | 126 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Health Ready | 7,736 ms | 7,850 ms | 7,863 ms |
| fresh-install | onboarded-user | TCP Listening | 7,551 ms | 7,772 ms | 7,796 ms |
| fresh-install | onboarded-user | Health p95 | 92 ms | 102 ms | 103 ms |
| fresh-install | onboarded-user | Primary RSS | 871 MB | 896 MB | 899 MB |
| fresh-install | onboarded-user | Gateway RSS | 871 MB | 896 MB | 899 MB |
| fresh-install | onboarded-user | Max CPU | 80 % | 98 % | 100 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 7,370 ms | 8,433 ms | 8,551 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 7,287 ms | 8,422 ms | 8,548 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 106 ms | 159 ms | 165 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 858 MB | 875 MB | 877 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 858 MB | 875 MB | 877 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 65.3 % | 96.5 % | 100 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Health Ready | 7,809 ms | 8,586 ms | 8,672 ms |
| bundled-plugin-startup | fresh | TCP Listening | 7,782 ms | 8,469 ms | 8,545 ms |
| bundled-plugin-startup | fresh | Health p95 | 37 ms | 45.1 ms | 46 ms |
| bundled-plugin-startup | fresh | Primary RSS | 874 MB | 876 MB | 877 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 874 MB | 876 MB | 877 MB |
| bundled-plugin-startup | fresh | Max CPU | 53.3 % | 54.5 % | 54.6 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 727 MB | 778 MB | 784 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 143 % | 143 % | 143 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,867 ms | 3,140 ms | 3,170 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,713 ms | 2,867 ms | 2,884 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,705 ms | 3,145 ms | 3,194 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,764 ms | 3,010 ms | 3,038 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 8,433 ms | 8,645 ms | 8,669 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 8,294 ms | 8,518 ms | 8,543 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 46 ms | 51.4 ms | 52 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 867 MB | 880 MB | 881 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 867 MB | 880 MB | 881 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 100 % | 107 % | 108 % |
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
- Tested ref: 58de4dcdf14a364f1532060c589d61d96abaed0c
- Tested SHA: 58de4dcdf14a364f1532060c589d61d96abaed0c
- Workflow ref: main
- Workflow SHA: ee1450d61978f7e3c48cff89d83ea9e4d6000daf
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
