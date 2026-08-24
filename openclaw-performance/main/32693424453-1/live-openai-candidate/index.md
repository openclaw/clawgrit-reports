# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260824-052521-151b0f
- Generated: 2026-08-24T05:27:13.736Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 876 MB | 876 MB | 876 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 148 % | 148 % | 148 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,528 ms | 5,528 ms | 5,528 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,555 ms | 5,555 ms | 5,555 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,023 ms | 5,023 ms | 5,023 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,241 ms | 4,241 ms | 4,241 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: ca6fea301ba94144796fed67035dd97364679da4
- Workflow ref: main
- Workflow SHA: ca6fea301ba94144796fed67035dd97364679da4
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9508061522](https://github.com/openclaw/openclaw/actions/runs/32693424453/artifacts/9508061522); its checksum is published under the bundles directory.
