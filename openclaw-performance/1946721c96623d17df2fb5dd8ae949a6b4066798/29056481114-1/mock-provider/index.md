# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-09T230752Z
- Generated: 2026-07-09T23:15:32.570Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 15, FAIL: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 6,334 ms | 7,490 ms | 7,618 ms |
| fresh-install | fresh | TCP Listening | 6,279 ms | 7,429 ms | 7,557 ms |
| fresh-install | fresh | Health p95 | 22 ms | 51.7 ms | 55 ms |
| fresh-install | fresh | Primary RSS | 840 MB | 869 MB | 872 MB |
| fresh-install | fresh | Gateway RSS | 840 MB | 869 MB | 872 MB |
| fresh-install | fresh | Max CPU | 72.3 % | 120 % | 125 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Health Ready | 6,336 ms | 10,804 ms | 11,300 ms |
| fresh-install | onboarded-user | TCP Listening | 6,279 ms | 10,795 ms | 11,297 ms |
| fresh-install | onboarded-user | Health p95 | 47 ms | 48.8 ms | 49 ms |
| fresh-install | onboarded-user | Primary RSS | 869 MB | 893 MB | 896 MB |
| fresh-install | onboarded-user | Gateway RSS | 869 MB | 893 MB | 896 MB |
| fresh-install | onboarded-user | Max CPU | 68.5 % | 96.9 % | 100 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 7,074 ms | 7,645 ms | 7,708 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 7,034 ms | 7,517 ms | 7,571 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 79 ms | 117 ms | 121 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 832 MB | 840 MB | 841 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 832 MB | 840 MB | 841 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 73.3 % | 97.3 % | 100 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Health Ready | 6,412 ms | 7,547 ms | 7,673 ms |
| bundled-plugin-startup | fresh | TCP Listening | 6,286 ms | 7,433 ms | 7,560 ms |
| bundled-plugin-startup | fresh | Health p95 | 43 ms | 534 ms | 588 ms |
| bundled-plugin-startup | fresh | Primary RSS | 862 MB | 869 MB | 870 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 862 MB | 869 MB | 870 MB |
| bundled-plugin-startup | fresh | Max CPU | 100 % | 100 % | 100 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 776 MB | 785 MB | 786 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 148 % | 152 % | 152 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,549 ms | 5,024 ms | 5,077 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,606 ms | 4,947 ms | 5,096 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,605 ms | 4,698 ms | 4,708 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,323 ms | 4,752 ms | 4,799 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 6,286 ms | 7,098 ms | 7,188 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 6,283 ms | 6,960 ms | 7,035 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 74 ms | 101 ms | 104 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 836 MB | 880 MB | 885 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 836 MB | 880 MB | 885 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 100 % | 109 % | 110 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 17.2 ms | 19.1 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 812 | <= 800 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 870 | <= 800 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 862 | <= 800 |

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
- Tested ref: 1946721c96623d17df2fb5dd8ae949a6b4066798
- Tested SHA: 1946721c96623d17df2fb5dd8ae949a6b4066798
- Workflow ref: codex/perf-baseline-publisher-v2
- Workflow SHA: 1946721c96623d17df2fb5dd8ae949a6b4066798
- Kova repository: openclaw/Kova
- Kova ref: 886a0005269de56632491cfac89bf55256fff778
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.5
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message
