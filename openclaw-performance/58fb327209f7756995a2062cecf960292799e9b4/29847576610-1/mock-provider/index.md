# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260721-205815-f24074
- Generated: 2026-07-21T21:05:13.649Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 918 MB | 920 MB | 921 MB |
| fresh-install | fresh | Gateway RSS | 918 MB | 920 MB | 921 MB |
| fresh-install | fresh | Max CPU | 151 % | 159 % | 160 % |
| fresh-install | fresh | Event Loop Max | 15.4 ms | 17.6 ms | 17.9 ms |
| fresh-install | onboarded-user | Primary RSS | 921 MB | 925 MB | 925 MB |
| fresh-install | onboarded-user | Gateway RSS | 921 MB | 925 MB | 925 MB |
| fresh-install | onboarded-user | Max CPU | 156 % | 157 % | 157 % |
| fresh-install | onboarded-user | Event Loop Max | 13.8 ms | 14.9 ms | 15 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 901 MB | 911 MB | 912 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 901 MB | 911 MB | 912 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 154 % | 155 % | 155 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 12.6 ms | 12.9 ms | 13 ms |
| bundled-plugin-startup | fresh | Primary RSS | 920 MB | 924 MB | 925 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 920 MB | 924 MB | 925 MB |
| bundled-plugin-startup | fresh | Max CPU | 156 % | 157 % | 157 % |
| bundled-plugin-startup | fresh | Event Loop Max | 15.1 ms | 15.5 ms | 15.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 937 MB | 964 MB | 967 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 159 % | 159 % | 159 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,174 ms | 4,684 ms | 4,740 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,099 ms | 4,168 ms | 4,176 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,144 ms | 4,711 ms | 4,774 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,855 ms | 4,402 ms | 4,463 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 909 MB | 924 MB | 926 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 909 MB | 924 MB | 926 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 159 % | 159 % | 159 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 14.9 ms | 15 ms | 15.1 ms |

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
- Tested ref: 58fb327209f7756995a2062cecf960292799e9b4
- Tested SHA: 58fb327209f7756995a2062cecf960292799e9b4
- Workflow ref: main
- Workflow SHA: 328fa5b96406eecfe7c2f972f50f920f09f0b5a4
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

The complete Kova bundle remains in [Actions artifact 8510167601](https://github.com/openclaw/openclaw/actions/runs/29847576610/artifacts/8510167601); its checksum is published under the bundles directory.
