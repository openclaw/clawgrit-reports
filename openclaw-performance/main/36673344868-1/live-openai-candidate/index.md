# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260930-052703-3216e1
- Generated: 2026-09-30T05:29:33.537Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,136 MB | 1,136 MB | 1,136 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 219 % | 219 % | 219 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 12,189 ms | 12,189 ms | 12,189 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 12,250 ms | 12,250 ms | 12,250 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 11,023 ms | 11,023 ms | 11,023 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 9,918 ms | 9,918 ms | 9,918 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: b5af519246c82e9c774f40d434066d86c184e3d3
- Workflow ref: main
- Workflow SHA: b5af519246c82e9c774f40d434066d86c184e3d3
- Kova repository: openclaw/Kova
- Kova ref: 4b8b1681446b868a44193ed6e97253a6c8bcbbbf
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11079012336](https://github.com/openclaw/openclaw/actions/runs/36673344868/artifacts/11079012336); its checksum is published under the bundles directory.
