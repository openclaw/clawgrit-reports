# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261122-051800-2c8ff4
- Generated: 2026-11-22T05:37:41.868Z
- Target: local-build:/home/runner/work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,800 MB | 1,800 MB | 1,800 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,800 MB | 1,800 MB | 1,800 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 267 % | 267 % | 267 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 87.8 ms | 87.8 ms | 87.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,845 MB | 1,845 MB | 1,845 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 311 % | 311 % | 311 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 28,731 ms | 28,731 ms | 28,731 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 27,222 ms | 27,222 ms | 27,222 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 28,810 ms | 28,810 ms | 28,810 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 25,847 ms | 25,847 ms | 25,847 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,800 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,531 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.maxCpuPercent | {"lower":288.3,"upper":564.4} | <= 450 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | {"lower":288.3,"upper":310.7} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 28,810 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: c0e3bc0fbff265919efaf4e5b52688c5feed28b2
- Workflow ref: main
- Workflow SHA: c0e3bc0fbff265919efaf4e5b52688c5feed28b2
- Kova repository: openclaw/Kova
- Kova ref: 7c162a3276a31fbbb60c362d94124b6cad5187ca
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 14741093990](https://github.com/openclaw/openclaw/actions/runs/44988557519/artifacts/14741093990); its checksum is published under the bundles directory.
