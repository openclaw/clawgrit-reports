# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260820-081837-8bb527
- Generated: 2026-08-20T08:27:53.244Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 12, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 1,088 MB | 1,112 MB | 1,115 MB |
| fresh-install | fresh | Gateway RSS | 1,088 MB | 1,112 MB | 1,115 MB |
| fresh-install | fresh | Max CPU | 155 % | 157 % | 157 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 1,084 MB | 1,085 MB | 1,085 MB |
| fresh-install | onboarded-user | Gateway RSS | 1,084 MB | 1,085 MB | 1,085 MB |
| fresh-install | onboarded-user | Max CPU | 152 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 8.2 ms | 9.1 ms |
| bundled-plugin-startup | fresh | Primary RSS | 1,078 MB | 1,078 MB | 1,078 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 1,078 MB | 1,078 MB | 1,078 MB |
| bundled-plugin-startup | fresh | Max CPU | 155 % | 159 % | 159 % |
| bundled-plugin-startup | fresh | Event Loop Max | 9.9 ms | 10.1 ms | 10.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 925 MB | 991 MB | 998 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 160 % | 160 % | 160 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,438 ms | 4,823 ms | 4,865 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,460 ms | 4,856 ms | 4,900 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,208 ms | 4,303 ms | 4,314 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,217 ms | 4,634 ms | 4,680 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,082 MB | 1,102 MB | 1,104 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,082 MB | 1,102 MB | 1,104 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 151 % | 155 % | 155 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10 ms | 10 ms | 10 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | peakRssMb | 1,075 | <= 1050 |
| fresh-install | fresh | peakRssMb | 1,088 | <= 1050 |
| fresh-install | fresh | peakRssMb | 1,115 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,084 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,058 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,085 | <= 1050 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,078 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,057 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,078 | <= 1000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,082 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,079 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,104 | <= 1050 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | FAIL |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: b1f9f16c439b5dff6a4c70851079407bf04720a6
- Tested SHA: b1f9f16c439b5dff6a4c70851079407bf04720a6
- Workflow ref: main
- Workflow SHA: a29d8c880330d3689dc4faf4859fb7e091b75e84
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9399090479](https://github.com/openclaw/openclaw/actions/runs/32348078005/artifacts/9399090479); its checksum is published under the bundles directory.
