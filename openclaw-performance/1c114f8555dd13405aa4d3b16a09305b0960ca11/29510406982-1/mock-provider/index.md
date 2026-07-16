# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260716-151739-d62504
- Generated: 2026-07-16T15:24:18.276Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 886 MB | 902 MB | 904 MB |
| fresh-install | fresh | Gateway RSS | 886 MB | 902 MB | 904 MB |
| fresh-install | fresh | Max CPU | 156 % | 156 % | 156 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 866 MB | 896 MB | 899 MB |
| fresh-install | onboarded-user | Gateway RSS | 866 MB | 896 MB | 899 MB |
| fresh-install | onboarded-user | Max CPU | 131 % | 152 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 867 MB | 869 MB | 869 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 867 MB | 869 MB | 869 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 151 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 9.1 ms | 10 ms | 10.1 ms |
| bundled-plugin-startup | fresh | Primary RSS | 871 MB | 889 MB | 891 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 871 MB | 889 MB | 891 MB |
| bundled-plugin-startup | fresh | Max CPU | 160 % | 161 % | 161 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 8.8 ms | 9.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 916 MB | 939 MB | 941 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 161 % | 162 % | 162 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,397 ms | 3,453 ms | 3,459 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,314 ms | 3,451 ms | 3,466 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,330 ms | 3,394 ms | 3,401 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,259 ms | 3,315 ms | 3,321 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 876 MB | 892 MB | 893 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 876 MB | 892 MB | 893 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 137 % | 156 % | 158 % |
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
- Tested ref: 1c114f8555dd13405aa4d3b16a09305b0960ca11
- Tested SHA: 1c114f8555dd13405aa4d3b16a09305b0960ca11
- Workflow ref: main
- Workflow SHA: aaa37a0c264a9b2bc25c6d5a8e98ede130455fed
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

The complete Kova bundle remains in [Actions artifact 8380592794](https://github.com/openclaw/openclaw/actions/runs/29510406982/artifacts/8380592794); its checksum is published under the bundles directory.
