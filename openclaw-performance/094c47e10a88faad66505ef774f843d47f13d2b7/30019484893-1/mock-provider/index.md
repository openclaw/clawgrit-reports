# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-153714-8256d9
- Generated: 2026-07-23T15:47:09.961Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 920 MB | 926 MB | 926 MB |
| fresh-install | fresh | Gateway RSS | 920 MB | 926 MB | 926 MB |
| fresh-install | fresh | Max CPU | 154 % | 156 % | 156 % |
| fresh-install | fresh | Event Loop Max | 10.4 ms | 10.8 ms | 10.8 ms |
| fresh-install | onboarded-user | Primary RSS | 919 MB | 929 MB | 930 MB |
| fresh-install | onboarded-user | Gateway RSS | 919 MB | 929 MB | 930 MB |
| fresh-install | onboarded-user | Max CPU | 147 % | 155 % | 156 % |
| fresh-install | onboarded-user | Event Loop Max | 11.4 ms | 12.6 ms | 12.8 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 919 MB | 922 MB | 922 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 919 MB | 922 MB | 922 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 146 % | 155 % | 156 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 23.8 ms | 26.8 ms | 27.1 ms |
| bundled-plugin-startup | fresh | Primary RSS | 921 MB | 931 MB | 932 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 921 MB | 931 MB | 932 MB |
| bundled-plugin-startup | fresh | Max CPU | 163 % | 196 % | 200 % |
| bundled-plugin-startup | fresh | Event Loop Max | 21.8 ms | 24.4 ms | 24.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 958 MB | 960 MB | 960 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 166 % | 166 % | 166 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,654 ms | 7,483 ms | 7,576 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,087 ms | 6,286 ms | 6,308 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,672 ms | 7,572 ms | 7,672 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,292 ms | 7,035 ms | 7,117 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 927 MB | 937 MB | 938 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 927 MB | 937 MB | 938 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 155 % | 157 % | 157 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 27.5 ms | 32 ms | 32.5 ms |

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
- Tested ref: 094c47e10a88faad66505ef774f843d47f13d2b7
- Tested SHA: 094c47e10a88faad66505ef774f843d47f13d2b7
- Workflow ref: main
- Workflow SHA: 4f4d89574a9e1361344f1435c994d30e15a166cf
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

The complete Kova bundle remains in [Actions artifact 8569706347](https://github.com/openclaw/openclaw/actions/runs/30019484893/artifacts/8569706347); its checksum is published under the bundles directory.
