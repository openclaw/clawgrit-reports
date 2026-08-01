# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260801-140136-86a360
- Generated: 2026-08-01T14:09:43.782Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 12
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 926 MB | 940 MB | 942 MB |
| fresh-install | fresh | Gateway RSS | 926 MB | 940 MB | 942 MB |
| fresh-install | fresh | Max CPU | 155 % | 157 % | 157 % |
| fresh-install | fresh | Event Loop Max | 12.2 ms | 15.6 ms | 16 ms |
| fresh-install | onboarded-user | Primary RSS | 936 MB | 945 MB | 946 MB |
| fresh-install | onboarded-user | Gateway RSS | 936 MB | 945 MB | 946 MB |
| fresh-install | onboarded-user | Max CPU | 159 % | 160 % | 160 % |
| fresh-install | onboarded-user | Event Loop Max | 15.5 ms | 16 ms | 16 ms |
| bundled-plugin-startup | fresh | Primary RSS | 998 MB | 1,010 MB | 1,011 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 998 MB | 1,010 MB | 1,011 MB |
| bundled-plugin-startup | fresh | Max CPU | 157 % | 158 % | 158 % |
| bundled-plugin-startup | fresh | Event Loop Max | 17.7 ms | 18 ms | 18 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 854 MB | 859 MB | 859 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,635 ms | 3,658 ms | 3,660 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,599 ms | 3,622 ms | 3,625 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,639 ms | 3,660 ms | 3,662 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,519 ms | 3,545 ms | 3,548 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 978 MB | 985 MB | 985 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 978 MB | 985 MB | 985 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 158 % | 159 % | 159 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 14.6 ms | 17.1 ms | 17.4 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | resourceByRole.model-cli.peakRssMb | 726 | <= 700 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,011 | <= 1000 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 708 | <= 650 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | FAIL |  |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 4d6bdbdbf33fe3ece3c53853fab9931882ff3f3c
- Tested SHA: 4d6bdbdbf33fe3ece3c53853fab9931882ff3f3c
- Workflow ref: release-ci/perf-56ffa2bca48b-1785592828
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

The complete Kova bundle remains in [Actions artifact 8819478470](https://github.com/openclaw/openclaw/actions/runs/30702883136/artifacts/8819478470); its checksum is published under the bundles directory.
