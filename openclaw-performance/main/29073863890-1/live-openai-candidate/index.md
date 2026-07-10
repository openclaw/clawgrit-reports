# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-2026-07-10T062756Z
- Generated: 2026-07-10T06:31:31.418Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 862 MB | 862 MB | 862 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 151 % | 151 % | 151 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,481 ms | 7,481 ms | 7,481 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,726 ms | 5,726 ms | 5,726 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,573 ms | 7,573 ms | 7,573 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,653 ms | 3,653 ms | 3,653 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | providerFinalMs | 3,988 | <= 3000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 20bc552590b2e1f31b8dd8534446011661d009d2
- Workflow ref: main
- Workflow SHA: 20bc552590b2e1f31b8dd8534446011661d009d2
- Kova repository: openclaw/Kova
- Kova ref: a2dd84e7d65507e614afaff850d3932d18c859b6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.5
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message
