# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260823-052001-5289ca
- Generated: 2026-08-23T05:22:48.703Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,080 MB | 1,089 MB | 1,090 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,080 MB | 1,089 MB | 1,090 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 149 % | 151 % | 151 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 9.6 ms | 9.9 ms | 9.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 878 MB | 886 MB | 886 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 149 % | 150 % | 150 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,878 ms | 3,892 ms | 3,894 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,896 ms | 3,913 ms | 3,915 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,541 ms | 3,550 ms | 3,551 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,718 ms | 3,732 ms | 3,734 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | 212 | <= 200 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,090 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,080 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | 250 | <= 200 |

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
- Tested SHA: 4d696fbe0d2bf53b8f590743a325667ea94f3f41
- Workflow ref: main
- Workflow SHA: 4d696fbe0d2bf53b8f590743a325667ea94f3f41
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

The complete Kova bundle remains in [Actions artifact 9488144250](https://github.com/openclaw/openclaw/actions/runs/32620062599/artifacts/9488144250); its checksum is published under the bundles directory.
