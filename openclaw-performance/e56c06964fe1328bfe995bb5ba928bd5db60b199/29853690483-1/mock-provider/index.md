# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260721-205917-be55ff
- Generated: 2026-07-21T21:05:50.302Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 907 MB | 922 MB | 924 MB |
| fresh-install | fresh | Gateway RSS | 907 MB | 922 MB | 924 MB |
| fresh-install | fresh | Max CPU | 155 % | 159 % | 159 % |
| fresh-install | fresh | Event Loop Max | 12.1 ms | 13.4 ms | 13.5 ms |
| fresh-install | onboarded-user | Primary RSS | 912 MB | 916 MB | 916 MB |
| fresh-install | onboarded-user | Gateway RSS | 912 MB | 916 MB | 916 MB |
| fresh-install | onboarded-user | Max CPU | 155 % | 156 % | 156 % |
| fresh-install | onboarded-user | Event Loop Max | 13.3 ms | 21.1 ms | 21.9 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 893 MB | 900 MB | 901 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 893 MB | 900 MB | 901 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 155 % | 156 % | 156 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 13.6 ms | 15.9 ms | 16.2 ms |
| bundled-plugin-startup | fresh | Primary RSS | 918 MB | 930 MB | 932 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 918 MB | 930 MB | 932 MB |
| bundled-plugin-startup | fresh | Max CPU | 156 % | 156 % | 156 % |
| bundled-plugin-startup | fresh | Event Loop Max | 15.3 ms | 15.5 ms | 15.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 966 MB | 970 MB | 971 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 161 % | 169 % | 170 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,435 ms | 4,444 ms | 4,445 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,257 ms | 4,394 ms | 4,409 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,444 ms | 4,447 ms | 4,447 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,130 ms | 4,145 ms | 4,147 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 919 MB | 920 MB | 921 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 919 MB | 920 MB | 921 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 158 % | 162 % | 162 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 15.1 ms | 15.2 ms | 15.2 ms |

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
- Tested ref: e56c06964fe1328bfe995bb5ba928bd5db60b199
- Tested SHA: e56c06964fe1328bfe995bb5ba928bd5db60b199
- Workflow ref: main
- Workflow SHA: 1096b74ab748dc0373b0d9bbbb55cb2227257953
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

The complete Kova bundle remains in [Actions artifact 8510183491](https://github.com/openclaw/openclaw/actions/runs/29853690483/artifacts/8510183491); its checksum is published under the bundles directory.
