# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-07-09T234224Z
- Generated: 2026-07-09T23:49:29.296Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 16, FAIL: 2
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Health Ready | 6,335 ms | 6,755 ms | 6,802 ms |
| fresh-install | fresh | TCP Listening | 6,278 ms | 6,744 ms | 6,796 ms |
| fresh-install | fresh | Health p95 | 27 ms | 28.8 ms | 29 ms |
| fresh-install | fresh | Primary RSS | 865 MB | 868 MB | 869 MB |
| fresh-install | fresh | Gateway RSS | 865 MB | 868 MB | 869 MB |
| fresh-install | fresh | Max CPU | 80 % | 122 % | 127 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Health Ready | 6,026 ms | 6,088 ms | 6,095 ms |
| fresh-install | onboarded-user | TCP Listening | 6,024 ms | 6,029 ms | 6,030 ms |
| fresh-install | onboarded-user | Health p95 | 50 ms | 51.8 ms | 52 ms |
| fresh-install | onboarded-user | Primary RSS | 828 MB | 858 MB | 862 MB |
| fresh-install | onboarded-user | Gateway RSS | 828 MB | 858 MB | 862 MB |
| fresh-install | onboarded-user | Max CPU | 100 % | 100 % | 100 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Health Ready | 6,058 ms | 6,484 ms | 6,531 ms |
| bundled-runtime-deps | missing-plugin-index | TCP Listening | 6,025 ms | 6,479 ms | 6,529 ms |
| bundled-runtime-deps | missing-plugin-index | Health p95 | 53 ms | 54.8 ms | 55 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 830 MB | 864 MB | 867 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 830 MB | 864 MB | 867 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 71.8 % | 82.2 % | 83.3 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Health Ready | 6,141 ms | 6,359 ms | 6,383 ms |
| bundled-plugin-startup | fresh | TCP Listening | 6,031 ms | 6,252 ms | 6,277 ms |
| bundled-plugin-startup | fresh | Health p95 | 10 ms | 49.6 ms | 54 ms |
| bundled-plugin-startup | fresh | Primary RSS | 662 MB | 849 MB | 869 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 662 MB | 849 MB | 869 MB |
| bundled-plugin-startup | fresh | Max CPU | 61.4 % | 111 % | 116 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 24.5 ms | 27.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 783 MB | 809 MB | 812 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 141 % | 146 % | 147 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,292 ms | 3,511 ms | 3,535 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,310 ms | 3,434 ms | 3,448 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,954 ms | 3,481 ms | 3,540 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,156 ms | 3,352 ms | 3,374 ms |
| gateway-performance | many-bundled-plugins | Health Ready | 6,200 ms | 6,803 ms | 6,870 ms |
| gateway-performance | many-bundled-plugins | TCP Listening | 6,034 ms | 6,712 ms | 6,787 ms |
| gateway-performance | many-bundled-plugins | Health p95 | 44 ms | 56.6 ms | 58 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 859 MB | 874 MB | 876 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 859 MB | 874 MB | 876 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 100 % | 100 % | 100 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 18 ms | 20 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | openclawOpenRequiredSpanCount | 1 | 0 |
| bundled-plugin-startup | fresh | openclawOpenRequiredSpanCount | 1 | 0 |

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
| bundled-plugin-startup | fresh | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 14556125f82bbcb7d466627ec2879b4ba12f5856
- Tested SHA: 14556125f82bbcb7d466627ec2879b4ba12f5856
- Workflow ref: codex/perf-baseline-publisher-v2
- Workflow SHA: 14556125f82bbcb7d466627ec2879b4ba12f5856
- Kova repository: openclaw/Kova
- Kova ref: 36dda3731db1e62fc4a1c47c43257c15cb173c7f
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.5
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message
