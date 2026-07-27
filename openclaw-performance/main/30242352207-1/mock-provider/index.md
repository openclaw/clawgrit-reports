# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260727-062013-97ed52
- Generated: 2026-07-27T06:25:27.094Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 898 MB | 907 MB | 908 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 898 MB | 907 MB | 908 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 157 % | 159 % | 159 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 13.4 ms | 13.8 ms | 13.9 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 877 MB | 883 MB | 884 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 877 MB | 883 MB | 884 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 155 % | 155 % | 155 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 18.1 ms | 22 ms | 22.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 954 MB | 967 MB | 969 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,273 ms | 4,302 ms | 4,306 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,273 ms | 4,306 ms | 4,310 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,225 ms | 4,263 ms | 4,267 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,749 ms | 3,768 ms | 3,770 ms |

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
- Tested SHA: ab3e9645e7952488d6b12d006605e89bcd9b301b
- Workflow ref: main
- Workflow SHA: ab3e9645e7952488d6b12d006605e89bcd9b301b
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

The complete Kova bundle remains in [Actions artifact 8643822836](https://github.com/openclaw/openclaw/actions/runs/30242352207/artifacts/8643822836); its checksum is published under the bundles directory.
