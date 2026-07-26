# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260726-024148-4bc5a8
- Generated: 2026-07-26T02:49:25.319Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 892 MB | 896 MB | 897 MB |
| fresh-install | fresh | Gateway RSS | 892 MB | 896 MB | 897 MB |
| fresh-install | fresh | Max CPU | 154 % | 154 % | 154 % |
| fresh-install | fresh | Event Loop Max | 11 ms | 14.6 ms | 15 ms |
| fresh-install | onboarded-user | Primary RSS | 893 MB | 897 MB | 897 MB |
| fresh-install | onboarded-user | Gateway RSS | 893 MB | 897 MB | 897 MB |
| fresh-install | onboarded-user | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 15.7 ms | 17 ms | 17.2 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 955 MB | 959 MB | 959 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 955 MB | 959 MB | 959 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 154 % | 154 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 14.6 ms | 18.6 ms | 19.1 ms |
| bundled-plugin-startup | fresh | Primary RSS | 949 MB | 949 MB | 950 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 949 MB | 949 MB | 950 MB |
| bundled-plugin-startup | fresh | Max CPU | 154 % | 155 % | 155 % |
| bundled-plugin-startup | fresh | Event Loop Max | 19 ms | 20.4 ms | 20.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 940 MB | 955 MB | 957 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,698 ms | 4,698 ms | 4,698 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,696 ms | 4,699 ms | 4,699 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,683 ms | 4,699 ms | 4,701 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,190 ms | 4,210 ms | 4,212 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 940 MB | 954 MB | 956 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 940 MB | 954 MB | 956 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 154 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 14.5 ms | 21.3 ms | 22.1 ms |

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
- Tested ref: e6a8f79db0f989c4bcc5b370a9fb2b26aa4741a0
- Tested SHA: e6a8f79db0f989c4bcc5b370a9fb2b26aa4741a0
- Workflow ref: main
- Workflow SHA: a2c64743775b88ea3ffdf0928786cba369f10209
- Kova repository: openclaw/Kova
- Kova ref: 517952b835640a368c4af6dfe6dc8365ae841b57
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8626776971](https://github.com/openclaw/openclaw/actions/runs/30184939322/artifacts/8626776971); its checksum is published under the bundles directory.
