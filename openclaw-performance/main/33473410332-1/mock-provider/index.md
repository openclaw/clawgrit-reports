# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260901-052617-b7ee7d
- Generated: 2026-09-01T05:29:46.089Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 582 MB | 609 MB | 612 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 582 MB | 609 MB | 612 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 141 % | 145 % | 145 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 484 MB | 509 MB | 512 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 155 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,156 ms | 3,933 ms | 4,019 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,165 ms | 3,559 ms | 3,603 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,977 ms | 3,935 ms | 4,041 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,893 ms | 3,636 ms | 3,719 ms |

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
- Tested SHA: 85df957dd28e8433687f97f63581c00829045591
- Workflow ref: main
- Workflow SHA: 85df957dd28e8433687f97f63581c00829045591
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

The complete Kova bundle remains in [Actions artifact 9787434930](https://github.com/openclaw/openclaw/actions/runs/33473410332/artifacts/9787434930); its checksum is published under the bundles directory.
