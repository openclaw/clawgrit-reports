# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-090350-fc416c
- Generated: 2026-07-23T09:10:49.704Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 920 MB | 922 MB | 922 MB |
| fresh-install | fresh | Gateway RSS | 920 MB | 922 MB | 922 MB |
| fresh-install | fresh | Max CPU | 152 % | 153 % | 153 % |
| fresh-install | fresh | Event Loop Max | 10.3 ms | 10.6 ms | 10.6 ms |
| fresh-install | onboarded-user | Primary RSS | 922 MB | 926 MB | 926 MB |
| fresh-install | onboarded-user | Gateway RSS | 922 MB | 926 MB | 926 MB |
| fresh-install | onboarded-user | Max CPU | 151 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 10.5 ms | 11 ms | 11 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 909 MB | 935 MB | 938 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 909 MB | 935 MB | 938 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 150 % | 156 % | 157 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 15.9 ms | 25.2 ms | 26.2 ms |
| bundled-plugin-startup | fresh | Primary RSS | 921 MB | 932 MB | 933 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 921 MB | 932 MB | 933 MB |
| bundled-plugin-startup | fresh | Max CPU | 153 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 22.4 ms | 28.3 ms | 29 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 966 MB | 967 MB | 968 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 154 % | 156 % | 156 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,504 ms | 4,639 ms | 4,654 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,500 ms | 4,643 ms | 4,659 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,504 ms | 4,554 ms | 4,560 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,251 ms | 4,338 ms | 4,348 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 919 MB | 919 MB | 919 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 919 MB | 919 MB | 919 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 19.8 ms | 20.7 ms | 20.8 ms |

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
- Tested ref: e2e7cbfaf4dd827ab6868ae3e3df585f438f5c60
- Tested SHA: e2e7cbfaf4dd827ab6868ae3e3df585f438f5c60
- Workflow ref: main
- Workflow SHA: 1781e2e8f7ca9a446dec21916b762a062157a360
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

The complete Kova bundle remains in [Actions artifact 8558252568](https://github.com/openclaw/openclaw/actions/runs/29993626725/artifacts/8558252568); its checksum is published under the bundles directory.
