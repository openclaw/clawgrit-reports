# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260726-042416-39b608
- Generated: 2026-07-26T04:31:58.575Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 884 MB | 896 MB | 897 MB |
| fresh-install | fresh | Gateway RSS | 884 MB | 896 MB | 897 MB |
| fresh-install | fresh | Max CPU | 153 % | 153 % | 153 % |
| fresh-install | fresh | Event Loop Max | 10.2 ms | 10.4 ms | 10.5 ms |
| fresh-install | onboarded-user | Primary RSS | 900 MB | 900 MB | 900 MB |
| fresh-install | onboarded-user | Gateway RSS | 900 MB | 900 MB | 900 MB |
| fresh-install | onboarded-user | Max CPU | 154 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 14.7 ms | 15.7 ms | 15.8 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 980 MB | 982 MB | 982 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 980 MB | 982 MB | 982 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 153 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 17.1 ms | 18.2 ms | 18.3 ms |
| bundled-plugin-startup | fresh | Primary RSS | 973 MB | 981 MB | 982 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 973 MB | 981 MB | 982 MB |
| bundled-plugin-startup | fresh | Max CPU | 153 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 18.6 ms | 18.7 ms | 18.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 878 MB | 880 MB | 880 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,770 ms | 4,776 ms | 4,777 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,767 ms | 4,772 ms | 4,772 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,731 ms | 4,772 ms | 4,777 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,226 ms | 4,280 ms | 4,287 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 941 MB | 956 MB | 958 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 941 MB | 956 MB | 958 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 151 % | 152 % | 152 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 18.3 ms | 18.7 ms | 18.8 ms |

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
- Tested ref: ecd4d2d86a70956f6353c82e7bca41a968f65de3
- Tested SHA: ecd4d2d86a70956f6353c82e7bca41a968f65de3
- Workflow ref: main
- Workflow SHA: 3f27d76ea7dc31d75b818fb63691e594f054e76b
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

The complete Kova bundle remains in [Actions artifact 8627605993](https://github.com/openclaw/openclaw/actions/runs/30187696715/artifacts/8627605993); its checksum is published under the bundles directory.
