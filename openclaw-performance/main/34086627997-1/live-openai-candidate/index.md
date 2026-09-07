# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260907-052521-b4e96d
- Generated: 2026-09-07T05:26:46.210Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 609 MB | 609 MB | 609 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 142 % | 142 % | 142 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,600 ms | 4,600 ms | 4,600 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,604 ms | 4,604 ms | 4,604 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,514 ms | 4,514 ms | 4,514 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,556 ms | 2,556 ms | 2,556 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: d4ac1bcb9a94584f4763555412ab77db15f307dd
- Workflow ref: main
- Workflow SHA: d4ac1bcb9a94584f4763555412ab77db15f307dd
- Kova repository: openclaw/Kova
- Kova ref: 81919463ef9620722373c813192c688573f2b533
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10005481619](https://github.com/openclaw/openclaw/actions/runs/34086627997/artifacts/10005481619); its checksum is published under the bundles directory.
