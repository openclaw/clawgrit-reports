# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-032742-b6e674
- Generated: 2026-07-23T03:35:19.349Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 919 MB | 919 MB | 919 MB |
| fresh-install | fresh | Gateway RSS | 919 MB | 919 MB | 919 MB |
| fresh-install | fresh | Max CPU | 147 % | 152 % | 152 % |
| fresh-install | fresh | Event Loop Max | 10.6 ms | 10.7 ms | 10.7 ms |
| fresh-install | onboarded-user | Primary RSS | 919 MB | 927 MB | 928 MB |
| fresh-install | onboarded-user | Gateway RSS | 919 MB | 927 MB | 928 MB |
| fresh-install | onboarded-user | Max CPU | 151 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 11.9 ms | 15.3 ms | 15.6 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 923 MB | 946 MB | 948 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 923 MB | 946 MB | 948 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 143 % | 153 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 21.2 ms | 24.2 ms | 24.6 ms |
| bundled-plugin-startup | fresh | Primary RSS | 923 MB | 928 MB | 929 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 923 MB | 928 MB | 929 MB |
| bundled-plugin-startup | fresh | Max CPU | 143 % | 154 % | 155 % |
| bundled-plugin-startup | fresh | Event Loop Max | 24.8 ms | 27.2 ms | 27.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 980 MB | 986 MB | 986 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 155 % | 156 % | 156 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,332 ms | 4,521 ms | 4,543 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,303 ms | 4,305 ms | 4,305 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,333 ms | 4,533 ms | 4,555 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,072 ms | 4,250 ms | 4,270 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 916 MB | 917 MB | 918 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 916 MB | 917 MB | 918 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 136 % | 151 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 20.8 ms | 23.4 ms | 23.7 ms |

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
- Tested ref: 82368a5b5e77778e841304481d30940ab53437ec
- Tested SHA: 82368a5b5e77778e841304481d30940ab53437ec
- Workflow ref: main
- Workflow SHA: a12e0f26eec74a0b72bb2ad9cdd8c8107c3cb55b
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

The complete Kova bundle remains in [Actions artifact 8551918173](https://github.com/openclaw/openclaw/actions/runs/29977005739/artifacts/8551918173); its checksum is published under the bundles directory.
