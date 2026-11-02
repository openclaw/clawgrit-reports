# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261102-051908-fc6b38
- Generated: 2026-11-02T05:28:51.116Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,611 MB | 1,611 MB | 1,611 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,611 MB | 1,611 MB | 1,611 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 232 % | 232 % | 232 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 37.1 ms | 37.1 ms | 37.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,969 MB | 1,969 MB | 1,969 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 312 % | 312 % | 312 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 13,931 ms | 13,931 ms | 13,931 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 13,381 ms | 13,381 ms | 13,381 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 13,960 ms | 13,960 ms | 13,960 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 12,556 ms | 12,556 ms | 12,556 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":179.9,"upper":279.4} | <= 250 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | {"lower":290.2,"upper":312.3} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 52c106496b857099a47a09f3b944b6cd1f652711
- Workflow ref: main
- Workflow SHA: 52c106496b857099a47a09f3b944b6cd1f652711
- Kova repository: openclaw/Kova
- Kova ref: 869493d1be0dcf10b7ddf96371cf35239a9efbd6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13118831500](https://github.com/openclaw/openclaw/actions/runs/41393074317/artifacts/13118831500); its checksum is published under the bundles directory.
