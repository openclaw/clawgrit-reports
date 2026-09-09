# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260909-052356-4ab0cd
- Generated: 2026-09-09T05:25:26.669Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 602 MB | 602 MB | 602 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 139 % | 139 % | 139 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,696 ms | 4,696 ms | 4,696 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,759 ms | 4,759 ms | 4,759 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,508 ms | 3,508 ms | 3,508 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,105 ms | 2,105 ms | 2,105 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: d9216e894e89cec406d42607c175aeecf4a13ee9
- Workflow ref: main
- Workflow SHA: d9216e894e89cec406d42607c175aeecf4a13ee9
- Kova repository: openclaw/Kova
- Kova ref: 3da9582e9c3eef970ef102dc3950595e0876a1d5
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10089665237](https://github.com/openclaw/openclaw/actions/runs/34314613218/artifacts/10089665237); its checksum is published under the bundles directory.
