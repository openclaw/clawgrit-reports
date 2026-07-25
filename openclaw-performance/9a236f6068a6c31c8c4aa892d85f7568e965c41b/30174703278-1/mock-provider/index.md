# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260725-210027-f29350
- Generated: 2026-07-25T21:08:15.482Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 912 MB | 922 MB | 923 MB |
| fresh-install | fresh | Gateway RSS | 912 MB | 922 MB | 923 MB |
| fresh-install | fresh | Max CPU | 152 % | 154 % | 154 % |
| fresh-install | fresh | Event Loop Max | 13.5 ms | 19.5 ms | 20.1 ms |
| fresh-install | onboarded-user | Primary RSS | 902 MB | 904 MB | 904 MB |
| fresh-install | onboarded-user | Gateway RSS | 902 MB | 904 MB | 904 MB |
| fresh-install | onboarded-user | Max CPU | 152 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 14 ms | 15.2 ms | 15.3 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 912 MB | 933 MB | 936 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 912 MB | 933 MB | 936 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 152 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 15.2 ms | 25.4 ms | 26.5 ms |
| bundled-plugin-startup | fresh | Primary RSS | 952 MB | 954 MB | 954 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 952 MB | 954 MB | 954 MB |
| bundled-plugin-startup | fresh | Max CPU | 153 % | 153 % | 153 % |
| bundled-plugin-startup | fresh | Event Loop Max | 20 ms | 20 ms | 20 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 890 MB | 937 MB | 943 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 153 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,788 ms | 4,830 ms | 4,834 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,789 ms | 4,832 ms | 4,837 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,778 ms | 4,781 ms | 4,781 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,290 ms | 4,292 ms | 4,292 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 936 MB | 958 MB | 960 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 936 MB | 958 MB | 960 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 151 % | 152 % | 152 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 22.9 ms | 25.9 ms | 26.2 ms |

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
- Tested ref: 9a236f6068a6c31c8c4aa892d85f7568e965c41b
- Tested SHA: 9a236f6068a6c31c8c4aa892d85f7568e965c41b
- Workflow ref: main
- Workflow SHA: 73bead12393ecbbdce37f34ef766cdbabdd42c8a
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

The complete Kova bundle remains in [Actions artifact 8623958548](https://github.com/openclaw/openclaw/actions/runs/30174703278/artifacts/8623958548); its checksum is published under the bundles directory.
