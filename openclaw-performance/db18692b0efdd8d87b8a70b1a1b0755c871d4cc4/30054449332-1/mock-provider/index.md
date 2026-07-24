# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-235236-063cf6
- Generated: 2026-07-23T23:59:41.121Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 949 MB | 959 MB | 960 MB |
| fresh-install | fresh | Gateway RSS | 949 MB | 959 MB | 960 MB |
| fresh-install | fresh | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | fresh | Event Loop Max | 11.4 ms | 11.5 ms | 11.5 ms |
| fresh-install | onboarded-user | Primary RSS | 939 MB | 963 MB | 966 MB |
| fresh-install | onboarded-user | Gateway RSS | 939 MB | 963 MB | 966 MB |
| fresh-install | onboarded-user | Max CPU | 149 % | 151 % | 151 % |
| fresh-install | onboarded-user | Event Loop Max | 10.6 ms | 10.7 ms | 10.7 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 936 MB | 941 MB | 942 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 936 MB | 941 MB | 942 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 151 % | 154 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 16.3 ms | 16.9 ms | 16.9 ms |
| bundled-plugin-startup | fresh | Primary RSS | 935 MB | 939 MB | 940 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 935 MB | 939 MB | 940 MB |
| bundled-plugin-startup | fresh | Max CPU | 140 % | 151 % | 152 % |
| bundled-plugin-startup | fresh | Event Loop Max | 15.6 ms | 16.7 ms | 16.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 955 MB | 958 MB | 959 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 158 % | 158 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,592 ms | 4,638 ms | 4,643 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,601 ms | 4,642 ms | 4,646 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,427 ms | 4,565 ms | 4,580 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,284 ms | 4,330 ms | 4,335 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 940 MB | 958 MB | 960 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 940 MB | 958 MB | 960 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 150 % | 151 % | 151 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 20 ms | 20.6 ms | 20.7 ms |

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
- Tested ref: db18692b0efdd8d87b8a70b1a1b0755c871d4cc4
- Tested SHA: db18692b0efdd8d87b8a70b1a1b0755c871d4cc4
- Workflow ref: main
- Workflow SHA: ba09e05e97ba9032be0a620f0e0db0787376475b
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

The complete Kova bundle remains in [Actions artifact 8582376295](https://github.com/openclaw/openclaw/actions/runs/30054449332/artifacts/8582376295); its checksum is published under the bundles directory.
