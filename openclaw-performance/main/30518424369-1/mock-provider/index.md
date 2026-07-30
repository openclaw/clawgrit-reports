# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260730-060433-edb7fe
- Generated: 2026-07-30T06:09:50.333Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 957 MB | 1,046 MB | 1,056 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 957 MB | 1,046 MB | 1,056 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 158 % | 158 % | 158 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 14.5 ms | 15.3 ms | 15.4 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 923 MB | 932 MB | 933 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 923 MB | 932 MB | 933 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 159 % | 159 % | 159 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 13.1 ms | 16.5 ms | 16.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,024 MB | 1,026 MB | 1,026 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 172 % | 173 % | 174 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,616 ms | 3,682 ms | 3,689 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,591 ms | 3,650 ms | 3,656 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,618 ms | 3,684 ms | 3,691 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,499 ms | 3,565 ms | 3,572 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,056 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.peakRssMb | 1,056 | <= 1050 |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,026 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,026 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,026 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,023 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,023 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,023 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,024 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,024 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,024 | <= 1000 |

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
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 62cbbcc800214f05cdc4b97debdf7339bfa7c5f4
- Workflow ref: main
- Workflow SHA: 62cbbcc800214f05cdc4b97debdf7339bfa7c5f4
- Kova repository: openclaw/Kova
- Kova ref: 517952b835640a368c4af6dfe6dc8365ae841b57
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8749889314](https://github.com/openclaw/openclaw/actions/runs/30518424369/artifacts/8749889314); its checksum is published under the bundles directory.
