# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-024829-dac19a
- Generated: 2026-07-23T02:55:35.236Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 920 MB | 925 MB | 926 MB |
| fresh-install | fresh | Gateway RSS | 920 MB | 925 MB | 926 MB |
| fresh-install | fresh | Max CPU | 144 % | 152 % | 153 % |
| fresh-install | fresh | Event Loop Max | 10.3 ms | 10.4 ms | 10.4 ms |
| fresh-install | onboarded-user | Primary RSS | 929 MB | 940 MB | 942 MB |
| fresh-install | onboarded-user | Gateway RSS | 929 MB | 940 MB | 942 MB |
| fresh-install | onboarded-user | Max CPU | 151 % | 152 % | 152 % |
| fresh-install | onboarded-user | Event Loop Max | 10.6 ms | 10.9 ms | 10.9 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 915 MB | 918 MB | 919 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 915 MB | 918 MB | 919 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 151 % | 154 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 19.2 ms | 20.2 ms | 20.3 ms |
| bundled-plugin-startup | fresh | Primary RSS | 919 MB | 920 MB | 920 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 919 MB | 920 MB | 920 MB |
| bundled-plugin-startup | fresh | Max CPU | 150 % | 157 % | 158 % |
| bundled-plugin-startup | fresh | Event Loop Max | 20.7 ms | 20.9 ms | 21 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 951 MB | 976 MB | 979 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 157 % | 160 % | 160 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,958 ms | 5,108 ms | 5,124 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,963 ms | 5,121 ms | 5,139 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,842 ms | 4,858 ms | 4,860 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,605 ms | 4,750 ms | 4,766 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 920 MB | 921 MB | 922 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 920 MB | 921 MB | 922 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 142 % | 151 % | 152 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 21.2 ms | 23.8 ms | 24 ms |

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
- Tested ref: ddae364ec8b6cb1c5f2075de531075390497a41b
- Tested SHA: ddae364ec8b6cb1c5f2075de531075390497a41b
- Workflow ref: main
- Workflow SHA: 4602e57d1430c14b1cc76ce335b772f69db3e79f
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

The complete Kova bundle remains in [Actions artifact 8551283868](https://github.com/openclaw/openclaw/actions/runs/29975285505/artifacts/8551283868); its checksum is published under the bundles directory.
