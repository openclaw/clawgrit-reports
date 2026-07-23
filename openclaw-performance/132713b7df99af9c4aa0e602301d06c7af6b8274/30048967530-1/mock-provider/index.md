# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-221207-df9555
- Generated: 2026-07-23T22:20:35.859Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 933 MB | 940 MB | 940 MB |
| fresh-install | fresh | Gateway RSS | 933 MB | 940 MB | 940 MB |
| fresh-install | fresh | Max CPU | 152 % | 160 % | 161 % |
| fresh-install | fresh | Event Loop Max | 10.3 ms | 11 ms | 11.1 ms |
| fresh-install | onboarded-user | Primary RSS | 933 MB | 937 MB | 938 MB |
| fresh-install | onboarded-user | Gateway RSS | 933 MB | 937 MB | 938 MB |
| fresh-install | onboarded-user | Max CPU | 142 % | 157 % | 159 % |
| fresh-install | onboarded-user | Event Loop Max | 10.4 ms | 10.8 ms | 10.8 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 924 MB | 934 MB | 935 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 924 MB | 934 MB | 935 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 160 % | 168 % | 169 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 21.7 ms | 22.2 ms | 22.3 ms |
| bundled-plugin-startup | fresh | Primary RSS | 938 MB | 945 MB | 946 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 938 MB | 945 MB | 946 MB |
| bundled-plugin-startup | fresh | Max CPU | 154 % | 157 % | 157 % |
| bundled-plugin-startup | fresh | Event Loop Max | 26.2 ms | 35.7 ms | 36.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 971 MB | 984 MB | 985 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 159 % | 164 % | 165 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,124 ms | 5,611 ms | 5,665 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,137 ms | 5,637 ms | 5,693 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,872 ms | 5,111 ms | 5,137 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,785 ms | 5,228 ms | 5,277 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 926 MB | 933 MB | 934 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 926 MB | 933 MB | 934 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 151 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 20 ms | 28.3 ms | 29.2 ms |

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
- Tested ref: 132713b7df99af9c4aa0e602301d06c7af6b8274
- Tested SHA: 132713b7df99af9c4aa0e602301d06c7af6b8274
- Workflow ref: main
- Workflow SHA: bd48b7b26bb4e568506f3d757acce28016fc9122
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

The complete Kova bundle remains in [Actions artifact 8580445273](https://github.com/openclaw/openclaw/actions/runs/30048967530/artifacts/8580445273); its checksum is published under the bundles directory.
