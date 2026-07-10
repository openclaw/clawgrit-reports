# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260710-180556-23efcd
- Generated: 2026-07-10T18:09:13.302Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 740 MB | 740 MB | 740 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 145 % | 145 % | 145 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,309 ms | 5,309 ms | 5,309 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,348 ms | 5,348 ms | 5,348 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,569 ms | 4,569 ms | 4,569 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,122 ms | 3,122 ms | 3,122 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: b91e117dcd3f1c2a1915d9e8661c5cad502d3b8a
- Tested SHA: b91e117dcd3f1c2a1915d9e8661c5cad502d3b8a
- Workflow ref: release-ci/perf-b91e117dcd3f-20260710180508
- Workflow SHA: b91e117dcd3f1c2a1915d9e8661c5cad502d3b8a
- Kova repository: openclaw/Kova
- Kova ref: 24c26969e57d4d49f9d1a5071af85dd3d79daa2d
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8235679377](https://github.com/openclaw/openclaw/actions/runs/29113285411/artifacts/8235679377); its checksum is published under the bundles directory.
