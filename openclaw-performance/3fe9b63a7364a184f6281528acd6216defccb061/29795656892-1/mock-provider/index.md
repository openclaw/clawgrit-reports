# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260721-022326-149bd8
- Generated: 2026-07-21T02:28:52.457Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 821 MB | 822 MB | 822 MB |
| fresh-install | fresh | Gateway RSS | 821 MB | 822 MB | 822 MB |
| fresh-install | fresh | Max CPU | 143 % | 148 % | 149 % |
| fresh-install | fresh | Event Loop Max | 458 ms | 462 ms | 462 ms |
| fresh-install | onboarded-user | Primary RSS | 821 MB | 840 MB | 843 MB |
| fresh-install | onboarded-user | Gateway RSS | 821 MB | 840 MB | 843 MB |
| fresh-install | onboarded-user | Max CPU | 126 % | 148 % | 150 % |
| fresh-install | onboarded-user | Event Loop Max | 424 ms | 450 ms | 452 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 795 MB | 809 MB | 811 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 795 MB | 809 MB | 811 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 147 % | 150 % | 150 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 428 ms | 435 ms | 435 ms |
| bundled-plugin-startup | fresh | Primary RSS | 816 MB | 832 MB | 834 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 816 MB | 832 MB | 834 MB |
| bundled-plugin-startup | fresh | Max CPU | 146 % | 149 % | 149 % |
| bundled-plugin-startup | fresh | Event Loop Max | 450 ms | 463 ms | 464 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 795 MB | 806 MB | 808 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,996 ms | 3,008 ms | 3,009 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,952 ms | 3,008 ms | 3,014 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,984 ms | 2,997 ms | 2,998 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,738 ms | 2,747 ms | 2,748 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 814 MB | 835 MB | 837 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 814 MB | 835 MB | 837 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 138 % | 146 % | 147 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 420 ms | 483 ms | 489 ms |

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
- Tested ref: 3fe9b63a7364a184f6281528acd6216defccb061
- Tested SHA: 3fe9b63a7364a184f6281528acd6216defccb061
- Workflow ref: main
- Workflow SHA: e3488e1d7324550cf165901b0b20a1e46f362ac4
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

The complete Kova bundle remains in [Actions artifact 8481986449](https://github.com/openclaw/openclaw/actions/runs/29795656892/artifacts/8481986449); its checksum is published under the bundles directory.
