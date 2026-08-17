# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260817-052255-0801d8
- Generated: 2026-08-17T05:25:07.609Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1, PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,253 MB | 1,253 MB | 1,253 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,253 MB | 1,253 MB | 1,253 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 159 % | 159 % | 159 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 9.7 ms | 9.7 ms | 9.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,129 MB | 1,129 MB | 1,129 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 154 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,350 ms | 5,350 ms | 5,350 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,371 ms | 5,371 ms | 5,371 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,953 ms | 4,953 ms | 4,953 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,687 ms | 4,687 ms | 4,687 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,253 | <= 1050 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: b3ab276077464ed35c29707d7aea1607f9dc6cbd
- Workflow ref: main
- Workflow SHA: b3ab276077464ed35c29707d7aea1607f9dc6cbd
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9277405315](https://github.com/openclaw/openclaw/actions/runs/31997654762/artifacts/9277405315); its checksum is published under the bundles directory.
