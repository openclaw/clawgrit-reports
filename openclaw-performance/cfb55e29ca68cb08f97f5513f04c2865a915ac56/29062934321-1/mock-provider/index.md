# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-10T014211Z
- Generated: 2026-07-10T01:49:35.355Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 17, FAIL: 1
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 8,120 ms | 8,863 ms | 8,945 ms |
| fresh-install | fresh | TCP Listening | 8,027 ms | 8,722 ms | 8,799 ms |
| fresh-install | fresh | Health p95 | 21 ms | 41.7 ms | 44 ms |
| fresh-install | fresh | Primary RSS | 830 MB | 849 MB | 851 MB |
| fresh-install | fresh | Gateway RSS | 830 MB | 849 MB | 851 MB |
| fresh-install | fresh | Max CPU | 111 % | 119 % | 120 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 10.6 ms | 11.8 ms |
| fresh-install | onboarded-user | Health Ready | 9,072 ms | 10,665 ms | 10,842 ms |
| fresh-install | onboarded-user | TCP Listening | 9,022 ms | 10,599 ms | 10,774 ms |
| fresh-install | onboarded-user | Health p95 | 21 ms | 28.2 ms | 29 ms |
| fresh-install | onboarded-user | Primary RSS | 876 MB | 879 MB | 879 MB |
| fresh-install | onboarded-user | Gateway RSS | 876 MB | 879 MB | 879 MB |
| fresh-install | onboarded-user | Max CPU | 46.9 % | 48.7 % | 48.9 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 8,380 ms | 8,867 ms | 8,921 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 8,278 ms | 8,724 ms | 8,773 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 32 ms | 35.6 ms | 36 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 862 MB | 883 MB | 885 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 862 MB | 883 MB | 885 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 50.9 % | 113 % | 120 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Health Ready | 8,215 ms | 9,760 ms | 9,932 ms |
| bundled-plugin-startup | fresh | TCP Listening | 8,034 ms | 9,617 ms | 9,793 ms |
| bundled-plugin-startup | fresh | Health p95 | 22 ms | 40.9 ms | 43 ms |
| bundled-plugin-startup | fresh | Primary RSS | 871 MB | 1,021 MB | 1,037 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 871 MB | 1,021 MB | 1,037 MB |
| bundled-plugin-startup | fresh | Max CPU | 47.2 % | 52.5 % | 53.1 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 705 MB | 719 MB | 720 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 142 % | 142 % | 142 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,677 ms | 2,727 ms | 2,732 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,682 ms | 2,728 ms | 2,733 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,574 ms | 2,705 ms | 2,719 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,578 ms | 2,616 ms | 2,621 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 8,778 ms | 8,918 ms | 8,933 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 8,769 ms | 8,775 ms | 8,776 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 45 ms | 52.2 ms | 53 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 862 MB | 876 MB | 878 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 862 MB | 876 MB | 878 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 113 % | 114 % | 114 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,037 | <= 950 |

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
| bundled-plugin-startup | fresh | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: cfb55e29ca68cb08f97f5513f04c2865a915ac56
- Tested SHA: cfb55e29ca68cb08f97f5513f04c2865a915ac56
- Workflow ref: main
- Workflow SHA: cbc087dcc5aa949e69e6d63620a22a49ab4ac535
- Kova repository: openclaw/Kova
- Kova ref: 6a1c20bf818f71f93d6d4cad7dabac74a2996bc0
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.5
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message
