# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260728-094013-2d7c3f
- Generated: 2026-07-28T09:51:05.325Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 10, FAIL: 8
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 969 MB | 1,036 MB | 1,044 MB |
| fresh-install | fresh | Gateway RSS | 969 MB | 1,036 MB | 1,044 MB |
| fresh-install | fresh | Max CPU | 162 % | 165 % | 165 % |
| fresh-install | fresh | Event Loop Max | 13.8 ms | 16.6 ms | 16.9 ms |
| fresh-install | onboarded-user | Primary RSS | 967 MB | 980 MB | 981 MB |
| fresh-install | onboarded-user | Gateway RSS | 967 MB | 980 MB | 981 MB |
| fresh-install | onboarded-user | Max CPU | 161 % | 163 % | 163 % |
| fresh-install | onboarded-user | Event Loop Max | 15.9 ms | 16.4 ms | 16.5 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 1,056 MB | 1,062 MB | 1,062 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 1,056 MB | 1,062 MB | 1,062 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 166 % | 168 % | 168 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 22.4 ms | 38.3 ms | 40.1 ms |
| bundled-plugin-startup | fresh | Primary RSS | 1,032 MB | 1,049 MB | 1,051 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 1,032 MB | 1,049 MB | 1,051 MB |
| bundled-plugin-startup | fresh | Max CPU | 164 % | 196 % | 200 % |
| bundled-plugin-startup | fresh | Event Loop Max | 26.4 ms | 35.1 ms | 36 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,009 MB | 1,068 MB | 1,075 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 189 % | 189 % | 189 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,621 ms | 5,708 ms | 5,717 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,231 ms | 5,695 ms | 5,747 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,154 ms | 5,592 ms | 5,641 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,358 ms | 5,496 ms | 5,511 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,006 MB | 1,006 MB | 1,007 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,006 MB | 1,006 MB | 1,007 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 164 % | 166 % | 166 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 48.8 ms | 50.7 ms | 50.9 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-runtime-deps | missing-plugin-index | resourceByRole.gateway.peakRssMb | 1,056 | <= 1050 |
| bundled-runtime-deps | missing-plugin-index | resourceByRole.gateway.peakRssMb | 1,062 | <= 1050 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,051 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,000 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,032 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,004 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,004 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,004 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,075 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,075 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,075 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,009 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,009 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,009 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| bundled-runtime-deps | missing-plugin-index | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 4c0e126798ad2434547f7ddb07269c90e2c0e642
- Tested SHA: 4c0e126798ad2434547f7ddb07269c90e2c0e642
- Workflow ref: main
- Workflow SHA: 07768aa5f684b26cd052bc303d1af488eff64108
- Kova repository: openclaw/Kova
- Kova ref: 517952b835640a368c4af6dfe6dc8365ae841b57
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8683806509](https://github.com/openclaw/openclaw/actions/runs/30347450456/artifacts/8683806509); its checksum is published under the bundles directory.
