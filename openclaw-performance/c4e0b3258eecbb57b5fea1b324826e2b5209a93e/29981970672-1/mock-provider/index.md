# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-052342-ae98de
- Generated: 2026-07-23T05:30:52.398Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 921 MB | 935 MB | 937 MB |
| fresh-install | fresh | Gateway RSS | 921 MB | 935 MB | 937 MB |
| fresh-install | fresh | Max CPU | 154 % | 154 % | 154 % |
| fresh-install | fresh | Event Loop Max | 10.6 ms | 10.9 ms | 10.9 ms |
| fresh-install | onboarded-user | Primary RSS | 924 MB | 925 MB | 925 MB |
| fresh-install | onboarded-user | Gateway RSS | 924 MB | 925 MB | 925 MB |
| fresh-install | onboarded-user | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 10.4 ms | 13.4 ms | 13.7 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 910 MB | 926 MB | 928 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 910 MB | 926 MB | 928 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 152 % | 154 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 16.3 ms | 16.9 ms | 16.9 ms |
| bundled-plugin-startup | fresh | Primary RSS | 928 MB | 939 MB | 940 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 928 MB | 939 MB | 940 MB |
| bundled-plugin-startup | fresh | Max CPU | 154 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 19.9 ms | 24.5 ms | 25.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 967 MB | 969 MB | 969 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 162 % | 162 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,484 ms | 5,149 ms | 5,223 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,488 ms | 5,177 ms | 5,254 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,405 ms | 4,608 ms | 4,630 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,169 ms | 4,788 ms | 4,857 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 933 MB | 946 MB | 947 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 933 MB | 946 MB | 947 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 151 % | 155 % | 155 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 18.3 ms | 18.8 ms | 18.9 ms |

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
- Tested ref: c4e0b3258eecbb57b5fea1b324826e2b5209a93e
- Tested SHA: c4e0b3258eecbb57b5fea1b324826e2b5209a93e
- Workflow ref: main
- Workflow SHA: b7416449a3021c2f5932ecae1f85195a5f52c805
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

The complete Kova bundle remains in [Actions artifact 8553661784](https://github.com/openclaw/openclaw/actions/runs/29981970672/artifacts/8553661784); its checksum is published under the bundles directory.
