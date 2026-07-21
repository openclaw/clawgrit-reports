# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260721-074951-99a097
- Generated: 2026-07-21T07:55:48.367Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 817 MB | 828 MB | 829 MB |
| fresh-install | fresh | Gateway RSS | 817 MB | 828 MB | 829 MB |
| fresh-install | fresh | Max CPU | 151 % | 153 % | 153 % |
| fresh-install | fresh | Event Loop Max | 515 ms | 645 ms | 659 ms |
| fresh-install | onboarded-user | Primary RSS | 819 MB | 848 MB | 851 MB |
| fresh-install | onboarded-user | Gateway RSS | 819 MB | 848 MB | 851 MB |
| fresh-install | onboarded-user | Max CPU | 146 % | 148 % | 148 % |
| fresh-install | onboarded-user | Event Loop Max | 479 ms | 553 ms | 562 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 829 MB | 832 MB | 832 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 829 MB | 832 MB | 832 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 145 % | 150 % | 150 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 549 ms | 555 ms | 555 ms |
| bundled-plugin-startup | fresh | Primary RSS | 841 MB | 842 MB | 842 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 841 MB | 842 MB | 842 MB |
| bundled-plugin-startup | fresh | Max CPU | 139 % | 150 % | 151 % |
| bundled-plugin-startup | fresh | Event Loop Max | 508 ms | 632 ms | 646 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 856 MB | 867 MB | 868 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 158 % | 158 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,458 ms | 3,744 ms | 3,776 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,342 ms | 3,738 ms | 3,782 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,465 ms | 3,643 ms | 3,663 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,184 ms | 3,404 ms | 3,429 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 821 MB | 821 MB | 821 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 821 MB | 821 MB | 821 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 146 % | 149 % | 149 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 490 ms | 540 ms | 546 ms |

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
- Tested ref: 0f3a281d52d9eb9def3eb86d263c1fe0dd8a7b81
- Tested SHA: 0f3a281d52d9eb9def3eb86d263c1fe0dd8a7b81
- Workflow ref: main
- Workflow SHA: 9e0c5f94b5cdf0090a17b3f36c5a74c5b36a1c71
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

The complete Kova bundle remains in [Actions artifact 8487902770](https://github.com/openclaw/openclaw/actions/runs/29811840853/artifacts/8487902770); its checksum is published under the bundles directory.
