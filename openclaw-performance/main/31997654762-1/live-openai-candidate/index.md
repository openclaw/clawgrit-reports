# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260817-052310-77eb05
- Generated: 2026-08-17T05:24:57.163Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 885 MB | 885 MB | 885 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 154 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,931 ms | 4,931 ms | 4,931 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,962 ms | 4,962 ms | 4,962 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,350 ms | 4,350 ms | 4,350 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,823 ms | 3,823 ms | 3,823 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: b3ab276077464ed35c29707d7aea1607f9dc6cbd
- Workflow ref: main
- Workflow SHA: b3ab276077464ed35c29707d7aea1607f9dc6cbd
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9277398663](https://github.com/openclaw/openclaw/actions/runs/31997654762/artifacts/9277398663); its checksum is published under the bundles directory.
