# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260804-075712-6ed017
- Generated: 2026-08-04T08:05:55.819Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 13, FAIL: 2
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 996 MB | 999 MB | 1,000 MB |
| fresh-install | fresh | Gateway RSS | 996 MB | 999 MB | 1,000 MB |
| fresh-install | fresh | Max CPU | 163 % | 165 % | 165 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 994 MB | 994 MB | 994 MB |
| fresh-install | onboarded-user | Gateway RSS | 994 MB | 994 MB | 994 MB |
| fresh-install | onboarded-user | Max CPU | 156 % | 156 % | 156 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Primary RSS | 977 MB | 986 MB | 987 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 977 MB | 986 MB | 987 MB |
| bundled-plugin-startup | fresh | Max CPU | 163 % | 164 % | 164 % |
| bundled-plugin-startup | fresh | Event Loop Max | 18.9 ms | 19.2 ms | 19.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 875 MB | 885 MB | 886 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 168 % | 171 % | 171 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,459 ms | 6,687 ms | 6,823 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,993 ms | 6,079 ms | 6,311 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,536 ms | 6,719 ms | 6,850 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,175 ms | 6,381 ms | 6,516 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,053 MB | 1,060 MB | 1,061 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,053 MB | 1,060 MB | 1,061 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 167 % | 168 % | 168 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 32.4 ms | 44.1 ms | 45.4 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,061 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,053 | <= 1050 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 05c987ccec4cd0032aa7727d2de0644916bafa11
- Tested SHA: 05c987ccec4cd0032aa7727d2de0644916bafa11
- Workflow ref: main
- Workflow SHA: 05c987ccec4cd0032aa7727d2de0644916bafa11
- Kova repository: openclaw/Kova
- Kova ref: 283070760a16655b28835061774158b8b11b4aff
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8884823481](https://github.com/openclaw/openclaw/actions/runs/30889828427/artifacts/8884823481); its checksum is published under the bundles directory.
