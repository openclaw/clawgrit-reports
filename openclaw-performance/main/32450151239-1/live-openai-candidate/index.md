# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260821-052038-470250
- Generated: 2026-08-21T05:22:46.808Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 933 MB | 933 MB | 933 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 162 % | 162 % | 162 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,899 ms | 6,899 ms | 6,899 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,932 ms | 6,932 ms | 6,932 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,280 ms | 6,280 ms | 6,280 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,490 ms | 5,490 ms | 5,490 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 76bb7ff2b667dd71f06c6a5c12ea851807b2acee
- Workflow ref: main
- Workflow SHA: 76bb7ff2b667dd71f06c6a5c12ea851807b2acee
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9435441241](https://github.com/openclaw/openclaw/actions/runs/32450151239/artifacts/9435441241); its checksum is published under the bundles directory.
