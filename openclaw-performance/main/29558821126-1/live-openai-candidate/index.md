# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260717-060119-fde0c3
- Generated: 2026-07-17T06:02:35.672Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: INCOMPLETE: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 964 MB | 964 MB | 964 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 180 % | 180 % | 180 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,918 ms | 6,918 ms | 6,918 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,918 ms | 6,918 ms | 6,918 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,913 ms | 6,913 ms | 6,913 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,209 ms | 5,209 ms | 5,209 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | INCOMPLETE |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: a8fd558d6210fdd2dbdd500a5e3a875b383f9c67
- Workflow ref: main
- Workflow SHA: a8fd558d6210fdd2dbdd500a5e3a875b383f9c67
- Kova repository: openclaw/Kova
- Kova ref: f3d037b5b8aacd6adf8ef1dd2ea4c1d778ec7c6c
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8398484957](https://github.com/openclaw/openclaw/actions/runs/29558821126/artifacts/8398484957); its checksum is published under the bundles directory.
