# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261124-051936-5aa4ac
- Generated: 2026-11-24T05:23:09.951Z
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
- Tested SHA: 636b4b8636baf55f13de3e2fd865cb7eba60c548
- Workflow ref: main
- Workflow SHA: 636b4b8636baf55f13de3e2fd865cb7eba60c548
- Kova repository: openclaw/Kova
- Kova ref: 7c162a3276a31fbbb60c362d94124b6cad5187ca
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 14891789433](https://github.com/openclaw/openclaw/actions/runs/45332186611/artifacts/14891789433); its checksum is published under the bundles directory.
