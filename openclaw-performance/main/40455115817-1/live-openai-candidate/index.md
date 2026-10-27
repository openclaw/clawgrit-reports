# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261027-052603-3a86d5
- Generated: 2026-10-27T05:29:15.243Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,437 MB | 1,437 MB | 1,437 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 204 % | 204 % | 204 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 11,271 ms | 11,271 ms | 11,271 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 11,290 ms | 11,290 ms | 11,290 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 10,919 ms | 10,919 ms | 10,919 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 9,715 ms | 9,715 ms | 9,715 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,437 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,620 | <= 1400 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 59b1dddaa2f6691317a02ba4bf2dff52182a843e
- Workflow ref: main
- Workflow SHA: 59b1dddaa2f6691317a02ba4bf2dff52182a843e
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12711944828](https://github.com/openclaw/openclaw/actions/runs/40455115817/artifacts/12711944828); its checksum is published under the bundles directory.
