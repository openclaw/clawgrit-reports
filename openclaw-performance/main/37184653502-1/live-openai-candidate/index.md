# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261004-070539-d8c0bd
- Generated: 2026-10-04T07:07:54.793Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,064 MB | 1,064 MB | 1,064 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 203 % | 203 % | 203 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 10,599 ms | 10,599 ms | 10,599 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 10,612 ms | 10,612 ms | 10,612 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 10,360 ms | 10,360 ms | 10,360 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 9,156 ms | 9,156 ms | 9,156 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 9480581481a64c3f4050a6af9b8b615ce209dd05
- Workflow ref: main
- Workflow SHA: 9480581481a64c3f4050a6af9b8b615ce209dd05
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11296721446](https://github.com/openclaw/openclaw/actions/runs/37184653502/artifacts/11296721446); its checksum is published under the bundles directory.
