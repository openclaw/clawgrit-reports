# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260817-215555-eb9516
- Generated: 2026-08-17T22:05:01.092Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 12, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 1,250 MB | 1,255 MB | 1,255 MB |
| fresh-install | fresh | Gateway RSS | 1,250 MB | 1,255 MB | 1,255 MB |
| fresh-install | fresh | Max CPU | 167 % | 171 % | 171 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 1,266 MB | 1,313 MB | 1,318 MB |
| fresh-install | onboarded-user | Gateway RSS | 1,266 MB | 1,313 MB | 1,318 MB |
| fresh-install | onboarded-user | Max CPU | 166 % | 173 % | 174 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 8.3 ms | 9.3 ms |
| bundled-plugin-startup | fresh | Primary RSS | 1,248 MB | 1,256 MB | 1,257 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 1,248 MB | 1,256 MB | 1,257 MB |
| bundled-plugin-startup | fresh | Max CPU | 172 % | 173 % | 173 % |
| bundled-plugin-startup | fresh | Event Loop Max | 9.8 ms | 9.9 ms | 10 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 889 MB | 918 MB | 921 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 158 % | 163 % | 163 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,977 ms | 4,076 ms | 4,087 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,993 ms | 4,115 ms | 4,129 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,675 ms | 3,844 ms | 3,863 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,811 ms | 3,929 ms | 3,942 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,245 MB | 1,246 MB | 1,246 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,245 MB | 1,246 MB | 1,246 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 160 % | 162 % | 162 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 9.9 ms | 10.1 ms | 10.1 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | peakRssMb | 1,250 | <= 1050 |
| fresh-install | fresh | peakRssMb | 1,212 | <= 1050 |
| fresh-install | fresh | peakRssMb | 1,255 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,318 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,257 | <= 1050 |
| fresh-install | onboarded-user | peakRssMb | 1,266 | <= 1050 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,257 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,242 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,248 | <= 1000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,246 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,246 | <= 1200 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,245 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,217 | <= 1200 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,244 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,244 | <= 1200 |

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
- Tested ref: 19dce6ceef2f3151d440dfccac516f1d0aaf52b9
- Tested SHA: 19dce6ceef2f3151d440dfccac516f1d0aaf52b9
- Workflow ref: main
- Workflow SHA: 0b75ea3cefcd1e4532f9b5c08d455433debdcba7
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9302848050](https://github.com/openclaw/openclaw/actions/runs/32073485191/artifacts/9302848050); its checksum is published under the bundles directory.
