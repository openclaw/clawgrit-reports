# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260804-061140-2609df
- Generated: 2026-08-04T06:12:54.950Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 901 MB | 901 MB | 901 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 150 % | 150 % | 150 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,058 ms | 6,058 ms | 6,058 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,066 ms | 6,066 ms | 6,066 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,908 ms | 5,908 ms | 5,908 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,336 ms | 4,336 ms | 4,336 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 3f2fb7e36589e79408dcfdf93df231eea4850978
- Workflow ref: main
- Workflow SHA: 3f2fb7e36589e79408dcfdf93df231eea4850978
- Kova repository: openclaw/Kova
- Kova ref: 283070760a16655b28835061774158b8b11b4aff
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8882064507](https://github.com/openclaw/openclaw/actions/runs/30883081834/artifacts/8882064507); its checksum is published under the bundles directory.
