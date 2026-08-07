# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260807-054713-1f0bb0
- Generated: 2026-08-07T05:48:34.770Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 936 MB | 936 MB | 936 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 155 % | 155 % | 155 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,744 ms | 5,744 ms | 5,744 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,753 ms | 5,753 ms | 5,753 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,572 ms | 5,572 ms | 5,572 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,527 ms | 4,527 ms | 4,527 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: e2402208e011657d01e3d68b0ba39bfe7cae0c96
- Workflow ref: main
- Workflow SHA: e2402208e011657d01e3d68b0ba39bfe7cae0c96
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8983564761](https://github.com/openclaw/openclaw/actions/runs/31151676289/artifacts/8983564761); its checksum is published under the bundles directory.
