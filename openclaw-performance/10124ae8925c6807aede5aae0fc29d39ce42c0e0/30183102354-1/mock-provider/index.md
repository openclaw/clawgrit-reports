# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260726-013515-ad177d
- Generated: 2026-07-26T01:43:03.198Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 883 MB | 991 MB | 1,003 MB |
| fresh-install | fresh | Gateway RSS | 883 MB | 991 MB | 1,003 MB |
| fresh-install | fresh | Max CPU | 154 % | 155 % | 155 % |
| fresh-install | fresh | Event Loop Max | 14.4 ms | 18.4 ms | 18.8 ms |
| fresh-install | onboarded-user | Primary RSS | 897 MB | 899 MB | 900 MB |
| fresh-install | onboarded-user | Gateway RSS | 897 MB | 899 MB | 900 MB |
| fresh-install | onboarded-user | Max CPU | 154 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 14 ms | 15.3 ms | 15.4 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 960 MB | 960 MB | 960 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 960 MB | 960 MB | 960 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 152 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 15.1 ms | 15.5 ms | 15.6 ms |
| bundled-plugin-startup | fresh | Primary RSS | 967 MB | 967 MB | 967 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 967 MB | 967 MB | 967 MB |
| bundled-plugin-startup | fresh | Max CPU | 154 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 18 ms | 20.2 ms | 20.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 938 MB | 945 MB | 946 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 153 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,778 ms | 4,794 ms | 4,795 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,778 ms | 4,798 ms | 4,800 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,705 ms | 4,765 ms | 4,772 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,246 ms | 4,275 ms | 4,278 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 961 MB | 970 MB | 971 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 961 MB | 970 MB | 971 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 15.4 ms | 15.7 ms | 15.7 ms |

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
- Tested ref: 10124ae8925c6807aede5aae0fc29d39ce42c0e0
- Tested SHA: 10124ae8925c6807aede5aae0fc29d39ce42c0e0
- Workflow ref: main
- Workflow SHA: 14a6a7215319591e9708cc41de45ff19c5cae4c4
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

The complete Kova bundle remains in [Actions artifact 8626269368](https://github.com/openclaw/openclaw/actions/runs/30183102354/artifacts/8626269368); its checksum is published under the bundles directory.
