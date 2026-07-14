# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260714-091226-4bf552
- Generated: 2026-07-14T09:18:59.042Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 17, FAIL: 1
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 831 MB | 834 MB | 834 MB |
| fresh-install | fresh | Gateway RSS | 831 MB | 834 MB | 834 MB |
| fresh-install | fresh | Max CPU | 149 % | 154 % | 154 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 840 MB | 842 MB | 842 MB |
| fresh-install | onboarded-user | Gateway RSS | 840 MB | 842 MB | 842 MB |
| fresh-install | onboarded-user | Max CPU | 152 % | 153 % | 153 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 826 MB | 828 MB | 828 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 826 MB | 828 MB | 828 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 133 % | 283 % | 300 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Primary RSS | 832 MB | 849 MB | 851 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 832 MB | 849 MB | 851 MB |
| bundled-plugin-startup | fresh | Max CPU | 162 % | 166 % | 166 % |
| bundled-plugin-startup | fresh | Event Loop Max | 9.3 ms | 9.6 ms | 9.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 891 MB | 893 MB | 893 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 164 % | 164 % | 164 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,294 ms | 3,307 ms | 3,309 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,267 ms | 3,309 ms | 3,314 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,275 ms | 3,295 ms | 3,297 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,181 ms | 3,187 ms | 3,188 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 844 MB | 877 MB | 881 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 844 MB | 877 MB | 881 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 155 % | 163 % | 164 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 9.8 ms | 10.1 ms | 10.2 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-runtime-deps | missing-plugin-index | resourceByRole.gateway.maxCpuPercent | 300 | <= 250 |

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
| bundled-runtime-deps | missing-plugin-index | FAIL |  |
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
- Tested ref: 6e1820f20e1371d9912cdfbaa75a3a9d193fb17a
- Tested SHA: 6e1820f20e1371d9912cdfbaa75a3a9d193fb17a
- Workflow ref: main
- Workflow SHA: 7ab879b45c81bf27b0e63655471c9227a5609cca
- Kova repository: openclaw/Kova
- Kova ref: 678ff0b764b8786c2e436efbe4efac7d9aac10f8
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8305995659](https://github.com/openclaw/openclaw/actions/runs/29320790792/artifacts/8305995659); its checksum is published under the bundles directory.
