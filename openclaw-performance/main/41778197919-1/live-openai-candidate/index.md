# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261104-051807-f79e4f
- Generated: 2026-11-04T05:21:29.368Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,637 MB | 1,637 MB | 1,637 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 219 % | 219 % | 219 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 12,435 ms | 12,435 ms | 12,435 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 12,470 ms | 12,470 ms | 12,470 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 11,766 ms | 11,766 ms | 11,766 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 10,950 ms | 10,950 ms | 10,950 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,637 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,821 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,978 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,410 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,978 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,410 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 52da7f61d3aaefbdbee2f637efa1c5a924f0b920
- Workflow ref: main
- Workflow SHA: 52da7f61d3aaefbdbee2f637efa1c5a924f0b920
- Kova repository: openclaw/Kova
- Kova ref: 869493d1be0dcf10b7ddf96371cf35239a9efbd6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13297194723](https://github.com/openclaw/openclaw/actions/runs/41778197919/artifacts/13297194723); its checksum is published under the bundles directory.
