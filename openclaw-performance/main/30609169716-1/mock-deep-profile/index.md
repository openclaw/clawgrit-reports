# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260731-061741-4c4125
- Generated: 2026-07-31T06:20:01.987Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,210 MB | 1,210 MB | 1,210 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,210 MB | 1,210 MB | 1,210 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 152 % | 152 % | 152 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 13 ms | 13 ms | 13 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,223 MB | 1,223 MB | 1,223 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 209 % | 209 % | 209 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,867 ms | 5,867 ms | 5,867 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,862 ms | 5,862 ms | 5,862 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,867 ms | 5,867 ms | 5,867 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,259 ms | 5,259 ms | 5,259 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,210 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.peakRssMb | 1,210 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,210 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 935 | <= 900 |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,223 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,223 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,223 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 2aabde72623d71e19a16f11a0b080eb13f8a8960
- Workflow ref: main
- Workflow SHA: 2aabde72623d71e19a16f11a0b080eb13f8a8960
- Kova repository: openclaw/Kova
- Kova ref: 517952b835640a368c4af6dfe6dc8365ae841b57
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8784813673](https://github.com/openclaw/openclaw/actions/runs/30609169716/artifacts/8784813673); its checksum is published under the bundles directory.
