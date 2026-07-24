# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260724-060705-144320
- Generated: 2026-07-24T06:12:11.461Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 4, PASS: 5
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 957 MB | 958 MB | 958 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 957 MB | 958 MB | 958 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.6 ms | 10.7 ms | 10.8 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 949 MB | 954 MB | 954 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 949 MB | 954 MB | 954 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 152 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 16.5 ms | 17.7 ms | 17.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 978 MB | 998 MB | 1,001 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,524 ms | 4,566 ms | 4,570 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,534 ms | 4,574 ms | 4,578 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,341 ms | 4,417 ms | 4,425 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,210 ms | 4,249 ms | 4,253 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | finalHealthFailures | 3 | <= 0 |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | finalHealthFailures | 3 | <= 0 |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | finalHealthFailures | 3 | <= 0 |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,001 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,001 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,001 | <= 1000 |

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
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 5ff16901ef4a8532844000505a6e6ad0cae74a2a
- Workflow ref: main
- Workflow SHA: 5ff16901ef4a8532844000505a6e6ad0cae74a2a
- Kova repository: openclaw/Kova
- Kova ref: 1bf080f6dbf8800a3187591493f2551824e4ccc7
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8588211145](https://github.com/openclaw/openclaw/actions/runs/30071287212/artifacts/8588211145); its checksum is published under the bundles directory.
