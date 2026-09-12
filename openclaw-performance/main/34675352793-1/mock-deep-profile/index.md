# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260912-052219-453619
- Generated: 2026-09-12T05:24:40.558Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 672 MB | 672 MB | 672 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 672 MB | 672 MB | 672 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 427 % | 427 % | 427 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.2 ms | 10.2 ms | 10.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 787 MB | 787 MB | 787 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 240 % | 240 % | 240 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,264 ms | 7,264 ms | 7,264 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,738 ms | 4,738 ms | 4,738 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,397 ms | 7,397 ms | 7,397 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,592 ms | 6,592 ms | 6,592 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":192.1,"upper":426.8} | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.mock-provider.maxCpuPercent | {"lower":0,"upper":243.9} | <= 150 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.maxCpuPercent | {"lower":192.1,"upper":426.8} | <= 300 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":191.5,"upper":239.9} | <= 200 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: e451374ce00c25b33af86d4b45cb4f87b0053788
- Workflow ref: main
- Workflow SHA: e451374ce00c25b33af86d4b45cb4f87b0053788
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10292650846](https://github.com/openclaw/openclaw/actions/runs/34675352793/artifacts/10292650846); its checksum is published under the bundles directory.
