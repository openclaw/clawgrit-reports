# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261005-053628-0d267a
- Generated: 2026-10-05T05:38:52.133Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,209 MB | 1,209 MB | 1,209 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 213 % | 213 % | 213 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 13,383 ms | 13,383 ms | 13,383 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 13,394 ms | 13,394 ms | 13,394 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 13,180 ms | 13,180 ms | 13,180 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 11,628 ms | 11,628 ms | 11,628 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,209 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,642 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,355 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,642 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,355 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: f27df1d88709bebfb205bc11585ddb8e0b80b1c5
- Workflow ref: main
- Workflow SHA: f27df1d88709bebfb205bc11585ddb8e0b80b1c5
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11327651132](https://github.com/openclaw/openclaw/actions/runs/37268440705/artifacts/11327651132); its checksum is published under the bundles directory.
