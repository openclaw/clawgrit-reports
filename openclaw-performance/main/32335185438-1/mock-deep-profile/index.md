# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260820-052053-d50402
- Generated: 2026-08-20T05:23:08.816Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1, PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,088 MB | 1,088 MB | 1,088 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,088 MB | 1,088 MB | 1,088 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 145 % | 145 % | 145 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,123 MB | 1,123 MB | 1,123 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 153 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,964 ms | 5,964 ms | 5,964 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,989 ms | 5,989 ms | 5,989 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,497 ms | 5,497 ms | 5,497 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,306 ms | 5,306 ms | 5,306 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,088 | <= 1050 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 6a637469a09b4e20637fb2056ba56bc9e154301e
- Workflow ref: main
- Workflow SHA: 6a637469a09b4e20637fb2056ba56bc9e154301e
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9394450425](https://github.com/openclaw/openclaw/actions/runs/32335185438/artifacts/9394450425); its checksum is published under the bundles directory.
