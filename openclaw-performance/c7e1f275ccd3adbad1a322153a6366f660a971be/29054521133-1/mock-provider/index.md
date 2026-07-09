# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-09T222727Z
- Generated: 2026-07-09T22:34:13.856Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 17, FAIL: 1
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 6,162 ms | 7,573 ms | 7,730 ms |
| fresh-install | fresh | TCP Listening | 5,777 ms | 7,375 ms | 7,553 ms |
| fresh-install | fresh | Health p95 | 35 ms | 36.8 ms | 37 ms |
| fresh-install | fresh | Primary RSS | 841 MB | 847 MB | 847 MB |
| fresh-install | fresh | Gateway RSS | 841 MB | 847 MB | 847 MB |
| fresh-install | fresh | Max CPU | 72.2 % | 116 % | 121 % |
| fresh-install | fresh | Event Loop Max | 9.5 ms | 17.3 ms | 18.1 ms |
| fresh-install | onboarded-user | Health Ready | 6,157 ms | 6,235 ms | 6,244 ms |
| fresh-install | onboarded-user | TCP Listening | 6,030 ms | 6,036 ms | 6,037 ms |
| fresh-install | onboarded-user | Health p95 | 43 ms | 50.2 ms | 51 ms |
| fresh-install | onboarded-user | Primary RSS | 817 MB | 845 MB | 848 MB |
| fresh-install | onboarded-user | Gateway RSS | 817 MB | 845 MB | 848 MB |
| fresh-install | onboarded-user | Max CPU | 70.7 % | 75.6 % | 76.1 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 5,921 ms | 6,244 ms | 6,280 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 5,776 ms | 6,228 ms | 6,278 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 45 ms | 64.8 ms | 67 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 883 MB | 893 MB | 894 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 883 MB | 893 MB | 894 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 68.3 % | 96.8 % | 100 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Health Ready | 1,475 ms | 2,396 ms | 2,498 ms |
| bundled-plugin-startup | fresh | TCP Listening | 1,256 ms | 2,164 ms | 2,265 ms |
| bundled-plugin-startup | fresh | Health p95 | 26 ms | 46.7 ms | 49 ms |
| bundled-plugin-startup | fresh | Primary RSS | 712 MB | 718 MB | 719 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 712 MB | 718 MB | 719 MB |
| bundled-plugin-startup | fresh | Max CPU | 132 % | 148 % | 150 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 797 MB | 810 MB | 812 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 141 % | 143 % | 143 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,339 ms | 3,583 ms | 3,610 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,367 ms | 3,607 ms | 3,634 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,892 ms | 3,122 ms | 3,147 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,214 ms | 3,448 ms | 3,474 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 6,235 ms | 6,639 ms | 6,684 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 6,022 ms | 6,473 ms | 6,523 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 32 ms | 40.1 ms | 41 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 867 MB | 871 MB | 872 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 867 MB | 871 MB | 872 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 64.2 % | 110 % | 115 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | readinessClassification | hard-failure | ready |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | FAIL |  |
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
- Tested ref: c7e1f275ccd3adbad1a322153a6366f660a971be
- Tested SHA: c7e1f275ccd3adbad1a322153a6366f660a971be
- Workflow ref: codex/perf-baseline-publisher-v2
- Workflow SHA: c7e1f275ccd3adbad1a322153a6366f660a971be
- Kova repository: openclaw/Kova
- Kova ref: b20d3b35118841db050a14f241098169aff4b9a2
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.5
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message
