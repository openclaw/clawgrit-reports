# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260822-051943-abbdc5
- Generated: 2026-08-22T05:22:24.192Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2, PASS: 4
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,062 MB | 1,069 MB | 1,070 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,062 MB | 1,069 MB | 1,070 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 149 % | 149 % | 149 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 9.4 ms | 10 ms | 10 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 886 MB | 933 MB | 938 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 155 % | 155 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,727 ms | 3,738 ms | 3,739 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,742 ms | 3,754 ms | 3,755 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,439 ms | 3,462 ms | 3,464 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,571 ms | 3,580 ms | 3,581 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,070 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,062 | <= 1050 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 500bb6031d1768425e99e1288b9c76807b21d52d
- Workflow ref: main
- Workflow SHA: 500bb6031d1768425e99e1288b9c76807b21d52d
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

The complete Kova bundle remains in [Actions artifact 9470931038](https://github.com/openclaw/openclaw/actions/runs/32554023430/artifacts/9470931038); its checksum is published under the bundles directory.
