# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260918-052346-6dc7e2
- Generated: 2026-09-18T05:26:17.801Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 974 MB | 974 MB | 974 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 974 MB | 974 MB | 974 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 274 % | 274 % | 274 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 19.4 ms | 19.4 ms | 19.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 855 MB | 855 MB | 855 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 223 % | 223 % | 223 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,745 ms | 6,745 ms | 6,745 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,696 ms | 5,696 ms | 5,696 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,800 ms | 6,800 ms | 6,800 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,158 ms | 6,158 ms | 6,158 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":216.3,"upper":273.6} | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.mock-provider.maxCpuPercent | {"lower":0,"upper":151.7} | <= 150 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.maxCpuPercent | {"lower":216.3,"upper":311.3} | <= 300 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":139.6,"upper":219.8} | <= 200 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: deb939dc004be671dc3e25e1dad1d310a3f45a61
- Workflow ref: main
- Workflow SHA: deb939dc004be671dc3e25e1dad1d310a3f45a61
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10533307500](https://github.com/openclaw/openclaw/actions/runs/35310525361/artifacts/10533307500); its checksum is published under the bundles directory.
