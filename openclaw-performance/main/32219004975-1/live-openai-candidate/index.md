# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260819-052024-d083b4
- Generated: 2026-08-19T05:22:16.169Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 947 MB | 947 MB | 947 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 152 % | 152 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,617 ms | 5,617 ms | 5,617 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,641 ms | 5,641 ms | 5,641 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,159 ms | 5,159 ms | 5,159 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,380 ms | 4,380 ms | 4,380 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: e38a06439efc4e6fe8346d1765c27ec96aed497a
- Workflow ref: main
- Workflow SHA: e38a06439efc4e6fe8346d1765c27ec96aed497a
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9353346261](https://github.com/openclaw/openclaw/actions/runs/32219004975/artifacts/9353346261); its checksum is published under the bundles directory.
