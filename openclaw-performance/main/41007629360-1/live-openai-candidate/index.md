# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261030-052102-ed4ba7
- Generated: 2026-10-30T05:24:08.181Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,475 MB | 1,475 MB | 1,475 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 190 % | 190 % | 190 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 10,711 ms | 10,711 ms | 10,711 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 10,732 ms | 10,732 ms | 10,732 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 10,315 ms | 10,315 ms | 10,315 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 9,108 ms | 9,108 ms | 9,108 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,475 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,749 | <= 1400 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 3cd0dd6380a1a1586c6db4574b6fc231eb3367df
- Workflow ref: main
- Workflow SHA: 3cd0dd6380a1a1586c6db4574b6fc231eb3367df
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12956532008](https://github.com/openclaw/openclaw/actions/runs/41007629360/artifacts/12956532008); its checksum is published under the bundles directory.
