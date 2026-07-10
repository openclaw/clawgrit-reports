# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-10T024221Z
- Generated: 2026-07-10T02:50:05.715Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 10,124 ms | 10,852 ms | 10,933 ms |
| fresh-install | fresh | TCP Listening | 10,062 ms | 10,749 ms | 10,825 ms |
| fresh-install | fresh | Health p95 | 31 ms | 40 ms | 41 ms |
| fresh-install | fresh | Primary RSS | 868 MB | 889 MB | 891 MB |
| fresh-install | fresh | Gateway RSS | 868 MB | 889 MB | 891 MB |
| fresh-install | fresh | Max CPU | 100 % | 119 % | 121 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Health Ready | 8,222 ms | 8,704 ms | 8,758 ms |
| fresh-install | onboarded-user | TCP Listening | 8,041 ms | 8,494 ms | 8,544 ms |
| fresh-install | onboarded-user | Health p95 | 63 ms | 82.8 ms | 85 ms |
| fresh-install | onboarded-user | Primary RSS | 846 MB | 879 MB | 882 MB |
| fresh-install | onboarded-user | Gateway RSS | 846 MB | 879 MB | 882 MB |
| fresh-install | onboarded-user | Max CPU | 100 % | 100 % | 100 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 7,319 ms | 8,944 ms | 9,124 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 7,282 ms | 8,865 ms | 9,041 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 28 ms | 41.5 ms | 43 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 869 MB | 880 MB | 881 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 869 MB | 880 MB | 881 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 57.3 % | 58 % | 58.1 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Health Ready | 7,661 ms | 8,109 ms | 8,159 ms |
| bundled-plugin-startup | fresh | TCP Listening | 7,533 ms | 7,978 ms | 8,027 ms |
| bundled-plugin-startup | fresh | Health p95 | 24 ms | 24.9 ms | 25 ms |
| bundled-plugin-startup | fresh | Primary RSS | 835 MB | 878 MB | 883 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 835 MB | 878 MB | 883 MB |
| bundled-plugin-startup | fresh | Max CPU | 62.8 % | 126 % | 133 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 15.5 ms | 17.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 727 MB | 731 MB | 732 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 139 % | 139 % | 139 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,622 ms | 2,648 ms | 2,651 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,626 ms | 2,651 ms | 2,654 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,593 ms | 2,600 ms | 2,601 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,521 ms | 2,541 ms | 2,544 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 7,966 ms | 8,256 ms | 8,288 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 7,783 ms | 8,236 ms | 8,286 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 32 ms | 33.8 ms | 34 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 869 MB | 874 MB | 875 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 869 MB | 874 MB | 875 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 100 % | 109 % | 110 % |
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
- Tested ref: 43dcadb532d256797104a2493af4354bdedc2c2d
- Tested SHA: 43dcadb532d256797104a2493af4354bdedc2c2d
- Workflow ref: main
- Workflow SHA: 7fd426e450a54c34e22d2db82e28244e5f13c2e1
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
