# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260928-053550-99b1a2
- Generated: 2026-09-28T05:38:42.291Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1, BLOCKED: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,183 MB | 1,183 MB | 1,183 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,183 MB | 1,183 MB | 1,183 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 308 % | 308 % | 308 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 22.9 ms | 22.9 ms | 22.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,330 MB | 1,330 MB | 1,330 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 294 % | 294 % | 294 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 8,900 ms | 8,900 ms | 8,900 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 8,904 ms | 8,904 ms | 8,904 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 8,815 ms | 8,815 ms | 8,815 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 8,065 ms | 8,065 ms | 8,065 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,183 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.maxCpuPercent | 308 | <= 250 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,355 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.maxCpuPercent | 324 | <= 300 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":165.1,"upper":273} | <= 200 |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
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
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10952913027](https://github.com/openclaw/openclaw/actions/runs/36381961569/artifacts/10952913027); its checksum is published under the bundles directory.
