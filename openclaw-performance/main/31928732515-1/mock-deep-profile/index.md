# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260816-052008-5e114b
- Generated: 2026-08-16T05:22:09.175Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1, PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,176 MB | 1,176 MB | 1,176 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,176 MB | 1,176 MB | 1,176 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 152 % | 152 % | 152 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 9.5 ms | 9.5 ms | 9.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,086 MB | 1,086 MB | 1,086 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 154 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,812 ms | 4,812 ms | 4,812 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,833 ms | 4,833 ms | 4,833 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,405 ms | 4,405 ms | 4,405 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,335 ms | 4,335 ms | 4,335 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,176 | <= 1050 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 78ca5fcfb61ea5f8f063822f4125214f46fc8491
- Workflow ref: main
- Workflow SHA: 78ca5fcfb61ea5f8f063822f4125214f46fc8491
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9258679048](https://github.com/openclaw/openclaw/actions/runs/31928732515/artifacts/9258679048); its checksum is published under the bundles directory.
