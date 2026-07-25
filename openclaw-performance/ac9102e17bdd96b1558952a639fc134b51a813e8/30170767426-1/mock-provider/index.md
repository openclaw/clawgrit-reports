# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260725-190202-a08234
- Generated: 2026-07-25T19:09:43.273Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 881 MB | 890 MB | 891 MB |
| fresh-install | fresh | Gateway RSS | 881 MB | 890 MB | 891 MB |
| fresh-install | fresh | Max CPU | 151 % | 152 % | 152 % |
| fresh-install | fresh | Event Loop Max | 12.9 ms | 15.4 ms | 15.7 ms |
| fresh-install | onboarded-user | Primary RSS | 890 MB | 902 MB | 903 MB |
| fresh-install | onboarded-user | Gateway RSS | 890 MB | 902 MB | 903 MB |
| fresh-install | onboarded-user | Max CPU | 152 % | 152 % | 152 % |
| fresh-install | onboarded-user | Event Loop Max | 14.2 ms | 15 ms | 15.1 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 946 MB | 957 MB | 958 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 946 MB | 957 MB | 958 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 153 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 15.7 ms | 19.7 ms | 20.1 ms |
| bundled-plugin-startup | fresh | Primary RSS | 956 MB | 958 MB | 958 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 956 MB | 958 MB | 958 MB |
| bundled-plugin-startup | fresh | Max CPU | 153 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 21.7 ms | 23.5 ms | 23.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 906 MB | 940 MB | 944 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,812 ms | 4,814 ms | 4,815 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,814 ms | 4,816 ms | 4,816 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,773 ms | 4,785 ms | 4,786 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,278 ms | 4,288 ms | 4,289 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 958 MB | 959 MB | 959 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 958 MB | 959 MB | 959 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 151 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 18.5 ms | 31.4 ms | 32.9 ms |

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
- Tested ref: ac9102e17bdd96b1558952a639fc134b51a813e8
- Tested SHA: ac9102e17bdd96b1558952a639fc134b51a813e8
- Workflow ref: main
- Workflow SHA: fdb511f5a135e46b5672c56c126fc84e4e4b4b38
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

The complete Kova bundle remains in [Actions artifact 8622923699](https://github.com/openclaw/openclaw/actions/runs/30170767426/artifacts/8622923699); its checksum is published under the bundles directory.
