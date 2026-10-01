# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261001-052646-6474ea
- Generated: 2026-10-01T05:30:06.268Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,222 MB | 1,222 MB | 1,222 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,222 MB | 1,222 MB | 1,222 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 311 % | 311 % | 311 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 17.8 ms | 17.8 ms | 17.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,446 MB | 1,446 MB | 1,446 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 324 % | 324 % | 324 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 11,979 ms | 11,979 ms | 11,979 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 10,674 ms | 10,674 ms | 10,674 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 12,048 ms | 12,048 ms | 12,048 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 10,601 ms | 10,601 ms | 10,601 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,222 | <= 1177 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: f3f02417f117c1b3779f380ac8f278b3b5a2e02a
- Workflow ref: main
- Workflow SHA: f3f02417f117c1b3779f380ac8f278b3b5a2e02a
- Kova repository: openclaw/Kova
- Kova ref: 4b8b1681446b868a44193ed6e97253a6c8bcbbbf
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11142144694](https://github.com/openclaw/openclaw/actions/runs/36819696853/artifacts/11142144694); its checksum is published under the bundles directory.
