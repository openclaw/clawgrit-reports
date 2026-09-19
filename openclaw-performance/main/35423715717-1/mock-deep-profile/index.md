# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260919-052224-a54357
- Generated: 2026-09-19T05:24:51.526Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 996 MB | 996 MB | 996 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 996 MB | 996 MB | 996 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 254 % | 254 % | 254 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 20.1 ms | 20.1 ms | 20.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 989 MB | 989 MB | 989 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 292 % | 292 % | 292 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,930 ms | 6,930 ms | 6,930 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,900 ms | 5,900 ms | 5,900 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,984 ms | 6,984 ms | 6,984 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,323 ms | 6,323 ms | 6,323 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":218.7,"upper":253.8} | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":145.7,"upper":265.5} | <= 200 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.maxCpuPercent | {"lower":254.6,"upper":335.5} | <= 300 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 95b8e03354505bd05875dd7a94e0f67d6fa528cb
- Workflow ref: main
- Workflow SHA: 95b8e03354505bd05875dd7a94e0f67d6fa528cb
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10579006809](https://github.com/openclaw/openclaw/actions/runs/35423715717/artifacts/10579006809); its checksum is published under the bundles directory.
