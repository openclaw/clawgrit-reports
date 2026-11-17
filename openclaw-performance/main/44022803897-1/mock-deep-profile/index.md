# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261117-051754-db5e81
- Generated: 2026-11-17T05:20:24.439Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 2
- Repeat: 1

## Key metrics

- No sampled key metrics were available; inspect the blocking records below.

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | targetRuntime.nodeVersion | missing-service-identity | Gateway runtime identity with matching OCM service PID and port |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| gateway-performance | many-bundled-plugins | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 346d231275b3930848b8e31239c74f689d361436
- Workflow ref: main
- Workflow SHA: 346d231275b3930848b8e31239c74f689d361436
- Kova repository: openclaw/Kova
- Kova ref: a50c81c878f417e7e56dc64b7063d9a117db5ad3
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 14301194240](https://github.com/openclaw/openclaw/actions/runs/44022803897/artifacts/14301194240); its checksum is published under the bundles directory.
