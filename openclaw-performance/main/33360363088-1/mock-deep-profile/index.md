# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260831-052507-f139de
- Generated: 2026-08-31T05:27:04.513Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 577 MB | 577 MB | 577 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 577 MB | 577 MB | 577 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 136 % | 136 % | 136 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 656 MB | 656 MB | 656 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 140 % | 140 % | 140 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,719 ms | 3,719 ms | 3,719 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,671 ms | 3,671 ms | 3,671 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,721 ms | 3,721 ms | 3,721 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,980 ms | 2,980 ms | 2,980 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 0ee6e0575a90f8c3fce8cd54e173d6b31b0923ef
- Workflow ref: main
- Workflow SHA: 0ee6e0575a90f8c3fce8cd54e173d6b31b0923ef
- Kova repository: openclaw/Kova
- Kova ref: 81919463ef9620722373c813192c688573f2b533
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9746542276](https://github.com/openclaw/openclaw/actions/runs/33360363088/artifacts/9746542276); its checksum is published under the bundles directory.
