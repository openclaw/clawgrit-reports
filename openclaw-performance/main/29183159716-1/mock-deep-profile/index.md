# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260712-064709-033b22
- Generated: 2026-07-12T06:48:42.672Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1, FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 995 MB | 995 MB | 995 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 995 MB | 995 MB | 995 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 139 % | 139 % | 139 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 28.9 ms | 28.9 ms | 28.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,000 MB | 1,000 MB | 1,000 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 149 % | 149 % | 149 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,190 ms | 5,190 ms | 5,190 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,529 ms | 4,529 ms | 4,529 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,225 ms | 5,225 ms | 5,225 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,637 ms | 4,637 ms | 4,637 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,000 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,000 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,000 | <= 900 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 8d39c1baa52439c339a2b27f3fa4b6df43775eac
- Workflow ref: main
- Workflow SHA: 8d39c1baa52439c339a2b27f3fa4b6df43775eac
- Kova repository: openclaw/Kova
- Kova ref: 2b02b7d33418db0c6952c4cf8fe8a608e7964859
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8257109493](https://github.com/openclaw/openclaw/actions/runs/29183159716/artifacts/8257109493); its checksum is published under the bundles directory.
