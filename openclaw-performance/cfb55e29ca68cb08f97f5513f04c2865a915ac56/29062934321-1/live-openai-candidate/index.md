# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-2026-07-10T014215Z
- Generated: 2026-07-10T01:45:17.286Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 738 MB | 738 MB | 738 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 139 % | 139 % | 139 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,795 ms | 4,795 ms | 4,795 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,825 ms | 4,825 ms | 4,825 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,218 ms | 4,218 ms | 4,218 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,703 ms | 2,703 ms | 2,703 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: cfb55e29ca68cb08f97f5513f04c2865a915ac56
- Tested SHA: cfb55e29ca68cb08f97f5513f04c2865a915ac56
- Workflow ref: main
- Workflow SHA: cbc087dcc5aa949e69e6d63620a22a49ab4ac535
- Kova repository: openclaw/Kova
- Kova ref: 6a1c20bf818f71f93d6d4cad7dabac74a2996bc0
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.5
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message
