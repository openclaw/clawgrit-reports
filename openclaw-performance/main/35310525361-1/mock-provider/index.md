# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260918-052346-b8b499
- Generated: 2026-09-18T05:27:19.785Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, PASS: 5
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 966 MB | 968 MB | 968 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 966 MB | 968 MB | 968 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 223 % | 241 % | 243 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 25.8 ms | 27.3 ms | 27.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 662 MB | 672 MB | 673 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 173 % | 177 % | 178 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,017 ms | 4,169 ms | 4,186 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,259 ms | 3,561 ms | 3,595 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,059 ms | 4,201 ms | 4,217 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,882 ms | 4,020 ms | 4,036 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.maxCpuPercent | {"lower":177.9,"upper":351.6} | <= 300 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: deb939dc004be671dc3e25e1dad1d310a3f45a61
- Workflow ref: main
- Workflow SHA: deb939dc004be671dc3e25e1dad1d310a3f45a61
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

The complete Kova bundle remains in [Actions artifact 10533083024](https://github.com/openclaw/openclaw/actions/runs/35310525361/artifacts/10533083024); its checksum is published under the bundles directory.
