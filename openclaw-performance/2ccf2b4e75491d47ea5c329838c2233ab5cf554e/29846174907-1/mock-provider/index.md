# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260721-205809-661fb8
- Generated: 2026-07-21T21:06:01.858Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 913 MB | 915 MB | 915 MB |
| fresh-install | fresh | Gateway RSS | 913 MB | 915 MB | 915 MB |
| fresh-install | fresh | Max CPU | 153 % | 153 % | 153 % |
| fresh-install | fresh | Event Loop Max | 12.4 ms | 12.7 ms | 12.7 ms |
| fresh-install | onboarded-user | Primary RSS | 918 MB | 919 MB | 919 MB |
| fresh-install | onboarded-user | Gateway RSS | 918 MB | 919 MB | 919 MB |
| fresh-install | onboarded-user | Max CPU | 154 % | 158 % | 158 % |
| fresh-install | onboarded-user | Event Loop Max | 12.6 ms | 13.3 ms | 13.4 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 900 MB | 904 MB | 905 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 900 MB | 904 MB | 905 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 154 % | 155 % | 155 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 12.5 ms | 12.6 ms | 12.6 ms |
| bundled-plugin-startup | fresh | Primary RSS | 909 MB | 910 MB | 911 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 909 MB | 910 MB | 911 MB |
| bundled-plugin-startup | fresh | Max CPU | 140 % | 154 % | 155 % |
| bundled-plugin-startup | fresh | Event Loop Max | 12.6 ms | 12.7 ms | 12.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 928 MB | 940 MB | 942 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 160 % | 161 % | 161 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,055 ms | 4,117 ms | 4,124 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,067 ms | 4,120 ms | 4,126 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,826 ms | 4,056 ms | 4,081 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,728 ms | 3,797 ms | 3,805 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 912 MB | 917 MB | 917 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 912 MB | 917 MB | 917 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 154 % | 156 % | 156 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 12.4 ms | 12.6 ms | 12.7 ms |

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
- Tested ref: 2ccf2b4e75491d47ea5c329838c2233ab5cf554e
- Tested SHA: 2ccf2b4e75491d47ea5c329838c2233ab5cf554e
- Workflow ref: main
- Workflow SHA: 3a5b2764f8a5e98e574d4e45d6d782048d1306df
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

The complete Kova bundle remains in [Actions artifact 8510188610](https://github.com/openclaw/openclaw/actions/runs/29846174907/artifacts/8510188610); its checksum is published under the bundles directory.
