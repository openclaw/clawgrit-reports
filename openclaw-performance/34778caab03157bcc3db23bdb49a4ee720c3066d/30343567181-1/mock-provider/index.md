# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260728-084516-7861c3
- Generated: 2026-07-28T08:53:09.860Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 16, FAIL: 2
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 968 MB | 971 MB | 972 MB |
| fresh-install | fresh | Gateway RSS | 968 MB | 971 MB | 972 MB |
| fresh-install | fresh | Max CPU | 155 % | 157 % | 157 % |
| fresh-install | fresh | Event Loop Max | 16.5 ms | 16.6 ms | 16.6 ms |
| fresh-install | onboarded-user | Primary RSS | 971 MB | 986 MB | 988 MB |
| fresh-install | onboarded-user | Gateway RSS | 971 MB | 986 MB | 988 MB |
| fresh-install | onboarded-user | Max CPU | 156 % | 158 % | 158 % |
| fresh-install | onboarded-user | Event Loop Max | 10.5 ms | 13 ms | 13.3 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 1,020 MB | 1,026 MB | 1,027 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 1,020 MB | 1,026 MB | 1,027 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 154 % | 156 % | 156 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 18.1 ms | 31.4 ms | 32.8 ms |
| bundled-plugin-startup | fresh | Primary RSS | 994 MB | 1,003 MB | 1,004 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 994 MB | 1,003 MB | 1,004 MB |
| bundled-plugin-startup | fresh | Max CPU | 156 % | 158 % | 158 % |
| bundled-plugin-startup | fresh | Event Loop Max | 14.4 ms | 16.9 ms | 17.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 991 MB | 1,040 MB | 1,046 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 169 % | 174 % | 174 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,911 ms | 4,001 ms | 4,010 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,913 ms | 3,957 ms | 3,962 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,879 ms | 4,000 ms | 4,013 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,764 ms | 3,864 ms | 3,876 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 987 MB | 1,004 MB | 1,006 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 987 MB | 1,004 MB | 1,006 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 156 % | 159 % | 159 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 13.7 ms | 19.5 ms | 20.1 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,004 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,046 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,046 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,046 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 34778caab03157bcc3db23bdb49a4ee720c3066d
- Tested SHA: 34778caab03157bcc3db23bdb49a4ee720c3066d
- Workflow ref: main
- Workflow SHA: 50a97288dd030279702158e206c741eab46f0823
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

The complete Kova bundle remains in [Actions artifact 8682220878](https://github.com/openclaw/openclaw/actions/runs/30343567181/artifacts/8682220878); its checksum is published under the bundles directory.
