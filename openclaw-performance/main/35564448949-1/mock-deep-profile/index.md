# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260921-052942-8f4f27
- Generated: 2026-09-21T05:33:14.503Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,004 MB | 1,004 MB | 1,004 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,004 MB | 1,004 MB | 1,004 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 270 % | 270 % | 270 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 23.9 ms | 23.9 ms | 23.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,180 MB | 1,180 MB | 1,180 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 272 % | 272 % | 272 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 8,090 ms | 8,090 ms | 8,090 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,770 ms | 6,770 ms | 6,770 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 8,159 ms | 8,159 ms | 8,159 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 7,543 ms | 7,543 ms | 7,543 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":229.7,"upper":269.6} | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.mock-provider.maxCpuPercent | {"lower":0,"upper":188.1} | <= 150 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.maxCpuPercent | {"lower":229.7,"upper":564.3} | <= 300 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":151.8,"upper":244.9} | <= 200 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.maxCpuPercent | {"lower":248.5,"upper":310.2} | <= 300 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 90a39a0547e833231a1419aa52716327a86bf777
- Workflow ref: main
- Workflow SHA: 90a39a0547e833231a1419aa52716327a86bf777
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10624175969](https://github.com/openclaw/openclaw/actions/runs/35564448949/artifacts/10624175969); its checksum is published under the bundles directory.
