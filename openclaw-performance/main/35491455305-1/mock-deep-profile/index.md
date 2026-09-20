# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260920-052236-80f30d
- Generated: 2026-09-20T05:25:22.565Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1, BLOCKED: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,110 MB | 1,110 MB | 1,110 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,110 MB | 1,110 MB | 1,110 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 594 % | 594 % | 594 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 30.8 ms | 30.8 ms | 30.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,225 MB | 1,225 MB | 1,225 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 294 % | 294 % | 294 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 8,407 ms | 8,407 ms | 8,407 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 7,663 ms | 7,663 ms | 7,663 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 8,446 ms | 8,446 ms | 8,446 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 7,755 ms | 7,755 ms | 7,755 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":185.5,"upper":593.8} | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.mock-provider.maxCpuPercent | {"lower":0,"upper":593.8} | <= 150 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,277 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.maxCpuPercent | {"lower":185.5,"upper":1781.3} | <= 300 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":143.5,"upper":300.6} | <= 200 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.maxCpuPercent | {"lower":250.7,"upper":331} | <= 300 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 9cf4837995ff570f0b25e1f404eb8ec069debf03
- Workflow ref: main
- Workflow SHA: 9cf4837995ff570f0b25e1f404eb8ec069debf03
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10598873707](https://github.com/openclaw/openclaw/actions/runs/35491455305/artifacts/10598873707); its checksum is published under the bundles directory.
