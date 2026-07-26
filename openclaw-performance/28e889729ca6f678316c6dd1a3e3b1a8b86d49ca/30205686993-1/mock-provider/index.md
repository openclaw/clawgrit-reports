# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260726-141557-706a5c
- Generated: 2026-07-26T14:23:43.933Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 998 MB | 1,006 MB | 1,007 MB |
| fresh-install | fresh | Gateway RSS | 998 MB | 1,006 MB | 1,007 MB |
| fresh-install | fresh | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | fresh | Event Loop Max | 11.1 ms | 12.4 ms | 12.5 ms |
| fresh-install | onboarded-user | Primary RSS | 894 MB | 982 MB | 992 MB |
| fresh-install | onboarded-user | Gateway RSS | 894 MB | 982 MB | 992 MB |
| fresh-install | onboarded-user | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 10.5 ms | 12.1 ms | 12.3 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 967 MB | 977 MB | 978 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 967 MB | 977 MB | 978 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 153 % | 154 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 18.6 ms | 19.5 ms | 19.6 ms |
| bundled-plugin-startup | fresh | Primary RSS | 949 MB | 971 MB | 973 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 949 MB | 971 MB | 973 MB |
| bundled-plugin-startup | fresh | Max CPU | 154 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 19.5 ms | 20.2 ms | 20.3 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 939 MB | 947 MB | 948 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 155 % | 155 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,814 ms | 4,843 ms | 4,846 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,819 ms | 4,845 ms | 4,848 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,716 ms | 4,802 ms | 4,812 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,257 ms | 4,299 ms | 4,303 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 949 MB | 979 MB | 982 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 949 MB | 979 MB | 982 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 15.3 ms | 18.2 ms | 18.6 ms |

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
- Tested ref: 28e889729ca6f678316c6dd1a3e3b1a8b86d49ca
- Tested SHA: 28e889729ca6f678316c6dd1a3e3b1a8b86d49ca
- Workflow ref: main
- Workflow SHA: 2b7b0f244095d9500510dbeaee8faf219b70dd5c
- Kova repository: openclaw/Kova
- Kova ref: 517952b835640a368c4af6dfe6dc8365ae841b57
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8633061129](https://github.com/openclaw/openclaw/actions/runs/30205686993/artifacts/8633061129); its checksum is published under the bundles directory.
