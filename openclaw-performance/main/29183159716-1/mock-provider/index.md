# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260712-064709-8629c1
- Generated: 2026-07-12T06:49:38.766Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 9
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 805 MB | 808 MB | 808 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 805 MB | 808 MB | 808 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 135 % | 136 % | 136 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 796 MB | 804 MB | 805 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 796 MB | 804 MB | 805 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 135 % | 137 % | 137 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 766 MB | 810 MB | 815 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 139 % | 142 % | 143 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,895 ms | 3,402 ms | 3,459 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,899 ms | 3,435 ms | 3,495 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,812 ms | 2,857 ms | 2,862 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,789 ms | 3,297 ms | 3,353 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 8d39c1baa52439c339a2b27f3fa4b6df43775eac
- Workflow ref: main
- Workflow SHA: 8d39c1baa52439c339a2b27f3fa4b6df43775eac
- Kova repository: openclaw/Kova
- Kova ref: 2b02b7d33418db0c6952c4cf8fe8a608e7964859
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8257116203](https://github.com/openclaw/openclaw/actions/runs/29183159716/artifacts/8257116203); its checksum is published under the bundles directory.
