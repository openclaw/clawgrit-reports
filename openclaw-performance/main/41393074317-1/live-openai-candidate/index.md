# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261102-051935-1e9343
- Generated: 2026-11-02T05:22:34.470Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,459 MB | 1,459 MB | 1,459 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 186 % | 186 % | 186 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 10,801 ms | 10,801 ms | 10,801 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 10,817 ms | 10,817 ms | 10,817 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 10,488 ms | 10,488 ms | 10,488 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 9,337 ms | 9,337 ms | 9,337 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,459 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,643 | <= 1600 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 52c106496b857099a47a09f3b944b6cd1f652711
- Workflow ref: main
- Workflow SHA: 52c106496b857099a47a09f3b944b6cd1f652711
- Kova repository: openclaw/Kova
- Kova ref: 869493d1be0dcf10b7ddf96371cf35239a9efbd6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13118880294](https://github.com/openclaw/openclaw/actions/runs/41393074317/artifacts/13118880294); its checksum is published under the bundles directory.
