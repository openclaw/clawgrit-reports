# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-2026-07-10T021046Z
- Generated: 2026-07-10T02:14:23.909Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 763 MB | 763 MB | 763 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 139 % | 139 % | 139 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,988 ms | 4,988 ms | 4,988 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,944 ms | 4,944 ms | 4,944 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,990 ms | 4,990 ms | 4,990 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,621 ms | 2,621 ms | 2,621 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: cfb55e29ca68cb08f97f5513f04c2865a915ac56
- Tested SHA: cfb55e29ca68cb08f97f5513f04c2865a915ac56
- Workflow ref: main
- Workflow SHA: cab8040b1436613da1b24306b5cba3033bddd648
- Kova repository: openclaw/Kova
- Kova ref: a2dd84e7d65507e614afaff850d3932d18c859b6
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.5
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message
