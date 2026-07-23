# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-212255-505ee1
- Generated: 2026-07-23T21:30:45.607Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 15, FAIL: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 935 MB | 953 MB | 955 MB |
| fresh-install | fresh | Gateway RSS | 935 MB | 953 MB | 955 MB |
| fresh-install | fresh | Max CPU | 158 % | 158 % | 158 % |
| fresh-install | fresh | Event Loop Max | 10.4 ms | 10.4 ms | 10.4 ms |
| fresh-install | onboarded-user | Primary RSS | 931 MB | 932 MB | 932 MB |
| fresh-install | onboarded-user | Gateway RSS | 931 MB | 932 MB | 932 MB |
| fresh-install | onboarded-user | Max CPU | 151 % | 152 % | 152 % |
| fresh-install | onboarded-user | Event Loop Max | 10.7 ms | 11.5 ms | 11.6 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 918 MB | 918 MB | 918 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 918 MB | 918 MB | 918 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 152 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 20.5 ms | 23.3 ms | 23.6 ms |
| bundled-plugin-startup | fresh | Primary RSS | 941 MB | 956 MB | 958 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 941 MB | 956 MB | 958 MB |
| bundled-plugin-startup | fresh | Max CPU | 152 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 24.3 ms | 26 ms | 26.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 950 MB | 962 MB | 963 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 157 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,114 ms | 5,530 ms | 5,576 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,756 ms | 4,804 ms | 4,809 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,133 ms | 5,577 ms | 5,626 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,829 ms | 5,247 ms | 5,294 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 937 MB | 938 MB | 939 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 937 MB | 938 MB | 939 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 152 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 19.1 ms | 20.9 ms | 21.1 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 958 | <= 950 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 675 | <= 650 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 676 | <= 650 |

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
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 905fcdc35192f8cc8ce706573dfdbdd845169e40
- Tested SHA: 905fcdc35192f8cc8ce706573dfdbdd845169e40
- Workflow ref: main
- Workflow SHA: 06776e707b44a33e0581c6e56d4d24f2b0281fca
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

The complete Kova bundle remains in [Actions artifact 8579304990](https://github.com/openclaw/openclaw/actions/runs/30045853805/artifacts/8579304990); its checksum is published under the bundles directory.
