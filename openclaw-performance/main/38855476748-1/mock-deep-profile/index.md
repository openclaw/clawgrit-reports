# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261016-052449-cdf941
- Generated: 2026-10-16T05:35:26.864Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 2,071 MB | 2,071 MB | 2,071 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 2,071 MB | 2,071 MB | 2,071 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 299 % | 299 % | 299 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 48.6 ms | 48.6 ms | 48.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,872 MB | 1,872 MB | 1,872 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 303 % | 303 % | 303 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 17,708 ms | 17,708 ms | 17,708 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 17,719 ms | 17,719 ms | 17,719 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 17,493 ms | 17,493 ms | 17,493 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 16,175 ms | 16,175 ms | 16,175 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 2,071 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,275 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.maxCpuPercent | {"lower":280.4,"upper":365.5} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | {"lower":280.4,"upper":302.5} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 17,493 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 08be5ab0bf4891e08e77d2eac577daf9a13173c8
- Workflow ref: main
- Workflow SHA: 08be5ab0bf4891e08e77d2eac577daf9a13173c8
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12026618662](https://github.com/openclaw/openclaw/actions/runs/38855476748/artifacts/12026618662); its checksum is published under the bundles directory.
