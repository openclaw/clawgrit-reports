# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260724-002520-283b6f
- Generated: 2026-07-24T00:32:39.169Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 940 MB | 952 MB | 954 MB |
| fresh-install | fresh | Gateway RSS | 940 MB | 952 MB | 954 MB |
| fresh-install | fresh | Max CPU | 150 % | 152 % | 152 % |
| fresh-install | fresh | Event Loop Max | 10.3 ms | 14 ms | 14.4 ms |
| fresh-install | onboarded-user | Primary RSS | 942 MB | 959 MB | 961 MB |
| fresh-install | onboarded-user | Gateway RSS | 942 MB | 959 MB | 961 MB |
| fresh-install | onboarded-user | Max CPU | 152 % | 153 % | 153 % |
| fresh-install | onboarded-user | Event Loop Max | 10.1 ms | 11.7 ms | 11.8 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 926 MB | 955 MB | 959 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 926 MB | 955 MB | 959 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 151 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 20.6 ms | 26.6 ms | 27.2 ms |
| bundled-plugin-startup | fresh | Primary RSS | 940 MB | 942 MB | 942 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 940 MB | 942 MB | 942 MB |
| bundled-plugin-startup | fresh | Max CPU | 152 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 17 ms | 21.2 ms | 21.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 973 MB | 981 MB | 982 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 154 % | 155 % | 155 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,489 ms | 4,563 ms | 4,571 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,426 ms | 4,494 ms | 4,502 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,496 ms | 4,567 ms | 4,575 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,222 ms | 4,303 ms | 4,312 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 936 MB | 940 MB | 941 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 936 MB | 940 MB | 941 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 154 % | 157 % | 157 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 21.7 ms | 25.2 ms | 25.6 ms |

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
- Tested ref: 23062f2dc4805206701c1ea97293829a361530e5
- Tested SHA: 23062f2dc4805206701c1ea97293829a361530e5
- Workflow ref: main
- Workflow SHA: 7915c44773f3f6ed6b1cf00312da35ef8a2b9830
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

The complete Kova bundle remains in [Actions artifact 8582940023](https://github.com/openclaw/openclaw/actions/runs/30056075137/artifacts/8582940023); its checksum is published under the bundles directory.
