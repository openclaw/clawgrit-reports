# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260808-052920-c46727
- Generated: 2026-08-08T05:30:34.093Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 918 MB | 918 MB | 918 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 157 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,545 ms | 5,545 ms | 5,545 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,129 ms | 5,129 ms | 5,129 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,567 ms | 5,567 ms | 5,567 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,985 ms | 3,985 ms | 3,985 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 733512b612e5fcfa96ca0764ac1851990406f187
- Workflow ref: main
- Workflow SHA: 733512b612e5fcfa96ca0764ac1851990406f187
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9017265367](https://github.com/openclaw/openclaw/actions/runs/31241657804/artifacts/9017265367); its checksum is published under the bundles directory.
