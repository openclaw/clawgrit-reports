# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-153708-7f351a
- Generated: 2026-07-23T15:45:11.526Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 925 MB | 926 MB | 926 MB |
| fresh-install | fresh | Gateway RSS | 925 MB | 926 MB | 926 MB |
| fresh-install | fresh | Max CPU | 150 % | 154 % | 154 % |
| fresh-install | fresh | Event Loop Max | 10.4 ms | 10.8 ms | 10.8 ms |
| fresh-install | onboarded-user | Primary RSS | 923 MB | 924 MB | 925 MB |
| fresh-install | onboarded-user | Gateway RSS | 923 MB | 924 MB | 925 MB |
| fresh-install | onboarded-user | Max CPU | 151 % | 153 % | 153 % |
| fresh-install | onboarded-user | Event Loop Max | 10.6 ms | 10.7 ms | 10.7 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 904 MB | 919 MB | 921 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 904 MB | 919 MB | 921 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 153 % | 154 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 19.5 ms | 21.4 ms | 21.6 ms |
| bundled-plugin-startup | fresh | Primary RSS | 922 MB | 924 MB | 924 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 922 MB | 924 MB | 924 MB |
| bundled-plugin-startup | fresh | Max CPU | 154 % | 156 % | 156 % |
| bundled-plugin-startup | fresh | Event Loop Max | 18.8 ms | 24.6 ms | 25.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 984 MB | 988 MB | 988 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 167 % | 175 % | 176 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,977 ms | 7,956 ms | 8,065 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 7,010 ms | 7,916 ms | 8,017 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,359 ms | 7,896 ms | 8,067 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,493 ms | 7,457 ms | 7,564 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 923 MB | 924 MB | 924 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 923 MB | 924 MB | 924 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 139 % | 144 % | 144 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 15.9 ms | 18.9 ms | 19.2 ms |

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
- Tested ref: ed979fdb8a38f8912deeef1e979db8d5d6f4bde7
- Tested SHA: ed979fdb8a38f8912deeef1e979db8d5d6f4bde7
- Workflow ref: main
- Workflow SHA: 29d5dcfac6a60efe1de0e3706e91833583eeffeb
- Kova repository: openclaw/Kova
- Kova ref: 1bf080f6dbf8800a3187591493f2551824e4ccc7
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8569644342](https://github.com/openclaw/openclaw/actions/runs/30017961290/artifacts/8569644342); its checksum is published under the bundles directory.
