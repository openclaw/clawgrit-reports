# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260726-093052-2487cf
- Generated: 2026-07-26T09:38:31.544Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 17, FAIL: 1
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 889 MB | 890 MB | 890 MB |
| fresh-install | fresh | Gateway RSS | 889 MB | 890 MB | 890 MB |
| fresh-install | fresh | Max CPU | 155 % | 155 % | 155 % |
| fresh-install | fresh | Event Loop Max | 12.2 ms | 14.7 ms | 15 ms |
| fresh-install | onboarded-user | Primary RSS | 902 MB | 907 MB | 907 MB |
| fresh-install | onboarded-user | Gateway RSS | 902 MB | 907 MB | 907 MB |
| fresh-install | onboarded-user | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 12.8 ms | 15.4 ms | 15.6 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 981 MB | 983 MB | 983 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 981 MB | 983 MB | 983 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 154 % | 154 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 15 ms | 15.5 ms | 15.5 ms |
| bundled-plugin-startup | fresh | Primary RSS | 992 MB | 1,003 MB | 1,004 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 992 MB | 1,003 MB | 1,004 MB |
| bundled-plugin-startup | fresh | Max CPU | 153 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 20 ms | 21.4 ms | 21.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 892 MB | 939 MB | 944 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 153 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,721 ms | 4,738 ms | 4,739 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,709 ms | 4,738 ms | 4,741 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,708 ms | 4,721 ms | 4,722 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,217 ms | 4,225 ms | 4,226 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 947 MB | 955 MB | 956 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 947 MB | 955 MB | 956 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 15.5 ms | 17.5 ms | 17.7 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,004 | <= 1000 |

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
| bundled-plugin-startup | fresh | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 9757e52c29e97b325eef338a18285983d4d29d0a
- Tested SHA: 9757e52c29e97b325eef338a18285983d4d29d0a
- Workflow ref: main
- Workflow SHA: fe847911c09f2fa456ab2b44b10340b925e07601
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

The complete Kova bundle remains in [Actions artifact 8630360711](https://github.com/openclaw/openclaw/actions/runs/30196552045/artifacts/8630360711); its checksum is published under the bundles directory.
