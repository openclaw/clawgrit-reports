# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260917-052508-1ca6d4
- Generated: 2026-09-17T05:28:09.821Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 957 MB | 957 MB | 957 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 957 MB | 957 MB | 957 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 299 % | 299 % | 299 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 26.7 ms | 26.7 ms | 26.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 869 MB | 869 MB | 869 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 279 % | 279 % | 279 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 11,304 ms | 11,304 ms | 11,304 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,662 ms | 6,662 ms | 6,662 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 11,548 ms | 11,548 ms | 11,548 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 10,313 ms | 10,313 ms | 10,313 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":220.3,"upper":299.4} | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":169,"upper":229.8} | <= 200 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.maxCpuPercent | {"lower":254.6,"upper":322} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: e667e1ae31bcc824a8b233d66240dcc3a7ac6972
- Workflow ref: main
- Workflow SHA: e667e1ae31bcc824a8b233d66240dcc3a7ac6972
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10481584919](https://github.com/openclaw/openclaw/actions/runs/35185554754/artifacts/10481584919); its checksum is published under the bundles directory.
