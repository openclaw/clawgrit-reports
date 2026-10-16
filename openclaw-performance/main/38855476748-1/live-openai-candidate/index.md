# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261016-052447-9e1af0
- Generated: 2026-10-16T05:27:51.306Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,524 MB | 1,524 MB | 1,524 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 213 % | 213 % | 213 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 13,779 ms | 13,779 ms | 13,779 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 13,854 ms | 13,854 ms | 13,854 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 12,356 ms | 12,356 ms | 12,356 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 12,031 ms | 12,031 ms | 12,031 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,524 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,720 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,122 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,300 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,122 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,300 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
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
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12027336436](https://github.com/openclaw/openclaw/actions/runs/38855476748/artifacts/12027336436); its checksum is published under the bundles directory.
