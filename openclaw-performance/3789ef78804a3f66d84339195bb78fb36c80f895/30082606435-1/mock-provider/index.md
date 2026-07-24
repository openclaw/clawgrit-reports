# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260724-092812-02081e
- Generated: 2026-07-24T09:36:20.287Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 17, FAIL: 1
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 939 MB | 946 MB | 947 MB |
| fresh-install | fresh | Gateway RSS | 939 MB | 946 MB | 947 MB |
| fresh-install | fresh | Max CPU | 154 % | 154 % | 154 % |
| fresh-install | fresh | Event Loop Max | 10.3 ms | 10.7 ms | 10.8 ms |
| fresh-install | onboarded-user | Primary RSS | 941 MB | 942 MB | 942 MB |
| fresh-install | onboarded-user | Gateway RSS | 941 MB | 942 MB | 942 MB |
| fresh-install | onboarded-user | Max CPU | 151 % | 151 % | 151 % |
| fresh-install | onboarded-user | Event Loop Max | 10.3 ms | 10.5 ms | 10.5 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 926 MB | 928 MB | 928 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 926 MB | 928 MB | 928 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 151 % | 152 % | 152 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 19.8 ms | 20.6 ms | 20.6 ms |
| bundled-plugin-startup | fresh | Primary RSS | 941 MB | 941 MB | 942 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 941 MB | 941 MB | 942 MB |
| bundled-plugin-startup | fresh | Max CPU | 153 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 27.7 ms | 28.2 ms | 28.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 957 MB | 997 MB | 1,002 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 158 % | 159 % | 159 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,948 ms | 5,279 ms | 5,316 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,964 ms | 5,290 ms | 5,326 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,901 ms | 5,104 ms | 5,127 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,600 ms | 4,926 ms | 4,962 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 945 MB | 945 MB | 946 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 945 MB | 945 MB | 946 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 18.2 ms | 25.5 ms | 26.3 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,002 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,002 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,002 | <= 1000 |

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
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 3789ef78804a3f66d84339195bb78fb36c80f895
- Tested SHA: 3789ef78804a3f66d84339195bb78fb36c80f895
- Workflow ref: main
- Workflow SHA: b3e3f06584f9266644674674eb264f4b9273534b
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

The complete Kova bundle remains in [Actions artifact 8592618857](https://github.com/openclaw/openclaw/actions/runs/30082606435/artifacts/8592618857); its checksum is published under the bundles directory.
