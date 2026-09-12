# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260912-052219-7eae30
- Generated: 2026-09-12T05:23:52.796Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,134 MB | 1,134 MB | 1,134 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 157 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,174 ms | 7,174 ms | 7,174 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,432 ms | 6,432 ms | 6,432 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,213 ms | 7,213 ms | 7,213 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,495 ms | 5,495 ms | 5,495 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,134 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: e451374ce00c25b33af86d4b45cb4f87b0053788
- Workflow ref: main
- Workflow SHA: e451374ce00c25b33af86d4b45cb4f87b0053788
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10292875190](https://github.com/openclaw/openclaw/actions/runs/34675352793/artifacts/10292875190); its checksum is published under the bundles directory.
