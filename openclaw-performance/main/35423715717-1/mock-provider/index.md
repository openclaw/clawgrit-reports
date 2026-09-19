# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260919-052224-7af65e
- Generated: 2026-09-19T05:25:56.282Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 988 MB | 992 MB | 993 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 988 MB | 992 MB | 993 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 164 % | 176 % | 177 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 26.2 ms | 31.5 ms | 32.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 728 MB | 732 MB | 733 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 215 % | 250 % | 253 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,878 ms | 5,550 ms | 5,736 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,938 ms | 3,008 ms | 3,016 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,928 ms | 5,684 ms | 5,879 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,548 ms | 5,027 ms | 5,191 ms |

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
- Tested SHA: 95b8e03354505bd05875dd7a94e0f67d6fa528cb
- Workflow ref: main
- Workflow SHA: 95b8e03354505bd05875dd7a94e0f67d6fa528cb
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

The complete Kova bundle remains in [Actions artifact 10578462190](https://github.com/openclaw/openclaw/actions/runs/35423715717/artifacts/10578462190); its checksum is published under the bundles directory.
