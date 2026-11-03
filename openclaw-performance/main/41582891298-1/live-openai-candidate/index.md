# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261103-051853-9cb92d
- Generated: 2026-11-03T05:21:51.045Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,525 MB | 1,525 MB | 1,525 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 190 % | 190 % | 190 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 11,132 ms | 11,132 ms | 11,132 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 11,172 ms | 11,172 ms | 11,172 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 10,377 ms | 10,377 ms | 10,377 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 9,360 ms | 9,360 ms | 9,360 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,525 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,709 | <= 1600 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: e375530e380bc457d33b2668e34de425e612d311
- Workflow ref: main
- Workflow SHA: e375530e380bc457d33b2668e34de425e612d311
- Kova repository: openclaw/Kova
- Kova ref: 869493d1be0dcf10b7ddf96371cf35239a9efbd6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13206920836](https://github.com/openclaw/openclaw/actions/runs/41582891298/artifacts/13206920836); its checksum is published under the bundles directory.
