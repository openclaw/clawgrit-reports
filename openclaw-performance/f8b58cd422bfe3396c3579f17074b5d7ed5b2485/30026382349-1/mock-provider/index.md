# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-164529-82c767
- Generated: 2026-07-23T16:55:11.487Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 922 MB | 935 MB | 937 MB |
| fresh-install | fresh | Gateway RSS | 922 MB | 935 MB | 937 MB |
| fresh-install | fresh | Max CPU | 148 % | 153 % | 154 % |
| fresh-install | fresh | Event Loop Max | 10.5 ms | 11 ms | 11 ms |
| fresh-install | onboarded-user | Primary RSS | 925 MB | 945 MB | 948 MB |
| fresh-install | onboarded-user | Gateway RSS | 925 MB | 945 MB | 948 MB |
| fresh-install | onboarded-user | Max CPU | 149 % | 155 % | 156 % |
| fresh-install | onboarded-user | Event Loop Max | 11.1 ms | 20.7 ms | 21.8 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 924 MB | 929 MB | 929 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 924 MB | 929 MB | 929 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 152 % | 157 % | 158 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 29.1 ms | 42 ms | 43.4 ms |
| bundled-plugin-startup | fresh | Primary RSS | 930 MB | 935 MB | 936 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 930 MB | 935 MB | 936 MB |
| bundled-plugin-startup | fresh | Max CPU | 145 % | 150 % | 150 % |
| bundled-plugin-startup | fresh | Event Loop Max | 20.8 ms | 23.9 ms | 24.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 983 MB | 985 MB | 985 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 161 % | 166 % | 167 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,131 ms | 6,739 ms | 6,807 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,171 ms | 6,765 ms | 6,831 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,370 ms | 6,248 ms | 6,345 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,757 ms | 6,342 ms | 6,407 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 922 MB | 924 MB | 924 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 922 MB | 924 MB | 924 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 155 % | 155 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 26.5 ms | 36 ms | 37.1 ms |

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
- Tested ref: f8b58cd422bfe3396c3579f17074b5d7ed5b2485
- Tested SHA: f8b58cd422bfe3396c3579f17074b5d7ed5b2485
- Workflow ref: main
- Workflow SHA: c440ae3e8668040461b1917d18af1ca72b686125
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

The complete Kova bundle remains in [Actions artifact 8571757730](https://github.com/openclaw/openclaw/actions/runs/30026382349/artifacts/8571757730); its checksum is published under the bundles directory.
