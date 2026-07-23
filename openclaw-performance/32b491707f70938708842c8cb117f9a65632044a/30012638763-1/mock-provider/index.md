# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-134710-9b4eb3
- Generated: 2026-07-23T13:55:03.184Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 923 MB | 928 MB | 928 MB |
| fresh-install | fresh | Gateway RSS | 923 MB | 928 MB | 928 MB |
| fresh-install | fresh | Max CPU | 154 % | 156 % | 156 % |
| fresh-install | fresh | Event Loop Max | 10.4 ms | 10.6 ms | 10.7 ms |
| fresh-install | onboarded-user | Primary RSS | 925 MB | 926 MB | 927 MB |
| fresh-install | onboarded-user | Gateway RSS | 925 MB | 926 MB | 927 MB |
| fresh-install | onboarded-user | Max CPU | 152 % | 152 % | 152 % |
| fresh-install | onboarded-user | Event Loop Max | 10.9 ms | 11.2 ms | 11.3 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 907 MB | 915 MB | 916 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 907 MB | 915 MB | 916 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 153 % | 157 % | 157 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 21.2 ms | 23.5 ms | 23.7 ms |
| bundled-plugin-startup | fresh | Primary RSS | 924 MB | 925 MB | 925 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 924 MB | 925 MB | 925 MB |
| bundled-plugin-startup | fresh | Max CPU | 147 % | 158 % | 159 % |
| bundled-plugin-startup | fresh | Event Loop Max | 21.9 ms | 23.6 ms | 23.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 959 MB | 972 MB | 974 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 160 % | 165 % | 165 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,136 ms | 5,594 ms | 5,645 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,141 ms | 5,338 ms | 5,360 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,047 ms | 5,599 ms | 5,660 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,793 ms | 5,286 ms | 5,340 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 923 MB | 927 MB | 927 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 923 MB | 927 MB | 927 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 143 % | 157 % | 158 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 16.9 ms | 20.1 ms | 20.5 ms |

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
| bundled-plugin-startup | fresh | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 32b491707f70938708842c8cb117f9a65632044a
- Tested SHA: 32b491707f70938708842c8cb117f9a65632044a
- Workflow ref: main
- Workflow SHA: 8108b9637b01e4d9aced806cb64ae30d44feaf28
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

The complete Kova bundle remains in [Actions artifact 8566008838](https://github.com/openclaw/openclaw/actions/runs/30012638763/artifacts/8566008838); its checksum is published under the bundles directory.
