# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260802-061510-25c633
- Generated: 2026-08-02T06:16:22.726Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 888 MB | 888 MB | 888 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 152 % | 152 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,707 ms | 5,707 ms | 5,707 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,708 ms | 5,708 ms | 5,708 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,683 ms | 5,683 ms | 5,683 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,323 ms | 4,323 ms | 4,323 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: df8cc5a45810ec8f8b0e308868af2871d601bf40
- Workflow ref: main
- Workflow SHA: df8cc5a45810ec8f8b0e308868af2871d601bf40
- Kova repository: openclaw/Kova
- Kova ref: 283070760a16655b28835061774158b8b11b4aff
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8829448506](https://github.com/openclaw/openclaw/actions/runs/30735430041/artifacts/8829448506); its checksum is published under the bundles directory.
