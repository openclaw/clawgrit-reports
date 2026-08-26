# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260826-052119-ef3a51
- Generated: 2026-08-26T05:24:27.689Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 591 MB | 595 MB | 595 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 591 MB | 595 MB | 595 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 120 % | 129 % | 130 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 59.8 ms | 60.6 ms | 60.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 495 MB | 506 MB | 507 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 127 % | 127 % | 127 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,176 ms | 2,243 ms | 2,250 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,191 ms | 2,256 ms | 2,263 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 1,951 ms | 1,998 ms | 2,003 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,058 ms | 2,122 ms | 2,129 ms |

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
- Tested SHA: 647414e3e31b5fe7b7c136c1a417704899e0960c
- Workflow ref: main
- Workflow SHA: 647414e3e31b5fe7b7c136c1a417704899e0960c
- Kova repository: openclaw/Kova
- Kova ref: 1fe2f4081877bb12b7f7ed355349f98b8a0a6882
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9594169074](https://github.com/openclaw/openclaw/actions/runs/32933640755/artifacts/9594169074); its checksum is published under the bundles directory.
