# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260724-005342-745a8b
- Generated: 2026-07-24T01:01:05.789Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 17, FAIL: 1
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 955 MB | 960 MB | 960 MB |
| fresh-install | fresh | Gateway RSS | 955 MB | 960 MB | 960 MB |
| fresh-install | fresh | Max CPU | 152 % | 153 % | 153 % |
| fresh-install | fresh | Event Loop Max | 10.5 ms | 11.6 ms | 11.8 ms |
| fresh-install | onboarded-user | Primary RSS | 934 MB | 959 MB | 961 MB |
| fresh-install | onboarded-user | Gateway RSS | 934 MB | 959 MB | 961 MB |
| fresh-install | onboarded-user | Max CPU | 152 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 11.3 ms | 12.5 ms | 12.6 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 925 MB | 945 MB | 947 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 925 MB | 945 MB | 947 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 151 % | 152 % | 152 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 14.1 ms | 19.5 ms | 20.1 ms |
| bundled-plugin-startup | fresh | Primary RSS | 933 MB | 954 MB | 956 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 933 MB | 954 MB | 956 MB |
| bundled-plugin-startup | fresh | Max CPU | 155 % | 157 % | 157 % |
| bundled-plugin-startup | fresh | Event Loop Max | 14.9 ms | 25.7 ms | 26.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 982 MB | 991 MB | 992 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 160 % | 161 % | 161 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,128 ms | 5,185 ms | 5,192 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,879 ms | 5,173 ms | 5,206 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,921 ms | 5,119 ms | 5,141 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,806 ms | 4,870 ms | 4,877 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 930 MB | 936 MB | 937 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 930 MB | 936 MB | 937 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 155 % | 158 % | 158 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 19.5 ms | 20.3 ms | 20.4 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 956 | <= 950 |

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
| bundled-plugin-startup | fresh | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 60cbbc833ae5b12a7b3ca4036944ca395029cb7e
- Tested SHA: 60cbbc833ae5b12a7b3ca4036944ca395029cb7e
- Workflow ref: main
- Workflow SHA: bb657eec9359b8a782cd2a17f4abc7ed413ca979
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

The complete Kova bundle remains in [Actions artifact 8583413974](https://github.com/openclaw/openclaw/actions/runs/30057423483/artifacts/8583413974); its checksum is published under the bundles directory.
