# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260716-060117-48a413
- Generated: 2026-07-16T06:02:51.925Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: INCOMPLETE: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 958 MB | 958 MB | 958 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 172 % | 172 % | 172 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,051 ms | 7,051 ms | 7,051 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 7,061 ms | 7,061 ms | 7,061 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,868 ms | 6,868 ms | 6,868 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,157 ms | 5,157 ms | 5,157 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | INCOMPLETE |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 98fc55ca96c6ab9df64998e99bdb0ef6b733714f
- Workflow ref: main
- Workflow SHA: 98fc55ca96c6ab9df64998e99bdb0ef6b733714f
- Kova repository: openclaw/Kova
- Kova ref: f3d037b5b8aacd6adf8ef1dd2ea4c1d778ec7c6c
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8366405193](https://github.com/openclaw/openclaw/actions/runs/29475433945/artifacts/8366405193); its checksum is published under the bundles directory.
