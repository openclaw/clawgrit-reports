# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260724-000909-3ce02c
- Generated: 2026-07-24T00:17:52.312Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 956 MB | 965 MB | 966 MB |
| fresh-install | fresh | Gateway RSS | 956 MB | 965 MB | 966 MB |
| fresh-install | fresh | Max CPU | 144 % | 160 % | 162 % |
| fresh-install | fresh | Event Loop Max | 11.1 ms | 34.6 ms | 37.2 ms |
| fresh-install | onboarded-user | Primary RSS | 954 MB | 992 MB | 996 MB |
| fresh-install | onboarded-user | Gateway RSS | 954 MB | 992 MB | 996 MB |
| fresh-install | onboarded-user | Max CPU | 151 % | 161 % | 162 % |
| fresh-install | onboarded-user | Event Loop Max | 13.1 ms | 15.8 ms | 16.1 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 943 MB | 944 MB | 944 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 943 MB | 944 MB | 944 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 150 % | 156 % | 157 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 20.6 ms | 26.9 ms | 27.6 ms |
| bundled-plugin-startup | fresh | Primary RSS | 936 MB | 945 MB | 947 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 936 MB | 945 MB | 947 MB |
| bundled-plugin-startup | fresh | Max CPU | 152 % | 159 % | 160 % |
| bundled-plugin-startup | fresh | Event Loop Max | 22 ms | 23.8 ms | 24 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 961 MB | 966 MB | 967 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 157 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,522 ms | 5,427 ms | 5,527 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,529 ms | 5,481 ms | 5,587 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,393 ms | 4,502 ms | 4,514 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,240 ms | 5,124 ms | 5,222 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 960 MB | 961 MB | 961 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 960 MB | 961 MB | 961 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 150 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 20 ms | 22.3 ms | 22.5 ms |

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
- Tested ref: 127f17bea50b394342901a70516e8107b7650f13
- Tested SHA: 127f17bea50b394342901a70516e8107b7650f13
- Workflow ref: main
- Workflow SHA: ba09e05e97ba9032be0a620f0e0db0787376475b
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

The complete Kova bundle remains in [Actions artifact 8582684565](https://github.com/openclaw/openclaw/actions/runs/30055290715/artifacts/8582684565); its checksum is published under the bundles directory.
