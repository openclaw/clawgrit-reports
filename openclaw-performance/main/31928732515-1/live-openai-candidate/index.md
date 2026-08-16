# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260816-052003-14b531
- Generated: 2026-08-16T05:21:45.086Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 860 MB | 860 MB | 860 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 149 % | 149 % | 149 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,523 ms | 4,523 ms | 4,523 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,542 ms | 4,542 ms | 4,542 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,167 ms | 4,167 ms | 4,167 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,392 ms | 3,392 ms | 3,392 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 78ca5fcfb61ea5f8f063822f4125214f46fc8491
- Workflow ref: main
- Workflow SHA: 78ca5fcfb61ea5f8f063822f4125214f46fc8491
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9258672511](https://github.com/openclaw/openclaw/actions/runs/31928732515/artifacts/9258672511); its checksum is published under the bundles directory.
