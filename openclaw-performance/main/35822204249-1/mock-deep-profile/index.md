# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260923-052508-463be7
- Generated: 2026-09-23T05:28:23.791Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,077 MB | 1,077 MB | 1,077 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,077 MB | 1,077 MB | 1,077 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 589 % | 589 % | 589 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 21.1 ms | 21.1 ms | 21.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,218 MB | 1,218 MB | 1,218 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 304 % | 304 % | 304 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 10,981 ms | 10,981 ms | 10,981 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 9,449 ms | 9,449 ms | 9,449 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 11,062 ms | 11,062 ms | 11,062 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 9,895 ms | 9,895 ms | 9,895 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":210.8,"upper":588.9} | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.mock-provider.maxCpuPercent | {"lower":0,"upper":588.9} | <= 150 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.maxCpuPercent | {"lower":210.8,"upper":1766.7} | <= 300 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":171.7,"upper":247.8} | <= 200 |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU interval baseline is missing for a late-discovered product process","Product CPU interval or terminal wait accounting is incomplete"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU interval baseline is missing for a late-discovered product process","Product CPU interval or terminal wait accounting is incomplete"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.maxCpuPercent | {"lower":280,"upper":343} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | {"lower":280,"upper":304} | <= 300 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 5dd6d230ba802f260feb6d3ef346114392937b8b
- Workflow ref: main
- Workflow SHA: 5dd6d230ba802f260feb6d3ef346114392937b8b
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10733303607](https://github.com/openclaw/openclaw/actions/runs/35822204249/artifacts/10733303607); its checksum is published under the bundles directory.
