# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260801-061144-ef45db
- Generated: 2026-08-01T06:13:57.886Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,203 MB | 1,203 MB | 1,203 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,203 MB | 1,203 MB | 1,203 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 152 % | 152 % | 152 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.8 ms | 10.8 ms | 10.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,238 MB | 1,238 MB | 1,238 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 200 % | 200 % | 200 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,245 ms | 5,245 ms | 5,245 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,247 ms | 5,247 ms | 5,247 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,203 ms | 5,203 ms | 5,203 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,660 ms | 4,660 ms | 4,660 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,203 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.peakRssMb | 1,203 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,203 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 927 | <= 900 |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,238 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,238 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,238 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 4caff51ff658f16048e5038aa6e5c015fa698d7a
- Workflow ref: main
- Workflow SHA: 4caff51ff658f16048e5038aa6e5c015fa698d7a
- Kova repository: openclaw/Kova
- Kova ref: 517952b835640a368c4af6dfe6dc8365ae841b57
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8814402145](https://github.com/openclaw/openclaw/actions/runs/30687186864/artifacts/8814402145); its checksum is published under the bundles directory.
