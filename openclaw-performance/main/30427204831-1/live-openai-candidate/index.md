# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260729-060911-331475
- Generated: 2026-07-29T06:10:18.498Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,106 MB | 1,106 MB | 1,106 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 173 % | 173 % | 173 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,504 ms | 6,504 ms | 6,504 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,518 ms | 6,518 ms | 6,518 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,236 ms | 6,236 ms | 6,236 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,794 ms | 4,794 ms | 4,794 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,106 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,106 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,106 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: e93fa7567bb5745e41141f486433870bc7757752
- Workflow ref: main
- Workflow SHA: e93fa7567bb5745e41141f486433870bc7757752
- Kova repository: openclaw/Kova
- Kova ref: 517952b835640a368c4af6dfe6dc8365ae841b57
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8714080880](https://github.com/openclaw/openclaw/actions/runs/30427204831/artifacts/8714080880); its checksum is published under the bundles directory.
