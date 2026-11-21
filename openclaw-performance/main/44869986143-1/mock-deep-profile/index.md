# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261121-051723-3b386a
- Generated: 2026-11-21T05:20:58.599Z
- Target: local-build:/home/runner/work/openclaw/openclaw
- Statuses: BLOCKED: 2
- Repeat: 1

## Key metrics

- No sampled key metrics were available; inspect the blocking records below.

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | targetRuntime.nodeVersion | missing-service-identity | Gateway runtime identity with matching OCM service PID and port |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| gateway-performance | many-bundled-plugins | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: e309df612ed3986a3eb2aa139ddfb35b31a16143
- Workflow ref: main
- Workflow SHA: e309df612ed3986a3eb2aa139ddfb35b31a16143
- Kova repository: openclaw/Kova
- Kova ref: 7c162a3276a31fbbb60c362d94124b6cad5187ca
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 14693901205](https://github.com/openclaw/openclaw/actions/runs/44869986143/artifacts/14693901205); its checksum is published under the bundles directory.
