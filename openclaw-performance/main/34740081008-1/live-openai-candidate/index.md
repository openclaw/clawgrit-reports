# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260913-052632-c9a94c
- Generated: 2026-09-13T05:28:12.033Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,051 MB | 1,051 MB | 1,051 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 156 % | 156 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 9,753 ms | 9,753 ms | 9,753 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 9,136 ms | 9,136 ms | 9,136 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 9,785 ms | 9,785 ms | 9,785 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,911 ms | 6,911 ms | 6,911 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,051 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 004332fc723aaea35530db9135d819809e59aac2
- Workflow ref: main
- Workflow SHA: 004332fc723aaea35530db9135d819809e59aac2
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10311359708](https://github.com/openclaw/openclaw/actions/runs/34740081008/artifacts/10311359708); its checksum is published under the bundles directory.
