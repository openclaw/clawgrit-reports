# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260925-052510-030db8
- Generated: 2026-09-25T05:29:43.136Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,115 MB | 1,135 MB | 1,137 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,115 MB | 1,135 MB | 1,137 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 222 % | 236 % | 238 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 19.5 ms | 21.1 ms | 21.3 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,085 ms | 6,541 ms | 6,592 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,807 ms | 5,129 ms | 5,165 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,170 ms | 6,617 ms | 6,667 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,803 ms | 5,980 ms | 5,999 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,305 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,274 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,283 | <= 1200 |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,025 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,055 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 2584898818aa7a736a8cbe87b3648f18fd313de0
- Workflow ref: main
- Workflow SHA: 2584898818aa7a736a8cbe87b3648f18fd313de0
- Kova repository: openclaw/Kova
- Kova ref: 14d7413dfc0f2b79c771dad83aca6d99413182bd
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10848336381](https://github.com/openclaw/openclaw/actions/runs/36098375189/artifacts/10848336381); its checksum is published under the bundles directory.
