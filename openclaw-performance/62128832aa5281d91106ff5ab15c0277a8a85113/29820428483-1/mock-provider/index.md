# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260721-100023-c0a37a
- Generated: 2026-07-21T10:07:35.029Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 908 MB | 909 MB | 909 MB |
| fresh-install | fresh | Gateway RSS | 908 MB | 909 MB | 909 MB |
| fresh-install | fresh | Max CPU | 149 % | 153 % | 153 % |
| fresh-install | fresh | Event Loop Max | 576 ms | 667 ms | 677 ms |
| fresh-install | onboarded-user | Primary RSS | 905 MB | 905 MB | 905 MB |
| fresh-install | onboarded-user | Gateway RSS | 905 MB | 905 MB | 905 MB |
| fresh-install | onboarded-user | Max CPU | 156 % | 157 % | 157 % |
| fresh-install | onboarded-user | Event Loop Max | 555 ms | 566 ms | 567 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 890 MB | 893 MB | 893 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 890 MB | 893 MB | 893 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 157 % | 158 % | 158 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 542 ms | 547 ms | 548 ms |
| bundled-plugin-startup | fresh | Primary RSS | 905 MB | 908 MB | 909 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 905 MB | 908 MB | 909 MB |
| bundled-plugin-startup | fresh | Max CPU | 159 % | 159 % | 159 % |
| bundled-plugin-startup | fresh | Event Loop Max | 581 ms | 612 ms | 615 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 952 MB | 958 MB | 959 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 159 % | 160 % | 160 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,238 ms | 4,260 ms | 4,262 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,244 ms | 4,267 ms | 4,270 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,115 ms | 4,126 ms | 4,127 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,900 ms | 3,934 ms | 3,938 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 917 MB | 938 MB | 940 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 917 MB | 938 MB | 940 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 159 % | 162 % | 162 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 626 ms | 630 ms | 630 ms |

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
- Tested ref: 62128832aa5281d91106ff5ab15c0277a8a85113
- Tested SHA: 62128832aa5281d91106ff5ab15c0277a8a85113
- Workflow ref: main
- Workflow SHA: cec17abe55a3463e7a90c783c12622802705c17a
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

The complete Kova bundle remains in [Actions artifact 8491336671](https://github.com/openclaw/openclaw/actions/runs/29820428483/artifacts/8491336671); its checksum is published under the bundles directory.
