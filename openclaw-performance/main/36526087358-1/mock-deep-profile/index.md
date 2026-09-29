# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260929-052659-970f60
- Generated: 2026-09-29T05:30:35.256Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,636 MB | 1,636 MB | 1,636 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,636 MB | 1,636 MB | 1,636 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 300 % | 300 % | 300 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 21.4 ms | 21.4 ms | 21.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,623 MB | 1,623 MB | 1,623 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 311 % | 311 % | 311 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 13,831 ms | 13,831 ms | 13,831 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 10,188 ms | 10,188 ms | 10,188 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 14,023 ms | 14,023 ms | 14,023 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 12,353 ms | 12,353 ms | 12,353 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,636 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,809 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.maxCpuPercent | {"lower":273,"upper":378.9} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | {"lower":273,"upper":310.6} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: ec101d561e2c852a7e3c419c1df9a5f0f620861c
- Workflow ref: main
- Workflow SHA: ec101d561e2c852a7e3c419c1df9a5f0f620861c
- Kova repository: openclaw/Kova
- Kova ref: 4b8b1681446b868a44193ed6e97253a6c8bcbbbf
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11014659632](https://github.com/openclaw/openclaw/actions/runs/36526087358/artifacts/11014659632); its checksum is published under the bundles directory.
