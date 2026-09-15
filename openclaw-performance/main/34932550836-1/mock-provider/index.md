# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260915-052542-a864be
- Generated: 2026-09-15T05:28:51.776Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, PASS: 5
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,000 MB | 1,005 MB | 1,006 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,000 MB | 1,005 MB | 1,006 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 166 % | 313 % | 330 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 11.1 ms | 13.1 ms | 13.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 608 MB | 608 MB | 608 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,558 ms | 2,570 ms | 2,571 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,423 ms | 2,482 ms | 2,488 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,562 ms | 2,577 ms | 2,579 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,464 ms | 2,476 ms | 2,477 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":155.7,"upper":329.8} | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.maxCpuPercent | {"lower":155.7,"upper":329.8} | <= 300 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
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
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10382810127](https://github.com/openclaw/openclaw/actions/runs/34932550836/artifacts/10382810127); its checksum is published under the bundles directory.
