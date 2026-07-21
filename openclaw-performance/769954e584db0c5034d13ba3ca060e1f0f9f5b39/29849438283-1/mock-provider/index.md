# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260721-205900-5a1681
- Generated: 2026-07-21T21:06:51.371Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 913 MB | 920 MB | 921 MB |
| fresh-install | fresh | Gateway RSS | 913 MB | 920 MB | 921 MB |
| fresh-install | fresh | Max CPU | 148 % | 156 % | 157 % |
| fresh-install | fresh | Event Loop Max | 12.4 ms | 15.4 ms | 15.8 ms |
| fresh-install | onboarded-user | Primary RSS | 911 MB | 916 MB | 916 MB |
| fresh-install | onboarded-user | Gateway RSS | 911 MB | 916 MB | 916 MB |
| fresh-install | onboarded-user | Max CPU | 144 % | 153 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 13.1 ms | 13.3 ms | 13.3 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 919 MB | 927 MB | 928 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 919 MB | 927 MB | 928 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 144 % | 147 % | 147 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 13.7 ms | 15.3 ms | 15.5 ms |
| bundled-plugin-startup | fresh | Primary RSS | 912 MB | 914 MB | 915 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 912 MB | 914 MB | 915 MB |
| bundled-plugin-startup | fresh | Max CPU | 155 % | 156 % | 156 % |
| bundled-plugin-startup | fresh | Event Loop Max | 16.2 ms | 16.3 ms | 16.3 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 934 MB | 939 MB | 939 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 157 % | 158 % | 158 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,003 ms | 4,063 ms | 4,070 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,972 ms | 4,062 ms | 4,072 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,015 ms | 4,024 ms | 4,025 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,729 ms | 3,753 ms | 3,756 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 909 MB | 917 MB | 918 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 909 MB | 917 MB | 918 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 156 % | 158 % | 158 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 14.2 ms | 15.5 ms | 15.6 ms |

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
- Tested ref: 769954e584db0c5034d13ba3ca060e1f0f9f5b39
- Tested SHA: 769954e584db0c5034d13ba3ca060e1f0f9f5b39
- Workflow ref: main
- Workflow SHA: ffff420f491955c84f4aa23af6af11c8003d54b0
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

The complete Kova bundle remains in [Actions artifact 8510210044](https://github.com/openclaw/openclaw/actions/runs/29849438283/artifacts/8510210044); its checksum is published under the bundles directory.
