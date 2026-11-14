# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261114-051738-d005bf
- Generated: 2026-11-14T05:25:47.230Z
- Target: local-build:/home/runner/work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,395 MB | 1,395 MB | 1,395 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 210 % | 210 % | 210 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 33,107 ms | 33,107 ms | 33,107 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 33,128 ms | 33,128 ms | 33,128 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 32,701 ms | 32,701 ms | 32,701 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 30,976 ms | 30,976 ms | 30,976 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | statusMs | 10,153 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,395 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,667 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 31,028 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 29,993 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 32,701 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 31,028 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 29,993 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: ca2bf94f193b583f1efa810e648d5fbf628e7231
- Workflow ref: main
- Workflow SHA: ca2bf94f193b583f1efa810e648d5fbf628e7231
- Kova repository: openclaw/Kova
- Kova ref: a50c81c878f417e7e56dc64b7063d9a117db5ad3
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 14101025033](https://github.com/openclaw/openclaw/actions/runs/43560572855/artifacts/14101025033); its checksum is published under the bundles directory.
