# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260816-064030-ec26b8
- Generated: 2026-08-16T06:47:33.682Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 12, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 1,114 MB | 1,143 MB | 1,146 MB |
| fresh-install | fresh | Gateway RSS | 1,114 MB | 1,143 MB | 1,146 MB |
| fresh-install | fresh | Max CPU | 156 % | 160 % | 160 % |
| fresh-install | fresh | Event Loop Max | 10 ms | 11.7 ms | 11.8 ms |
| fresh-install | onboarded-user | Primary RSS | 1,102 MB | 1,147 MB | 1,152 MB |
| fresh-install | onboarded-user | Gateway RSS | 1,102 MB | 1,147 MB | 1,152 MB |
| fresh-install | onboarded-user | Max CPU | 156 % | 157 % | 157 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 8.6 ms | 9.6 ms |
| bundled-plugin-startup | fresh | Primary RSS | 1,135 MB | 1,153 MB | 1,155 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 1,135 MB | 1,153 MB | 1,155 MB |
| bundled-plugin-startup | fresh | Max CPU | 160 % | 161 % | 161 % |
| bundled-plugin-startup | fresh | Event Loop Max | 10 ms | 12.2 ms | 12.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 940 MB | 944 MB | 945 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,260 ms | 3,340 ms | 3,349 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,271 ms | 3,355 ms | 3,364 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,052 ms | 3,054 ms | 3,054 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,151 ms | 3,222 ms | 3,230 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,116 MB | 1,137 MB | 1,140 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,116 MB | 1,137 MB | 1,140 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 155 % | 157 % | 157 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10 ms | 12.2 ms | 12.4 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | peakRssMb | 1,114 | <= 1050 |
| fresh-install | fresh | peakRssMb | 1,105 | <= 1050 |
| fresh-install | fresh | peakRssMb | 1,146 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,102 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,152 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,102 | <= 1050 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,104 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,135 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,155 | <= 1000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,116 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,104 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,140 | <= 1050 |

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
- Tested ref: 1a357982cda3599ed641eceec63497da6e126944
- Tested SHA: 1a357982cda3599ed641eceec63497da6e126944
- Workflow ref: main
- Workflow SHA: a4407f638af0d0147e3712eb6202ba7bf5d3d7fc
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

The complete Kova bundle remains in [Actions artifact 9259632368](https://github.com/openclaw/openclaw/actions/runs/31931933815/artifacts/9259632368); its checksum is published under the bundles directory.
