# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260801-133929-2ad7a2
- Generated: 2026-08-01T13:47:43.374Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 10, FAIL: 5
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 940 MB | 952 MB | 953 MB |
| fresh-install | fresh | Gateway RSS | 940 MB | 952 MB | 953 MB |
| fresh-install | fresh | Max CPU | 157 % | 159 % | 159 % |
| fresh-install | fresh | Event Loop Max | 15.6 ms | 16.1 ms | 16.1 ms |
| fresh-install | onboarded-user | Primary RSS | 939 MB | 948 MB | 949 MB |
| fresh-install | onboarded-user | Gateway RSS | 939 MB | 948 MB | 949 MB |
| fresh-install | onboarded-user | Max CPU | 159 % | 159 % | 159 % |
| fresh-install | onboarded-user | Event Loop Max | 13.8 ms | 15.3 ms | 15.4 ms |
| bundled-plugin-startup | fresh | Primary RSS | 979 MB | 1,004 MB | 1,007 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 979 MB | 1,004 MB | 1,007 MB |
| bundled-plugin-startup | fresh | Max CPU | 156 % | 156 % | 156 % |
| bundled-plugin-startup | fresh | Event Loop Max | 13.6 ms | 18.9 ms | 19.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 849 MB | 850 MB | 850 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,676 ms | 3,682 ms | 3,683 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,657 ms | 3,676 ms | 3,678 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,662 ms | 3,682 ms | 3,684 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,553 ms | 3,564 ms | 3,566 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,020 MB | 1,053 MB | 1,056 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,020 MB | 1,053 MB | 1,056 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 158 % | 158 % | 158 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 12.9 ms | 13.4 ms | 13.5 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | onboarded-user | resourceByRole.model-cli.peakRssMb | 732 | <= 700 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,007 | <= 1000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,056 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 796 | <= 650 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 693 | <= 650 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 708 | <= 650 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | FAIL |  |
| fresh-install | onboarded-user | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: f5df4bab021395b44142042c6b28e88e664ad837
- Tested SHA: f5df4bab021395b44142042c6b28e88e664ad837
- Workflow ref: main
- Workflow SHA: 56ffa2bca48bf9ae6c82e491dcd9009d0e61183e
- Kova repository: openclaw/Kova
- Kova ref: e2ff1b66e5597a0df2ddb50276257e36069513dd
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8819251462](https://github.com/openclaw/openclaw/actions/runs/30702123917/artifacts/8819251462); its checksum is published under the bundles directory.
