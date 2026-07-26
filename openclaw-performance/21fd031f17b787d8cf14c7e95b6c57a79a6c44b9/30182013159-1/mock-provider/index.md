# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260726-005700-802619
- Generated: 2026-07-26T01:04:38.710Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 893 MB | 905 MB | 906 MB |
| fresh-install | fresh | Gateway RSS | 893 MB | 905 MB | 906 MB |
| fresh-install | fresh | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | fresh | Event Loop Max | 11.6 ms | 18.7 ms | 19.5 ms |
| fresh-install | onboarded-user | Primary RSS | 899 MB | 907 MB | 908 MB |
| fresh-install | onboarded-user | Gateway RSS | 899 MB | 907 MB | 908 MB |
| fresh-install | onboarded-user | Max CPU | 153 % | 153 % | 153 % |
| fresh-install | onboarded-user | Event Loop Max | 12 ms | 14.7 ms | 15 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 951 MB | 952 MB | 953 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 951 MB | 952 MB | 953 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 153 % | 154 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 17.7 ms | 23 ms | 23.6 ms |
| bundled-plugin-startup | fresh | Primary RSS | 947 MB | 955 MB | 956 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 947 MB | 955 MB | 956 MB |
| bundled-plugin-startup | fresh | Max CPU | 153 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 19.2 ms | 21.2 ms | 21.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 889 MB | 893 MB | 893 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,718 ms | 4,732 ms | 4,734 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,722 ms | 4,733 ms | 4,734 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,698 ms | 4,730 ms | 4,733 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,205 ms | 4,248 ms | 4,253 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 948 MB | 960 MB | 961 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 948 MB | 960 MB | 961 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 154 % | 155 % | 155 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 18.2 ms | 21.6 ms | 22 ms |

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
- Tested ref: 21fd031f17b787d8cf14c7e95b6c57a79a6c44b9
- Tested SHA: 21fd031f17b787d8cf14c7e95b6c57a79a6c44b9
- Workflow ref: main
- Workflow SHA: 908e181f3fc0c61a363cf90a6b090b1a20ef9864
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

The complete Kova bundle remains in [Actions artifact 8625916414](https://github.com/openclaw/openclaw/actions/runs/30182013159/artifacts/8625916414); its checksum is published under the bundles directory.
