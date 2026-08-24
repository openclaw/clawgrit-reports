# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260824-052538-16844e
- Generated: 2026-08-24T05:27:51.709Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1, PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,063 MB | 1,063 MB | 1,063 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,063 MB | 1,063 MB | 1,063 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 147 % | 147 % | 147 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.1 ms | 10.1 ms | 10.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,107 MB | 1,107 MB | 1,107 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 149 % | 149 % | 149 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,674 ms | 5,674 ms | 5,674 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,694 ms | 5,694 ms | 5,694 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,289 ms | 5,289 ms | 5,289 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,039 ms | 5,039 ms | 5,039 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,063 | <= 1050 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
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
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9508076159](https://github.com/openclaw/openclaw/actions/runs/32693424453/artifacts/9508076159); its checksum is published under the bundles directory.
