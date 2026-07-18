# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260718-185714-a9ee8c
- Generated: 2026-07-18T19:02:39.627Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 859 MB | 880 MB | 883 MB |
| fresh-install | fresh | Gateway RSS | 859 MB | 880 MB | 883 MB |
| fresh-install | fresh | Max CPU | 104 % | 121 % | 123 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 863 MB | 870 MB | 870 MB |
| fresh-install | onboarded-user | Gateway RSS | 863 MB | 870 MB | 870 MB |
| fresh-install | onboarded-user | Max CPU | 124 % | 125 % | 125 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 631 MB | 633 MB | 633 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 631 MB | 633 MB | 633 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 126 % | 127 % | 127 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Primary RSS | 647 MB | 650 MB | 650 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 647 MB | 650 MB | 650 MB |
| bundled-plugin-startup | fresh | Max CPU | 128 % | 133 % | 133 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 730 MB | 730 MB | 730 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 143 % | 145 % | 145 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,320 ms | 2,361 ms | 2,365 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,312 ms | 2,362 ms | 2,368 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,312 ms | 2,319 ms | 2,320 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,231 ms | 2,262 ms | 2,266 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 661 MB | 688 MB | 691 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 661 MB | 688 MB | 691 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 125 % | 125 % | 125 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

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
- Tested ref: 8286d32da5375470f3fa54b1e560676189e84c0f
- Tested SHA: 8286d32da5375470f3fa54b1e560676189e84c0f
- Workflow ref: main
- Workflow SHA: f669fb925a99e7a64591b695a514b1dc38083c83
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

The complete Kova bundle remains in [Actions artifact 8433178585](https://github.com/openclaw/openclaw/actions/runs/29656816487/artifacts/8433178585); its checksum is published under the bundles directory.
