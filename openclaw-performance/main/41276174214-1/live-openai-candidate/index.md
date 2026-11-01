# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261101-051715-df9bd1
- Generated: 2026-11-01T05:20:11.037Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,460 MB | 1,460 MB | 1,460 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 195 % | 195 % | 195 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 10,641 ms | 10,641 ms | 10,641 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 10,663 ms | 10,663 ms | 10,663 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 10,221 ms | 10,221 ms | 10,221 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 9,231 ms | 9,231 ms | 9,231 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,460 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,645 | <= 1600 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 8d15b0fa2a17c3513728095f53acb8391d635d3d
- Workflow ref: main
- Workflow SHA: 8d15b0fa2a17c3513728095f53acb8391d635d3d
- Kova repository: openclaw/Kova
- Kova ref: 7bd7c2f9531476bf86b9bd13c63f748182c727bb
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13071312509](https://github.com/openclaw/openclaw/actions/runs/41276174214/artifacts/13071312509); its checksum is published under the bundles directory.
