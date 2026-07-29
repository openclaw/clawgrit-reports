# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260729-043812-3034cd
- Generated: 2026-07-29T04:46:15.867Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 8, FAIL: 10
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 939 MB | 943 MB | 943 MB |
| fresh-install | fresh | Gateway RSS | 939 MB | 943 MB | 943 MB |
| fresh-install | fresh | Max CPU | 157 % | 159 % | 159 % |
| fresh-install | fresh | Event Loop Max | 13 ms | 13.1 ms | 13.1 ms |
| fresh-install | onboarded-user | Primary RSS | 933 MB | 947 MB | 949 MB |
| fresh-install | onboarded-user | Gateway RSS | 933 MB | 947 MB | 949 MB |
| fresh-install | onboarded-user | Max CPU | 158 % | 160 % | 160 % |
| fresh-install | onboarded-user | Event Loop Max | 11 ms | 18 ms | 18.7 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 1,052 MB | 1,073 MB | 1,075 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 1,052 MB | 1,073 MB | 1,075 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 157 % | 158 % | 158 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 14.6 ms | 18.3 ms | 18.7 ms |
| bundled-plugin-startup | fresh | Primary RSS | 952 MB | 1,035 MB | 1,044 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 952 MB | 1,035 MB | 1,044 MB |
| bundled-plugin-startup | fresh | Max CPU | 159 % | 160 % | 160 % |
| bundled-plugin-startup | fresh | Event Loop Max | 19.4 ms | 37.3 ms | 39.3 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,015 MB | 1,021 MB | 1,021 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 170 % | 170 % | 171 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,739 ms | 3,762 ms | 3,764 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,691 ms | 3,737 ms | 3,742 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,679 ms | 3,759 ms | 3,768 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,605 ms | 3,632 ms | 3,635 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 975 MB | 1,006 MB | 1,010 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 975 MB | 1,006 MB | 1,010 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 158 % | 158 % | 158 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 21.6 ms | 25.7 ms | 26.2 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | onboarded-user | resourceByRole.model-cli.peakRssMb | 722 | <= 700 |
| bundled-runtime-deps | missing-plugin-index | resourceByRole.gateway.peakRssMb | 1,052 | <= 1050 |
| bundled-runtime-deps | missing-plugin-index | resourceByRole.gateway.peakRssMb | 1,075 | <= 1050 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,044 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,014 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,014 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,014 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,015 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,015 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,015 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,021 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,021 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,021 | <= 1000 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 673 | <= 650 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 667 | <= 650 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 719 | <= 650 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | onboarded-user | FAIL |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | FAIL |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 34e5065fcc4d2e161e49236ca12d9820ee73720f
- Tested SHA: 34e5065fcc4d2e161e49236ca12d9820ee73720f
- Workflow ref: main
- Workflow SHA: 9df09083d55924e2b78a83d7f464292c84e86c1a
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

The complete Kova bundle remains in [Actions artifact 8712621365](https://github.com/openclaw/openclaw/actions/runs/30422761688/artifacts/8712621365); its checksum is published under the bundles directory.
