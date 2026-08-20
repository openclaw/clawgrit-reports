# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260820-052053-10cf1b
- Generated: 2026-08-20T05:22:44.410Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 919 MB | 919 MB | 919 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 157 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,601 ms | 5,601 ms | 5,601 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,614 ms | 5,614 ms | 5,614 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,361 ms | 5,361 ms | 5,361 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,281 ms | 4,281 ms | 4,281 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 6a637469a09b4e20637fb2056ba56bc9e154301e
- Workflow ref: main
- Workflow SHA: 6a637469a09b4e20637fb2056ba56bc9e154301e
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9394438844](https://github.com/openclaw/openclaw/actions/runs/32335185438/artifacts/9394438844); its checksum is published under the bundles directory.
