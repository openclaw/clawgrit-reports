# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261106-051816-ce2fc9
- Generated: 2026-11-06T05:21:51.384Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 489 MB | 489 MB | 489 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 144 % | 144 % | 144 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,833 ms | 2,833 ms | 2,833 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,833 ms | 2,833 ms | 2,833 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | agentResponseOk | 0 | true |
| agent-cold-warm-message | mock-openai-provider | agentTurn.responseOk | none | usable assistant response |
| agent-cold-warm-message | mock-openai-provider | agentTurn.expectedTextPresent | none | KOVA_AGENT_OK |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | null | finite non-negative turn measurement |
| agent-cold-warm-message | mock-openai-provider | providerFinalMs | null | finite non-negative turn measurement |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | null | finite non-negative turn measurement |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: a04f6a382e73a876d0cdc4ee7cc8f0eeba93d5df
- Workflow ref: main
- Workflow SHA: a04f6a382e73a876d0cdc4ee7cc8f0eeba93d5df
- Kova repository: openclaw/Kova
- Kova ref: 869493d1be0dcf10b7ddf96371cf35239a9efbd6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13479232730](https://github.com/openclaw/openclaw/actions/runs/42167359268/artifacts/13479232730); its checksum is published under the bundles directory.
