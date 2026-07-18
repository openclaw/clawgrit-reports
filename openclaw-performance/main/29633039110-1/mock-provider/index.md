# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260718-055409-46dddc
- Generated: 2026-07-18T05:58:35.042Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 929 MB | 940 MB | 942 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 929 MB | 940 MB | 942 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.3 ms | 11.6 ms | 11.8 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 890 MB | 891 MB | 891 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 890 MB | 891 MB | 891 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 151 % | 154 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 10.4 ms | 11.2 ms | 11.3 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 943 MB | 957 MB | 959 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 163 % | 163 % | 163 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,237 ms | 3,248 ms | 3,249 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,238 ms | 3,250 ms | 3,251 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,214 ms | 3,219 ms | 3,219 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,064 ms | 3,076 ms | 3,077 ms |

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
- Tested SHA: 931ac3e2b5f15cc25170162304f531cf23979c82
- Workflow ref: main
- Workflow SHA: 931ac3e2b5f15cc25170162304f531cf23979c82
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

The complete Kova bundle remains in [Actions artifact 8426180783](https://github.com/openclaw/openclaw/actions/runs/29633039110/artifacts/8426180783); its checksum is published under the bundles directory.
