# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-185645-45e47c
- Generated: 2026-07-23T19:07:05.570Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 925 MB | 925 MB | 925 MB |
| fresh-install | fresh | Gateway RSS | 925 MB | 925 MB | 925 MB |
| fresh-install | fresh | Max CPU | 149 % | 154 % | 155 % |
| fresh-install | fresh | Event Loop Max | 11.4 ms | 11.9 ms | 12 ms |
| fresh-install | onboarded-user | Primary RSS | 922 MB | 928 MB | 928 MB |
| fresh-install | onboarded-user | Gateway RSS | 922 MB | 928 MB | 928 MB |
| fresh-install | onboarded-user | Max CPU | 153 % | 156 % | 156 % |
| fresh-install | onboarded-user | Event Loop Max | 11.1 ms | 19.9 ms | 20.9 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 921 MB | 926 MB | 926 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 921 MB | 926 MB | 926 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 154 % | 159 % | 160 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 39.2 ms | 56.4 ms | 58.3 ms |
| bundled-plugin-startup | fresh | Primary RSS | 930 MB | 933 MB | 934 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 930 MB | 933 MB | 934 MB |
| bundled-plugin-startup | fresh | Max CPU | 156 % | 159 % | 159 % |
| bundled-plugin-startup | fresh | Event Loop Max | 25 ms | 28.2 ms | 28.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 959 MB | 989 MB | 993 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 159 % | 165 % | 166 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,783 ms | 7,015 ms | 7,151 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,070 ms | 5,154 ms | 5,163 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,827 ms | 7,113 ms | 7,256 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,395 ms | 6,554 ms | 6,682 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 920 MB | 929 MB | 930 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 920 MB | 929 MB | 930 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 155 % | 161 % | 162 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 26.2 ms | 28.3 ms | 28.6 ms |

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
- Tested ref: b6ba40f1285ecd604b6c06d96a53c41e246042c8
- Tested SHA: b6ba40f1285ecd604b6c06d96a53c41e246042c8
- Workflow ref: main
- Workflow SHA: 13176b446ad50acb120ae79659a0bdc47461f831
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

The complete Kova bundle remains in [Actions artifact 8575509933](https://github.com/openclaw/openclaw/actions/runs/30035799559/artifacts/8575509933); its checksum is published under the bundles directory.
