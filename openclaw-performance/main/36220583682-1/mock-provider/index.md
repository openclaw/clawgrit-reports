# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260926-052333-fb3a3d
- Generated: 2026-09-26T05:27:40.644Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,122 MB | 1,133 MB | 1,135 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,122 MB | 1,133 MB | 1,135 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 236 % | 236 % | 236 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 18.7 ms | 24.2 ms | 24.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,712 ms | 4,983 ms | 5,013 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,633 ms | 4,703 ms | 4,711 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,716 ms | 4,998 ms | 5,029 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,337 ms | 4,551 ms | 4,575 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,289 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,281 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,302 | <= 1200 |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,077 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,109 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,124 | <= 1000 |

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
- Tested SHA: 37469917520b379b8cf231cc2f99424242489151
- Workflow ref: main
- Workflow SHA: 37469917520b379b8cf231cc2f99424242489151
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

The complete Kova bundle remains in [Actions artifact 10898667390](https://github.com/openclaw/openclaw/actions/runs/36220583682/artifacts/10898667390); its checksum is published under the bundles directory.
