# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260823-052001-84ecc5
- Generated: 2026-08-23T05:21:50.033Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 877 MB | 877 MB | 877 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 147 % | 147 % | 147 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,372 ms | 5,372 ms | 5,372 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,410 ms | 5,410 ms | 5,410 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,658 ms | 4,658 ms | 4,658 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,202 ms | 4,202 ms | 4,202 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 4d696fbe0d2bf53b8f590743a325667ea94f3f41
- Workflow ref: main
- Workflow SHA: 4d696fbe0d2bf53b8f590743a325667ea94f3f41
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9488132536](https://github.com/openclaw/openclaw/actions/runs/32620062599/artifacts/9488132536); its checksum is published under the bundles directory.
