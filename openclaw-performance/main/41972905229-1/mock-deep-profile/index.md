# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261105-051908-710456
- Generated: 2026-11-05T05:29:57.902Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1, FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,590 MB | 1,590 MB | 1,590 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,590 MB | 1,590 MB | 1,590 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 251 % | 251 % | 251 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 39.2 ms | 39.2 ms | 39.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,933 MB | 1,933 MB | 1,933 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 416 % | 416 % | 416 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 20,243 ms | 20,243 ms | 20,243 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 14,262 ms | 14,262 ms | 14,262 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 20,558 ms | 20,558 ms | 20,558 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 12,820 ms | 12,820 ms | 12,820 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.maxCpuPercent | {"lower":391.4,"upper":471.3} | <= 450 |
| agent-cold-warm-message | mock-openai-provider | agentResponseOk | 0 | true |
| agent-cold-warm-message | mock-openai-provider | agentTurn.responseOk | none | usable assistant response |
| agent-cold-warm-message | mock-openai-provider | agentTurn.expectedTextPresent | none | KOVA_AGENT_OK |
| agent-cold-warm-message | mock-openai-provider | agentProviderRequestMissing | none | provider request during agent command |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 20,558 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | null | finite non-negative turn measurement |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | no-provider-request | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: a8dc255ec8102fb93ab1b16eb0d47a2f95709135
- Workflow ref: main
- Workflow SHA: a8dc255ec8102fb93ab1b16eb0d47a2f95709135
- Kova repository: openclaw/Kova
- Kova ref: 869493d1be0dcf10b7ddf96371cf35239a9efbd6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13391101679](https://github.com/openclaw/openclaw/actions/runs/41972905229/artifacts/13391101679); its checksum is published under the bundles directory.
