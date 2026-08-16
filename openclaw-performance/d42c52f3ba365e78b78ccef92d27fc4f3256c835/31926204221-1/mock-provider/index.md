# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260816-041654-d92cc6
- Generated: 2026-08-16T04:23:52.939Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 12, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 1,213 MB | 1,237 MB | 1,240 MB |
| fresh-install | fresh | Gateway RSS | 1,213 MB | 1,237 MB | 1,240 MB |
| fresh-install | fresh | Max CPU | 162 % | 162 % | 162 % |
| fresh-install | fresh | Event Loop Max | 9.9 ms | 10.3 ms | 10.4 ms |
| fresh-install | onboarded-user | Primary RSS | 1,106 MB | 1,160 MB | 1,166 MB |
| fresh-install | onboarded-user | Gateway RSS | 1,106 MB | 1,160 MB | 1,166 MB |
| fresh-install | onboarded-user | Max CPU | 158 % | 158 % | 158 % |
| fresh-install | onboarded-user | Event Loop Max | 9.2 ms | 9.5 ms | 9.5 ms |
| bundled-plugin-startup | fresh | Primary RSS | 1,134 MB | 1,140 MB | 1,141 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 1,134 MB | 1,140 MB | 1,141 MB |
| bundled-plugin-startup | fresh | Max CPU | 162 % | 163 % | 163 % |
| bundled-plugin-startup | fresh | Event Loop Max | 9.3 ms | 9.5 ms | 9.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 918 MB | 921 MB | 921 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 152 % | 152 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,265 ms | 3,275 ms | 3,277 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,282 ms | 3,294 ms | 3,295 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,933 ms | 2,956 ms | 2,958 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,145 ms | 3,163 ms | 3,165 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,138 MB | 1,259 MB | 1,273 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,138 MB | 1,259 MB | 1,273 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 157 % | 159 % | 159 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 9.3 ms | 10.2 ms | 10.2 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | peakRssMb | 1,240 | <= 1050 |
| fresh-install | fresh | peakRssMb | 1,213 | <= 1050 |
| fresh-install | fresh | peakRssMb | 1,138 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,166 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,106 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,102 | <= 1050 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,094 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,134 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,141 | <= 1000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,273 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,273 | <= 1200 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,103 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,138 | <= 1050 |

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
- Tested ref: d42c52f3ba365e78b78ccef92d27fc4f3256c835
- Tested SHA: d42c52f3ba365e78b78ccef92d27fc4f3256c835
- Workflow ref: main
- Workflow SHA: a54caf0a6676a11924fd2c9714d12a38dd704a9d
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

The complete Kova bundle remains in [Actions artifact 9257997775](https://github.com/openclaw/openclaw/actions/runs/31926204221/artifacts/9257997775); its checksum is published under the bundles directory.
