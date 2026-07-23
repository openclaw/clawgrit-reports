# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-154844-a24c98
- Generated: 2026-07-23T15:58:07.939Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 923 MB | 925 MB | 926 MB |
| fresh-install | fresh | Gateway RSS | 923 MB | 925 MB | 926 MB |
| fresh-install | fresh | Max CPU | 152 % | 157 % | 157 % |
| fresh-install | fresh | Event Loop Max | 10.6 ms | 10.8 ms | 10.8 ms |
| fresh-install | onboarded-user | Primary RSS | 922 MB | 927 MB | 928 MB |
| fresh-install | onboarded-user | Gateway RSS | 922 MB | 927 MB | 928 MB |
| fresh-install | onboarded-user | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 10.5 ms | 10.7 ms | 10.8 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 913 MB | 916 MB | 917 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 913 MB | 916 MB | 917 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 151 % | 152 % | 152 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 18.6 ms | 26.6 ms | 27.5 ms |
| bundled-plugin-startup | fresh | Primary RSS | 922 MB | 924 MB | 924 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 922 MB | 924 MB | 924 MB |
| bundled-plugin-startup | fresh | Max CPU | 152 % | 152 % | 152 % |
| bundled-plugin-startup | fresh | Event Loop Max | 20.4 ms | 20.9 ms | 20.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 968 MB | 970 MB | 970 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 161 % | 164 % | 164 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,949 ms | 5,622 ms | 5,697 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,798 ms | 5,617 ms | 5,708 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,957 ms | 5,428 ms | 5,480 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,659 ms | 5,261 ms | 5,327 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 921 MB | 928 MB | 928 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 921 MB | 928 MB | 928 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 150 % | 155 % | 155 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 29.7 ms | 30.7 ms | 30.8 ms |

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
- Tested ref: 1587c856dbcc0090d575e35814a92d3f4f5bf0d4
- Tested SHA: 1587c856dbcc0090d575e35814a92d3f4f5bf0d4
- Workflow ref: main
- Workflow SHA: 4f4d89574a9e1361344f1435c994d30e15a166cf
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

The complete Kova bundle remains in [Actions artifact 8570049541](https://github.com/openclaw/openclaw/actions/runs/30022172555/artifacts/8570049541); its checksum is published under the bundles directory.
