# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260803-061911-a832bc
- Generated: 2026-08-03T06:20:28.803Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 899 MB | 899 MB | 899 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 156 % | 156 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,897 ms | 6,897 ms | 6,897 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,214 ms | 6,214 ms | 6,214 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,933 ms | 6,933 ms | 6,933 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,555 ms | 4,555 ms | 4,555 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: f5facf8cbfe5c0fcf3a83a2bc9b91424dac34c22
- Workflow ref: main
- Workflow SHA: f5facf8cbfe5c0fcf3a83a2bc9b91424dac34c22
- Kova repository: openclaw/Kova
- Kova ref: 283070760a16655b28835061774158b8b11b4aff
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8846618209](https://github.com/openclaw/openclaw/actions/runs/30789752722/artifacts/8846618209); its checksum is published under the bundles directory.
