# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-141037-8de883
- Generated: 2026-07-23T14:18:55.163Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 921 MB | 927 MB | 927 MB |
| fresh-install | fresh | Gateway RSS | 921 MB | 927 MB | 927 MB |
| fresh-install | fresh | Max CPU | 152 % | 152 % | 152 % |
| fresh-install | fresh | Event Loop Max | 10.4 ms | 10.9 ms | 11 ms |
| fresh-install | onboarded-user | Primary RSS | 919 MB | 921 MB | 922 MB |
| fresh-install | onboarded-user | Gateway RSS | 919 MB | 921 MB | 922 MB |
| fresh-install | onboarded-user | Max CPU | 137 % | 151 % | 153 % |
| fresh-install | onboarded-user | Event Loop Max | 10.4 ms | 10.7 ms | 10.7 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 906 MB | 908 MB | 908 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 906 MB | 908 MB | 908 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 153 % | 157 % | 157 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 14.3 ms | 14.7 ms | 14.7 ms |
| bundled-plugin-startup | fresh | Primary RSS | 923 MB | 926 MB | 927 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 923 MB | 926 MB | 927 MB |
| bundled-plugin-startup | fresh | Max CPU | 155 % | 156 % | 156 % |
| bundled-plugin-startup | fresh | Event Loop Max | 19.2 ms | 21.2 ms | 21.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 982 MB | 990 MB | 991 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 164 % | 166 % | 166 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,528 ms | 6,072 ms | 6,133 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,497 ms | 5,791 ms | 5,824 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,565 ms | 6,091 ms | 6,149 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,222 ms | 5,777 ms | 5,838 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 928 MB | 929 MB | 929 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 928 MB | 929 MB | 929 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 155 % | 160 % | 160 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 21.4 ms | 22.9 ms | 23.1 ms |

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
- Tested ref: b8e6cfc360f1803df05c1178a5ce91939d61254a
- Tested SHA: b8e6cfc360f1803df05c1178a5ce91939d61254a
- Workflow ref: main
- Workflow SHA: 1e3192c0b47b45cc1c157c8426f47374ccfb48a7
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

The complete Kova bundle remains in [Actions artifact 8566823288](https://github.com/openclaw/openclaw/actions/runs/30014465370/artifacts/8566823288); its checksum is published under the bundles directory.
