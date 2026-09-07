# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260907-052523-fdb014
- Generated: 2026-09-07T05:27:19.918Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 602 MB | 602 MB | 602 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 602 MB | 602 MB | 602 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 152 % | 152 % | 152 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.5 ms | 10.5 ms | 10.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 740 MB | 740 MB | 740 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 151 % | 151 % | 151 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,584 ms | 4,584 ms | 4,584 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,597 ms | 4,597 ms | 4,597 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,344 ms | 4,344 ms | 4,344 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,036 ms | 4,036 ms | 4,036 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: d4ac1bcb9a94584f4763555412ab77db15f307dd
- Workflow ref: main
- Workflow SHA: d4ac1bcb9a94584f4763555412ab77db15f307dd
- Kova repository: openclaw/Kova
- Kova ref: 81919463ef9620722373c813192c688573f2b533
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10005496137](https://github.com/openclaw/openclaw/actions/runs/34086627997/artifacts/10005496137); its checksum is published under the bundles directory.
