# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260818-052002-9deaee
- Generated: 2026-08-18T05:22:41.592Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1, PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,265 MB | 1,265 MB | 1,265 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,265 MB | 1,265 MB | 1,265 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 164 % | 164 % | 164 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10 ms | 10 ms | 10 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,119 MB | 1,119 MB | 1,119 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 164 % | 164 % | 164 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,373 ms | 6,373 ms | 6,373 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,389 ms | 6,389 ms | 6,389 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,077 ms | 6,077 ms | 6,077 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,540 ms | 5,540 ms | 5,540 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,265 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,265 | <= 1200 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 2eec0470652d6d6a559c355a9c517d45f0c066ae
- Workflow ref: main
- Workflow SHA: 2eec0470652d6d6a559c355a9c517d45f0c066ae
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9312080488](https://github.com/openclaw/openclaw/actions/runs/32102422776/artifacts/9312080488); its checksum is published under the bundles directory.
