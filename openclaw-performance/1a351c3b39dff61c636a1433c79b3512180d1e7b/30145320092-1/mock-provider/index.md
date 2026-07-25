# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260725-051218-c963dd
- Generated: 2026-07-25T05:19:46.848Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 15, FAIL: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 879 MB | 955 MB | 963 MB |
| fresh-install | fresh | Gateway RSS | 879 MB | 955 MB | 963 MB |
| fresh-install | fresh | Max CPU | 150 % | 154 % | 154 % |
| fresh-install | fresh | Event Loop Max | 10.5 ms | 14.2 ms | 14.7 ms |
| fresh-install | onboarded-user | Primary RSS | 961 MB | 974 MB | 975 MB |
| fresh-install | onboarded-user | Gateway RSS | 961 MB | 974 MB | 975 MB |
| fresh-install | onboarded-user | Max CPU | 152 % | 152 % | 152 % |
| fresh-install | onboarded-user | Event Loop Max | 12.3 ms | 13.7 ms | 13.8 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 960 MB | 960 MB | 960 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 960 MB | 960 MB | 960 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 152 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 15.8 ms | 15.9 ms | 15.9 ms |
| bundled-plugin-startup | fresh | Primary RSS | 972 MB | 987 MB | 988 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 972 MB | 987 MB | 988 MB |
| bundled-plugin-startup | fresh | Max CPU | 154 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 15.4 ms | 18.5 ms | 18.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 904 MB | 940 MB | 944 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,623 ms | 4,659 ms | 4,663 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,618 ms | 4,661 ms | 4,666 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,609 ms | 4,622 ms | 4,623 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,163 ms | 4,185 ms | 4,188 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 930 MB | 934 MB | 935 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 930 MB | 934 MB | 935 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 18.4 ms | 24.2 ms | 24.8 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 953 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 972 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 988 | <= 950 |

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
| bundled-plugin-startup | fresh | FAIL |  |
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
- Tested ref: 1a351c3b39dff61c636a1433c79b3512180d1e7b
- Tested SHA: 1a351c3b39dff61c636a1433c79b3512180d1e7b
- Workflow ref: main
- Workflow SHA: 5f63f744eadf214c40edc7326f105985af25bbf3
- Kova repository: openclaw/Kova
- Kova ref: 1bf080f6dbf8800a3187591493f2551824e4ccc7
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8615871677](https://github.com/openclaw/openclaw/actions/runs/30145320092/artifacts/8615871677); its checksum is published under the bundles directory.
