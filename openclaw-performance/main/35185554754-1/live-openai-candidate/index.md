# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260917-052509-0c97f0
- Generated: 2026-09-17T05:26:58.205Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 921 MB | 921 MB | 921 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 151 % | 151 % | 151 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 12,973 ms | 12,973 ms | 12,973 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 13,149 ms | 13,149 ms | 13,149 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 9,623 ms | 9,623 ms | 9,623 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 10,745 ms | 10,745 ms | 10,745 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,910 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,910 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: e667e1ae31bcc824a8b233d66240dcc3a7ac6972
- Workflow ref: main
- Workflow SHA: e667e1ae31bcc824a8b233d66240dcc3a7ac6972
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10482605680](https://github.com/openclaw/openclaw/actions/runs/35185554754/artifacts/10482605680); its checksum is published under the bundles directory.
