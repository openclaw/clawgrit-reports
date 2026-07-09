# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-09T224801Z
- Generated: 2026-07-09T22:56:32.885Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 17, FAIL: 1
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 6,169 ms | 7,568 ms | 7,723 ms |
| fresh-install | fresh | TCP Listening | 6,017 ms | 7,394 ms | 7,547 ms |
| fresh-install | fresh | Health p95 | 23 ms | 28.4 ms | 29 ms |
| fresh-install | fresh | Primary RSS | 857 MB | 882 MB | 884 MB |
| fresh-install | fresh | Gateway RSS | 857 MB | 882 MB | 884 MB |
| fresh-install | fresh | Max CPU | 70.1 % | 120 % | 125 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Health Ready | 5,971 ms | 6,165 ms | 6,187 ms |
| fresh-install | onboarded-user | TCP Listening | 5,784 ms | 5,996 ms | 6,020 ms |
| fresh-install | onboarded-user | Health p95 | 28 ms | 36.1 ms | 37 ms |
| fresh-install | onboarded-user | Primary RSS | 871 MB | 888 MB | 890 MB |
| fresh-install | onboarded-user | Gateway RSS | 871 MB | 888 MB | 890 MB |
| fresh-install | onboarded-user | Max CPU | 69 % | 70.9 % | 71.1 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 6,100 ms | 6,543 ms | 6,592 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 6,017 ms | 6,478 ms | 6,529 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 28 ms | 29.8 ms | 30 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 863 MB | 864 MB | 865 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 863 MB | 864 MB | 865 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 65.7 % | 96.6 % | 100 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 14.3 ms | 15.9 ms |
| bundled-plugin-startup | fresh | Health Ready | 1,658 ms | 1,896 ms | 1,922 ms |
| bundled-plugin-startup | fresh | TCP Listening | 1,506 ms | 1,732 ms | 1,757 ms |
| bundled-plugin-startup | fresh | Health p95 | 5 ms | 5 ms | 5 ms |
| bundled-plugin-startup | fresh | Primary RSS | 670 MB | 678 MB | 679 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 670 MB | 678 MB | 679 MB |
| bundled-plugin-startup | fresh | Max CPU | 134 % | 137 % | 137 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 737 MB | 795 MB | 802 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 141 % | 148 % | 148 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,285 ms | 4,018 ms | 4,100 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,018 ms | 3,269 ms | 3,297 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,059 ms | 4,054 ms | 4,164 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,085 ms | 3,815 ms | 3,896 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 6,467 ms | 7,267 ms | 7,356 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 6,281 ms | 7,184 ms | 7,284 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 89 ms | 94.4 ms | 95 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 868 MB | 917 MB | 923 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 868 MB | 917 MB | 923 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 110 % | 131 % | 133 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | finalGatewayState | backoff | running |
| bundled-plugin-startup | fresh | readinessClassification | hard-failure | ready |

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
- Tested ref: f86df3bae85c9668e368d40d432a019991739cc3
- Tested SHA: f86df3bae85c9668e368d40d432a019991739cc3
- Workflow ref: codex/perf-baseline-publisher-v2
- Workflow SHA: f86df3bae85c9668e368d40d432a019991739cc3
- Kova repository: openclaw/Kova
- Kova ref: 4c649bfe779fb0bf9a2e33cf6fcf7d145bc40907
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.5
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message
