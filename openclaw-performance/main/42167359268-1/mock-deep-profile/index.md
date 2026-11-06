# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261106-051813-978061
- Generated: 2026-11-06T05:29:34.727Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1, FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,617 MB | 1,617 MB | 1,617 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,617 MB | 1,617 MB | 1,617 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 276 % | 276 % | 276 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 41.9 ms | 41.9 ms | 41.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 2,012 MB | 2,012 MB | 2,012 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 415 % | 415 % | 415 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 15,896 ms | 15,896 ms | 15,896 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 14,801 ms | 14,801 ms | 14,801 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 15,954 ms | 15,954 ms | 15,954 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 14,553 ms | 14,553 ms | 14,553 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.maxCpuPercent | {"lower":390.2,"upper":469.8} | <= 450 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 15,954 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: a04f6a382e73a876d0cdc4ee7cc8f0eeba93d5df
- Workflow ref: main
- Workflow SHA: a04f6a382e73a876d0cdc4ee7cc8f0eeba93d5df
- Kova repository: openclaw/Kova
- Kova ref: 869493d1be0dcf10b7ddf96371cf35239a9efbd6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13480505648](https://github.com/openclaw/openclaw/actions/runs/42167359268/artifacts/13480505648); its checksum is published under the bundles directory.
