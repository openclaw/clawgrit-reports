# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260725-060200-3c2ffc
- Generated: 2026-07-25T06:07:15.871Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 879 MB | 985 MB | 997 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 879 MB | 985 MB | 997 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 151 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 11.3 ms | 11.7 ms | 11.7 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 853 MB | 867 MB | 869 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 853 MB | 867 MB | 869 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 152 % | 152 % | 152 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 20.3 ms | 20.7 ms | 20.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 945 MB | 945 MB | 945 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 151 % | 152 % | 152 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,700 ms | 4,708 ms | 4,709 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,705 ms | 4,716 ms | 4,717 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,595 ms | 4,612 ms | 4,614 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,197 ms | 4,209 ms | 4,210 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | finalHealthFailures | 3 | <= 0 |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | finalHealthFailures | 3 | <= 0 |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| gateway-performance | many-bundled-plugins | finalHealthFailures | 3 | <= 0 |
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
- Tested SHA: bdd5653c3ed9772ba0b1501955149988a43fd78a
- Workflow ref: main
- Workflow SHA: bdd5653c3ed9772ba0b1501955149988a43fd78a
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

The complete Kova bundle remains in [Actions artifact 8616331922](https://github.com/openclaw/openclaw/actions/runs/30146777206/artifacts/8616331922); its checksum is published under the bundles directory.
