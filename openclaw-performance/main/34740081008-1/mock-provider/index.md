# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260913-052352-533961
- Generated: 2026-09-13T05:27:09.316Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 978 MB | 981 MB | 981 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 978 MB | 981 MB | 981 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 224 % | 236 % | 238 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.1 ms | 10.9 ms | 10.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 560 MB | 561 MB | 561 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 161 % | 162 % | 162 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,719 ms | 2,752 ms | 2,756 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,218 ms | 2,225 ms | 2,226 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,745 ms | 2,780 ms | 2,784 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,609 ms | 2,641 ms | 2,645 ms |

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
- Tested SHA: 004332fc723aaea35530db9135d819809e59aac2
- Workflow ref: main
- Workflow SHA: 004332fc723aaea35530db9135d819809e59aac2
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

The complete Kova bundle remains in [Actions artifact 10311464279](https://github.com/openclaw/openclaw/actions/runs/34740081008/artifacts/10311464279); its checksum is published under the bundles directory.
