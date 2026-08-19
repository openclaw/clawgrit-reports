# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260819-052019-24dc28
- Generated: 2026-08-19T05:23:14.102Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,075 MB | 1,107 MB | 1,111 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,075 MB | 1,107 MB | 1,111 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 148 % | 151 % | 151 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 9.4 ms | 9.7 ms | 9.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 920 MB | 953 MB | 957 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 160 % | 160 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,164 ms | 4,224 ms | 4,231 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,172 ms | 4,242 ms | 4,250 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,890 ms | 4,059 ms | 4,078 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,979 ms | 4,017 ms | 4,021 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,066 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,111 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,075 | <= 1050 |

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
- Tested SHA: e38a06439efc4e6fe8346d1765c27ec96aed497a
- Workflow ref: main
- Workflow SHA: e38a06439efc4e6fe8346d1765c27ec96aed497a
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9353365306](https://github.com/openclaw/openclaw/actions/runs/32219004975/artifacts/9353365306); its checksum is published under the bundles directory.
