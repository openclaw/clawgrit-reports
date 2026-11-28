# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261128-051902-a53878
- Generated: 2026-11-28T05:22:45.296Z
- Target: local-build:/home/runner/work/openclaw/openclaw
- Statuses: BLOCKED: 2
- Repeat: 1

## Key metrics

- No sampled key metrics were available; inspect the blocking records below.

## Violations

Found 5 violations. Each row shows one example from the Kova report.

| Kind | Metric | Count | Example scenario | State | Actual | Expected |
| --- | --- | ---: | --- | --- | ---: | --- |
| evidence | targetRuntime.nodeVersion | 1 | gateway-performance | many-bundled-plugins | missing-service-identity | Gateway runtime identity with matching OCM service PID and port |
| resource | resourceByRole.gateway.missing | 1 | gateway-performance | many-bundled-plugins | missing | configured primary resource role observed in product samples |
| diagnostics | openclawTimelineAvailable | 2 | gateway-performance | many-bundled-plugins | 0 | available |
| resource | resourceByRole.agent-process.missing | 1 | agent-cold-warm-message | mock-openai-provider | missing | configured primary resource role observed in product samples |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 672a898d07e41f554b34c47c377bf6518af8b964
- Workflow ref: main
- Workflow SHA: 672a898d07e41f554b34c47c377bf6518af8b964
- Kova repository: openclaw/Kova
- Kova ref: 5f1ac692af2058217c793aa06af9e28dbf46c1bd
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 15249494683](https://github.com/openclaw/openclaw/actions/runs/46111295430/artifacts/15249494683); its checksum is published under the bundles directory.
