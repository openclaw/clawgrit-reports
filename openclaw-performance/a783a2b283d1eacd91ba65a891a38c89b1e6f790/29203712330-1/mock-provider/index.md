# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260712-182216-a167b3
- Generated: 2026-07-12T18:27:43.236Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 736 MB | 742 MB | 743 MB |
| fresh-install | fresh | Gateway RSS | 736 MB | 742 MB | 743 MB |
| fresh-install | fresh | Max CPU | 130 % | 134 % | 134 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 759 MB | 764 MB | 765 MB |
| fresh-install | onboarded-user | Gateway RSS | 759 MB | 764 MB | 765 MB |
| fresh-install | onboarded-user | Max CPU | 111 % | 133 % | 135 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 749 MB | 751 MB | 751 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 749 MB | 751 MB | 751 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 133 % | 133 % | 133 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Primary RSS | 758 MB | 760 MB | 760 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 758 MB | 760 MB | 760 MB |
| bundled-plugin-startup | fresh | Max CPU | 136 % | 139 % | 139 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 748 MB | 754 MB | 754 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 140 % | 143 % | 143 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,499 ms | 2,551 ms | 2,557 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,497 ms | 2,542 ms | 2,547 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,499 ms | 2,551 ms | 2,557 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,407 ms | 2,451 ms | 2,456 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 762 MB | 772 MB | 773 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 762 MB | 772 MB | 773 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 131 % | 133 % | 133 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

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
- Tested ref: a783a2b283d1eacd91ba65a891a38c89b1e6f790
- Tested SHA: a783a2b283d1eacd91ba65a891a38c89b1e6f790
- Workflow ref: main
- Workflow SHA: bbf79b19346a031000ff6ac2d5b473008357401b
- Kova repository: openclaw/Kova
- Kova ref: 2b02b7d33418db0c6952c4cf8fe8a608e7964859
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8263177978](https://github.com/openclaw/openclaw/actions/runs/29203712330/artifacts/8263177978); its checksum is published under the bundles directory.
