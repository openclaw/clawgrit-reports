# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261020-052507-bbe591
- Generated: 2026-10-20T05:35:23.158Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,914 MB | 1,914 MB | 1,914 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,914 MB | 1,914 MB | 1,914 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 271 % | 271 % | 271 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 48.3 ms | 48.3 ms | 48.3 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 2,101 MB | 2,101 MB | 2,101 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 338 % | 338 % | 338 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 17,868 ms | 17,868 ms | 17,868 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 17,936 ms | 17,936 ms | 17,936 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 16,570 ms | 16,570 ms | 16,570 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 16,292 ms | 16,292 ms | 16,292 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,914 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,052 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 16,570 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 4763b77ba572eefaef3bed12c0c17c305cd12738
- Workflow ref: main
- Workflow SHA: 4763b77ba572eefaef3bed12c0c17c305cd12738
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12242918560](https://github.com/openclaw/openclaw/actions/runs/39374642100/artifacts/12242918560); its checksum is published under the bundles directory.
