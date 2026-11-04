# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261104-051820-14bf46
- Generated: 2026-11-04T05:29:39.685Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,623 MB | 1,623 MB | 1,623 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,623 MB | 1,623 MB | 1,623 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 230 % | 230 % | 230 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 39.6 ms | 39.6 ms | 39.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,962 MB | 1,962 MB | 1,962 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 424 % | 424 % | 424 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 17,863 ms | 17,863 ms | 17,863 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 16,278 ms | 16,278 ms | 16,278 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 17,946 ms | 17,946 ms | 17,946 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 15,950 ms | 15,950 ms | 15,950 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":219.2,"upper":366.1} | <= 250 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.maxCpuPercent | {"lower":400.6,"upper":477} | <= 450 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 17,946 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 52da7f61d3aaefbdbee2f637efa1c5a924f0b920
- Workflow ref: main
- Workflow SHA: 52da7f61d3aaefbdbee2f637efa1c5a924f0b920
- Kova repository: openclaw/Kova
- Kova ref: 869493d1be0dcf10b7ddf96371cf35239a9efbd6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13297879771](https://github.com/openclaw/openclaw/actions/runs/41778197919/artifacts/13297879771); its checksum is published under the bundles directory.
