# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260720-061842-5a18d8
- Generated: 2026-07-20T06:22:55.648Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 823 MB | 832 MB | 833 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 823 MB | 832 MB | 833 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 144 % | 146 % | 146 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 433 ms | 438 ms | 439 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 806 MB | 825 MB | 827 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 806 MB | 825 MB | 827 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 146 % | 147 % | 147 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 413 ms | 417 ms | 418 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 811 MB | 820 MB | 821 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 157 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,809 ms | 2,891 ms | 2,900 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,788 ms | 2,894 ms | 2,906 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,793 ms | 2,809 ms | 2,811 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,643 ms | 2,733 ms | 2,743 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

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
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8452532062](https://github.com/openclaw/openclaw/actions/runs/29721260869/artifacts/8452532062); its checksum is published under the bundles directory.
