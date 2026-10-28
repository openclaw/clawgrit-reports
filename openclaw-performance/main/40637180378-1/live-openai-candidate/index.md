# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261028-052020-f77ef2
- Generated: 2026-10-28T05:23:52.524Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,416 MB | 1,416 MB | 1,416 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 201 % | 201 % | 201 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 12,269 ms | 12,269 ms | 12,269 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 12,304 ms | 12,304 ms | 12,304 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 11,613 ms | 11,613 ms | 11,613 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 10,547 ms | 10,547 ms | 10,547 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,416 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,689 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,580 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,580 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 702c2957fadc79a4c3ba5d046842d918e2909f12
- Workflow ref: main
- Workflow SHA: 702c2957fadc79a4c3ba5d046842d918e2909f12
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12794122500](https://github.com/openclaw/openclaw/actions/runs/40637180378/artifacts/12794122500); its checksum is published under the bundles directory.
