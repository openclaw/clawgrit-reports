# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-224554-d8a45d
- Generated: 2026-07-23T22:53:39.816Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 17, FAIL: 1
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 938 MB | 957 MB | 959 MB |
| fresh-install | fresh | Gateway RSS | 938 MB | 957 MB | 959 MB |
| fresh-install | fresh | Max CPU | 151 % | 153 % | 153 % |
| fresh-install | fresh | Event Loop Max | 10.6 ms | 12.6 ms | 12.8 ms |
| fresh-install | onboarded-user | Primary RSS | 930 MB | 936 MB | 937 MB |
| fresh-install | onboarded-user | Gateway RSS | 930 MB | 936 MB | 937 MB |
| fresh-install | onboarded-user | Max CPU | 152 % | 153 % | 153 % |
| fresh-install | onboarded-user | Event Loop Max | 10.3 ms | 11.1 ms | 11.2 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 925 MB | 946 MB | 948 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 925 MB | 946 MB | 948 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 153 % | 154 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 21.3 ms | 24.1 ms | 24.4 ms |
| bundled-plugin-startup | fresh | Primary RSS | 928 MB | 937 MB | 939 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 928 MB | 937 MB | 939 MB |
| bundled-plugin-startup | fresh | Max CPU | 153 % | 156 % | 156 % |
| bundled-plugin-startup | fresh | Event Loop Max | 21.2 ms | 22.6 ms | 22.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 980 MB | 1,009 MB | 1,013 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 155 % | 156 % | 156 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,378 ms | 4,603 ms | 4,628 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,376 ms | 4,382 ms | 4,383 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,275 ms | 4,604 ms | 4,641 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,094 ms | 4,354 ms | 4,383 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 929 MB | 958 MB | 961 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 929 MB | 958 MB | 961 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 151 % | 155 % | 155 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 22.6 ms | 23.8 ms | 23.9 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,013 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,013 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,013 | <= 1000 |

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
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 0aab67cef058a501a77111b29546cdf72db6b1a3
- Tested SHA: 0aab67cef058a501a77111b29546cdf72db6b1a3
- Workflow ref: main
- Workflow SHA: 5fb3136be0d2856f9928d85b3a0410714f28bae6
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

The complete Kova bundle remains in [Actions artifact 8581156183](https://github.com/openclaw/openclaw/actions/runs/30050929262/artifacts/8581156183); its checksum is published under the bundles directory.
