# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260710-180612-91f1fa
- Generated: 2026-07-10T18:10:37.323Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 4
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 917 MB | 917 MB | 917 MB |
| fresh-install | fresh | Gateway RSS | 917 MB | 917 MB | 917 MB |
| fresh-install | fresh | Max CPU | 139 % | 139 % | 139 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 948 MB | 948 MB | 948 MB |
| fresh-install | onboarded-user | Gateway RSS | 948 MB | 948 MB | 948 MB |
| fresh-install | onboarded-user | Max CPU | 143 % | 143 % | 143 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 965 MB | 965 MB | 965 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 146 % | 146 % | 146 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,142 ms | 5,142 ms | 5,142 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,491 ms | 4,491 ms | 4,491 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,176 ms | 5,176 ms | 5,176 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,479 ms | 4,479 ms | 4,479 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 986 MB | 986 MB | 986 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 986 MB | 986 MB | 986 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 137 % | 137 % | 137 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | peakRssMb | 917 | <= 900 |
| fresh-install | fresh | resourceByRole.gateway.peakRssMb | 917 | <= 800 |
| fresh-install | fresh | resourceByRole.plugin-cli.peakRssMb | 798 | <= 600 |
| fresh-install | fresh | resourceByRole.status-cli.peakRssMb | 794 | <= 500 |
| fresh-install | onboarded-user | peakRssMb | 948 | <= 900 |
| fresh-install | onboarded-user | resourceByRole.gateway.peakRssMb | 948 | <= 800 |
| fresh-install | onboarded-user | resourceByRole.plugin-cli.peakRssMb | 800 | <= 600 |
| fresh-install | onboarded-user | resourceByRole.status-cli.peakRssMb | 831 | <= 500 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 965 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 965 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 965 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | agentResponseOk | 0 | true |
| agent-cold-warm-message | mock-openai-provider | agentTurn.responseOk | none | usable assistant response |
| agent-cold-warm-message | mock-openai-provider | agentTurn.expectedTextPresent | none | KOVA_AGENT_OK |
| agent-cold-warm-message | mock-openai-provider | agentTurn.responseOk | none | usable assistant response |
| agent-cold-warm-message | mock-openai-provider | agentTurn.expectedTextPresent | none | KOVA_AGENT_OK |
| gateway-performance | many-bundled-plugins | peakRssMb | 986 | <= 900 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.peakRssMb | 986 | <= 800 |
| gateway-performance | many-bundled-plugins | resourceByRole.plugin-cli.peakRssMb | 780 | <= 650 |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 783 | <= 500 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
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
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8235739223](https://github.com/openclaw/openclaw/actions/runs/29113285411/artifacts/8235739223); its checksum is published under the bundles directory.
