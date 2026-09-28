# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260928-053600-3a0839
- Generated: 2026-09-28T05:40:13.775Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 4, BLOCKED: 2
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,143 MB | 1,147 MB | 1,148 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,143 MB | 1,147 MB | 1,148 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 265 % | 277 % | 278 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 20.7 ms | 25.8 ms | 26.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 995 MB | 1,035 MB | 1,040 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 232 % | 237 % | 237 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,022 ms | 5,533 ms | 5,590 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,624 ms | 4,737 ms | 4,750 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,036 ms | 5,581 ms | 5,641 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,776 ms | 5,255 ms | 5,308 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,315 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | 265 | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,313 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | 278 | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,319 | <= 1200 |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,040 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 6bfe76fcd7d31f64629c6889ce34e54368221d51
- Workflow ref: main
- Workflow SHA: 6bfe76fcd7d31f64629c6889ce34e54368221d51
- Kova repository: openclaw/Kova
- Kova ref: 17304ab9d7aa283b78b1771a2585518fa5961048
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10952808213](https://github.com/openclaw/openclaw/actions/runs/36381961569/artifacts/10952808213); its checksum is published under the bundles directory.
