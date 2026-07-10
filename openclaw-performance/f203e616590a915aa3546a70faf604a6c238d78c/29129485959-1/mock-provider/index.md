# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260710-230650-c5e783
- Generated: 2026-07-10T23:17:11.307Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 11, FAIL: 7
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 740 MB | 778 MB | 783 MB |
| fresh-install | fresh | Gateway RSS | 740 MB | 778 MB | 783 MB |
| fresh-install | fresh | Max CPU | 100 % | 127 % | 130 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 777 MB | 789 MB | 790 MB |
| fresh-install | onboarded-user | Gateway RSS | 777 MB | 789 MB | 790 MB |
| fresh-install | onboarded-user | Max CPU | 100 % | 130 % | 133 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 690 MB | 691 MB | 691 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 690 MB | 691 MB | 691 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 100 % | 100 % | 100 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 9 ms | 10 ms |
| bundled-plugin-startup | fresh | Primary RSS | 721 MB | 751 MB | 754 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 721 MB | 751 MB | 754 MB |
| bundled-plugin-startup | fresh | Max CPU | 133 % | 137 % | 137 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 780 MB | 816 MB | 820 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 147 % | 147 % | 147 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,372 ms | 3,640 ms | 3,670 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,385 ms | 3,651 ms | 3,680 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,133 ms | 3,440 ms | 3,474 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,240 ms | 3,481 ms | 3,508 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 760 MB | 765 MB | 766 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 760 MB | 765 MB | 766 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 51.8 % | 119 % | 127 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | finalGatewayState | stopped | running |
| fresh-install | fresh | finalGatewayState | stopped | running |
| fresh-install | onboarded-user | finalGatewayState | stopped | running |
| fresh-install | onboarded-user | finalGatewayState | stopped | running |
| bundled-plugin-startup | fresh | finalGatewayState | stopped | running |
| bundled-plugin-startup | fresh | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | finalGatewayState | stopped | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | finalGatewayState | stopped | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
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
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: f203e616590a915aa3546a70faf604a6c238d78c
- Tested SHA: f203e616590a915aa3546a70faf604a6c238d78c
- Workflow ref: main
- Workflow SHA: babc287afe566db59fa49533f3bbcb823f900b4b
- Kova repository: openclaw/Kova
- Kova ref: 2ef781190516c09df9891317654a0484bf4f0d46
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8241668231](https://github.com/openclaw/openclaw/actions/runs/29129485959/artifacts/8241668231); its checksum is published under the bundles directory.
