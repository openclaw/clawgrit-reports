# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260731-075852-0fbf7a
- Generated: 2026-07-31T08:08:25.561Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 5, PASS: 13
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 925 MB | 968 MB | 972 MB |
| fresh-install | fresh | Gateway RSS | 925 MB | 968 MB | 972 MB |
| fresh-install | fresh | Max CPU | 156 % | 156 % | 156 % |
| fresh-install | fresh | Event Loop Max | 11.3 ms | 13.4 ms | 13.6 ms |
| fresh-install | onboarded-user | Primary RSS | 918 MB | 936 MB | 938 MB |
| fresh-install | onboarded-user | Gateway RSS | 918 MB | 936 MB | 938 MB |
| fresh-install | onboarded-user | Max CPU | 159 % | 160 % | 160 % |
| fresh-install | onboarded-user | Event Loop Max | 11 ms | 11.1 ms | 11.1 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 976 MB | 1,019 MB | 1,024 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 976 MB | 1,019 MB | 1,024 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 160 % | 160 % | 160 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 21.5 ms | 24.6 ms | 24.9 ms |
| bundled-plugin-startup | fresh | Primary RSS | 984 MB | 1,013 MB | 1,017 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 984 MB | 1,013 MB | 1,017 MB |
| bundled-plugin-startup | fresh | Max CPU | 159 % | 159 % | 159 % |
| bundled-plugin-startup | fresh | Event Loop Max | 21.2 ms | 22.5 ms | 22.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,034 MB | 1,037 MB | 1,038 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 176 % | 179 % | 179 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,333 ms | 4,393 ms | 4,400 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,335 ms | 4,395 ms | 4,402 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,304 ms | 4,357 ms | 4,363 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,183 ms | 4,235 ms | 4,240 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 991 MB | 1,021 MB | 1,024 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 991 MB | 1,021 MB | 1,024 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 158 % | 160 % | 160 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 20.6 ms | 29.4 ms | 30.3 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | resourceByRole.model-cli.peakRssMb | 759 | <= 700 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,017 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,034 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,034 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,034 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,038 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,038 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,038 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,031 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,031 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,031 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | FAIL |  |
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
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 4c5ce9a83ee68cee7f8f5ac1812ef387d9a97d44
- Tested SHA: 4c5ce9a83ee68cee7f8f5ac1812ef387d9a97d44
- Workflow ref: main
- Workflow SHA: 37b1a7165406be4cb480894299b367a43f2a2abc
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

The complete Kova bundle remains in [Actions artifact 8787082678](https://github.com/openclaw/openclaw/actions/runs/30614388037/artifacts/8787082678); its checksum is published under the bundles directory.
