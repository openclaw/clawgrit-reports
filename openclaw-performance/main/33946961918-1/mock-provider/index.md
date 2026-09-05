# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260905-052239-5c84ce
- Generated: 2026-09-05T05:25:07.237Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 601 MB | 634 MB | 638 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 601 MB | 634 MB | 638 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 136 % | 138 % | 138 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 427 MB | 427 MB | 427 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 140 % | 141 % | 141 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 1,715 ms | 1,751 ms | 1,755 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 1,718 ms | 1,757 ms | 1,761 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 1,652 ms | 1,658 ms | 1,659 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 1,583 ms | 1,615 ms | 1,619 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 6df6aed680f81967f11e7598d08116cc6c015ba0
- Workflow ref: main
- Workflow SHA: 6df6aed680f81967f11e7598d08116cc6c015ba0
- Kova repository: openclaw/Kova
- Kova ref: 81919463ef9620722373c813192c688573f2b533
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9963681976](https://github.com/openclaw/openclaw/actions/runs/33946961918/artifacts/9963681976); its checksum is published under the bundles directory.
