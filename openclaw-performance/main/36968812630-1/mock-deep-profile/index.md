# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261002-052639-1884e1
- Generated: 2026-10-02T05:28:54.575Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1, PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,397 MB | 1,397 MB | 1,397 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 292 % | 292 % | 292 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 9,757 ms | 9,757 ms | 9,757 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 9,519 ms | 9,519 ms | 9,519 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 9,770 ms | 9,770 ms | 9,770 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 8,760 ms | 8,760 ms | 8,760 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | targetRuntime.nodeVersion | missing-service-identity | Gateway runtime identity with matching OCM service PID and port |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: b21e522e2ad16371111ad06408a38742fd594f29
- Workflow ref: main
- Workflow SHA: b21e522e2ad16371111ad06408a38742fd594f29
- Kova repository: openclaw/Kova
- Kova ref: 4b8b1681446b868a44193ed6e97253a6c8bcbbbf
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11209714841](https://github.com/openclaw/openclaw/actions/runs/36968812630/artifacts/11209714841); its checksum is published under the bundles directory.
