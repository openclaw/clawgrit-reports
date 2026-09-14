# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260914-052738-94ac58
- Generated: 2026-09-14T05:30:12.602Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 987 MB | 987 MB | 987 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 987 MB | 987 MB | 987 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 292 % | 292 % | 292 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 11.2 ms | 11.2 ms | 11.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 862 MB | 862 MB | 862 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 225 % | 225 % | 225 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,971 ms | 4,971 ms | 4,971 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,885 ms | 4,885 ms | 4,885 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,976 ms | 4,976 ms | 4,976 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,491 ms | 4,491 ms | 4,491 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":232.9,"upper":292.1} | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":155.2,"upper":216.4} | <= 200 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: dba4da1f8b00cec0f5578ead7628aa83aff0c8a1
- Workflow ref: main
- Workflow SHA: dba4da1f8b00cec0f5578ead7628aa83aff0c8a1
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10334117762](https://github.com/openclaw/openclaw/actions/runs/34809504252/artifacts/10334117762); its checksum is published under the bundles directory.
