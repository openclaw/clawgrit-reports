# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260729-060913-46de6e
- Generated: 2026-07-29T06:14:28.399Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 947 MB | 956 MB | 957 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 947 MB | 956 MB | 957 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 157 % | 158 % | 158 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 12.6 ms | 14.7 ms | 14.9 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 910 MB | 929 MB | 931 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 910 MB | 929 MB | 931 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 157 % | 158 % | 158 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 21 ms | 25.7 ms | 26.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,016 MB | 1,020 MB | 1,021 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 171 % | 172 % | 172 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,645 ms | 3,662 ms | 3,663 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,627 ms | 3,661 ms | 3,665 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,632 ms | 3,645 ms | 3,646 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,528 ms | 3,539 ms | 3,541 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | finalHealthFailures | 3 | <= 0 |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | finalHealthFailures | 3 | <= 0 |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,015 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,015 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,015 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,016 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,016 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,016 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,021 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,021 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,021 | <= 1000 |

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
- Tested SHA: e93fa7567bb5745e41141f486433870bc7757752
- Workflow ref: main
- Workflow SHA: e93fa7567bb5745e41141f486433870bc7757752
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

The complete Kova bundle remains in [Actions artifact 8714164725](https://github.com/openclaw/openclaw/actions/runs/30427204831/artifacts/8714164725); its checksum is published under the bundles directory.
