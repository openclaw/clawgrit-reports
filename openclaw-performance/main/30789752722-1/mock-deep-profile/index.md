# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260803-061909-aeffc5
- Generated: 2026-08-03T06:20:47.148Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1, FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,005 MB | 1,005 MB | 1,005 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,005 MB | 1,005 MB | 1,005 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 19.9 ms | 19.9 ms | 19.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,093 MB | 1,093 MB | 1,093 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 157 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,740 ms | 6,740 ms | 6,740 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,381 ms | 6,381 ms | 6,381 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,759 ms | 6,759 ms | 6,759 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,783 ms | 5,783 ms | 5,783 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,093 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: f5facf8cbfe5c0fcf3a83a2bc9b91424dac34c22
- Workflow ref: main
- Workflow SHA: f5facf8cbfe5c0fcf3a83a2bc9b91424dac34c22
- Kova repository: openclaw/Kova
- Kova ref: 283070760a16655b28835061774158b8b11b4aff
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8846627855](https://github.com/openclaw/openclaw/actions/runs/30789752722/artifacts/8846627855); its checksum is published under the bundles directory.
