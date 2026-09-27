# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260927-052421-462006
- Generated: 2026-09-27T05:27:33.932Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,201 MB | 1,201 MB | 1,201 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,201 MB | 1,201 MB | 1,201 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 226 % | 226 % | 226 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 21 ms | 21 ms | 21 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 10,372 ms | 10,372 ms | 10,372 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 9,403 ms | 9,403 ms | 9,403 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 10,423 ms | 10,423 ms | 10,423 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 9,198 ms | 9,198 ms | 9,198 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,201 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,368 | <= 1200 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":146.9,"upper":259.1} | <= 200 |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.maxCpuPercent | {"lower":275.5,"upper":334.6} | <= 300 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
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
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10924096608](https://github.com/openclaw/openclaw/actions/runs/36297030444/artifacts/10924096608); its checksum is published under the bundles directory.
