# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260915-052542-2a854e
- Generated: 2026-09-15T05:27:31.136Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,100 MB | 1,100 MB | 1,100 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 153 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 9,234 ms | 9,234 ms | 9,234 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 9,147 ms | 9,147 ms | 9,147 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 9,239 ms | 9,239 ms | 9,239 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 7,311 ms | 7,311 ms | 7,311 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,100 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: ad2e57b87c7624b7b292e63d0ba8f6649c9811db
- Workflow ref: main
- Workflow SHA: ad2e57b87c7624b7b292e63d0ba8f6649c9811db
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10381854048](https://github.com/openclaw/openclaw/actions/runs/34932550836/artifacts/10381854048); its checksum is published under the bundles directory.
