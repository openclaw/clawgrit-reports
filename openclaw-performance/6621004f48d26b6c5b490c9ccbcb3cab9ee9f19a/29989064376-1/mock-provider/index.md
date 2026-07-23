# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-074423-2f32b9
- Generated: 2026-07-23T07:51:10.599Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 917 MB | 921 MB | 921 MB |
| fresh-install | fresh | Gateway RSS | 917 MB | 921 MB | 921 MB |
| fresh-install | fresh | Max CPU | 151 % | 152 % | 152 % |
| fresh-install | fresh | Event Loop Max | 10.6 ms | 10.9 ms | 10.9 ms |
| fresh-install | onboarded-user | Primary RSS | 922 MB | 923 MB | 923 MB |
| fresh-install | onboarded-user | Gateway RSS | 922 MB | 923 MB | 923 MB |
| fresh-install | onboarded-user | Max CPU | 151 % | 153 % | 153 % |
| fresh-install | onboarded-user | Event Loop Max | 10.3 ms | 10.4 ms | 10.4 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 908 MB | 985 MB | 994 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 908 MB | 985 MB | 994 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 152 % | 154 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 18.7 ms | 19.2 ms | 19.2 ms |
| bundled-plugin-startup | fresh | Primary RSS | 921 MB | 936 MB | 937 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 921 MB | 936 MB | 937 MB |
| bundled-plugin-startup | fresh | Max CPU | 138 % | 152 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 17.2 ms | 22 ms | 22.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 958 MB | 969 MB | 970 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 155 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,525 ms | 4,546 ms | 4,548 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,517 ms | 4,531 ms | 4,533 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,373 ms | 4,532 ms | 4,550 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,223 ms | 4,291 ms | 4,298 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 920 MB | 923 MB | 924 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 920 MB | 923 MB | 924 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 152 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 15.4 ms | 20.1 ms | 20.6 ms |

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
- Tested ref: 6621004f48d26b6c5b490c9ccbcb3cab9ee9f19a
- Tested SHA: 6621004f48d26b6c5b490c9ccbcb3cab9ee9f19a
- Workflow ref: main
- Workflow SHA: fb4338b03ce1d8b5b44381b9ab4c09a553310b8b
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

The complete Kova bundle remains in [Actions artifact 8556417257](https://github.com/openclaw/openclaw/actions/runs/29989064376/artifacts/8556417257); its checksum is published under the bundles directory.
