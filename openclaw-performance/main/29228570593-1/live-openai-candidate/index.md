# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260713-061855-1c5652
- Generated: 2026-07-13T06:19:59.519Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 948 MB | 948 MB | 948 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 164 % | 164 % | 164 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,328 ms | 5,328 ms | 5,328 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,244 ms | 5,244 ms | 5,244 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,332 ms | 5,332 ms | 5,332 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,751 ms | 3,751 ms | 3,751 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 948 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 948 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 948 | <= 900 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 404651d9e83bffc85b204f3fb976aa3730ad1ab9
- Workflow ref: main
- Workflow SHA: 404651d9e83bffc85b204f3fb976aa3730ad1ab9
- Kova repository: openclaw/Kova
- Kova ref: 2b02b7d33418db0c6952c4cf8fe8a608e7964859
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8270684711](https://github.com/openclaw/openclaw/actions/runs/29228570593/artifacts/8270684711); its checksum is published under the bundles directory.
