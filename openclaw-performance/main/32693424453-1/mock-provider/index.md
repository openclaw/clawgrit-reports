# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260824-052540-944476
- Generated: 2026-08-24T05:28:33.026Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,055 MB | 1,098 MB | 1,103 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,055 MB | 1,098 MB | 1,103 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 146 % | 148 % | 148 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 9.6 ms | 12 ms | 12.3 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 878 MB | 910 MB | 914 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 150 % | 150 % | 150 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,949 ms | 3,971 ms | 3,973 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,962 ms | 3,981 ms | 3,983 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,702 ms | 3,779 ms | 3,788 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,791 ms | 3,809 ms | 3,812 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,055 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,103 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | 241 | <= 200 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | 245 | <= 200 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: ca6fea301ba94144796fed67035dd97364679da4
- Workflow ref: main
- Workflow SHA: ca6fea301ba94144796fed67035dd97364679da4
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9508087733](https://github.com/openclaw/openclaw/actions/runs/32693424453/artifacts/9508087733); its checksum is published under the bundles directory.
