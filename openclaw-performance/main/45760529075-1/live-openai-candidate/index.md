# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261126-052006-86895f
- Generated: 2026-11-26T05:24:05.776Z
- Target: local-build:/home/runner/work/openclaw/openclaw
- Statuses: BLOCKED: 1
- Repeat: 1

## Key metrics

- No sampled key metrics were available; inspect the blocking records below.

## Violations

Found 2 violations. Each row shows one example from the Kova report.

| Kind | Metric | Count | Example scenario | State | Actual | Expected |
| --- | --- | ---: | --- | --- | ---: | --- |
| resource | resourceByRole.agent-process.missing | 1 | agent-cold-warm-message | mock-openai-provider | missing | configured primary resource role observed in product samples |
| diagnostics | openclawTimelineAvailable | 1 | agent-cold-warm-message | mock-openai-provider | 0 | available |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: f861b120522be3db5c72f1a5200fb6062a95a17f
- Workflow ref: main
- Workflow SHA: f861b120522be3db5c72f1a5200fb6062a95a17f
- Kova repository: openclaw/Kova
- Kova ref: 5f1ac692af2058217c793aa06af9e28dbf46c1bd
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 15089618799](https://github.com/openclaw/openclaw/actions/runs/45760529075/artifacts/15089618799); its checksum is published under the bundles directory.
