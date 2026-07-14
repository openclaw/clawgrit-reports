# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260714-055632-c89a50
- Generated: 2026-07-14T06:01:13.780Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 844 MB | 849 MB | 849 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 844 MB | 849 MB | 849 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 147 % | 152 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 836 MB | 837 MB | 837 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 836 MB | 837 MB | 837 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 155 % | 163 % | 164 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 921 MB | 922 MB | 922 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 164 % | 171 % | 172 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,784 ms | 4,065 ms | 4,096 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,472 ms | 3,762 ms | 3,794 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,593 ms | 4,075 ms | 4,129 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,648 ms | 3,944 ms | 3,976 ms |

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
- Tested SHA: d3ac854e3101460fd160611a7d30a5e9b890e31f
- Workflow ref: main
- Workflow SHA: d3ac854e3101460fd160611a7d30a5e9b890e31f
- Kova repository: openclaw/Kova
- Kova ref: 678ff0b764b8786c2e436efbe4efac7d9aac10f8
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8301726127](https://github.com/openclaw/openclaw/actions/runs/29309840060/artifacts/8301726127); its checksum is published under the bundles directory.
