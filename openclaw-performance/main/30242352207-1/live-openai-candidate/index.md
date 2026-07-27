# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260727-062015-4364b3
- Generated: 2026-07-27T06:21:28.830Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,006 MB | 1,006 MB | 1,006 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 153 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 8,601 ms | 8,601 ms | 8,601 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 8,660 ms | 8,660 ms | 8,660 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,480 ms | 7,480 ms | 7,480 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,464 ms | 5,464 ms | 5,464 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,006 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,006 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,006 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: ab3e9645e7952488d6b12d006605e89bcd9b301b
- Workflow ref: main
- Workflow SHA: ab3e9645e7952488d6b12d006605e89bcd9b301b
- Kova repository: openclaw/Kova
- Kova ref: 517952b835640a368c4af6dfe6dc8365ae841b57
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8643746387](https://github.com/openclaw/openclaw/actions/runs/30242352207/artifacts/8643746387); its checksum is published under the bundles directory.
