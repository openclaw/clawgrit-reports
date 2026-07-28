# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260728-052836-2bf56f
- Generated: 2026-07-28T05:36:24.567Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 16, FAIL: 2
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 953 MB | 961 MB | 962 MB |
| fresh-install | fresh | Gateway RSS | 953 MB | 961 MB | 962 MB |
| fresh-install | fresh | Max CPU | 156 % | 157 % | 157 % |
| fresh-install | fresh | Event Loop Max | 15.3 ms | 15.9 ms | 15.9 ms |
| fresh-install | onboarded-user | Primary RSS | 969 MB | 969 MB | 970 MB |
| fresh-install | onboarded-user | Gateway RSS | 969 MB | 969 MB | 970 MB |
| fresh-install | onboarded-user | Max CPU | 156 % | 156 % | 156 % |
| fresh-install | onboarded-user | Event Loop Max | 11 ms | 14.6 ms | 15 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 1,019 MB | 1,028 MB | 1,029 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 1,019 MB | 1,028 MB | 1,029 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 155 % | 156 % | 156 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 15.8 ms | 18.7 ms | 19 ms |
| bundled-plugin-startup | fresh | Primary RSS | 1,023 MB | 1,053 MB | 1,057 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 1,023 MB | 1,053 MB | 1,057 MB |
| bundled-plugin-startup | fresh | Max CPU | 157 % | 157 % | 157 % |
| bundled-plugin-startup | fresh | Event Loop Max | 17.6 ms | 20.7 ms | 21 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 990 MB | 991 MB | 992 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 169 % | 171 % | 172 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,741 ms | 3,794 ms | 3,800 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,739 ms | 3,787 ms | 3,792 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,741 ms | 3,794 ms | 3,800 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,616 ms | 3,668 ms | 3,674 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,019 MB | 1,028 MB | 1,030 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,019 MB | 1,028 MB | 1,030 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 156 % | 157 % | 157 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 15 ms | 20.4 ms | 21 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,023 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,057 | <= 1000 |

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
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: c2723d8f34cd8d35e972b8c9df5aab34fa2bda93
- Tested SHA: c2723d8f34cd8d35e972b8c9df5aab34fa2bda93
- Workflow ref: main
- Workflow SHA: add9205d1a06e0b4f148d6f1546b1d8f21af1d99
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

The complete Kova bundle remains in [Actions artifact 8677751079](https://github.com/openclaw/openclaw/actions/runs/30331680776/artifacts/8677751079); its checksum is published under the bundles directory.
