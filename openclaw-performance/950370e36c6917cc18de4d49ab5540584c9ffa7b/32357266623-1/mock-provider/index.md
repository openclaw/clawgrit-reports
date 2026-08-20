# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260820-100759-0e6f70
- Generated: 2026-08-20T10:18:22.289Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 5, FAIL: 10
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 1,088 MB | 1,119 MB | 1,122 MB |
| fresh-install | fresh | Gateway RSS | 1,088 MB | 1,119 MB | 1,122 MB |
| fresh-install | fresh | Max CPU | 157 % | 164 % | 165 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 8.9 ms | 9.9 ms |
| fresh-install | onboarded-user | Primary RSS | 1,131 MB | 1,131 MB | 1,131 MB |
| fresh-install | onboarded-user | Gateway RSS | 1,131 MB | 1,131 MB | 1,131 MB |
| fresh-install | onboarded-user | Max CPU | 159 % | 162 % | 162 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 8.4 ms | 9.3 ms |
| bundled-plugin-startup | fresh | Primary RSS | 1,091 MB | 1,098 MB | 1,098 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 1,091 MB | 1,098 MB | 1,098 MB |
| bundled-plugin-startup | fresh | Max CPU | 159 % | 164 % | 164 % |
| bundled-plugin-startup | fresh | Event Loop Max | 9.9 ms | 10.4 ms | 10.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 949 MB | 993 MB | 998 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 169 % | 172 % | 172 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,336 ms | 6,726 ms | 6,770 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,406 ms | 6,750 ms | 6,788 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,660 ms | 6,349 ms | 6,425 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,999 ms | 6,406 ms | 6,451 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,095 MB | 1,100 MB | 1,101 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,095 MB | 1,100 MB | 1,101 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 156 % | 157 % | 157 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 8.4 ms | 9.4 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | peakRssMb | 1,122 | <= 1050 |
| fresh-install | fresh | peakRssMb | 1,088 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,131 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,131 | <= 1050 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,091 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,061 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,098 | <= 1000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,087 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,101 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,095 | <= 1050 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 950370e36c6917cc18de4d49ab5540584c9ffa7b
- Tested SHA: 950370e36c6917cc18de4d49ab5540584c9ffa7b
- Workflow ref: main
- Workflow SHA: 975228306010f14b0517539f4fe818ac398d35ea
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9402504507](https://github.com/openclaw/openclaw/actions/runs/32357266623/artifacts/9402504507); its checksum is published under the bundles directory.
