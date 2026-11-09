# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261109-052440-37c493
- Generated: 2026-11-09T05:37:13.831Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,543 MB | 1,543 MB | 1,543 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,543 MB | 1,543 MB | 1,543 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 237 % | 237 % | 237 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 39.3 ms | 39.3 ms | 39.3 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 2,042 MB | 2,042 MB | 2,042 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 327 % | 327 % | 327 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 16,409 ms | 16,409 ms | 16,409 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 16,169 ms | 16,169 ms | 16,169 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 16,422 ms | 16,422 ms | 16,422 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 14,815 ms | 14,815 ms | 14,815 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":236.4,"upper":329.2} | <= 250 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 16,422 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 9bdea97f3c1589841d1c1cf81a9bea7ae70886aa
- Workflow ref: main
- Workflow SHA: 9bdea97f3c1589841d1c1cf81a9bea7ae70886aa
- Kova repository: openclaw/Kova
- Kova ref: 869493d1be0dcf10b7ddf96371cf35239a9efbd6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13651648558](https://github.com/openclaw/openclaw/actions/runs/42566395627/artifacts/13651648558); its checksum is published under the bundles directory.
