# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261003-053345-f775d4
- Generated: 2026-10-03T05:35:58.352Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,065 MB | 1,065 MB | 1,065 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 202 % | 202 % | 202 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 10,265 ms | 10,265 ms | 10,265 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 10,296 ms | 10,296 ms | 10,296 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 9,672 ms | 9,672 ms | 9,672 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 8,749 ms | 8,749 ms | 8,749 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 424c8a74575999e35aa7e144bb613bc40080303c
- Workflow ref: main
- Workflow SHA: 424c8a74575999e35aa7e144bb613bc40080303c
- Kova repository: openclaw/Kova
- Kova ref: 4b8b1681446b868a44193ed6e97253a6c8bcbbbf
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11265484409](https://github.com/openclaw/openclaw/actions/runs/37100102590/artifacts/11265484409); its checksum is published under the bundles directory.
