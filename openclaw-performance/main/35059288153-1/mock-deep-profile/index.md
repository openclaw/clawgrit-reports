# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260916-052518-b9fad9
- Generated: 2026-09-16T05:28:20.174Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 937 MB | 937 MB | 937 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 937 MB | 937 MB | 937 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 296 % | 296 % | 296 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 16.7 ms | 16.7 ms | 16.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 853 MB | 853 MB | 853 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 241 % | 241 % | 241 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,657 ms | 7,657 ms | 7,657 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 7,186 ms | 7,186 ms | 7,186 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,682 ms | 7,682 ms | 7,682 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,907 ms | 6,907 ms | 6,907 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":245.7,"upper":295.8} | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":146.3,"upper":256} | <= 200 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: db1d5d2dccbc9acaffc6232401dcd4f77855d51a
- Workflow ref: main
- Workflow SHA: db1d5d2dccbc9acaffc6232401dcd4f77855d51a
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10431339890](https://github.com/openclaw/openclaw/actions/runs/35059288153/artifacts/10431339890); its checksum is published under the bundles directory.
