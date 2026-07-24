# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260724-014700-d7b572
- Generated: 2026-07-24T01:54:31.632Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 16, FAIL: 2
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 935 MB | 956 MB | 958 MB |
| fresh-install | fresh | Gateway RSS | 935 MB | 956 MB | 958 MB |
| fresh-install | fresh | Max CPU | 146 % | 152 % | 153 % |
| fresh-install | fresh | Event Loop Max | 10.7 ms | 12.1 ms | 12.2 ms |
| fresh-install | onboarded-user | Primary RSS | 937 MB | 940 MB | 940 MB |
| fresh-install | onboarded-user | Gateway RSS | 937 MB | 940 MB | 940 MB |
| fresh-install | onboarded-user | Max CPU | 152 % | 155 % | 155 % |
| fresh-install | onboarded-user | Event Loop Max | 10.4 ms | 10.5 ms | 10.5 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 920 MB | 939 MB | 941 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 920 MB | 939 MB | 941 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 151 % | 195 % | 200 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 18.8 ms | 24.7 ms | 25.4 ms |
| bundled-plugin-startup | fresh | Primary RSS | 933 MB | 958 MB | 960 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 933 MB | 958 MB | 960 MB |
| bundled-plugin-startup | fresh | Max CPU | 153 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 23 ms | 23.8 ms | 23.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 971 MB | 975 MB | 975 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 155 % | 156 % | 156 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,553 ms | 4,574 ms | 4,576 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,558 ms | 4,585 ms | 4,588 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,390 ms | 4,452 ms | 4,459 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,249 ms | 4,253 ms | 4,254 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 956 MB | 957 MB | 957 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 956 MB | 957 MB | 957 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 136 % | 150 % | 151 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 14.7 ms | 18.4 ms | 18.8 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 960 | <= 950 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 657 | <= 650 |

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
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 2a64c35486b67d114048a3db97e1a7dbe143feeb
- Tested SHA: 2a64c35486b67d114048a3db97e1a7dbe143feeb
- Workflow ref: main
- Workflow SHA: be29b907f4a30303fac9416b7cb42b04331f2ae3
- Kova repository: openclaw/Kova
- Kova ref: 1bf080f6dbf8800a3187591493f2551824e4ccc7
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8584258899](https://github.com/openclaw/openclaw/actions/runs/30059831062/artifacts/8584258899); its checksum is published under the bundles directory.
