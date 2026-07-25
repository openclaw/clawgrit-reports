# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260725-220425-8d0d21
- Generated: 2026-07-25T22:12:18.252Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 904 MB | 909 MB | 910 MB |
| fresh-install | fresh | Gateway RSS | 904 MB | 909 MB | 910 MB |
| fresh-install | fresh | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | fresh | Event Loop Max | 12.4 ms | 14.7 ms | 14.9 ms |
| fresh-install | onboarded-user | Primary RSS | 898 MB | 959 MB | 965 MB |
| fresh-install | onboarded-user | Gateway RSS | 898 MB | 959 MB | 965 MB |
| fresh-install | onboarded-user | Max CPU | 152 % | 153 % | 153 % |
| fresh-install | onboarded-user | Event Loop Max | 12.7 ms | 13.7 ms | 13.8 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 954 MB | 980 MB | 983 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 954 MB | 980 MB | 983 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 152 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 19.1 ms | 20.8 ms | 20.9 ms |
| bundled-plugin-startup | fresh | Primary RSS | 940 MB | 956 MB | 957 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 940 MB | 956 MB | 957 MB |
| bundled-plugin-startup | fresh | Max CPU | 154 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 18.8 ms | 25.6 ms | 26.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 898 MB | 906 MB | 907 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 151 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,781 ms | 4,824 ms | 4,829 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,776 ms | 4,786 ms | 4,787 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,758 ms | 4,825 ms | 4,832 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,261 ms | 4,310 ms | 4,315 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 966 MB | 966 MB | 967 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 966 MB | 966 MB | 967 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 152 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 17.1 ms | 18.3 ms | 18.4 ms |

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
- Tested ref: a04fec499379ca99f1178b1e523b3a9c2b3381d8
- Tested SHA: a04fec499379ca99f1178b1e523b3a9c2b3381d8
- Workflow ref: main
- Workflow SHA: 512b48bd26a3bc1cfa329d16629e99e167980528
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

The complete Kova bundle remains in [Actions artifact 8624517673](https://github.com/openclaw/openclaw/actions/runs/30176820239/artifacts/8624517673); its checksum is published under the bundles directory.
