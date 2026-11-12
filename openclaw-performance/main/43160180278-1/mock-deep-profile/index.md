# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261112-051848-c7f757
- Generated: 2026-11-12T05:28:45.243Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,501 MB | 1,501 MB | 1,501 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,501 MB | 1,501 MB | 1,501 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 822 % | 822 % | 822 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 37 ms | 37 ms | 37 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,984 MB | 1,984 MB | 1,984 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 315 % | 315 % | 315 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 14,197 ms | 14,197 ms | 14,197 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 12,871 ms | 12,871 ms | 12,871 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 14,267 ms | 14,267 ms | 14,267 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 12,981 ms | 12,981 ms | 12,981 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,501 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | {"lower":207.7,"upper":822.3} | <= 340 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,775 | <= 1440 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.maxCpuPercent | {"lower":213.3,"upper":822.3} | <= 360 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | {"lower":292,"upper":314.9} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 231fae1903a04b51df073b25b20906fb4d58799e
- Workflow ref: main
- Workflow SHA: 231fae1903a04b51df073b25b20906fb4d58799e
- Kova repository: openclaw/Kova
- Kova ref: a50c81c878f417e7e56dc64b7063d9a117db5ad3
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13918641011](https://github.com/openclaw/openclaw/actions/runs/43160180278/artifacts/13918641011); its checksum is published under the bundles directory.
