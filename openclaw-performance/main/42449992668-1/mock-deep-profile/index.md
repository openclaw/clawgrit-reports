# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261108-051726-9c45d8
- Generated: 2026-11-08T05:29:30.630Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,564 MB | 1,564 MB | 1,564 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,564 MB | 1,564 MB | 1,564 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 216 % | 216 % | 216 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 47.3 ms | 47.3 ms | 47.3 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,998 MB | 1,998 MB | 1,998 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 310 % | 310 % | 310 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 15,906 ms | 15,906 ms | 15,906 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 15,209 ms | 15,209 ms | 15,209 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 15,943 ms | 15,943 ms | 15,943 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 14,457 ms | 14,457 ms | 14,457 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":213.3,"upper":307.3} | <= 250 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | {"lower":287.6,"upper":310.2} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 15,943 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: d43ff5a7e42ae141d1ec2eb2ade3216bfb31e916
- Workflow ref: main
- Workflow SHA: d43ff5a7e42ae141d1ec2eb2ade3216bfb31e916
- Kova repository: openclaw/Kova
- Kova ref: 869493d1be0dcf10b7ddf96371cf35239a9efbd6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13605008820](https://github.com/openclaw/openclaw/actions/runs/42449992668/artifacts/13605008820); its checksum is published under the bundles directory.
