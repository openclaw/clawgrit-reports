# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261019-052635-d934df
- Generated: 2026-10-19T05:36:31.509Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,774 MB | 1,774 MB | 1,774 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,774 MB | 1,774 MB | 1,774 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 271 % | 271 % | 271 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 48 ms | 48 ms | 48 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,575 MB | 1,575 MB | 1,575 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 335 % | 335 % | 335 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 13,927 ms | 13,927 ms | 13,927 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 13,927 ms | 13,927 ms | 13,927 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,774 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,991 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | missingDependencyErrors | 1 | <= 0 |
| agent-cold-warm-message | mock-openai-provider | agentResponseOk | 0 | true |
| agent-cold-warm-message | mock-openai-provider | agentTurn.responseOk | none | usable assistant response |
| agent-cold-warm-message | mock-openai-provider | agentTurn.expectedTextPresent | none | KOVA_AGENT_OK |
| agent-cold-warm-message | mock-openai-provider | agentProviderRequestMissing | none | provider request during agent command |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | null | finite non-negative turn measurement |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | no-provider-request | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: b0055b677826295be67e67cf30d8b629b351d7fb
- Workflow ref: main
- Workflow SHA: b0055b677826295be67e67cf30d8b629b351d7fb
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12165361674](https://github.com/openclaw/openclaw/actions/runs/39204396990/artifacts/12165361674); its checksum is published under the bundles directory.
