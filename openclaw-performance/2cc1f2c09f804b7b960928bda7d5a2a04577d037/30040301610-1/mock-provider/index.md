# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-200203-27cbcd
- Generated: 2026-07-23T20:11:04.628Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 919 MB | 926 MB | 927 MB |
| fresh-install | fresh | Gateway RSS | 919 MB | 926 MB | 927 MB |
| fresh-install | fresh | Max CPU | 149 % | 154 % | 155 % |
| fresh-install | fresh | Event Loop Max | 10.5 ms | 12.4 ms | 12.6 ms |
| fresh-install | onboarded-user | Primary RSS | 920 MB | 924 MB | 924 MB |
| fresh-install | onboarded-user | Gateway RSS | 920 MB | 924 MB | 924 MB |
| fresh-install | onboarded-user | Max CPU | 139 % | 141 % | 141 % |
| fresh-install | onboarded-user | Event Loop Max | 10.3 ms | 11 ms | 11.1 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 910 MB | 924 MB | 925 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 910 MB | 924 MB | 925 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 153 % | 158 % | 159 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 14.9 ms | 18.7 ms | 19.1 ms |
| bundled-plugin-startup | fresh | Primary RSS | 930 MB | 932 MB | 932 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 930 MB | 932 MB | 932 MB |
| bundled-plugin-startup | fresh | Max CPU | 157 % | 162 % | 163 % |
| bundled-plugin-startup | fresh | Event Loop Max | 31.6 ms | 38.2 ms | 39 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 961 MB | 981 MB | 984 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 166 % | 167 % | 167 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,443 ms | 5,855 ms | 5,900 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,347 ms | 5,875 ms | 5,934 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,260 ms | 5,429 ms | 5,448 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,128 ms | 5,494 ms | 5,534 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 926 MB | 929 MB | 930 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 926 MB | 929 MB | 930 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 155 % | 158 % | 158 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 16.2 ms | 22 ms | 22.6 ms |

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
- Tested ref: 2cc1f2c09f804b7b960928bda7d5a2a04577d037
- Tested SHA: 2cc1f2c09f804b7b960928bda7d5a2a04577d037
- Workflow ref: main
- Workflow SHA: 95b86a3b2b32c1ab6426ded4ac41c02e3a210a96
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

The complete Kova bundle remains in [Actions artifact 8577209804](https://github.com/openclaw/openclaw/actions/runs/30040301610/artifacts/8577209804); its checksum is published under the bundles directory.
