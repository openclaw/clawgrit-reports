# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260825-052056-09e963
- Generated: 2026-08-25T05:22:47.130Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 537 MB | 537 MB | 537 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 125 % | 125 % | 125 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,726 ms | 3,726 ms | 3,726 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,736 ms | 3,736 ms | 3,736 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,533 ms | 3,533 ms | 3,533 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,482 ms | 2,482 ms | 2,482 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: e9017714c2d64cb564b467648d8a5c36dd191bff
- Workflow ref: main
- Workflow SHA: e9017714c2d64cb564b467648d8a5c36dd191bff
- Kova repository: openclaw/Kova
- Kova ref: dfafaff9dcd49b9c76788c6260f1f72dd2ced593
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9550307253](https://github.com/openclaw/openclaw/actions/runs/32812420211/artifacts/9550307253); its checksum is published under the bundles directory.
