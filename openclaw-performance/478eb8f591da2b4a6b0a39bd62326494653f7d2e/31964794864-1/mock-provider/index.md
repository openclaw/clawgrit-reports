# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260816-183134-3f2e1e
- Generated: 2026-08-16T18:38:58.752Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 12, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 1,192 MB | 1,196 MB | 1,196 MB |
| fresh-install | fresh | Gateway RSS | 1,192 MB | 1,196 MB | 1,196 MB |
| fresh-install | fresh | Max CPU | 164 % | 167 % | 167 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 8.5 ms | 9.4 ms |
| fresh-install | onboarded-user | Primary RSS | 1,203 MB | 1,242 MB | 1,246 MB |
| fresh-install | onboarded-user | Gateway RSS | 1,203 MB | 1,242 MB | 1,246 MB |
| fresh-install | onboarded-user | Max CPU | 159 % | 159 % | 159 % |
| fresh-install | onboarded-user | Event Loop Max | 9.8 ms | 11.4 ms | 11.6 ms |
| bundled-plugin-startup | fresh | Primary RSS | 1,228 MB | 1,232 MB | 1,232 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 1,228 MB | 1,232 MB | 1,232 MB |
| bundled-plugin-startup | fresh | Max CPU | 166 % | 167 % | 167 % |
| bundled-plugin-startup | fresh | Event Loop Max | 11.4 ms | 13.1 ms | 13.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 887 MB | 908 MB | 910 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 151 % | 151 % | 151 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,341 ms | 3,522 ms | 3,542 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,348 ms | 3,551 ms | 3,574 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,006 ms | 3,182 ms | 3,202 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,234 ms | 3,412 ms | 3,432 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,221 MB | 1,250 MB | 1,253 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,221 MB | 1,250 MB | 1,253 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 158 % | 159 % | 159 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 11 ms | 11.9 ms | 12 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | peakRssMb | 1,192 | <= 1050 |
| fresh-install | fresh | peakRssMb | 1,196 | <= 1050 |
| fresh-install | fresh | peakRssMb | 1,126 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,246 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,178 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,203 | <= 1050 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,232 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,228 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,159 | <= 1000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,253 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,253 | <= 1200 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,218 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,201 | <= 1200 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,221 | <= 1050 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | FAIL |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 478eb8f591da2b4a6b0a39bd62326494653f7d2e
- Tested SHA: 478eb8f591da2b4a6b0a39bd62326494653f7d2e
- Workflow ref: main
- Workflow SHA: b7fb951a94e7bbdf25f79146b28c3d49bcb6a0f2
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9268291802](https://github.com/openclaw/openclaw/actions/runs/31964794864/artifacts/9268291802); its checksum is published under the bundles directory.
