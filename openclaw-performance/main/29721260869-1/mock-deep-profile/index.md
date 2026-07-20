# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260720-061831-d77c3a
- Generated: 2026-07-20T06:20:23.011Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 992 MB | 992 MB | 992 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 992 MB | 992 MB | 992 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 149 % | 149 % | 149 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 639 ms | 639 ms | 639 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,002 MB | 1,002 MB | 1,002 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 156 % | 156 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,449 ms | 4,449 ms | 4,449 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,452 ms | 4,452 ms | 4,452 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,382 ms | 4,382 ms | 4,382 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,880 ms | 3,880 ms | 3,880 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,002 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,002 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,002 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 401ef9770e2554b577ab86beabd49503babb414e
- Workflow ref: main
- Workflow SHA: 401ef9770e2554b577ab86beabd49503babb414e
- Kova repository: openclaw/Kova
- Kova ref: f3d037b5b8aacd6adf8ef1dd2ea4c1d778ec7c6c
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8452490997](https://github.com/openclaw/openclaw/actions/runs/29721260869/artifacts/8452490997); its checksum is published under the bundles directory.
