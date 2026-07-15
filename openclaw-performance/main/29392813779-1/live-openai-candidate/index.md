# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260715-055811-ae380f
- Generated: 2026-07-15T05:59:24.517Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: INCOMPLETE: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 949 MB | 949 MB | 949 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 165 % | 165 % | 165 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,610 ms | 7,610 ms | 7,610 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 7,722 ms | 7,722 ms | 7,722 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,485 ms | 5,485 ms | 5,485 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,073 ms | 5,073 ms | 5,073 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | INCOMPLETE |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 701d02f24121c50fec79b29e1f58815c0cc7104b
- Workflow ref: main
- Workflow SHA: 701d02f24121c50fec79b29e1f58815c0cc7104b
- Kova repository: openclaw/Kova
- Kova ref: f3d037b5b8aacd6adf8ef1dd2ea4c1d778ec7c6c
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8333947783](https://github.com/openclaw/openclaw/actions/runs/29392813779/artifacts/8333947783); its checksum is published under the bundles directory.
