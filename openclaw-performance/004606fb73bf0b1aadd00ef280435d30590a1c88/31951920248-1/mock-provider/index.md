# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260816-141121-d5506a
- Generated: 2026-08-16T14:18:50.588Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 12, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 1,212 MB | 1,291 MB | 1,300 MB |
| fresh-install | fresh | Gateway RSS | 1,212 MB | 1,291 MB | 1,300 MB |
| fresh-install | fresh | Max CPU | 160 % | 162 % | 162 % |
| fresh-install | fresh | Event Loop Max | 9.9 ms | 12.6 ms | 12.9 ms |
| fresh-install | onboarded-user | Primary RSS | 1,144 MB | 1,150 MB | 1,151 MB |
| fresh-install | onboarded-user | Gateway RSS | 1,144 MB | 1,150 MB | 1,151 MB |
| fresh-install | onboarded-user | Max CPU | 158 % | 158 % | 158 % |
| fresh-install | onboarded-user | Event Loop Max | 9.8 ms | 9.9 ms | 9.9 ms |
| bundled-plugin-startup | fresh | Primary RSS | 1,149 MB | 1,239 MB | 1,249 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 1,149 MB | 1,239 MB | 1,249 MB |
| bundled-plugin-startup | fresh | Max CPU | 160 % | 163 % | 163 % |
| bundled-plugin-startup | fresh | Event Loop Max | 10.1 ms | 11.4 ms | 11.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 887 MB | 909 MB | 911 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 155 % | 156 % | 156 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,274 ms | 3,277 ms | 3,277 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,291 ms | 3,295 ms | 3,295 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,947 ms | 2,952 ms | 2,953 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,156 ms | 3,160 ms | 3,160 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,148 MB | 1,160 MB | 1,161 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,148 MB | 1,160 MB | 1,161 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 157 % | 159 % | 159 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10 ms | 12.4 ms | 12.6 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | peakRssMb | 1,212 | <= 1050 |
| fresh-install | fresh | peakRssMb | 1,160 | <= 1050 |
| fresh-install | fresh | peakRssMb | 1,300 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,151 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,105 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,144 | <= 1050 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,107 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,149 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,249 | <= 1000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,142 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,161 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,148 | <= 1050 |

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
- Tested ref: 004606fb73bf0b1aadd00ef280435d30590a1c88
- Tested SHA: 004606fb73bf0b1aadd00ef280435d30590a1c88
- Workflow ref: main
- Workflow SHA: 1b34939f8210daa026a0284a44e5d661dd621313
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

The complete Kova bundle remains in [Actions artifact 9264996176](https://github.com/openclaw/openclaw/actions/runs/31951920248/artifacts/9264996176); its checksum is published under the bundles directory.
