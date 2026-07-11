# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260711-022636-c5eab1
- Generated: 2026-07-11T02:32:45.481Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 737 MB | 757 MB | 759 MB |
| fresh-install | fresh | Gateway RSS | 737 MB | 757 MB | 759 MB |
| fresh-install | fresh | Max CPU | 55.3 % | 55.7 % | 55.7 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 765 MB | 766 MB | 766 MB |
| fresh-install | onboarded-user | Gateway RSS | 765 MB | 766 MB | 766 MB |
| fresh-install | onboarded-user | Max CPU | 52.6 % | 55.6 % | 55.9 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 669 MB | 768 MB | 779 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 669 MB | 768 MB | 779 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 48.1 % | 52.8 % | 53.3 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Primary RSS | 704 MB | 754 MB | 760 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 704 MB | 754 MB | 760 MB |
| bundled-plugin-startup | fresh | Max CPU | 75 % | 75 % | 75 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 745 MB | 747 MB | 747 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 140 % | 141 % | 141 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,507 ms | 2,516 ms | 2,517 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,510 ms | 2,517 ms | 2,518 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,447 ms | 2,486 ms | 2,490 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,408 ms | 2,414 ms | 2,415 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 640 MB | 671 MB | 675 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 640 MB | 671 MB | 675 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 51.8 % | 95.2 % | 100 % |
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
- Tested ref: bfa5a39f08c654de6137f3aa6d420587aa819fc0
- Tested SHA: bfa5a39f08c654de6137f3aa6d420587aa819fc0
- Workflow ref: main
- Workflow SHA: 200e1df007749f3d19635297c1babeb565c9a720
- Kova repository: openclaw/Kova
- Kova ref: 99b4b5c70fac2b13c48550c1d9bed09b795f0186
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8243782810](https://github.com/openclaw/openclaw/actions/runs/29136320278/artifacts/8243782810); its checksum is published under the bundles directory.
