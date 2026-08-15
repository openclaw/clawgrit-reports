# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260815-051931-0b7995
- Generated: 2026-08-15T05:19:31.441Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1
- Repeat: 1

## Key metrics

- No sampled key metrics were available; inspect the blocking records below.

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 5a5bf4d5241aa075f44ff9dea8001347aa271b15
- Workflow ref: main
- Workflow SHA: 5a5bf4d5241aa075f44ff9dea8001347aa271b15
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9242214211](https://github.com/openclaw/openclaw/actions/runs/31866632078/artifacts/9242214211); its checksum is published under the bundles directory.
