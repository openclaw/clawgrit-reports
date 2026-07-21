# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260721-060924-74ca8c
- Generated: 2026-07-21T06:13:55.922Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 906 MB | 916 MB | 917 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 906 MB | 916 MB | 917 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 154 % | 156 % | 156 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 478 ms | 483 ms | 483 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 904 MB | 906 MB | 906 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 904 MB | 906 MB | 906 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 148 % | 153 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 458 ms | 508 ms | 514 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 921 MB | 932 MB | 933 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,647 ms | 3,690 ms | 3,695 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,656 ms | 3,697 ms | 3,701 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,526 ms | 3,571 ms | 3,576 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,364 ms | 3,409 ms | 3,414 ms |

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
- Tested SHA: b63ccef4099be8dcf8427ae95270165e18378979
- Workflow ref: main
- Workflow SHA: b63ccef4099be8dcf8427ae95270165e18378979
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

The complete Kova bundle remains in [Actions artifact 8485629694](https://github.com/openclaw/openclaw/actions/runs/29806060864/artifacts/8485629694); its checksum is published under the bundles directory.
