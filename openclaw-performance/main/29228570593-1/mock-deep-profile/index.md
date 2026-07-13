# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260713-061852-67ce79
- Generated: 2026-07-13T06:20:47.612Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,026 MB | 1,026 MB | 1,026 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,026 MB | 1,026 MB | 1,026 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 146 % | 146 % | 146 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,052 MB | 1,052 MB | 1,052 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 164 % | 164 % | 164 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,157 ms | 4,157 ms | 4,157 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,162 ms | 4,162 ms | 4,162 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,062 ms | 4,062 ms | 4,062 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,673 ms | 3,673 ms | 3,673 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 934 | <= 850 |
| gateway-performance | many-bundled-plugins | resourceByRole.plugin-cli.peakRssMb | 953 | <= 800 |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,052 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,052 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,052 | <= 900 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 404651d9e83bffc85b204f3fb976aa3730ad1ab9
- Workflow ref: main
- Workflow SHA: 404651d9e83bffc85b204f3fb976aa3730ad1ab9
- Kova repository: openclaw/Kova
- Kova ref: 2b02b7d33418db0c6952c4cf8fe8a608e7964859
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8270700628](https://github.com/openclaw/openclaw/actions/runs/29228570593/artifacts/8270700628); its checksum is published under the bundles directory.
