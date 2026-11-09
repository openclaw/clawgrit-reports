# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261109-052055-076bfe
- Generated: 2026-11-09T05:25:24.189Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,652 MB | 1,652 MB | 1,652 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 215 % | 215 % | 215 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 14,006 ms | 14,006 ms | 14,006 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 14,031 ms | 14,031 ms | 14,031 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 13,524 ms | 13,524 ms | 13,524 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 12,488 ms | 12,488 ms | 12,488 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,652 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,837 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,509 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,082 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,509 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,082 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 9bdea97f3c1589841d1c1cf81a9bea7ae70886aa
- Workflow ref: main
- Workflow SHA: 9bdea97f3c1589841d1c1cf81a9bea7ae70886aa
- Kova repository: openclaw/Kova
- Kova ref: 869493d1be0dcf10b7ddf96371cf35239a9efbd6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13651717901](https://github.com/openclaw/openclaw/actions/runs/42566395627/artifacts/13651717901); its checksum is published under the bundles directory.
