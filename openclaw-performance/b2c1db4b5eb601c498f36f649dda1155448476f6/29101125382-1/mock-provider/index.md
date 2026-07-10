# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-10T144746Z
- Generated: 2026-07-10T14:55:29.626Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 6,056 ms | 6,088 ms | 6,091 ms |
| fresh-install | fresh | TCP Listening | 6,031 ms | 6,047 ms | 6,049 ms |
| fresh-install | fresh | Health p95 | 33 ms | 65.4 ms | 69 ms |
| fresh-install | fresh | Primary RSS | 844 MB | 860 MB | 862 MB |
| fresh-install | fresh | Gateway RSS | 844 MB | 860 MB | 862 MB |
| fresh-install | fresh | Max CPU | 100 % | 125 % | 128 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 8.5 ms | 9.5 ms |
| fresh-install | onboarded-user | Health Ready | 6,267 ms | 6,886 ms | 6,955 ms |
| fresh-install | onboarded-user | TCP Listening | 6,029 ms | 6,704 ms | 6,779 ms |
| fresh-install | onboarded-user | Health p95 | 56 ms | 60.5 ms | 61 ms |
| fresh-install | onboarded-user | Primary RSS | 869 MB | 876 MB | 876 MB |
| fresh-install | onboarded-user | Gateway RSS | 869 MB | 876 MB | 876 MB |
| fresh-install | onboarded-user | Max CPU | 100 % | 100 % | 100 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 5,834 ms | 5,857 ms | 5,859 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 5,770 ms | 5,780 ms | 5,781 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 36 ms | 41.4 ms | 42 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 882 MB | 936 MB | 942 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 882 MB | 936 MB | 942 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 71.8 % | 72.4 % | 72.5 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 8.4 ms | 9.3 ms |
| bundled-plugin-startup | fresh | Health Ready | 6,393 ms | 6,572 ms | 6,592 ms |
| bundled-plugin-startup | fresh | TCP Listening | 6,288 ms | 6,499 ms | 6,522 ms |
| bundled-plugin-startup | fresh | Health p95 | 18 ms | 32.4 ms | 34 ms |
| bundled-plugin-startup | fresh | Primary RSS | 871 MB | 874 MB | 874 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 871 MB | 874 MB | 874 MB |
| bundled-plugin-startup | fresh | Max CPU | 68.2 % | 96.8 % | 100 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 803 MB | 804 MB | 805 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 144 % | 146 % | 146 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,396 ms | 3,474 ms | 3,483 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,400 ms | 3,475 ms | 3,483 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,324 ms | 3,461 ms | 3,476 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,268 ms | 3,333 ms | 3,340 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 7,287 ms | 7,307 ms | 7,309 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 7,284 ms | 7,285 ms | 7,285 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 81 ms | 280 ms | 302 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 884 MB | 903 MB | 905 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 884 MB | 903 MB | 905 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 117 % | 127 % | 128 % |
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
- Tested ref: b2c1db4b5eb601c498f36f649dda1155448476f6
- Tested SHA: b2c1db4b5eb601c498f36f649dda1155448476f6
- Workflow ref: release-ci/b2c1db4b5eb6-1783694790076
- Workflow SHA: b2c1db4b5eb601c498f36f649dda1155448476f6
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
