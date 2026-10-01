# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261001-052643-e7fd32
- Generated: 2026-10-01T05:29:10.018Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,136 MB | 1,136 MB | 1,136 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 237 % | 237 % | 237 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 11,794 ms | 11,794 ms | 11,794 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 11,864 ms | 11,864 ms | 11,864 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 10,473 ms | 10,473 ms | 10,473 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 9,854 ms | 9,854 ms | 9,854 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: f3f02417f117c1b3779f380ac8f278b3b5a2e02a
- Workflow ref: main
- Workflow SHA: f3f02417f117c1b3779f380ac8f278b3b5a2e02a
- Kova repository: openclaw/Kova
- Kova ref: 4b8b1681446b868a44193ed6e97253a6c8bcbbbf
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11142793583](https://github.com/openclaw/openclaw/actions/runs/36819696853/artifacts/11142793583); its checksum is published under the bundles directory.
