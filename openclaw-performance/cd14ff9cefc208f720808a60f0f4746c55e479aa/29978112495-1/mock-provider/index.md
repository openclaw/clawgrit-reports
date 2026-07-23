# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-035344-a184c4
- Generated: 2026-07-23T04:00:48.570Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 919 MB | 924 MB | 925 MB |
| fresh-install | fresh | Gateway RSS | 919 MB | 924 MB | 925 MB |
| fresh-install | fresh | Max CPU | 144 % | 153 % | 154 % |
| fresh-install | fresh | Event Loop Max | 10.9 ms | 12 ms | 12.1 ms |
| fresh-install | onboarded-user | Primary RSS | 917 MB | 922 MB | 922 MB |
| fresh-install | onboarded-user | Gateway RSS | 917 MB | 922 MB | 922 MB |
| fresh-install | onboarded-user | Max CPU | 152 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 10.9 ms | 11.9 ms | 12 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 916 MB | 999 MB | 1,009 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 916 MB | 999 MB | 1,009 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 150 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 15.3 ms | 16.4 ms | 16.5 ms |
| bundled-plugin-startup | fresh | Primary RSS | 919 MB | 920 MB | 920 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 919 MB | 920 MB | 920 MB |
| bundled-plugin-startup | fresh | Max CPU | 151 % | 155 % | 155 % |
| bundled-plugin-startup | fresh | Event Loop Max | 21 ms | 22 ms | 22.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 961 MB | 968 MB | 969 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 155 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,404 ms | 4,842 ms | 4,890 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,411 ms | 4,857 ms | 4,906 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,402 ms | 4,575 ms | 4,594 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,147 ms | 4,517 ms | 4,559 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 921 MB | 922 MB | 923 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 921 MB | 922 MB | 923 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 140 % | 152 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 17.6 ms | 20.2 ms | 20.5 ms |

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
- Tested ref: cd14ff9cefc208f720808a60f0f4746c55e479aa
- Tested SHA: cd14ff9cefc208f720808a60f0f4746c55e479aa
- Workflow ref: main
- Workflow SHA: efc19faca47cb4be852b1d322a21d73e3ced5c03
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

The complete Kova bundle remains in [Actions artifact 8552286688](https://github.com/openclaw/openclaw/actions/runs/29978112495/artifacts/8552286688); its checksum is published under the bundles directory.
