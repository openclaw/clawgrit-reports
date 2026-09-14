# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260914-052648-dcbe90
- Generated: 2026-09-14T05:28:31.389Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,185 MB | 1,185 MB | 1,185 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 167 % | 167 % | 167 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 9,012 ms | 9,012 ms | 9,012 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 9,014 ms | 9,014 ms | 9,014 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 8,977 ms | 8,977 ms | 8,977 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 7,351 ms | 7,351 ms | 7,351 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,185 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: dba4da1f8b00cec0f5578ead7628aa83aff0c8a1
- Workflow ref: main
- Workflow SHA: dba4da1f8b00cec0f5578ead7628aa83aff0c8a1
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10334401959](https://github.com/openclaw/openclaw/actions/runs/34809504252/artifacts/10334401959); its checksum is published under the bundles directory.
