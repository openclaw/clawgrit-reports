# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260915-052544-ba5231
- Generated: 2026-09-15T05:28:04.066Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,006 MB | 1,006 MB | 1,006 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,006 MB | 1,006 MB | 1,006 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 845 % | 845 % | 845 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 13.8 ms | 13.8 ms | 13.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 824 MB | 824 MB | 824 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 215 % | 215 % | 215 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,672 ms | 5,672 ms | 5,672 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,491 ms | 5,491 ms | 5,491 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,682 ms | 5,682 ms | 5,682 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,156 ms | 5,156 ms | 5,156 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":226.1,"upper":844.9} | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.mock-provider.maxCpuPercent | {"lower":0,"upper":482.8} | <= 150 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.maxCpuPercent | {"lower":226.1,"upper":844.9} | <= 300 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":152.3,"upper":232.2} | <= 200 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: ad2e57b87c7624b7b292e63d0ba8f6649c9811db
- Workflow ref: main
- Workflow SHA: ad2e57b87c7624b7b292e63d0ba8f6649c9811db
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10382595573](https://github.com/openclaw/openclaw/actions/runs/34932550836/artifacts/10382595573); its checksum is published under the bundles directory.
