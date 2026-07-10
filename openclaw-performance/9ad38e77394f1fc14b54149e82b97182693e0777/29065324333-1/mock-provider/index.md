# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-10T024546Z
- Generated: 2026-07-10T02:53:17.646Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 6,786 ms | 6,842 ms | 6,848 ms |
| fresh-install | fresh | TCP Listening | 6,528 ms | 6,765 ms | 6,791 ms |
| fresh-install | fresh | Health p95 | 27 ms | 40.5 ms | 42 ms |
| fresh-install | fresh | Primary RSS | 821 MB | 881 MB | 887 MB |
| fresh-install | fresh | Gateway RSS | 821 MB | 881 MB | 887 MB |
| fresh-install | fresh | Max CPU | 67 % | 121 % | 127 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 9.4 ms | 10.5 ms |
| fresh-install | onboarded-user | Health Ready | 6,791 ms | 7,421 ms | 7,491 ms |
| fresh-install | onboarded-user | TCP Listening | 6,787 ms | 7,238 ms | 7,288 ms |
| fresh-install | onboarded-user | Health p95 | 41 ms | 82.4 ms | 87 ms |
| fresh-install | onboarded-user | Primary RSS | 887 MB | 888 MB | 889 MB |
| fresh-install | onboarded-user | Gateway RSS | 887 MB | 888 MB | 889 MB |
| fresh-install | onboarded-user | Max CPU | 60.9 % | 96.1 % | 100 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 8.2 ms | 9.1 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 6,434 ms | 7,033 ms | 7,100 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 6,270 ms | 6,944 ms | 7,019 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 30 ms | 49.8 ms | 52 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 867 MB | 883 MB | 885 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 867 MB | 883 MB | 885 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 62.2 % | 96.2 % | 100 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Health Ready | 5,914 ms | 6,952 ms | 7,067 ms |
| bundled-plugin-startup | fresh | TCP Listening | 5,768 ms | 6,896 ms | 7,021 ms |
| bundled-plugin-startup | fresh | Health p95 | 18 ms | 18.9 ms | 19 ms |
| bundled-plugin-startup | fresh | Primary RSS | 893 MB | 906 MB | 907 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 893 MB | 906 MB | 907 MB |
| bundled-plugin-startup | fresh | Max CPU | 65.2 % | 65.7 % | 65.7 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 769 MB | 782 MB | 783 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 141 % | 142 % | 142 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,496 ms | 2,507 ms | 2,509 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,497 ms | 2,510 ms | 2,511 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,461 ms | 2,475 ms | 2,476 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,395 ms | 2,412 ms | 2,413 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 6,523 ms | 7,329 ms | 7,419 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 6,521 ms | 7,194 ms | 7,269 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 31 ms | 33.7 ms | 34 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 827 MB | 833 MB | 834 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 827 MB | 833 MB | 834 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 85.7 % | 98.6 % | 100 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 8.2 ms | 9.1 ms |

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
- Tested ref: 9ad38e77394f1fc14b54149e82b97182693e0777
- Tested SHA: 9ad38e77394f1fc14b54149e82b97182693e0777
- Workflow ref: release-ci/9ad38e77394f-1783651320
- Workflow SHA: 9ad38e77394f1fc14b54149e82b97182693e0777
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
