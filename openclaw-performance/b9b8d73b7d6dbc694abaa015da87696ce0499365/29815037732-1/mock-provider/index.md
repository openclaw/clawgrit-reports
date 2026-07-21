# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260721-083904-47cd66
- Generated: 2026-07-21T08:45:18.506Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 908 MB | 908 MB | 908 MB |
| fresh-install | fresh | Gateway RSS | 908 MB | 908 MB | 908 MB |
| fresh-install | fresh | Max CPU | 148 % | 155 % | 156 % |
| fresh-install | fresh | Event Loop Max | 495 ms | 513 ms | 515 ms |
| fresh-install | onboarded-user | Primary RSS | 910 MB | 910 MB | 910 MB |
| fresh-install | onboarded-user | Gateway RSS | 910 MB | 910 MB | 910 MB |
| fresh-install | onboarded-user | Max CPU | 158 % | 160 % | 160 % |
| fresh-install | onboarded-user | Event Loop Max | 527 ms | 586 ms | 593 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 912 MB | 918 MB | 918 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 912 MB | 918 MB | 918 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 158 % | 196 % | 200 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 547 ms | 581 ms | 585 ms |
| bundled-plugin-startup | fresh | Primary RSS | 910 MB | 910 MB | 910 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 910 MB | 910 MB | 910 MB |
| bundled-plugin-startup | fresh | Max CPU | 156 % | 156 % | 156 % |
| bundled-plugin-startup | fresh | Event Loop Max | 514 ms | 519 ms | 520 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 910 MB | 912 MB | 912 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 159 % | 160 % | 160 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,928 ms | 3,991 ms | 3,998 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,882 ms | 3,999 ms | 4,012 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,741 ms | 3,922 ms | 3,942 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,650 ms | 3,667 ms | 3,669 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 914 MB | 927 MB | 928 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 914 MB | 927 MB | 928 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 147 % | 158 % | 159 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 517 ms | 589 ms | 597 ms |

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
- Tested ref: b9b8d73b7d6dbc694abaa015da87696ce0499365
- Tested SHA: b9b8d73b7d6dbc694abaa015da87696ce0499365
- Workflow ref: main
- Workflow SHA: e942d7eadb2fdaacff75bcad5780f815b4e1d881
- Kova repository: openclaw/Kova
- Kova ref: f3d037b5b8aacd6adf8ef1dd2ea4c1d778ec7c6c
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8489150670](https://github.com/openclaw/openclaw/actions/runs/29815037732/artifacts/8489150670); its checksum is published under the bundles directory.
