# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260726-123457-9ae3a7
- Generated: 2026-07-26T12:42:47.417Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 897 MB | 922 MB | 925 MB |
| fresh-install | fresh | Gateway RSS | 897 MB | 922 MB | 925 MB |
| fresh-install | fresh | Max CPU | 153 % | 155 % | 155 % |
| fresh-install | fresh | Event Loop Max | 15.5 ms | 16.1 ms | 16.2 ms |
| fresh-install | onboarded-user | Primary RSS | 901 MB | 905 MB | 905 MB |
| fresh-install | onboarded-user | Gateway RSS | 901 MB | 905 MB | 905 MB |
| fresh-install | onboarded-user | Max CPU | 153 % | 153 % | 153 % |
| fresh-install | onboarded-user | Event Loop Max | 13.1 ms | 15.7 ms | 16 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 951 MB | 960 MB | 961 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 951 MB | 960 MB | 961 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 152 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 15.6 ms | 19.7 ms | 20.1 ms |
| bundled-plugin-startup | fresh | Primary RSS | 947 MB | 949 MB | 949 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 947 MB | 949 MB | 949 MB |
| bundled-plugin-startup | fresh | Max CPU | 154 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 20.5 ms | 22.7 ms | 22.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 886 MB | 932 MB | 937 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,873 ms | 4,896 ms | 4,899 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,815 ms | 4,818 ms | 4,818 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,877 ms | 4,900 ms | 4,903 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,343 ms | 4,398 ms | 4,404 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 962 MB | 990 MB | 993 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 962 MB | 990 MB | 993 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 15.4 ms | 16.3 ms | 16.4 ms |

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
- Tested ref: 9aefca88ff6d8d11351782ba0ff2717cf202e81a
- Tested SHA: 9aefca88ff6d8d11351782ba0ff2717cf202e81a
- Workflow ref: main
- Workflow SHA: 6a11e44497571818f761e66b9453387ba823a2c2
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

The complete Kova bundle remains in [Actions artifact 8632106815](https://github.com/openclaw/openclaw/actions/runs/30202302795/artifacts/8632106815); its checksum is published under the bundles directory.
