# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260730-060437-2a72ac
- Generated: 2026-07-30T06:05:46.778Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,120 MB | 1,120 MB | 1,120 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 178 % | 178 % | 178 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,847 ms | 6,847 ms | 6,847 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,553 ms | 6,553 ms | 6,553 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,862 ms | 6,862 ms | 6,862 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,026 ms | 5,026 ms | 5,026 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,120 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,120 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,120 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 62cbbcc800214f05cdc4b97debdf7339bfa7c5f4
- Workflow ref: main
- Workflow SHA: 62cbbcc800214f05cdc4b97debdf7339bfa7c5f4
- Kova repository: openclaw/Kova
- Kova ref: 517952b835640a368c4af6dfe6dc8365ae841b57
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8749815860](https://github.com/openclaw/openclaw/actions/runs/30518424369/artifacts/8749815860); its checksum is published under the bundles directory.
