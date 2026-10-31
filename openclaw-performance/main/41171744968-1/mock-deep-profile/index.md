# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261031-051609-bdc50f
- Generated: 2026-10-31T05:25:50.643Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,605 MB | 1,605 MB | 1,605 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,605 MB | 1,605 MB | 1,605 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 290 % | 290 % | 290 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 43.4 ms | 43.4 ms | 43.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,899 MB | 1,899 MB | 1,899 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 316 % | 316 % | 316 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 20,404 ms | 20,404 ms | 20,404 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 13,378 ms | 13,378 ms | 13,378 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 20,774 ms | 20,774 ms | 20,774 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 11,473 ms | 11,473 ms | 11,473 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":198.6,"upper":309.8} | <= 250 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | {"lower":292.8,"upper":316} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | agentResponseOk | 0 | true |
| agent-cold-warm-message | mock-openai-provider | agentTurn.responseOk | none | usable assistant response |
| agent-cold-warm-message | mock-openai-provider | agentTurn.expectedTextPresent | none | KOVA_AGENT_OK |
| agent-cold-warm-message | mock-openai-provider | agentProviderRequestMissing | none | provider request during agent command |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 20,774 | <= 15000 |
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
- Tested SHA: b924498923dff81a02fb8a89d57828717c6e160d
- Workflow ref: main
- Workflow SHA: b924498923dff81a02fb8a89d57828717c6e160d
- Kova repository: openclaw/Kova
- Kova ref: 7bd7c2f9531476bf86b9bd13c63f748182c727bb
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13031436754](https://github.com/openclaw/openclaw/actions/runs/41171744968/artifacts/13031436754); its checksum is published under the bundles directory.
