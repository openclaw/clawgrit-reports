# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260712-064713-0281e4
- Generated: 2026-07-12T06:48:08.841Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 636 MB | 636 MB | 636 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 140 % | 140 % | 140 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,588 ms | 2,588 ms | 2,588 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,588 ms | 2,588 ms | 2,588 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | missingDependencyErrors | 2 | <= 0 |
| agent-cold-warm-message | mock-openai-provider | agentResponseOk | 0 | true |
| agent-cold-warm-message | mock-openai-provider | agentTurn.responseOk | none | usable assistant response |
| agent-cold-warm-message | mock-openai-provider | agentTurn.expectedTextPresent | none | KOVA_AGENT_OK |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 8d39c1baa52439c339a2b27f3fa4b6df43775eac
- Workflow ref: main
- Workflow SHA: 8d39c1baa52439c339a2b27f3fa4b6df43775eac
- Kova repository: openclaw/Kova
- Kova ref: 2b02b7d33418db0c6952c4cf8fe8a608e7964859
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8257103923](https://github.com/openclaw/openclaw/actions/runs/29183159716/artifacts/8257103923); its checksum is published under the bundles directory.
