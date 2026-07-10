# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260710-211225-551240
- Generated: 2026-07-10T21:24:17.088Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 14, PASS: 4
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 746 MB | 764 MB | 766 MB |
| fresh-install | fresh | Gateway RSS | 746 MB | 764 MB | 766 MB |
| fresh-install | fresh | Max CPU | 126 % | 135 % | 136 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 765 MB | 766 MB | 767 MB |
| fresh-install | onboarded-user | Gateway RSS | 765 MB | 766 MB | 767 MB |
| fresh-install | onboarded-user | Max CPU | 56.4 % | 126 % | 134 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 772 MB | 773 MB | 774 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 772 MB | 773 MB | 774 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 100 % | 100 % | 100 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Primary RSS | 665 MB | 757 MB | 767 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 665 MB | 757 MB | 767 MB |
| bundled-plugin-startup | fresh | Max CPU | 100 % | 127 % | 130 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 697 MB | 704 MB | 705 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 142 % | 145 % | 145 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,949 ms | 2,952 ms | 2,952 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,921 ms | 2,953 ms | 2,957 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,876 ms | 2,944 ms | 2,951 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,833 ms | 2,839 ms | 2,840 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 711 MB | 769 MB | 776 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 711 MB | 769 MB | 776 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 44.3 % | 94.4 % | 100 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | resourceByRole.plugin-cli.peakRssMb | 686 | <= 600 |
| fresh-install | fresh | resourceByRole.status-cli.peakRssMb | 711 | <= 500 |
| fresh-install | fresh | resourceByRole.plugin-cli.peakRssMb | 790 | <= 600 |
| fresh-install | fresh | resourceByRole.status-cli.peakRssMb | 738 | <= 500 |
| fresh-install | fresh | finalGatewayState | stopped | running |
| fresh-install | fresh | resourceByRole.plugin-cli.peakRssMb | 701 | <= 600 |
| fresh-install | fresh | resourceByRole.status-cli.peakRssMb | 634 | <= 500 |
| fresh-install | onboarded-user | resourceByRole.plugin-cli.peakRssMb | 684 | <= 600 |
| fresh-install | onboarded-user | resourceByRole.status-cli.peakRssMb | 659 | <= 500 |
| fresh-install | onboarded-user | resourceByRole.plugin-cli.peakRssMb | 708 | <= 600 |
| fresh-install | onboarded-user | resourceByRole.status-cli.peakRssMb | 710 | <= 500 |
| fresh-install | onboarded-user | finalGatewayState | stopped | running |
| fresh-install | onboarded-user | resourceByRole.plugin-cli.peakRssMb | 663 | <= 600 |
| fresh-install | onboarded-user | resourceByRole.status-cli.peakRssMb | 745 | <= 500 |
| fresh-install | onboarded-user | finalGatewayState | stopped | running |
| bundled-runtime-deps | missing-plugin-index | finalGatewayState | restarting | running |
| bundled-plugin-startup | fresh | finalGatewayState | stopped | running |
| bundled-plugin-startup | fresh | readiness.classification | hard-failure | ready |
| agent-cold-warm-message | mock-openai-provider | agentResponseOk | 0 | true |
| agent-cold-warm-message | mock-openai-provider | agentTurn.responseOk | none | usable assistant response |

_Only first 20 of 42 violations shown._

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | FAIL |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
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
- Tested ref: 1ca4421f56230335ef39e98cee8ec14bedce1bbf
- Tested SHA: 1ca4421f56230335ef39e98cee8ec14bedce1bbf
- Workflow ref: main
- Workflow SHA: d92d5774f5c6b505134f65d0380b410117317971
- Kova repository: openclaw/Kova
- Kova ref: 24c26969e57d4d49f9d1a5071af85dd3d79daa2d
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8239796389](https://github.com/openclaw/openclaw/actions/runs/29123924221/artifacts/8239796389); its checksum is published under the bundles directory.
