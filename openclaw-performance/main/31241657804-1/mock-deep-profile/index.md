# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260808-052624-d389ae
- Generated: 2026-08-08T05:27:49.273Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 962 MB | 962 MB | 962 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 962 MB | 962 MB | 962 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 154 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,104 MB | 1,104 MB | 1,104 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 157 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,311 ms | 5,311 ms | 5,311 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,326 ms | 5,326 ms | 5,326 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,032 ms | 5,032 ms | 5,032 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,699 ms | 4,699 ms | 4,699 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 733512b612e5fcfa96ca0764ac1851990406f187
- Workflow ref: main
- Workflow SHA: 733512b612e5fcfa96ca0764ac1851990406f187
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9017236252](https://github.com/openclaw/openclaw/actions/runs/31241657804/artifacts/9017236252); its checksum is published under the bundles directory.
