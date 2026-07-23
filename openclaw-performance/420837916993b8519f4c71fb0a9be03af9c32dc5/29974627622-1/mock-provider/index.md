# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-023248-868c3a
- Generated: 2026-07-23T02:39:52.427Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 915 MB | 921 MB | 922 MB |
| fresh-install | fresh | Gateway RSS | 915 MB | 921 MB | 922 MB |
| fresh-install | fresh | Max CPU | 151 % | 151 % | 151 % |
| fresh-install | fresh | Event Loop Max | 11.6 ms | 12.1 ms | 12.2 ms |
| fresh-install | onboarded-user | Primary RSS | 918 MB | 919 MB | 919 MB |
| fresh-install | onboarded-user | Gateway RSS | 918 MB | 919 MB | 919 MB |
| fresh-install | onboarded-user | Max CPU | 151 % | 151 % | 151 % |
| fresh-install | onboarded-user | Event Loop Max | 10.7 ms | 11.8 ms | 12 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 919 MB | 934 MB | 936 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 919 MB | 934 MB | 936 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 150 % | 152 % | 152 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 22 ms | 22.1 ms | 22.1 ms |
| bundled-plugin-startup | fresh | Primary RSS | 916 MB | 916 MB | 916 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 916 MB | 916 MB | 916 MB |
| bundled-plugin-startup | fresh | Max CPU | 151 % | 151 % | 151 % |
| bundled-plugin-startup | fresh | Event Loop Max | 25.3 ms | 27.2 ms | 27.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 951 MB | 986 MB | 990 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 155 % | 159 % | 160 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,516 ms | 4,543 ms | 4,546 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,507 ms | 4,520 ms | 4,521 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,417 ms | 4,535 ms | 4,548 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,204 ms | 4,266 ms | 4,273 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 921 MB | 926 MB | 927 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 921 MB | 926 MB | 927 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 152 % | 152 % | 152 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 14.4 ms | 18.5 ms | 18.9 ms |

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
- Tested ref: 420837916993b8519f4c71fb0a9be03af9c32dc5
- Tested SHA: 420837916993b8519f4c71fb0a9be03af9c32dc5
- Workflow ref: main
- Workflow SHA: 2b1e4b0ccca291a1d27e0ca80783e0040ed767fd
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

The complete Kova bundle remains in [Actions artifact 8551064785](https://github.com/openclaw/openclaw/actions/runs/29974627622/artifacts/8551064785); its checksum is published under the bundles directory.
