# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-213657-516dad
- Generated: 2026-07-23T21:45:20.614Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 17, FAIL: 1
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 930 MB | 952 MB | 954 MB |
| fresh-install | fresh | Gateway RSS | 930 MB | 952 MB | 954 MB |
| fresh-install | fresh | Max CPU | 152 % | 156 % | 156 % |
| fresh-install | fresh | Event Loop Max | 11.2 ms | 11.3 ms | 11.3 ms |
| fresh-install | onboarded-user | Primary RSS | 935 MB | 938 MB | 939 MB |
| fresh-install | onboarded-user | Gateway RSS | 935 MB | 938 MB | 939 MB |
| fresh-install | onboarded-user | Max CPU | 154 % | 155 % | 155 % |
| fresh-install | onboarded-user | Event Loop Max | 11.3 ms | 17.2 ms | 17.9 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 924 MB | 941 MB | 943 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 924 MB | 941 MB | 943 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 151 % | 152 % | 152 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 24.6 ms | 27.6 ms | 27.9 ms |
| bundled-plugin-startup | fresh | Primary RSS | 950 MB | 957 MB | 958 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 950 MB | 957 MB | 958 MB |
| bundled-plugin-startup | fresh | Max CPU | 155 % | 160 % | 160 % |
| bundled-plugin-startup | fresh | Event Loop Max | 19.8 ms | 56.8 ms | 61 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 964 MB | 981 MB | 983 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 165 % | 170 % | 171 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,284 ms | 7,533 ms | 7,783 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,300 ms | 7,588 ms | 7,842 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,985 ms | 6,496 ms | 6,664 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,884 ms | 7,027 ms | 7,265 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 923 MB | 931 MB | 932 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 923 MB | 931 MB | 932 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 141 % | 154 % | 155 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 17.1 ms | 17.4 ms | 17.5 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 958 | <= 950 |

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
| bundled-plugin-startup | fresh | FAIL |  |
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
- Tested ref: 0bd0c9128cb82acaaf2e5a24cc3d8a9586c938d6
- Tested SHA: 0bd0c9128cb82acaaf2e5a24cc3d8a9586c938d6
- Workflow ref: main
- Workflow SHA: 30395ba31bb93b9da47d736709c1b3e9eafc2b3d
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

The complete Kova bundle remains in [Actions artifact 8579656804](https://github.com/openclaw/openclaw/actions/runs/30046773251/artifacts/8579656804); its checksum is published under the bundles directory.
