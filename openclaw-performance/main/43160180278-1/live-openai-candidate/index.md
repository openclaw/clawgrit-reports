# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261112-051827-b76521
- Generated: 2026-11-12T05:22:04.181Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,508 MB | 1,508 MB | 1,508 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 191 % | 191 % | 191 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 13,048 ms | 13,048 ms | 13,048 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 12,530 ms | 12,530 ms | 12,530 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 13,075 ms | 13,075 ms | 13,075 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 11,203 ms | 11,203 ms | 11,203 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,508 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,775 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,230 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,699 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,230 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,699 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 231fae1903a04b51df073b25b20906fb4d58799e
- Workflow ref: main
- Workflow SHA: 231fae1903a04b51df073b25b20906fb4d58799e
- Kova repository: openclaw/Kova
- Kova ref: a50c81c878f417e7e56dc64b7063d9a117db5ad3
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13917369328](https://github.com/openclaw/openclaw/actions/runs/43160180278/artifacts/13917369328); its checksum is published under the bundles directory.
