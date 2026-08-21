# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260821-052037-33925c
- Generated: 2026-08-21T05:23:33.826Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,083 MB | 1,111 MB | 1,114 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,083 MB | 1,111 MB | 1,114 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 150 % | 150 % | 150 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 8.4 ms | 9.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 907 MB | 939 MB | 943 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 154 % | 158 % | 158 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,213 ms | 4,315 ms | 4,326 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,221 ms | 4,344 ms | 4,358 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,775 ms | 4,024 ms | 4,052 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,016 ms | 4,132 ms | 4,144 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,081 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,114 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,083 | <= 1050 |

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
- Tested SHA: 76bb7ff2b667dd71f06c6a5c12ea851807b2acee
- Workflow ref: main
- Workflow SHA: 76bb7ff2b667dd71f06c6a5c12ea851807b2acee
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

The complete Kova bundle remains in [Actions artifact 9435457249](https://github.com/openclaw/openclaw/actions/runs/32450151239/artifacts/9435457249); its checksum is published under the bundles directory.
