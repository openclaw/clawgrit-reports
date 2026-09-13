# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260913-052545-0165a1
- Generated: 2026-09-13T05:28:11.752Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 982 MB | 982 MB | 982 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 982 MB | 982 MB | 982 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 252 % | 252 % | 252 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 11 ms | 11 ms | 11 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 731 MB | 731 MB | 731 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 239 % | 239 % | 239 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,506 ms | 6,506 ms | 6,506 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,173 ms | 5,173 ms | 5,173 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,576 ms | 6,576 ms | 6,576 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,973 ms | 5,973 ms | 5,973 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":227.2,"upper":251.6} | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":151.8,"upper":243.2} | <= 200 |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU interval baseline is missing for a late-discovered product process","Product CPU interval or terminal wait accounting is incomplete"] | complete CPU interval evidence |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 004332fc723aaea35530db9135d819809e59aac2
- Workflow ref: main
- Workflow SHA: 004332fc723aaea35530db9135d819809e59aac2
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10312398071](https://github.com/openclaw/openclaw/actions/runs/34740081008/artifacts/10312398071); its checksum is published under the bundles directory.
