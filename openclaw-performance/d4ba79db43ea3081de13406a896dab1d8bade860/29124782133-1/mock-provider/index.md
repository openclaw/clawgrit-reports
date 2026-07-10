# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260710-212909-c55867
- Generated: 2026-07-10T21:41:04.990Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 13, PASS: 5
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 733 MB | 763 MB | 766 MB |
| fresh-install | fresh | Gateway RSS | 733 MB | 763 MB | 766 MB |
| fresh-install | fresh | Max CPU | 132 % | 148 % | 150 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 730 MB | 773 MB | 778 MB |
| fresh-install | onboarded-user | Gateway RSS | 730 MB | 773 MB | 778 MB |
| fresh-install | onboarded-user | Max CPU | 66.6 % | 66.6 % | 66.6 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 657 MB | 681 MB | 684 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 657 MB | 681 MB | 684 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 85.7 % | 119 % | 123 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Primary RSS | 690 MB | 747 MB | 753 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 690 MB | 747 MB | 753 MB |
| bundled-plugin-startup | fresh | Max CPU | 127 % | 130 % | 130 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 719 MB | 806 MB | 816 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 142 % | 144 % | 144 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,130 ms | 3,144 ms | 3,145 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,017 ms | 3,148 ms | 3,162 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,935 ms | 3,116 ms | 3,136 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,930 ms | 2,974 ms | 2,979 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 738 MB | 768 MB | 771 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 738 MB | 768 MB | 771 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 48.8 % | 76.9 % | 80 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | resourceByRole.plugin-cli.peakRssMb | 707 | <= 600 |
| fresh-install | fresh | resourceByRole.status-cli.peakRssMb | 747 | <= 500 |
| fresh-install | fresh | resourceByRole.plugin-cli.peakRssMb | 646 | <= 600 |
| fresh-install | fresh | finalGatewayState | stopped | running |
| fresh-install | fresh | resourceByRole.plugin-cli.peakRssMb | 740 | <= 600 |
| fresh-install | fresh | resourceByRole.status-cli.peakRssMb | 735 | <= 500 |
| fresh-install | fresh | finalGatewayState | stopped | running |
| fresh-install | onboarded-user | resourceByRole.plugin-cli.peakRssMb | 663 | <= 600 |
| fresh-install | onboarded-user | resourceByRole.status-cli.peakRssMb | 604 | <= 500 |
| fresh-install | onboarded-user | finalGatewayState | stopped | running |
| fresh-install | onboarded-user | resourceByRole.plugin-cli.peakRssMb | 695 | <= 600 |
| fresh-install | onboarded-user | resourceByRole.status-cli.peakRssMb | 540 | <= 500 |
| fresh-install | onboarded-user | finalGatewayState | stopped | running |
| fresh-install | onboarded-user | resourceByRole.plugin-cli.peakRssMb | 704 | <= 600 |
| fresh-install | onboarded-user | resourceByRole.status-cli.peakRssMb | 576 | <= 500 |
| fresh-install | onboarded-user | finalGatewayState | stopped | running |
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
| bundled-runtime-deps | missing-plugin-index | PASS |  |
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
- Tested ref: d4ba79db43ea3081de13406a896dab1d8bade860
- Tested SHA: d4ba79db43ea3081de13406a896dab1d8bade860
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

The complete Kova bundle remains in [Actions artifact 8240108825](https://github.com/openclaw/openclaw/actions/runs/29124782133/artifacts/8240108825); its checksum is published under the bundles directory.
