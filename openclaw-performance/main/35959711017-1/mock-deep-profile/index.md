# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260924-052625-965469
- Generated: 2026-09-24T05:29:29.524Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 995 MB | 995 MB | 995 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 995 MB | 995 MB | 995 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 272 % | 272 % | 272 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 23.3 ms | 23.3 ms | 23.3 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,295 MB | 1,295 MB | 1,295 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 308 % | 308 % | 308 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 10,917 ms | 10,917 ms | 10,917 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 9,813 ms | 9,813 ms | 9,813 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 10,975 ms | 10,975 ms | 10,975 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 9,885 ms | 9,885 ms | 9,885 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":226.1,"upper":272} | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.mock-provider.maxCpuPercent | {"lower":0,"upper":212} | <= 150 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.maxCpuPercent | {"lower":226.1,"upper":635.9} | <= 300 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":163.3,"upper":280.1} | <= 200 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.maxCpuPercent | {"lower":285.7,"upper":343.4} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | {"lower":285.7,"upper":307.7} | <= 300 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: fef6b1290e412761888865da5b61ee1c0ce29586
- Workflow ref: main
- Workflow SHA: fef6b1290e412761888865da5b61ee1c0ce29586
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10791474711](https://github.com/openclaw/openclaw/actions/runs/35959711017/artifacts/10791474711); its checksum is published under the bundles directory.
