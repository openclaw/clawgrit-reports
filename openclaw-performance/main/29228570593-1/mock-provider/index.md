# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260713-061848-5751b5
- Generated: 2026-07-13T06:23:43.717Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 5, PASS: 4
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 814 MB | 824 MB | 825 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 814 MB | 824 MB | 825 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 163 % | 164 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 822 MB | 823 MB | 823 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 822 MB | 823 MB | 823 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 138 % | 160 % | 162 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 910 MB | 923 MB | 925 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 176 % | 179 % | 180 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,001 ms | 4,552 ms | 4,614 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,864 ms | 4,292 ms | 4,339 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,024 ms | 4,568 ms | 4,628 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,851 ms | 4,414 ms | 4,476 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 925 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 925 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 925 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 910 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 910 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 910 | <= 900 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
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
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8270749134](https://github.com/openclaw/openclaw/actions/runs/29228570593/artifacts/8270749134); its checksum is published under the bundles directory.
