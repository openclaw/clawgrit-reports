# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260721-205804-e41d10
- Generated: 2026-07-21T21:06:37.273Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 907 MB | 910 MB | 911 MB |
| fresh-install | fresh | Gateway RSS | 907 MB | 910 MB | 911 MB |
| fresh-install | fresh | Max CPU | 155 % | 159 % | 159 % |
| fresh-install | fresh | Event Loop Max | 14.2 ms | 15.2 ms | 15.3 ms |
| fresh-install | onboarded-user | Primary RSS | 911 MB | 918 MB | 918 MB |
| fresh-install | onboarded-user | Gateway RSS | 911 MB | 918 MB | 918 MB |
| fresh-install | onboarded-user | Max CPU | 153 % | 155 % | 155 % |
| fresh-install | onboarded-user | Event Loop Max | 14.1 ms | 21.1 ms | 21.9 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 907 MB | 917 MB | 918 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 907 MB | 917 MB | 918 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 157 % | 159 % | 159 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 18.5 ms | 19.1 ms | 19.1 ms |
| bundled-plugin-startup | fresh | Primary RSS | 916 MB | 920 MB | 920 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 916 MB | 920 MB | 920 MB |
| bundled-plugin-startup | fresh | Max CPU | 149 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 16 ms | 17.2 ms | 17.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 947 MB | 953 MB | 954 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 173 % | 173 % | 173 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,027 ms | 6,933 ms | 7,034 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,020 ms | 6,956 ms | 7,060 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,027 ms | 6,486 ms | 6,537 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,533 ms | 6,349 ms | 6,440 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 909 MB | 918 MB | 919 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 909 MB | 918 MB | 919 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 157 % | 160 % | 160 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 16.7 ms | 20.5 ms | 21 ms |

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
- Tested ref: 2af8a4386515fb6dda610cb730c3c226c5a30dab
- Tested SHA: 2af8a4386515fb6dda610cb730c3c226c5a30dab
- Workflow ref: main
- Workflow SHA: 46632e9e3f74c983e3b16eaa13db286f15bd1345
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

The complete Kova bundle remains in [Actions artifact 8510203909](https://github.com/openclaw/openclaw/actions/runs/29844343082/artifacts/8510203909); its checksum is published under the bundles directory.
