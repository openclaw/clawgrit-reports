# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260728-120118-a3ae71
- Generated: 2026-07-28T12:11:27.781Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 12, FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 940 MB | 952 MB | 954 MB |
| fresh-install | fresh | Gateway RSS | 940 MB | 952 MB | 954 MB |
| fresh-install | fresh | Max CPU | 160 % | 168 % | 169 % |
| fresh-install | fresh | Event Loop Max | 14 ms | 20.3 ms | 21 ms |
| fresh-install | onboarded-user | Primary RSS | 930 MB | 935 MB | 936 MB |
| fresh-install | onboarded-user | Gateway RSS | 930 MB | 935 MB | 936 MB |
| fresh-install | onboarded-user | Max CPU | 159 % | 169 % | 170 % |
| fresh-install | onboarded-user | Event Loop Max | 13.8 ms | 17.8 ms | 18.3 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 1,040 MB | 1,050 MB | 1,051 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 1,040 MB | 1,050 MB | 1,051 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 166 % | 169 % | 169 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 24.4 ms | 31.2 ms | 32 ms |
| bundled-plugin-startup | fresh | Primary RSS | 1,001 MB | 1,021 MB | 1,023 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 1,001 MB | 1,021 MB | 1,023 MB |
| bundled-plugin-startup | fresh | Max CPU | 166 % | 167 % | 167 % |
| bundled-plugin-startup | fresh | Event Loop Max | 34 ms | 36.1 ms | 36.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,003 MB | 1,080 MB | 1,089 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 182 % | 184 % | 184 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,017 ms | 6,091 ms | 6,210 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,036 ms | 6,123 ms | 6,244 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,884 ms | 5,502 ms | 5,571 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,847 ms | 5,851 ms | 5,962 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,009 MB | 1,023 MB | 1,025 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,009 MB | 1,023 MB | 1,025 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 161 % | 163 % | 163 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 24.3 ms | 26.9 ms | 27.2 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-runtime-deps | missing-plugin-index | resourceByRole.gateway.peakRssMb | 1,051 | <= 1050 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,001 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,023 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,089 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,089 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,089 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,000 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,000 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,000 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,003 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,003 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,003 | <= 1000 |

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
| bundled-runtime-deps | missing-plugin-index | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
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
- Tested ref: ceddb6493363059f52a68181a809905f66108e37
- Tested SHA: ceddb6493363059f52a68181a809905f66108e37
- Workflow ref: main
- Workflow SHA: 89b6d85cdd862d3315927abcc604c9e128e67314
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

The complete Kova bundle remains in [Actions artifact 8687535807](https://github.com/openclaw/openclaw/actions/runs/30357049941/artifacts/8687535807); its checksum is published under the bundles directory.
