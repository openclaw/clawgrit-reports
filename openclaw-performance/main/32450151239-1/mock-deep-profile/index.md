# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260821-052037-0e73e2
- Generated: 2026-08-21T05:23:05.205Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1, PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,094 MB | 1,094 MB | 1,094 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,094 MB | 1,094 MB | 1,094 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10 ms | 10 ms | 10 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,168 MB | 1,168 MB | 1,168 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 156 % | 156 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,673 ms | 6,673 ms | 6,673 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,702 ms | 6,702 ms | 6,702 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,123 ms | 6,123 ms | 6,123 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,870 ms | 5,870 ms | 5,870 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,094 | <= 1050 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
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
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9435449549](https://github.com/openclaw/openclaw/actions/runs/32450151239/artifacts/9435449549); its checksum is published under the bundles directory.
