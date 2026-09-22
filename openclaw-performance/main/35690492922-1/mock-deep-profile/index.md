# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260922-052659-a4250b
- Generated: 2026-09-22T05:31:26.926Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 950 MB | 950 MB | 950 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 950 MB | 950 MB | 950 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 816 % | 816 % | 816 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 34.3 ms | 34.3 ms | 34.3 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,102 MB | 1,102 MB | 1,102 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 284 % | 284 % | 284 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 9,082 ms | 9,082 ms | 9,082 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 7,944 ms | 7,944 ms | 7,944 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 9,142 ms | 9,142 ms | 9,142 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 8,362 ms | 8,362 ms | 8,362 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":215.9,"upper":816.3} | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.mock-provider.maxCpuPercent | {"lower":0,"upper":816.3} | <= 150 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.maxCpuPercent | {"lower":215.9,"upper":2448.8} | <= 300 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":151.2,"upper":237.7} | <= 200 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.maxCpuPercent | {"lower":262.8,"upper":317.2} | <= 300 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: b7f812464c4509191e201249237e52069e5b35bb
- Workflow ref: main
- Workflow SHA: b7f812464c4509191e201249237e52069e5b35bb
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10677694378](https://github.com/openclaw/openclaw/actions/runs/35690492922/artifacts/10677694378); its checksum is published under the bundles directory.
