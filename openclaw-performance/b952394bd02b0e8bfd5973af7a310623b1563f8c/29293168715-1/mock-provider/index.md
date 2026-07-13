# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260713-232943-33e3cb
- Generated: 2026-07-13T23:39:35.159Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 11, FAIL: 7
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 834 MB | 836 MB | 836 MB |
| fresh-install | fresh | Gateway RSS | 834 MB | 836 MB | 836 MB |
| fresh-install | fresh | Max CPU | 156 % | 165 % | 166 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 835 MB | 836 MB | 836 MB |
| fresh-install | onboarded-user | Gateway RSS | 835 MB | 836 MB | 836 MB |
| fresh-install | onboarded-user | Max CPU | 141 % | 156 % | 158 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 822 MB | 827 MB | 828 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 822 MB | 827 MB | 828 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 157 % | 158 % | 158 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 9.6 ms | 11.5 ms | 11.7 ms |
| bundled-plugin-startup | fresh | Primary RSS | 835 MB | 836 MB | 836 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 835 MB | 836 MB | 836 MB |
| bundled-plugin-startup | fresh | Max CPU | 160 % | 160 % | 160 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 9.4 ms | 10.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 841 MB | 916 MB | 924 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 176 % | 181 % | 181 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,233 ms | 5,832 ms | 5,898 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,650 ms | 5,213 ms | 5,276 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,568 ms | 5,824 ms | 5,964 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,059 ms | 5,632 ms | 5,696 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 834 MB | 847 MB | 848 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 834 MB | 847 MB | 848 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 148 % | 158 % | 159 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 12.6 ms | 14 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | resourceByRole.plugin-cli.peakRssMb | 891 | <= 800 |
| fresh-install | onboarded-user | resourceByRole.plugin-cli.peakRssMb | 833 | <= 800 |
| bundled-plugin-startup | fresh | resourceByRole.plugin-cli.peakRssMb | 810 | <= 800 |
| bundled-plugin-startup | fresh | resourceByRole.plugin-cli.peakRssMb | 824 | <= 800 |
| bundled-plugin-startup | fresh | resourceByRole.plugin-cli.peakRssMb | 825 | <= 800 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 924 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 924 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 924 | <= 900 |
| gateway-performance | many-bundled-plugins | resourceByRole.plugin-cli.peakRssMb | 860 | <= 800 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: b952394bd02b0e8bfd5973af7a310623b1563f8c
- Tested SHA: b952394bd02b0e8bfd5973af7a310623b1563f8c
- Workflow ref: release-ci/perf-d361b4ccb857-1783985334
- Workflow SHA: d361b4ccb8574525171da4952954f875a3c91897
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

The complete Kova bundle remains in [Actions artifact 8295955277](https://github.com/openclaw/openclaw/actions/runs/29293168715/artifacts/8295955277); its checksum is published under the bundles directory.
