# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261006-052813-52e78e
- Generated: 2026-10-06T05:30:56.901Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,182 MB | 1,182 MB | 1,182 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 173 % | 173 % | 173 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 12,924 ms | 12,924 ms | 12,924 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 12,948 ms | 12,948 ms | 12,948 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 12,467 ms | 12,467 ms | 12,467 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 11,278 ms | 11,278 ms | 11,278 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,182 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,312 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,626 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,312 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,626 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: d8612ec864bb4c872616cfda5340c53803655f5f
- Workflow ref: main
- Workflow SHA: d8612ec864bb4c872616cfda5340c53803655f5f
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11392635151](https://github.com/openclaw/openclaw/actions/runs/37418475569/artifacts/11392635151); its checksum is published under the bundles directory.
