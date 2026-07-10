# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-09T234741Z
- Generated: 2026-07-09T23:54:33.056Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 6,091 ms | 6,155 ms | 6,162 ms |
| fresh-install | fresh | TCP Listening | 6,021 ms | 6,035 ms | 6,036 ms |
| fresh-install | fresh | Health p95 | 29 ms | 32.6 ms | 33 ms |
| fresh-install | fresh | Primary RSS | 827 MB | 852 MB | 855 MB |
| fresh-install | fresh | Gateway RSS | 827 MB | 852 MB | 855 MB |
| fresh-install | fresh | Max CPU | 100 % | 122 % | 124 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Health Ready | 5,816 ms | 6,085 ms | 6,115 ms |
| fresh-install | onboarded-user | TCP Listening | 5,772 ms | 6,002 ms | 6,027 ms |
| fresh-install | onboarded-user | Health p95 | 42 ms | 51 ms | 52 ms |
| fresh-install | onboarded-user | Primary RSS | 870 MB | 902 MB | 906 MB |
| fresh-install | onboarded-user | Gateway RSS | 870 MB | 902 MB | 906 MB |
| fresh-install | onboarded-user | Max CPU | 80 % | 86.8 % | 87.5 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 5,777 ms | 6,912 ms | 7,038 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 5,768 ms | 6,897 ms | 7,022 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 33 ms | 33.9 ms | 34 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 864 MB | 885 MB | 887 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 864 MB | 885 MB | 887 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 100 % | 100 % | 100 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Health Ready | 6,553 ms | 14,208 ms | 15,059 ms |
| bundled-plugin-startup | fresh | TCP Listening | 6,520 ms | 14,203 ms | 15,057 ms |
| bundled-plugin-startup | fresh | Health p95 | 20 ms | 29.9 ms | 31 ms |
| bundled-plugin-startup | fresh | Primary RSS | 841 MB | 849 MB | 849 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 841 MB | 849 MB | 849 MB |
| bundled-plugin-startup | fresh | Max CPU | 65.7 % | 96.6 % | 100 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 706 MB | 738 MB | 742 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 141 % | 142 % | 142 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,642 ms | 2,705 ms | 2,712 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,560 ms | 2,594 ms | 2,598 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,646 ms | 2,711 ms | 2,718 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,541 ms | 2,604 ms | 2,611 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 6,323 ms | 6,958 ms | 7,028 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 6,282 ms | 6,951 ms | 7,025 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 71 ms | 81.8 ms | 83 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 873 MB | 904 MB | 907 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 873 MB | 904 MB | 907 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 100 % | 123 % | 125 % |
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
- Tested ref: ddebb47f712dc046c0c13b3bd4088a6f47531370
- Tested SHA: ddebb47f712dc046c0c13b3bd4088a6f47531370
- Workflow ref: codex/perf-baseline-publisher-v2
- Workflow SHA: ddebb47f712dc046c0c13b3bd4088a6f47531370
- Kova repository: openclaw/Kova
- Kova ref: 36dda3731db1e62fc4a1c47c43257c15cb173c7f
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.5
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).
