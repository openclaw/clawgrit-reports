# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260719-060927-ccf9ea
- Generated: 2026-07-19T06:10:27.792Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: INCOMPLETE: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,000 MB | 1,000 MB | 1,000 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 159 % | 159 % | 159 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,329 ms | 5,329 ms | 5,329 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,172 ms | 5,172 ms | 5,172 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,337 ms | 5,337 ms | 5,337 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,466 ms | 3,466 ms | 3,466 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | INCOMPLETE |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 29b4b74a5a5e0d6bec2efc6b59b5d50c6ec1aca6
- Workflow ref: main
- Workflow SHA: 29b4b74a5a5e0d6bec2efc6b59b5d50c6ec1aca6
- Kova repository: openclaw/Kova
- Kova ref: f3d037b5b8aacd6adf8ef1dd2ea4c1d778ec7c6c
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8438893505](https://github.com/openclaw/openclaw/actions/runs/29675960514/artifacts/8438893505); its checksum is published under the bundles directory.
