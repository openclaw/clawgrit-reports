# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260914-052828-3d5441
- Generated: 2026-09-14T05:31:32.096Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 980 MB | 991 MB | 992 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 980 MB | 991 MB | 992 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 146 % | 163 % | 165 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 11.1 ms | 12 ms | 12.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 622 MB | 626 MB | 626 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 165 % | 181 % | 183 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,520 ms | 2,539 ms | 2,541 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,361 ms | 2,405 ms | 2,410 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,526 ms | 2,550 ms | 2,553 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,424 ms | 2,444 ms | 2,446 ms |

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
- Tested SHA: dba4da1f8b00cec0f5578ead7628aa83aff0c8a1
- Workflow ref: main
- Workflow SHA: dba4da1f8b00cec0f5578ead7628aa83aff0c8a1
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10334626110](https://github.com/openclaw/openclaw/actions/runs/34809504252/artifacts/10334626110); its checksum is published under the bundles directory.
