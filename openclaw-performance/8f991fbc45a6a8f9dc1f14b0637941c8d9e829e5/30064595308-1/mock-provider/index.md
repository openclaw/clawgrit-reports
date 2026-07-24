# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260724-033615-4ec7b1
- Generated: 2026-07-24T03:43:21.697Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 939 MB | 947 MB | 948 MB |
| fresh-install | fresh | Gateway RSS | 939 MB | 947 MB | 948 MB |
| fresh-install | fresh | Max CPU | 145 % | 152 % | 153 % |
| fresh-install | fresh | Event Loop Max | 10.1 ms | 10.7 ms | 10.8 ms |
| fresh-install | onboarded-user | Primary RSS | 934 MB | 940 MB | 941 MB |
| fresh-install | onboarded-user | Gateway RSS | 934 MB | 940 MB | 941 MB |
| fresh-install | onboarded-user | Max CPU | 151 % | 152 % | 152 % |
| fresh-install | onboarded-user | Event Loop Max | 10.3 ms | 12.9 ms | 13.2 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 911 MB | 926 MB | 928 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 911 MB | 926 MB | 928 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 150 % | 154 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 15 ms | 17.3 ms | 17.5 ms |
| bundled-plugin-startup | fresh | Primary RSS | 936 MB | 937 MB | 937 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 936 MB | 937 MB | 937 MB |
| bundled-plugin-startup | fresh | Max CPU | 152 % | 153 % | 153 % |
| bundled-plugin-startup | fresh | Event Loop Max | 17.1 ms | 20.7 ms | 21.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 960 MB | 960 MB | 961 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 155 % | 161 % | 162 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,671 ms | 5,050 ms | 5,093 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,419 ms | 4,571 ms | 4,588 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,675 ms | 5,083 ms | 5,128 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,404 ms | 4,734 ms | 4,770 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 939 MB | 939 MB | 939 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 939 MB | 939 MB | 939 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 152 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 15.8 ms | 26.7 ms | 27.9 ms |

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
- Tested ref: 8f991fbc45a6a8f9dc1f14b0637941c8d9e829e5
- Tested SHA: 8f991fbc45a6a8f9dc1f14b0637941c8d9e829e5
- Workflow ref: main
- Workflow SHA: b88eeddeed1581817b715febc38b66c142d3ee09
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

The complete Kova bundle remains in [Actions artifact 8585887991](https://github.com/openclaw/openclaw/actions/runs/30064595308/artifacts/8585887991); its checksum is published under the bundles directory.
