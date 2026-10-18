# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261018-052248-0d9f8a
- Generated: 2026-10-18T05:27:40.639Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,688 MB | 1,688 MB | 1,688 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 205 % | 205 % | 205 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 46,311 ms | 46,311 ms | 46,311 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 46,332 ms | 46,332 ms | 46,332 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 45,921 ms | 45,921 ms | 45,921 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 44,547 ms | 44,547 ms | 44,547 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,688 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,873 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 46,332 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 44,580 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 45,921 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 43,919 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 46,332 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 45,921 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 44,580 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 43,919 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 0a80f9e0b10e5bec3bbfe342ce8fd70e9135ae86
- Workflow ref: main
- Workflow SHA: 0a80f9e0b10e5bec3bbfe342ce8fd70e9135ae86
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12126138637](https://github.com/openclaw/openclaw/actions/runs/39100239041/artifacts/12126138637); its checksum is published under the bundles directory.
