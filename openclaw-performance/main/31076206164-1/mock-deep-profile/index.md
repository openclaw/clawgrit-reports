# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260806-060822-85be4c
- Generated: 2026-08-06T06:09:46.611Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 980 MB | 980 MB | 980 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 980 MB | 980 MB | 980 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 157 % | 157 % | 157 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,053 MB | 1,053 MB | 1,053 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 155 % | 155 % | 155 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,438 ms | 5,438 ms | 5,438 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,454 ms | 5,454 ms | 5,454 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,129 ms | 5,129 ms | 5,129 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,900 ms | 4,900 ms | 4,900 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 874c63318b590a3567a49d36066d79d211f8be08
- Workflow ref: main
- Workflow SHA: 874c63318b590a3567a49d36066d79d211f8be08
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8957653898](https://github.com/openclaw/openclaw/actions/runs/31076206164/artifacts/8957653898); its checksum is published under the bundles directory.
