# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260822-051943-e211a2
- Generated: 2026-08-22T05:21:52.790Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1, PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,104 MB | 1,104 MB | 1,104 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,104 MB | 1,104 MB | 1,104 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 146 % | 146 % | 146 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,119 MB | 1,119 MB | 1,119 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 155 % | 155 % | 155 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,536 ms | 5,536 ms | 5,536 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,555 ms | 5,555 ms | 5,555 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,180 ms | 5,180 ms | 5,180 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,926 ms | 4,926 ms | 4,926 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,104 | <= 1050 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
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
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9470925909](https://github.com/openclaw/openclaw/actions/runs/32554023430/artifacts/9470925909); its checksum is published under the bundles directory.
