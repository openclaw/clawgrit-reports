# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260731-061756-4bfd15
- Generated: 2026-07-31T06:23:11.392Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 953 MB | 962 MB | 963 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 953 MB | 962 MB | 963 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 155 % | 157 % | 157 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.8 ms | 11.9 ms | 12 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 942 MB | 951 MB | 952 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 942 MB | 951 MB | 952 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 155 % | 155 % | 155 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 14.5 ms | 14.6 ms | 14.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,033 MB | 1,035 MB | 1,035 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 172 % | 174 % | 175 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,709 ms | 3,746 ms | 3,750 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,712 ms | 3,723 ms | 3,724 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,692 ms | 3,745 ms | 3,751 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,593 ms | 3,627 ms | 3,630 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,031 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,031 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,031 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,033 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,033 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,033 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,035 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,035 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,035 | <= 1000 |

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
- Tested SHA: 2aabde72623d71e19a16f11a0b080eb13f8a8960
- Workflow ref: main
- Workflow SHA: 2aabde72623d71e19a16f11a0b080eb13f8a8960
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

The complete Kova bundle remains in [Actions artifact 8784867703](https://github.com/openclaw/openclaw/actions/runs/30609169716/artifacts/8784867703); its checksum is published under the bundles directory.
