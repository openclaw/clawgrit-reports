# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260820-052049-a24fd3
- Generated: 2026-08-20T05:23:50.243Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,078 MB | 1,085 MB | 1,086 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,078 MB | 1,085 MB | 1,086 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 151 % | 155 % | 155 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 9.7 ms | 10.3 ms | 10.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 905 MB | 933 MB | 936 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,012 ms | 4,017 ms | 4,018 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,031 ms | 4,032 ms | 4,032 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,642 ms | 3,742 ms | 3,753 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,845 ms | 3,853 ms | 3,853 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,078 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,086 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,077 | <= 1050 |

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
- Tested SHA: 6a637469a09b4e20637fb2056ba56bc9e154301e
- Workflow ref: main
- Workflow SHA: 6a637469a09b4e20637fb2056ba56bc9e154301e
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9394463248](https://github.com/openclaw/openclaw/actions/runs/32335185438/artifacts/9394463248); its checksum is published under the bundles directory.
