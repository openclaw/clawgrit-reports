# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260723-061032-85bc33
- Generated: 2026-07-23T06:11:10.115Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1
- Repeat: 1

## Key metrics

- No sampled key metrics were available; inspect the blocking records below.

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.missing | missing | configured primary resource role observed in product samples |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 07f671724cfe691f368f3e2595d854143ee7a801
- Workflow ref: main
- Workflow SHA: 07f671724cfe691f368f3e2595d854143ee7a801
- Kova repository: openclaw/Kova
- Kova ref: 1bf080f6dbf8800a3187591493f2551824e4ccc7
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8554370632](https://github.com/openclaw/openclaw/actions/runs/29984202055/artifacts/8554370632); its checksum is published under the bundles directory.
