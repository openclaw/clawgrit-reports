# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260822-051942-2fbf7c
- Generated: 2026-08-22T05:21:31.949Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 892 MB | 892 MB | 892 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 154 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,021 ms | 5,021 ms | 5,021 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,047 ms | 5,047 ms | 5,047 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,530 ms | 4,530 ms | 4,530 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,962 ms | 3,962 ms | 3,962 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 500bb6031d1768425e99e1288b9c76807b21d52d
- Workflow ref: main
- Workflow SHA: 500bb6031d1768425e99e1288b9c76807b21d52d
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9470920489](https://github.com/openclaw/openclaw/actions/runs/32554023430/artifacts/9470920489); its checksum is published under the bundles directory.
