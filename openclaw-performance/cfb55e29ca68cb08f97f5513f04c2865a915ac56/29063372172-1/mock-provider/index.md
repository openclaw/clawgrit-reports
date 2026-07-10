# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-10T015338Z
- Generated: 2026-07-10T02:00:48.553Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1, PASS: 17
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 7,529 ms | 8,618 ms | 8,739 ms |
| fresh-install | fresh | TCP Listening | 7,527 ms | 8,447 ms | 8,549 ms |
| fresh-install | fresh | Health p95 | 30 ms | 32.7 ms | 33 ms |
| fresh-install | fresh | Primary RSS | 853 MB | 866 MB | 868 MB |
| fresh-install | fresh | Gateway RSS | 853 MB | 866 MB | 868 MB |
| fresh-install | fresh | Max CPU | 54.3 % | 117 % | 124 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Health Ready | 7,679 ms | 7,994 ms | 8,029 ms |
| fresh-install | onboarded-user | TCP Listening | 7,523 ms | 7,977 ms | 8,027 ms |
| fresh-install | onboarded-user | Health p95 | 33 ms | 49.2 ms | 51 ms |
| fresh-install | onboarded-user | Primary RSS | 878 MB | 879 MB | 880 MB |
| fresh-install | onboarded-user | Gateway RSS | 878 MB | 879 MB | 880 MB |
| fresh-install | onboarded-user | Max CPU | 53.6 % | 95.4 % | 100 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 7,272 ms | 8,937 ms | 9,122 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 7,270 ms | 8,859 ms | 9,036 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 25 ms | 25 ms | 25 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 868 MB | 875 MB | 876 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 868 MB | 875 MB | 876 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 48 % | 55.7 % | 56.5 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Health Ready | 8,107 ms | 8,305 ms | 8,327 ms |
| bundled-plugin-startup | fresh | TCP Listening | 8,022 ms | 8,245 ms | 8,270 ms |
| bundled-plugin-startup | fresh | Health p95 | 11 ms | 17.3 ms | 18 ms |
| bundled-plugin-startup | fresh | Primary RSS | 853 MB | 869 MB | 871 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 853 MB | 869 MB | 871 MB |
| bundled-plugin-startup | fresh | Max CPU | 47.2 % | 52 % | 52.5 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 749 MB | 751 MB | 751 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 141 % | 143 % | 143 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,542 ms | 2,546 ms | 2,546 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,500 ms | 2,541 ms | 2,545 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,492 ms | 2,544 ms | 2,550 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,446 ms | 2,449 ms | 2,450 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 8,329 ms | 8,955 ms | 9,025 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 8,286 ms | 8,949 ms | 9,023 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 24 ms | 28.5 ms | 29 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 857 MB | 862 MB | 862 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 857 MB | 862 MB | 862 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 109 % | 112 % | 112 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | providerTimeoutMentions | 1 | <= 0 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | FAIL |  |
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
- Tested ref: cfb55e29ca68cb08f97f5513f04c2865a915ac56
- Tested SHA: cfb55e29ca68cb08f97f5513f04c2865a915ac56
- Workflow ref: main
- Workflow SHA: 25eaa53a8acb7adea38bfbe4e4b8e0598918b108
- Kova repository: openclaw/Kova
- Kova ref: 6a1c20bf818f71f93d6d4cad7dabac74a2996bc0
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.5
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message
