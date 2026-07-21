# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260721-205642-25b9b8
- Generated: 2026-07-21T21:04:03.814Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 907 MB | 917 MB | 918 MB |
| fresh-install | fresh | Gateway RSS | 907 MB | 917 MB | 918 MB |
| fresh-install | fresh | Max CPU | 150 % | 162 % | 163 % |
| fresh-install | fresh | Event Loop Max | 13.7 ms | 17.5 ms | 18 ms |
| fresh-install | onboarded-user | Primary RSS | 909 MB | 957 MB | 963 MB |
| fresh-install | onboarded-user | Gateway RSS | 909 MB | 957 MB | 963 MB |
| fresh-install | onboarded-user | Max CPU | 156 % | 160 % | 160 % |
| fresh-install | onboarded-user | Event Loop Max | 13.4 ms | 13.6 ms | 13.6 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 895 MB | 915 MB | 917 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 895 MB | 915 MB | 917 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 155 % | 155 % | 155 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 11.9 ms | 13.2 ms | 13.4 ms |
| bundled-plugin-startup | fresh | Primary RSS | 905 MB | 906 MB | 906 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 905 MB | 906 MB | 906 MB |
| bundled-plugin-startup | fresh | Max CPU | 138 % | 152 % | 153 % |
| bundled-plugin-startup | fresh | Event Loop Max | 13.1 ms | 15.7 ms | 16 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 905 MB | 930 MB | 933 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 159 % | 159 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,708 ms | 3,777 ms | 3,785 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,715 ms | 3,785 ms | 3,793 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,572 ms | 3,631 ms | 3,637 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,400 ms | 3,474 ms | 3,483 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 905 MB | 921 MB | 923 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 905 MB | 921 MB | 923 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 135 % | 153 % | 155 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 11.7 ms | 12 ms | 12 ms |

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
- Tested ref: ac9cadb61dfa19fd42b5727997c2d9b347f8ca4a
- Tested SHA: ac9cadb61dfa19fd42b5727997c2d9b347f8ca4a
- Workflow ref: main
- Workflow SHA: 025e6ceee0a3b3f3de3f31eac4335c8a1d324eb9
- Kova repository: openclaw/Kova
- Kova ref: f3d037b5b8aacd6adf8ef1dd2ea4c1d778ec7c6c
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8510135936](https://github.com/openclaw/openclaw/actions/runs/29839526133/artifacts/8510135936); its checksum is published under the bundles directory.
