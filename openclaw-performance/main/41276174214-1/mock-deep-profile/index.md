# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261101-051716-7fd175
- Generated: 2026-11-01T05:26:53.857Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,660 MB | 1,660 MB | 1,660 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,660 MB | 1,660 MB | 1,660 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 250 % | 250 % | 250 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 40.6 ms | 40.6 ms | 40.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,940 MB | 1,940 MB | 1,940 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 303 % | 303 % | 303 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 14,151 ms | 14,151 ms | 14,151 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 13,633 ms | 13,633 ms | 13,633 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 14,178 ms | 14,178 ms | 14,178 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 12,732 ms | 12,732 ms | 12,732 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":189.3,"upper":286.2} | <= 250 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | {"lower":280.9,"upper":302.9} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 8d15b0fa2a17c3513728095f53acb8391d635d3d
- Workflow ref: main
- Workflow SHA: 8d15b0fa2a17c3513728095f53acb8391d635d3d
- Kova repository: openclaw/Kova
- Kova ref: 7bd7c2f9531476bf86b9bd13c63f748182c727bb
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13071377935](https://github.com/openclaw/openclaw/actions/runs/41276174214/artifacts/13071377935); its checksum is published under the bundles directory.
