# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260910-052338-7aa072
- Generated: 2026-09-10T05:25:42.630Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 630 MB | 630 MB | 630 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 630 MB | 630 MB | 630 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 152 % | 152 % | 152 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.4 ms | 10.4 ms | 10.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 752 MB | 752 MB | 752 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 220 % | 220 % | 220 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,645 ms | 4,645 ms | 4,645 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,269 ms | 4,269 ms | 4,269 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,665 ms | 4,665 ms | 4,665 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,152 ms | 4,152 ms | 4,152 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: a26cbeb6350fdaae04455c6e28e9696066218b4b
- Workflow ref: main
- Workflow SHA: a26cbeb6350fdaae04455c6e28e9696066218b4b
- Kova repository: openclaw/Kova
- Kova ref: 3da9582e9c3eef970ef102dc3950595e0876a1d5
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10137926613](https://github.com/openclaw/openclaw/actions/runs/34440778661/artifacts/10137926613); its checksum is published under the bundles directory.
