# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260725-180544-26db01
- Generated: 2026-07-25T18:13:33.032Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 15, FAIL: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 882 MB | 887 MB | 888 MB |
| fresh-install | fresh | Gateway RSS | 882 MB | 887 MB | 888 MB |
| fresh-install | fresh | Max CPU | 151 % | 151 % | 151 % |
| fresh-install | fresh | Event Loop Max | 11.8 ms | 15.5 ms | 15.9 ms |
| fresh-install | onboarded-user | Primary RSS | 891 MB | 899 MB | 900 MB |
| fresh-install | onboarded-user | Gateway RSS | 891 MB | 899 MB | 900 MB |
| fresh-install | onboarded-user | Max CPU | 152 % | 152 % | 152 % |
| fresh-install | onboarded-user | Event Loop Max | 11.7 ms | 13.1 ms | 13.2 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 963 MB | 966 MB | 966 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 963 MB | 966 MB | 966 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 152 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 18.9 ms | 22 ms | 22.4 ms |
| bundled-plugin-startup | fresh | Primary RSS | 956 MB | 960 MB | 961 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 956 MB | 960 MB | 961 MB |
| bundled-plugin-startup | fresh | Max CPU | 155 % | 155 % | 155 % |
| bundled-plugin-startup | fresh | Event Loop Max | 22.3 ms | 22.7 ms | 22.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 942 MB | 948 MB | 949 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 160 % | 160 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,921 ms | 5,017 ms | 5,028 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,930 ms | 5,031 ms | 5,042 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,753 ms | 4,757 ms | 4,757 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,371 ms | 4,471 ms | 4,483 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 911 MB | 952 MB | 957 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 911 MB | 952 MB | 957 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 152 % | 152 % | 152 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 18.2 ms | 19.5 ms | 19.6 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 956 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 961 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 951 | <= 950 |

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
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 30f53b2c4282672ae1bc08cc47e84859b255de30
- Tested SHA: 30f53b2c4282672ae1bc08cc47e84859b255de30
- Workflow ref: main
- Workflow SHA: fca18dddc79b1d4a67cfd1975b5ce4e517f74d63
- Kova repository: openclaw/Kova
- Kova ref: 1bf080f6dbf8800a3187591493f2551824e4ccc7
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8622431062](https://github.com/openclaw/openclaw/actions/runs/30168909219/artifacts/8622431062); its checksum is published under the bundles directory.
