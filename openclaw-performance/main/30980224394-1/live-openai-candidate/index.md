# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260805-060706-40b23b
- Generated: 2026-08-05T06:08:27.935Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 922 MB | 922 MB | 922 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 159 % | 159 % | 159 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,132 ms | 7,132 ms | 7,132 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 7,186 ms | 7,186 ms | 7,186 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,097 ms | 6,097 ms | 6,097 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,292 ms | 5,292 ms | 5,292 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 046a6881bb4c86f6e79af355dc7fe426965e6178
- Workflow ref: main
- Workflow SHA: 046a6881bb4c86f6e79af355dc7fe426965e6178
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8919875166](https://github.com/openclaw/openclaw/actions/runs/30980224394/artifacts/8919875166); its checksum is published under the bundles directory.
