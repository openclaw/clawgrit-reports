# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260816-111256-692c17
- Generated: 2026-08-16T11:19:50.120Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 12, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 1,099 MB | 1,105 MB | 1,106 MB |
| fresh-install | fresh | Gateway RSS | 1,099 MB | 1,105 MB | 1,106 MB |
| fresh-install | fresh | Max CPU | 159 % | 159 % | 159 % |
| fresh-install | fresh | Event Loop Max | 10 ms | 10 ms | 10 ms |
| fresh-install | onboarded-user | Primary RSS | 1,108 MB | 1,111 MB | 1,111 MB |
| fresh-install | onboarded-user | Gateway RSS | 1,108 MB | 1,111 MB | 1,111 MB |
| fresh-install | onboarded-user | Max CPU | 156 % | 158 % | 158 % |
| fresh-install | onboarded-user | Event Loop Max | 10 ms | 10 ms | 10 ms |
| bundled-plugin-startup | fresh | Primary RSS | 1,105 MB | 1,210 MB | 1,221 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 1,105 MB | 1,210 MB | 1,221 MB |
| bundled-plugin-startup | fresh | Max CPU | 161 % | 162 % | 162 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 9 ms | 10 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 926 MB | 944 MB | 946 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 153 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,278 ms | 3,284 ms | 3,284 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,293 ms | 3,300 ms | 3,301 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,964 ms | 2,995 ms | 2,998 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,160 ms | 3,168 ms | 3,169 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,139 MB | 1,146 MB | 1,147 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,139 MB | 1,146 MB | 1,147 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 157 % | 157 % | 157 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10 ms | 10.1 ms | 10.1 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | peakRssMb | 1,099 | <= 1050 |
| fresh-install | fresh | peakRssMb | 1,106 | <= 1050 |
| fresh-install | fresh | peakRssMb | 1,096 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,111 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,108 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,101 | <= 1050 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,105 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,221 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,094 | <= 1000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,147 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,102 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,139 | <= 1050 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | FAIL |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
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
- Tested ref: 9fee8d7a0ec9ded11d5a9254f24f5e0a32e5d126
- Tested SHA: 9fee8d7a0ec9ded11d5a9254f24f5e0a32e5d126
- Workflow ref: main
- Workflow SHA: 0c546979b2ac833498e56ef8d58ac2bcda67b414
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

The complete Kova bundle remains in [Actions artifact 9262789310](https://github.com/openclaw/openclaw/actions/runs/31943664838/artifacts/9262789310); its checksum is published under the bundles directory.
