# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260927-052421-acb5bf
- Generated: 2026-09-27T05:28:45.137Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,172 MB | 1,199 MB | 1,202 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,172 MB | 1,199 MB | 1,202 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 204 % | 217 % | 219 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 20.7 ms | 21 ms | 21 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,291 ms | 5,353 ms | 5,359 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,730 ms | 5,305 ms | 5,369 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,175 ms | 5,306 ms | 5,321 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,003 ms | 5,115 ms | 5,127 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,331 | <= 1200 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,202 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,369 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,339 | <= 1200 |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,120 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,110 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,102 | <= 1000 |

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
- Tested SHA: 13829435c8a876924ba0f57006dca10c365758b7
- Workflow ref: main
- Workflow SHA: 13829435c8a876924ba0f57006dca10c365758b7
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

The complete Kova bundle remains in [Actions artifact 10924191471](https://github.com/openclaw/openclaw/actions/runs/36297030444/artifacts/10924191471); its checksum is published under the bundles directory.
