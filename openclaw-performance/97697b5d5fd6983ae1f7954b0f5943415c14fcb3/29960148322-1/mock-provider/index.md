# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260722-214236-99941f
- Generated: 2026-07-22T21:50:05.806Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 916 MB | 935 MB | 937 MB |
| fresh-install | fresh | Gateway RSS | 916 MB | 935 MB | 937 MB |
| fresh-install | fresh | Max CPU | 145 % | 153 % | 154 % |
| fresh-install | fresh | Event Loop Max | 10.5 ms | 10.6 ms | 10.6 ms |
| fresh-install | onboarded-user | Primary RSS | 930 MB | 931 MB | 932 MB |
| fresh-install | onboarded-user | Gateway RSS | 930 MB | 931 MB | 932 MB |
| fresh-install | onboarded-user | Max CPU | 144 % | 155 % | 156 % |
| fresh-install | onboarded-user | Event Loop Max | 10.5 ms | 16.1 ms | 16.7 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 912 MB | 917 MB | 918 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 912 MB | 917 MB | 918 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 151 % | 154 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 16.4 ms | 18.5 ms | 18.7 ms |
| bundled-plugin-startup | fresh | Primary RSS | 925 MB | 925 MB | 925 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 925 MB | 925 MB | 925 MB |
| bundled-plugin-startup | fresh | Max CPU | 140 % | 154 % | 155 % |
| bundled-plugin-startup | fresh | Event Loop Max | 18.5 ms | 26.6 ms | 27.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 949 MB | 982 MB | 986 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 155 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,216 ms | 5,216 ms | 5,216 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,208 ms | 5,223 ms | 5,225 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,050 ms | 5,199 ms | 5,216 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,853 ms | 4,898 ms | 4,904 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 929 MB | 931 MB | 931 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 929 MB | 931 MB | 931 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 152 % | 158 % | 159 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 15.9 ms | 20.7 ms | 21.3 ms |

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
- Tested ref: 97697b5d5fd6983ae1f7954b0f5943415c14fcb3
- Tested SHA: 97697b5d5fd6983ae1f7954b0f5943415c14fcb3
- Workflow ref: main
- Workflow SHA: 635d3967552c94feb58c8adcb6eba52cd5fe2511
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

The complete Kova bundle remains in [Actions artifact 8545821927](https://github.com/openclaw/openclaw/actions/runs/29960148322/artifacts/8545821927); its checksum is published under the bundles directory.
