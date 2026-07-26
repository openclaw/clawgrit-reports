# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260726-105626-d61152
- Generated: 2026-07-26T11:04:14.105Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 903 MB | 922 MB | 924 MB |
| fresh-install | fresh | Gateway RSS | 903 MB | 922 MB | 924 MB |
| fresh-install | fresh | Max CPU | 152 % | 152 % | 152 % |
| fresh-install | fresh | Event Loop Max | 14.2 ms | 17.6 ms | 18 ms |
| fresh-install | onboarded-user | Primary RSS | 898 MB | 902 MB | 903 MB |
| fresh-install | onboarded-user | Gateway RSS | 898 MB | 902 MB | 903 MB |
| fresh-install | onboarded-user | Max CPU | 152 % | 153 % | 153 % |
| fresh-install | onboarded-user | Event Loop Max | 14.3 ms | 15.8 ms | 16 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 985 MB | 991 MB | 992 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 985 MB | 991 MB | 992 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 153 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 18.8 ms | 19.1 ms | 19.2 ms |
| bundled-plugin-startup | fresh | Primary RSS | 960 MB | 974 MB | 975 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 960 MB | 974 MB | 975 MB |
| bundled-plugin-startup | fresh | Max CPU | 154 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 18.8 ms | 19.8 ms | 19.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 944 MB | 948 MB | 949 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 153 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,817 ms | 4,823 ms | 4,823 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,808 ms | 4,818 ms | 4,819 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,771 ms | 4,821 ms | 4,827 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,269 ms | 4,304 ms | 4,308 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 955 MB | 986 MB | 989 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 955 MB | 986 MB | 989 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 152 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 14.1 ms | 14.5 ms | 14.6 ms |

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
- Tested ref: bfa6b655b5ee70c52588ed9765712c2dc705980e
- Tested SHA: bfa6b655b5ee70c52588ed9765712c2dc705980e
- Workflow ref: main
- Workflow SHA: 53e3f296b1cc1ef2e772ec79c1a9acb693fa02e1
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

The complete Kova bundle remains in [Actions artifact 8631165725](https://github.com/openclaw/openclaw/actions/runs/30199146847/artifacts/8631165725); its checksum is published under the bundles directory.
