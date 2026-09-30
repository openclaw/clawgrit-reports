# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260930-052706-8c2791
- Generated: 2026-09-30T05:30:43.188Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,166 MB | 1,166 MB | 1,166 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,166 MB | 1,166 MB | 1,166 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 354 % | 354 % | 354 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 29.7 ms | 29.7 ms | 29.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,403 MB | 1,403 MB | 1,403 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 311 % | 311 % | 311 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 14,145 ms | 14,145 ms | 14,145 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 13,439 ms | 13,439 ms | 13,439 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 14,182 ms | 14,182 ms | 14,182 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 12,528 ms | 12,528 ms | 12,528 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":328.9,"upper":353.7} | <= 340 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.maxCpuPercent | {"lower":328.9,"upper":385.8} | <= 360 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.maxCpuPercent | {"lower":291.7,"upper":344.6} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | {"lower":291.7,"upper":311.1} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: b5af519246c82e9c774f40d434066d86c184e3d3
- Workflow ref: main
- Workflow SHA: b5af519246c82e9c774f40d434066d86c184e3d3
- Kova repository: openclaw/Kova
- Kova ref: 4b8b1681446b868a44193ed6e97253a6c8bcbbbf
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11078458436](https://github.com/openclaw/openclaw/actions/runs/36673344868/artifacts/11078458436); its checksum is published under the bundles directory.
