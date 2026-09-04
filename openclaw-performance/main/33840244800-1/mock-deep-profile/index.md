# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260904-053034-4f07a5
- Generated: 2026-09-04T05:32:24.461Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 612 MB | 612 MB | 612 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 612 MB | 612 MB | 612 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 144 % | 144 % | 144 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 709 MB | 709 MB | 709 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 145 % | 145 % | 145 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,195 ms | 4,195 ms | 4,195 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,220 ms | 4,220 ms | 4,220 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,716 ms | 3,716 ms | 3,716 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,457 ms | 3,457 ms | 3,457 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: e5d413f7e54a85f0a365ddcf36bd1ba23afcb212
- Workflow ref: main
- Workflow SHA: e5d413f7e54a85f0a365ddcf36bd1ba23afcb212
- Kova repository: openclaw/Kova
- Kova ref: 81919463ef9620722373c813192c688573f2b533
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9924856615](https://github.com/openclaw/openclaw/actions/runs/33840244800/artifacts/9924856615); its checksum is published under the bundles directory.
