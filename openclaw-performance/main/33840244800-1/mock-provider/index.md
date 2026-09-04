# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260904-052723-9ddf70
- Generated: 2026-09-04T05:30:02.893Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 616 MB | 617 MB | 617 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 616 MB | 617 MB | 617 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 139 % | 142 % | 142 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 407 MB | 425 MB | 427 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 141 % | 141 % | 141 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 1,761 ms | 1,786 ms | 1,789 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 1,760 ms | 1,783 ms | 1,785 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 1,764 ms | 1,787 ms | 1,789 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 1,626 ms | 1,646 ms | 1,648 ms |

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
- Tested SHA: e5d413f7e54a85f0a365ddcf36bd1ba23afcb212
- Workflow ref: main
- Workflow SHA: e5d413f7e54a85f0a365ddcf36bd1ba23afcb212
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

The complete Kova bundle remains in [Actions artifact 9924806446](https://github.com/openclaw/openclaw/actions/runs/33840244800/artifacts/9924806446); its checksum is published under the bundles directory.
