# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-194308-99d2c2
- Generated: 2026-07-23T19:51:18.805Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 923 MB | 924 MB | 925 MB |
| fresh-install | fresh | Gateway RSS | 923 MB | 924 MB | 925 MB |
| fresh-install | fresh | Max CPU | 146 % | 152 % | 153 % |
| fresh-install | fresh | Event Loop Max | 10.5 ms | 11.6 ms | 11.7 ms |
| fresh-install | onboarded-user | Primary RSS | 925 MB | 926 MB | 926 MB |
| fresh-install | onboarded-user | Gateway RSS | 925 MB | 926 MB | 926 MB |
| fresh-install | onboarded-user | Max CPU | 152 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 10.7 ms | 10.7 ms | 10.7 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 924 MB | 925 MB | 925 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 924 MB | 925 MB | 925 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 152 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 18.5 ms | 19.9 ms | 20 ms |
| bundled-plugin-startup | fresh | Primary RSS | 924 MB | 925 MB | 925 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 924 MB | 925 MB | 925 MB |
| bundled-plugin-startup | fresh | Max CPU | 140 % | 152 % | 153 % |
| bundled-plugin-startup | fresh | Event Loop Max | 19.2 ms | 21.6 ms | 21.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 953 MB | 985 MB | 988 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 157 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,774 ms | 4,791 ms | 4,793 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,600 ms | 4,774 ms | 4,793 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,455 ms | 4,768 ms | 4,803 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,468 ms | 4,503 ms | 4,506 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 924 MB | 937 MB | 938 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 924 MB | 937 MB | 938 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 157 % | 157 % | 157 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 19.9 ms | 20.5 ms | 20.6 ms |

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
- Tested ref: bdd5e24cc8923c0867c3f82d09099d55ce1ec644
- Tested SHA: bdd5e24cc8923c0867c3f82d09099d55ce1ec644
- Workflow ref: main
- Workflow SHA: c519e01a240e70eda80a5d3f108a1c641fcd3c25
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

The complete Kova bundle remains in [Actions artifact 8576695214](https://github.com/openclaw/openclaw/actions/runs/30039023154/artifacts/8576695214); its checksum is published under the bundles directory.
