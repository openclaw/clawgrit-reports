# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-2026-07-10T023001Z
- Generated: 2026-07-10T02:32:42.750Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 743 MB | 743 MB | 743 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 145 % | 145 % | 145 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,357 ms | 5,357 ms | 5,357 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,232 ms | 5,232 ms | 5,232 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,364 ms | 5,364 ms | 5,364 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,871 ms | 2,871 ms | 2,871 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 58de4dcdf14a364f1532060c589d61d96abaed0c
- Tested SHA: 58de4dcdf14a364f1532060c589d61d96abaed0c
- Workflow ref: main
- Workflow SHA: ee1450d61978f7e3c48cff89d83ea9e4d6000daf
- Kova repository: openclaw/Kova
- Kova ref: a2dd84e7d65507e614afaff850d3932d18c859b6
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.5
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message
