# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260731-061758-540945
- Generated: 2026-07-31T06:19:13.066Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,103 MB | 1,103 MB | 1,103 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 177 % | 177 % | 177 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,086 ms | 7,086 ms | 7,086 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,496 ms | 6,496 ms | 6,496 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,117 ms | 7,117 ms | 7,117 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,364 ms | 5,364 ms | 5,364 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,103 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,103 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,103 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 2aabde72623d71e19a16f11a0b080eb13f8a8960
- Workflow ref: main
- Workflow SHA: 2aabde72623d71e19a16f11a0b080eb13f8a8960
- Kova repository: openclaw/Kova
- Kova ref: 517952b835640a368c4af6dfe6dc8365ae841b57
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8784794620](https://github.com/openclaw/openclaw/actions/runs/30609169716/artifacts/8784794620); its checksum is published under the bundles directory.
