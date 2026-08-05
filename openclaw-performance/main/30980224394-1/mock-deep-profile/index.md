# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260805-060722-ffc368
- Generated: 2026-08-05T06:08:56.670Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 984 MB | 984 MB | 984 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 984 MB | 984 MB | 984 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 160 % | 160 % | 160 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 16.7 ms | 16.7 ms | 16.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,088 MB | 1,088 MB | 1,088 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 156 % | 156 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,261 ms | 6,261 ms | 6,261 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,837 ms | 5,837 ms | 5,837 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,283 ms | 6,283 ms | 6,283 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,534 ms | 5,534 ms | 5,534 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
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
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8919889026](https://github.com/openclaw/openclaw/actions/runs/30980224394/artifacts/8919889026); its checksum is published under the bundles directory.
