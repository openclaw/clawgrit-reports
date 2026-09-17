# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260917-052514-20f685
- Generated: 2026-09-17T05:30:23.615Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, PASS: 5
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 959 MB | 960 MB | 961 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 959 MB | 960 MB | 961 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 208 % | 284 % | 292 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 51 ms | 56 ms | 56.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 650 MB | 652 MB | 652 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 168 % | 169 % | 170 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,603 ms | 4,819 ms | 4,843 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,522 ms | 3,755 ms | 3,781 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,661 ms | 4,875 ms | 4,899 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,453 ms | 4,665 ms | 4,688 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":200.5,"upper":292.2} | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.mock-provider.maxCpuPercent | {"lower":0,"upper":292.2} | <= 150 |
| gateway-performance | many-bundled-plugins | resourceByRole.plugin-cli.maxCpuPercent | {"lower":117.8,"upper":365.2} | <= 250 |

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
- Tested SHA: e667e1ae31bcc824a8b233d66240dcc3a7ac6972
- Workflow ref: main
- Workflow SHA: e667e1ae31bcc824a8b233d66240dcc3a7ac6972
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10482770130](https://github.com/openclaw/openclaw/actions/runs/35185554754/artifacts/10482770130); its checksum is published under the bundles directory.
