# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261105-051809-10cca1
- Generated: 2026-11-05T05:22:15.147Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,578 MB | 1,578 MB | 1,578 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 219 % | 219 % | 219 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 12,667 ms | 12,667 ms | 12,667 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 12,435 ms | 12,435 ms | 12,435 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 12,679 ms | 12,679 ms | 12,679 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 11,070 ms | 11,070 ms | 11,070 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,578 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,762 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,004 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,073 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,004 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,073 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: a8dc255ec8102fb93ab1b16eb0d47a2f95709135
- Workflow ref: main
- Workflow SHA: a8dc255ec8102fb93ab1b16eb0d47a2f95709135
- Kova repository: openclaw/Kova
- Kova ref: 869493d1be0dcf10b7ddf96371cf35239a9efbd6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13390219051](https://github.com/openclaw/openclaw/actions/runs/41972905229/artifacts/13390219051); its checksum is published under the bundles directory.
