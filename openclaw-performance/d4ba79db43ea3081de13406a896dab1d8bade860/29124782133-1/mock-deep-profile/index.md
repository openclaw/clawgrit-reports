# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260710-212859-61099f
- Generated: 2026-07-10T21:34:00.048Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 4
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 922 MB | 922 MB | 922 MB |
| fresh-install | fresh | Gateway RSS | 922 MB | 922 MB | 922 MB |
| fresh-install | fresh | Max CPU | 137 % | 137 % | 137 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 939 MB | 939 MB | 939 MB |
| fresh-install | onboarded-user | Gateway RSS | 939 MB | 939 MB | 939 MB |
| fresh-install | onboarded-user | Max CPU | 139 % | 139 % | 139 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 953 MB | 953 MB | 953 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 153 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,155 ms | 4,155 ms | 4,155 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,157 ms | 4,157 ms | 4,157 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,115 ms | 4,115 ms | 4,115 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,594 ms | 3,594 ms | 3,594 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 902 MB | 902 MB | 902 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 902 MB | 902 MB | 902 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 136 % | 136 % | 136 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | peakRssMb | 922 | <= 900 |
| fresh-install | fresh | resourceByRole.gateway.peakRssMb | 922 | <= 800 |
| fresh-install | fresh | resourceByRole.plugin-cli.peakRssMb | 798 | <= 600 |
| fresh-install | fresh | resourceByRole.status-cli.peakRssMb | 808 | <= 500 |
| fresh-install | onboarded-user | peakRssMb | 939 | <= 900 |
| fresh-install | onboarded-user | resourceByRole.gateway.peakRssMb | 939 | <= 800 |
| fresh-install | onboarded-user | resourceByRole.plugin-cli.peakRssMb | 793 | <= 600 |
| fresh-install | onboarded-user | resourceByRole.status-cli.peakRssMb | 802 | <= 500 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 953 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 953 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 953 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | agentResponseOk | 0 | true |
| agent-cold-warm-message | mock-openai-provider | agentTurn.responseOk | none | usable assistant response |
| agent-cold-warm-message | mock-openai-provider | agentTurn.expectedTextPresent | none | KOVA_AGENT_OK |
| agent-cold-warm-message | mock-openai-provider | agentTurn.responseOk | none | usable assistant response |
| agent-cold-warm-message | mock-openai-provider | agentTurn.expectedTextPresent | none | KOVA_AGENT_OK |
| gateway-performance | many-bundled-plugins | peakRssMb | 902 | <= 900 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.peakRssMb | 902 | <= 800 |
| gateway-performance | many-bundled-plugins | resourceByRole.plugin-cli.peakRssMb | 796 | <= 650 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 807 | <= 500 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
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
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8239999494](https://github.com/openclaw/openclaw/actions/runs/29124782133/artifacts/8239999494); its checksum is published under the bundles directory.
