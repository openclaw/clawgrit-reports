# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260906-052307-9ddefc
- Generated: 2026-09-06T05:24:52.133Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 589 MB | 589 MB | 589 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 589 MB | 589 MB | 589 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 141 % | 141 % | 141 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.4 ms | 10.4 ms | 10.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 791 MB | 791 MB | 791 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 154 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,949 ms | 3,949 ms | 3,949 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,966 ms | 3,966 ms | 3,966 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,627 ms | 3,627 ms | 3,627 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,291 ms | 3,291 ms | 3,291 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: bcef3b3526dd1d015e0b1c1030a1dea12cf1b517
- Workflow ref: main
- Workflow SHA: bcef3b3526dd1d015e0b1c1030a1dea12cf1b517
- Kova repository: openclaw/Kova
- Kova ref: 81919463ef9620722373c813192c688573f2b533
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9983310518](https://github.com/openclaw/openclaw/actions/runs/34013735016/artifacts/9983310518); its checksum is published under the bundles directory.
