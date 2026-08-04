# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260804-061149-4d0085
- Generated: 2026-08-04T06:13:21.338Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1, FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 980 MB | 980 MB | 980 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 980 MB | 980 MB | 980 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 156 % | 156 % | 156 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 24 ms | 24 ms | 24 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,103 MB | 1,103 MB | 1,103 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 157 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,885 ms | 5,885 ms | 5,885 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,892 ms | 5,892 ms | 5,892 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,755 ms | 5,755 ms | 5,755 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,286 ms | 5,286 ms | 5,286 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,103 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 3f2fb7e36589e79408dcfdf93df231eea4850978
- Workflow ref: main
- Workflow SHA: 3f2fb7e36589e79408dcfdf93df231eea4850978
- Kova repository: openclaw/Kova
- Kova ref: 283070760a16655b28835061774158b8b11b4aff
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8882077615](https://github.com/openclaw/openclaw/actions/runs/30883081834/artifacts/8882077615); its checksum is published under the bundles directory.
