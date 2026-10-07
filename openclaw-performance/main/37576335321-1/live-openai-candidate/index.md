# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261007-052848-eecc3c
- Generated: 2026-10-07T05:31:38.504Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,141 MB | 1,141 MB | 1,141 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 180 % | 180 % | 180 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 21,979 ms | 21,979 ms | 21,979 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 22,015 ms | 22,015 ms | 22,015 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 21,293 ms | 21,293 ms | 21,293 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 20,335 ms | 20,335 ms | 20,335 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 20,400 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 19,104 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 21,293 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 20,400 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 19,104 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 6041559b4eb155794bce6d87af5e828143cb3395
- Workflow ref: main
- Workflow SHA: 6041559b4eb155794bce6d87af5e828143cb3395
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11462872408](https://github.com/openclaw/openclaw/actions/runs/37576335321/artifacts/11462872408); its checksum is published under the bundles directory.
