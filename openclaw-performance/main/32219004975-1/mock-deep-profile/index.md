# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260819-052026-5f73f9
- Generated: 2026-08-19T05:22:35.166Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,048 MB | 1,048 MB | 1,048 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,048 MB | 1,048 MB | 1,048 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 146 % | 146 % | 146 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 9.8 ms | 9.8 ms | 9.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,143 MB | 1,143 MB | 1,143 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 153 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,883 ms | 5,883 ms | 5,883 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,918 ms | 5,918 ms | 5,918 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,215 ms | 5,215 ms | 5,215 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,196 ms | 5,196 ms | 5,196 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
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
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9353355794](https://github.com/openclaw/openclaw/actions/runs/32219004975/artifacts/9353355794); its checksum is published under the bundles directory.
