# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260714-013518-732341
- Generated: 2026-07-14T01:42:05.414Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 16, FAIL: 2
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 836 MB | 842 MB | 843 MB |
| fresh-install | fresh | Gateway RSS | 836 MB | 842 MB | 843 MB |
| fresh-install | fresh | Max CPU | 137 % | 147 % | 148 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 841 MB | 844 MB | 844 MB |
| fresh-install | onboarded-user | Gateway RSS | 841 MB | 844 MB | 844 MB |
| fresh-install | onboarded-user | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 822 MB | 825 MB | 825 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 822 MB | 825 MB | 825 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 153 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 9.7 ms | 9.9 ms | 10 ms |
| bundled-plugin-startup | fresh | Primary RSS | 832 MB | 844 MB | 846 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 832 MB | 844 MB | 846 MB |
| bundled-plugin-startup | fresh | Max CPU | 135 % | 158 % | 160 % |
| bundled-plugin-startup | fresh | Event Loop Max | 9.3 ms | 9.9 ms | 10 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 922 MB | 928 MB | 929 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 166 % | 169 % | 169 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,662 ms | 3,762 ms | 3,773 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,572 ms | 3,778 ms | 3,801 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,500 ms | 3,650 ms | 3,667 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,524 ms | 3,652 ms | 3,666 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 836 MB | 837 MB | 837 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 836 MB | 837 MB | 837 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 156 % | 160 % | 160 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 9 ms | 10 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 922 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 929 | <= 900 |

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
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 3f1f572b2e96728efed5cdf18e9ce4579ebb7bb3
- Tested SHA: 3f1f572b2e96728efed5cdf18e9ce4579ebb7bb3
- Workflow ref: main
- Workflow SHA: e330e4a17d3c9705ff79da123efe259acd9bd0f3
- Kova repository: openclaw/Kova
- Kova ref: fce10ba3e06b32c783d9c99055f5422e03c88aa1
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8297909403](https://github.com/openclaw/openclaw/actions/runs/29298889143/artifacts/8297909403); its checksum is published under the bundles directory.
