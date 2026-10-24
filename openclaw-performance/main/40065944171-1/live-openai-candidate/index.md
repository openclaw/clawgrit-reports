# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261024-052331-99a319
- Generated: 2026-10-24T05:26:32.029Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,506 MB | 1,506 MB | 1,506 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 213 % | 213 % | 213 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 11,606 ms | 11,606 ms | 11,606 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 11,610 ms | 11,610 ms | 11,610 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 11,537 ms | 11,537 ms | 11,537 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 9,803 ms | 9,803 ms | 9,803 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,506 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,692 | <= 1400 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 210a582b4658cfe82adf107d7e0004a1abe24e58
- Workflow ref: main
- Workflow SHA: 210a582b4658cfe82adf107d7e0004a1abe24e58
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12548889738](https://github.com/openclaw/openclaw/actions/runs/40065944171/artifacts/12548889738); its checksum is published under the bundles directory.
