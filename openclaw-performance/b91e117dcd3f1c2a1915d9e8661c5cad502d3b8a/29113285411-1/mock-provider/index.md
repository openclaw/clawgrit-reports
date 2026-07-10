# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260710-180607-794386
- Generated: 2026-07-10T18:21:25.724Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 14, PASS: 4
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 749 MB | 762 MB | 764 MB |
| fresh-install | fresh | Gateway RSS | 749 MB | 762 MB | 764 MB |
| fresh-install | fresh | Max CPU | 68.6 % | 125 % | 131 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 8.9 ms | 9.9 ms |
| fresh-install | onboarded-user | Primary RSS | 689 MB | 743 MB | 749 MB |
| fresh-install | onboarded-user | Gateway RSS | 689 MB | 743 MB | 749 MB |
| fresh-install | onboarded-user | Max CPU | 100 % | 113 % | 114 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 625 MB | 749 MB | 762 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 625 MB | 749 MB | 762 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 75 % | 87.4 % | 88.8 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Primary RSS | 763 MB | 778 MB | 779 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 763 MB | 778 MB | 779 MB |
| bundled-plugin-startup | fresh | Max CPU | 100 % | 137 % | 141 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 813 MB | 822 MB | 823 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 143 % | 148 % | 149 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,508 ms | 3,814 ms | 3,848 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,375 ms | 3,831 ms | 3,882 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,196 ms | 3,483 ms | 3,515 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,385 ms | 3,654 ms | 3,684 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 714 MB | 749 MB | 752 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 714 MB | 749 MB | 752 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 67.2 % | 74.2 % | 75 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | resourceByRole.plugin-cli.peakRssMb | 665 | <= 600 |
| fresh-install | fresh | resourceByRole.status-cli.peakRssMb | 598 | <= 500 |
| fresh-install | fresh | resourceByRole.plugin-cli.peakRssMb | 657 | <= 600 |
| fresh-install | fresh | resourceByRole.status-cli.peakRssMb | 646 | <= 500 |
| fresh-install | fresh | finalGatewayState | stopped | running |
| fresh-install | fresh | resourceByRole.plugin-cli.peakRssMb | 754 | <= 600 |
| fresh-install | fresh | resourceByRole.status-cli.peakRssMb | 648 | <= 500 |
| fresh-install | fresh | finalGatewayState | stopped | running |
| fresh-install | onboarded-user | resourceByRole.plugin-cli.peakRssMb | 663 | <= 600 |
| fresh-install | onboarded-user | resourceByRole.status-cli.peakRssMb | 718 | <= 500 |
| fresh-install | onboarded-user | finalGatewayState | stopped | running |
| fresh-install | onboarded-user | resourceByRole.plugin-cli.peakRssMb | 711 | <= 600 |
| fresh-install | onboarded-user | resourceByRole.status-cli.peakRssMb | 701 | <= 500 |
| fresh-install | onboarded-user | finalGatewayState | stopped | running |
| fresh-install | onboarded-user | resourceByRole.plugin-cli.peakRssMb | 675 | <= 600 |
| fresh-install | onboarded-user | resourceByRole.status-cli.peakRssMb | 681 | <= 500 |
| fresh-install | onboarded-user | finalGatewayState | stopped | running |
| bundled-plugin-startup | fresh | finalGatewayState | stopped | running |
| bundled-plugin-startup | fresh | readiness.classification | hard-failure | ready |
| bundled-plugin-startup | fresh | finalGatewayState | stopped | running |

_Only first 20 of 46 violations shown._

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | FAIL |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: b91e117dcd3f1c2a1915d9e8661c5cad502d3b8a
- Tested SHA: b91e117dcd3f1c2a1915d9e8661c5cad502d3b8a
- Workflow ref: release-ci/perf-b91e117dcd3f-20260710180508
- Workflow SHA: b91e117dcd3f1c2a1915d9e8661c5cad502d3b8a
- Kova repository: openclaw/Kova
- Kova ref: 24c26969e57d4d49f9d1a5071af85dd3d79daa2d
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8235954303](https://github.com/openclaw/openclaw/actions/runs/29113285411/artifacts/8235954303); its checksum is published under the bundles directory.
