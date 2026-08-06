# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260806-060857-df3f08
- Generated: 2026-08-06T06:10:13.028Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 925 MB | 925 MB | 925 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 155 % | 155 % | 155 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,516 ms | 5,516 ms | 5,516 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,533 ms | 5,533 ms | 5,533 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,201 ms | 5,201 ms | 5,201 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,290 ms | 4,290 ms | 4,290 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 874c63318b590a3567a49d36066d79d211f8be08
- Workflow ref: main
- Workflow SHA: 874c63318b590a3567a49d36066d79d211f8be08
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8957659075](https://github.com/openclaw/openclaw/actions/runs/31076206164/artifacts/8957659075); its checksum is published under the bundles directory.
