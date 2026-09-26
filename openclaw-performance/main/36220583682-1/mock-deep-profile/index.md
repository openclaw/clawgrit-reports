# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260926-052331-9de591
- Generated: 2026-09-26T05:26:21.559Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,070 MB | 1,070 MB | 1,070 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,070 MB | 1,070 MB | 1,070 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 226 % | 226 % | 226 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 17.8 ms | 17.8 ms | 17.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 8,649 ms | 8,649 ms | 8,649 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 8,246 ms | 8,246 ms | 8,246 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 8,670 ms | 8,670 ms | 8,670 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 7,744 ms | 7,744 ms | 7,744 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,237 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":171.3,"upper":299.3} | <= 200 |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.maxCpuPercent | {"lower":283.4,"upper":358.2} | <= 300 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
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
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10899081962](https://github.com/openclaw/openclaw/actions/runs/36220583682/artifacts/10899081962); its checksum is published under the bundles directory.
