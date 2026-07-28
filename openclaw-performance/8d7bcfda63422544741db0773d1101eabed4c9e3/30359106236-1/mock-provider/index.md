# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260728-122957-0d15a6
- Generated: 2026-07-28T12:42:14.422Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 14, FAIL: 4
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 926 MB | 947 MB | 949 MB |
| fresh-install | fresh | Gateway RSS | 926 MB | 947 MB | 949 MB |
| fresh-install | fresh | Max CPU | 166 % | 167 % | 167 % |
| fresh-install | fresh | Event Loop Max | 16.2 ms | 26.6 ms | 27.8 ms |
| fresh-install | onboarded-user | Primary RSS | 928 MB | 932 MB | 932 MB |
| fresh-install | onboarded-user | Gateway RSS | 928 MB | 932 MB | 932 MB |
| fresh-install | onboarded-user | Max CPU | 163 % | 163 % | 163 % |
| fresh-install | onboarded-user | Event Loop Max | 17 ms | 17.5 ms | 17.6 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 1,034 MB | 1,042 MB | 1,043 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 1,034 MB | 1,042 MB | 1,043 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 162 % | 167 % | 168 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 22.9 ms | 26.3 ms | 26.6 ms |
| bundled-plugin-startup | fresh | Primary RSS | 942 MB | 1,010 MB | 1,017 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 942 MB | 1,010 MB | 1,017 MB |
| bundled-plugin-startup | fresh | Max CPU | 166 % | 167 % | 167 % |
| bundled-plugin-startup | fresh | Event Loop Max | 20.5 ms | 24.6 ms | 25 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,005 MB | 1,061 MB | 1,067 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 186 % | 189 % | 190 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,924 ms | 5,242 ms | 5,277 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,580 ms | 4,799 ms | 4,823 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,942 ms | 5,289 ms | 5,327 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,770 ms | 5,066 ms | 5,099 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,019 MB | 1,023 MB | 1,023 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,019 MB | 1,023 MB | 1,023 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 164 % | 164 % | 164 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 24.8 ms | 28.1 ms | 28.4 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,017 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,005 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,005 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,005 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,067 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,067 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,067 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,001 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,001 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,001 | <= 1000 |

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
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 8d7bcfda63422544741db0773d1101eabed4c9e3
- Tested SHA: 8d7bcfda63422544741db0773d1101eabed4c9e3
- Workflow ref: main
- Workflow SHA: 981a3dfad302de15cc867e89f45661a63eefe80d
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

The complete Kova bundle remains in [Actions artifact 8688412316](https://github.com/openclaw/openclaw/actions/runs/30359106236/artifacts/8688412316); its checksum is published under the bundles directory.
