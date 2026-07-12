# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260712-085513-886153
- Generated: 2026-07-12T09:02:01.562Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 754 MB | 763 MB | 764 MB |
| fresh-install | fresh | Gateway RSS | 754 MB | 763 MB | 764 MB |
| fresh-install | fresh | Max CPU | 115 % | 131 % | 133 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 740 MB | 757 MB | 759 MB |
| fresh-install | onboarded-user | Gateway RSS | 740 MB | 757 MB | 759 MB |
| fresh-install | onboarded-user | Max CPU | 113 % | 134 % | 136 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 759 MB | 768 MB | 769 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 759 MB | 768 MB | 769 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 132 % | 136 % | 136 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Primary RSS | 732 MB | 755 MB | 758 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 732 MB | 755 MB | 758 MB |
| bundled-plugin-startup | fresh | Max CPU | 136 % | 139 % | 139 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 723 MB | 730 MB | 731 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 147 % | 147 % | 147 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,620 ms | 2,652 ms | 2,656 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,591 ms | 2,652 ms | 2,659 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,599 ms | 2,620 ms | 2,622 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,528 ms | 2,543 ms | 2,545 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 761 MB | 774 MB | 775 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 761 MB | 774 MB | 775 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 133 % | 135 % | 135 % |
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
- Tested ref: f26237ccbc7822cc6adff34584f882a1304f805c
- Tested SHA: f26237ccbc7822cc6adff34584f882a1304f805c
- Workflow ref: main
- Workflow SHA: 17a533ce268957780a3480c9f0691593efa94153
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

The complete Kova bundle remains in [Actions artifact 8258260863](https://github.com/openclaw/openclaw/actions/runs/29186586958/artifacts/8258260863); its checksum is published under the bundles directory.
