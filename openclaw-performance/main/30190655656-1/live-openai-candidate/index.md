# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260726-061325-13232d
- Generated: 2026-07-26T06:14:35.613Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: INCOMPLETE: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 991 MB | 991 MB | 991 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 149 % | 149 % | 149 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 8,401 ms | 8,401 ms | 8,401 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 7,851 ms | 7,851 ms | 7,851 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 8,430 ms | 8,430 ms | 8,430 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,435 ms | 5,435 ms | 5,435 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | INCOMPLETE |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 9dfb2a131818aa308def4fff7e10e5ecb9c48d5f
- Workflow ref: main
- Workflow SHA: 9dfb2a131818aa308def4fff7e10e5ecb9c48d5f
- Kova repository: openclaw/Kova
- Kova ref: 517952b835640a368c4af6dfe6dc8365ae841b57
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8628460295](https://github.com/openclaw/openclaw/actions/runs/30190655656/artifacts/8628460295); its checksum is published under the bundles directory.
