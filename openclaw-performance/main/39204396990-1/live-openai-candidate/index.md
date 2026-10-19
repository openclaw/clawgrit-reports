# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261019-052638-f4d8a1
- Generated: 2026-10-19T05:31:11.619Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,460 MB | 1,460 MB | 1,460 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 239 % | 239 % | 239 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 44,958 ms | 44,958 ms | 44,958 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 44,981 ms | 44,981 ms | 44,981 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 44,525 ms | 44,525 ms | 44,525 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 43,213 ms | 43,213 ms | 43,213 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,460 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,646 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 43,251 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 42,493 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 44,525 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 43,251 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 42,493 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: b0055b677826295be67e67cf30d8b629b351d7fb
- Workflow ref: main
- Workflow SHA: b0055b677826295be67e67cf30d8b629b351d7fb
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12165178061](https://github.com/openclaw/openclaw/actions/runs/39204396990/artifacts/12165178061); its checksum is published under the bundles directory.
