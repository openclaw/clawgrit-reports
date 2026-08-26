# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260826-052122-9bab2e
- Generated: 2026-08-26T05:24:25.960Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 606 MB | 606 MB | 606 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 606 MB | 606 MB | 606 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 121 % | 121 % | 121 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 69.7 ms | 69.7 ms | 69.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 671 MB | 671 MB | 671 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 144 % | 144 % | 144 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,191 ms | 5,191 ms | 5,191 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,247 ms | 5,247 ms | 5,247 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,132 ms | 4,132 ms | 4,132 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,374 ms | 4,374 ms | 4,374 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 647414e3e31b5fe7b7c136c1a417704899e0960c
- Workflow ref: main
- Workflow SHA: 647414e3e31b5fe7b7c136c1a417704899e0960c
- Kova repository: openclaw/Kova
- Kova ref: 1fe2f4081877bb12b7f7ed355349f98b8a0a6882
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9594171248](https://github.com/openclaw/openclaw/actions/runs/32933640755/artifacts/9594171248); its checksum is published under the bundles directory.
