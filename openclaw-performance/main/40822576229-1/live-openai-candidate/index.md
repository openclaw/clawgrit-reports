# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261029-052019-334bf9
- Generated: 2026-10-29T05:23:49.471Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,449 MB | 1,449 MB | 1,449 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 208 % | 208 % | 208 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 12,621 ms | 12,621 ms | 12,621 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 12,629 ms | 12,629 ms | 12,629 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 12,459 ms | 12,459 ms | 12,459 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 10,788 ms | 10,788 ms | 10,788 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,449 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,724 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,805 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,465 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,805 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,465 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: c419c72cf8451e611a2728cf3e3a8c7e306cc6ff
- Workflow ref: main
- Workflow SHA: c419c72cf8451e611a2728cf3e3a8c7e306cc6ff
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12875835375](https://github.com/openclaw/openclaw/actions/runs/40822576229/artifacts/12875835375); its checksum is published under the bundles directory.
