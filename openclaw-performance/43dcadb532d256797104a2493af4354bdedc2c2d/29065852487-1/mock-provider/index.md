# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-10T030036Z
- Generated: 2026-07-10T03:07:51.760Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 17, FAIL: 1
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 9,467 ms | 10,088 ms | 10,157 ms |
| fresh-install | fresh | TCP Listening | 9,302 ms | 10,019 ms | 10,099 ms |
| fresh-install | fresh | Health p95 | 59 ms | 494 ms | 542 ms |
| fresh-install | fresh | Primary RSS | 853 MB | 866 MB | 867 MB |
| fresh-install | fresh | Gateway RSS | 853 MB | 866 MB | 867 MB |
| fresh-install | fresh | Max CPU | 130 % | 133 % | 133 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Health Ready | 7,172 ms | 7,188 ms | 7,190 ms |
| fresh-install | onboarded-user | TCP Listening | 7,022 ms | 7,030 ms | 7,031 ms |
| fresh-install | onboarded-user | Health p95 | 33 ms | 33.9 ms | 34 ms |
| fresh-install | onboarded-user | Primary RSS | 869 MB | 874 MB | 875 MB |
| fresh-install | onboarded-user | Gateway RSS | 869 MB | 874 MB | 875 MB |
| fresh-install | onboarded-user | Max CPU | 55.3 % | 60.2 % | 60.7 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 9.4 ms | 10.4 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 7,051 ms | 7,825 ms | 7,911 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 7,020 ms | 7,708 ms | 7,784 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 23 ms | 24.8 ms | 25 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 890 MB | 901 MB | 902 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 890 MB | 901 MB | 902 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 55.7 % | 59.3 % | 59.7 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Health Ready | 8,781 ms | 10,260 ms | 10,424 ms |
| bundled-plugin-startup | fresh | TCP Listening | 8,778 ms | 10,126 ms | 10,276 ms |
| bundled-plugin-startup | fresh | Health p95 | 13 ms | 22.9 ms | 24 ms |
| bundled-plugin-startup | fresh | Primary RSS | 854 MB | 998 MB | 1,014 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 854 MB | 998 MB | 1,014 MB |
| bundled-plugin-startup | fresh | Max CPU | 49.5 % | 95 % | 100 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 747 MB | 773 MB | 776 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 139 % | 140 % | 140 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,501 ms | 2,518 ms | 2,520 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,496 ms | 2,520 ms | 2,523 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,479 ms | 2,499 ms | 2,501 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,409 ms | 2,423 ms | 2,424 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 8,054 ms | 8,084 ms | 8,087 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 8,017 ms | 8,021 ms | 8,021 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 28 ms | 30.7 ms | 31 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 876 MB | 879 MB | 880 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 876 MB | 879 MB | 880 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 118 % | 192 % | 200 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,014 | <= 950 |

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
- Tested ref: 43dcadb532d256797104a2493af4354bdedc2c2d
- Tested SHA: 43dcadb532d256797104a2493af4354bdedc2c2d
- Workflow ref: main
- Workflow SHA: 2b3dc3042ff7c0a97acd478bca364309ed83dfe2
- Kova repository: openclaw/Kova
- Kova ref: a2dd84e7d65507e614afaff850d3932d18c859b6
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.5
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message
