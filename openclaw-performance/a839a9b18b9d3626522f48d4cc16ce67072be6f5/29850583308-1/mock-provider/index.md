# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260721-205838-7b0cc5
- Generated: 2026-07-21T21:07:35.712Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 910 MB | 917 MB | 918 MB |
| fresh-install | fresh | Gateway RSS | 910 MB | 917 MB | 918 MB |
| fresh-install | fresh | Max CPU | 155 % | 156 % | 156 % |
| fresh-install | fresh | Event Loop Max | 11.7 ms | 17.4 ms | 18.1 ms |
| fresh-install | onboarded-user | Primary RSS | 917 MB | 921 MB | 921 MB |
| fresh-install | onboarded-user | Gateway RSS | 917 MB | 921 MB | 921 MB |
| fresh-install | onboarded-user | Max CPU | 163 % | 165 % | 165 % |
| fresh-install | onboarded-user | Event Loop Max | 25.9 ms | 26.2 ms | 26.2 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 895 MB | 912 MB | 914 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 895 MB | 912 MB | 914 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 159 % | 161 % | 161 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 15.1 ms | 20.6 ms | 21.2 ms |
| bundled-plugin-startup | fresh | Primary RSS | 913 MB | 915 MB | 915 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 913 MB | 915 MB | 915 MB |
| bundled-plugin-startup | fresh | Max CPU | 158 % | 159 % | 159 % |
| bundled-plugin-startup | fresh | Event Loop Max | 14 ms | 15.9 ms | 16.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 939 MB | 942 MB | 943 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 165 % | 171 % | 172 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,603 ms | 6,497 ms | 6,708 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,474 ms | 5,076 ms | 5,143 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,611 ms | 6,572 ms | 6,790 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,234 ms | 5,928 ms | 6,116 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 925 MB | 941 MB | 943 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 925 MB | 941 MB | 943 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 162 % | 164 % | 164 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 12.6 ms | 16.5 ms | 16.9 ms |

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
- Tested ref: a839a9b18b9d3626522f48d4cc16ce67072be6f5
- Tested SHA: a839a9b18b9d3626522f48d4cc16ce67072be6f5
- Workflow ref: main
- Workflow SHA: fd2e32627541a40628d0498a697182929d6d51ab
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

The complete Kova bundle remains in [Actions artifact 8510230116](https://github.com/openclaw/openclaw/actions/runs/29850583308/artifacts/8510230116); its checksum is published under the bundles directory.
