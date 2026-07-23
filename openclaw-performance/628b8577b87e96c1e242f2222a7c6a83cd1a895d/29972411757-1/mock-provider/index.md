# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-014154-93e863
- Generated: 2026-07-23T01:48:57.935Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 918 MB | 920 MB | 921 MB |
| fresh-install | fresh | Gateway RSS | 918 MB | 920 MB | 921 MB |
| fresh-install | fresh | Max CPU | 149 % | 151 % | 151 % |
| fresh-install | fresh | Event Loop Max | 11 ms | 12.7 ms | 12.9 ms |
| fresh-install | onboarded-user | Primary RSS | 925 MB | 925 MB | 925 MB |
| fresh-install | onboarded-user | Gateway RSS | 925 MB | 925 MB | 925 MB |
| fresh-install | onboarded-user | Max CPU | 152 % | 153 % | 153 % |
| fresh-install | onboarded-user | Event Loop Max | 10.3 ms | 10.7 ms | 10.8 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 909 MB | 910 MB | 910 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 909 MB | 910 MB | 910 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 153 % | 155 % | 155 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 22.1 ms | 26.1 ms | 26.6 ms |
| bundled-plugin-startup | fresh | Primary RSS | 926 MB | 926 MB | 927 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 926 MB | 926 MB | 927 MB |
| bundled-plugin-startup | fresh | Max CPU | 151 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 24.6 ms | 26.3 ms | 26.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 955 MB | 955 MB | 955 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 158 % | 158 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,751 ms | 4,816 ms | 4,823 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,755 ms | 4,816 ms | 4,823 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,668 ms | 4,802 ms | 4,817 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,445 ms | 4,535 ms | 4,545 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 918 MB | 932 MB | 933 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 918 MB | 932 MB | 933 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 150 % | 151 % | 151 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 14 ms | 16.2 ms | 16.5 ms |

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
- Tested ref: 628b8577b87e96c1e242f2222a7c6a83cd1a895d
- Tested SHA: 628b8577b87e96c1e242f2222a7c6a83cd1a895d
- Workflow ref: main
- Workflow SHA: 9636f2aa2dcfa9db482ceaa0897c0f8138447bf5
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

The complete Kova bundle remains in [Actions artifact 8550313651](https://github.com/openclaw/openclaw/actions/runs/29972411757/artifacts/8550313651); its checksum is published under the bundles directory.
