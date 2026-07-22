# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260722-211426-eaa711
- Generated: 2026-07-22T21:21:49.611Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 919 MB | 920 MB | 920 MB |
| fresh-install | fresh | Gateway RSS | 919 MB | 920 MB | 920 MB |
| fresh-install | fresh | Max CPU | 150 % | 159 % | 160 % |
| fresh-install | fresh | Event Loop Max | 10.4 ms | 10.8 ms | 10.8 ms |
| fresh-install | onboarded-user | Primary RSS | 929 MB | 933 MB | 934 MB |
| fresh-install | onboarded-user | Gateway RSS | 929 MB | 933 MB | 934 MB |
| fresh-install | onboarded-user | Max CPU | 156 % | 161 % | 161 % |
| fresh-install | onboarded-user | Event Loop Max | 10.5 ms | 12 ms | 12.1 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 908 MB | 909 MB | 909 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 908 MB | 909 MB | 909 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 162 % | 163 % | 163 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 21.5 ms | 26.1 ms | 26.6 ms |
| bundled-plugin-startup | fresh | Primary RSS | 924 MB | 925 MB | 925 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 924 MB | 925 MB | 925 MB |
| bundled-plugin-startup | fresh | Max CPU | 156 % | 157 % | 157 % |
| bundled-plugin-startup | fresh | Event Loop Max | 29.4 ms | 34.2 ms | 34.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 948 MB | 961 MB | 962 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 167 % | 167 % | 167 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,211 ms | 5,457 ms | 5,484 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,212 ms | 5,494 ms | 5,525 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,907 ms | 5,157 ms | 5,185 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,896 ms | 5,094 ms | 5,117 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 926 MB | 927 MB | 927 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 926 MB | 927 MB | 927 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 156 % | 156 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 15.2 ms | 19.7 ms | 20.2 ms |

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
- Tested ref: 7f520f3a395202daaeb2ee9aadcdde9ec380021f
- Tested SHA: 7f520f3a395202daaeb2ee9aadcdde9ec380021f
- Workflow ref: main
- Workflow SHA: 6c0bda782cfaa8749594d5d94ca72399b87920fe
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

The complete Kova bundle remains in [Actions artifact 8545156839](https://github.com/openclaw/openclaw/actions/runs/29958324679/artifacts/8545156839); its checksum is published under the bundles directory.
