# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261103-051853-dce54c
- Generated: 2026-11-03T05:28:33.676Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,635 MB | 1,635 MB | 1,635 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,635 MB | 1,635 MB | 1,635 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 221 % | 221 % | 221 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 37 ms | 37 ms | 37 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,060 MB | 1,060 MB | 1,060 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 206 % | 206 % | 206 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 12,893 ms | 12,893 ms | 12,893 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 12,893 ms | 12,893 ms | 12,893 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":199.8,"upper":328} | <= 250 |
| agent-cold-warm-message | mock-openai-provider | agentResponseOk | 0 | true |
| agent-cold-warm-message | mock-openai-provider | agentTurn.responseOk | none | usable assistant response |
| agent-cold-warm-message | mock-openai-provider | agentTurn.expectedTextPresent | none | KOVA_AGENT_OK |
| agent-cold-warm-message | mock-openai-provider | agentProviderRequestMissing | none | provider request during agent command |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | null | finite non-negative turn measurement |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | no-provider-request | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: e375530e380bc457d33b2668e34de425e612d311
- Workflow ref: main
- Workflow SHA: e375530e380bc457d33b2668e34de425e612d311
- Kova repository: openclaw/Kova
- Kova ref: 869493d1be0dcf10b7ddf96371cf35239a9efbd6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13207061808](https://github.com/openclaw/openclaw/actions/runs/41582891298/artifacts/13207061808); its checksum is published under the bundles directory.
