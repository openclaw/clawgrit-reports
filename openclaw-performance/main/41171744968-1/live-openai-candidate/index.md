# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261031-051636-a09904
- Generated: 2026-10-31T05:20:16.120Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,443 MB | 1,443 MB | 1,443 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 204 % | 204 % | 204 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 12,899 ms | 12,899 ms | 12,899 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 12,362 ms | 12,362 ms | 12,362 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 12,927 ms | 12,927 ms | 12,927 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 11,183 ms | 11,183 ms | 11,183 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,443 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,718 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,843 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,201 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,843 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,201 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: b924498923dff81a02fb8a89d57828717c6e160d
- Workflow ref: main
- Workflow SHA: b924498923dff81a02fb8a89d57828717c6e160d
- Kova repository: openclaw/Kova
- Kova ref: 7bd7c2f9531476bf86b9bd13c63f748182c727bb
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13031064428](https://github.com/openclaw/openclaw/actions/runs/41171744968/artifacts/13031064428); its checksum is published under the bundles directory.
