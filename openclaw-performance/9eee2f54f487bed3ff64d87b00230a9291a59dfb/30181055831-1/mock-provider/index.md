# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260726-002356-13c9c8
- Generated: 2026-07-26T00:31:41.696Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 906 MB | 977 MB | 985 MB |
| fresh-install | fresh | Gateway RSS | 906 MB | 977 MB | 985 MB |
| fresh-install | fresh | Max CPU | 154 % | 155 % | 155 % |
| fresh-install | fresh | Event Loop Max | 13.9 ms | 14.6 ms | 14.7 ms |
| fresh-install | onboarded-user | Primary RSS | 901 MB | 907 MB | 907 MB |
| fresh-install | onboarded-user | Gateway RSS | 901 MB | 907 MB | 907 MB |
| fresh-install | onboarded-user | Max CPU | 154 % | 155 % | 155 % |
| fresh-install | onboarded-user | Event Loop Max | 19.3 ms | 24.8 ms | 25.4 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 933 MB | 958 MB | 960 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 933 MB | 958 MB | 960 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 152 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 16.3 ms | 19.6 ms | 20 ms |
| bundled-plugin-startup | fresh | Primary RSS | 966 MB | 977 MB | 978 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 966 MB | 977 MB | 978 MB |
| bundled-plugin-startup | fresh | Max CPU | 154 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 18.9 ms | 19.5 ms | 19.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 899 MB | 907 MB | 908 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 153 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,799 ms | 4,813 ms | 4,815 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,804 ms | 4,818 ms | 4,820 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,701 ms | 4,715 ms | 4,717 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,244 ms | 4,262 ms | 4,264 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 960 MB | 1,006 MB | 1,011 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 960 MB | 1,006 MB | 1,011 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 154 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 14.2 ms | 21.2 ms | 22 ms |

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
- Tested ref: 9eee2f54f487bed3ff64d87b00230a9291a59dfb
- Tested SHA: 9eee2f54f487bed3ff64d87b00230a9291a59dfb
- Workflow ref: main
- Workflow SHA: e25dbf62147f5659f466b8cbb6260483d3c95f45
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

The complete Kova bundle remains in [Actions artifact 8625618099](https://github.com/openclaw/openclaw/actions/runs/30181055831/artifacts/8625618099); its checksum is published under the bundles directory.
