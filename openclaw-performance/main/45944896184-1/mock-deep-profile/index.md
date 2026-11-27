# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261127-052021-e93e31
- Generated: 2026-11-27T05:23:52.541Z
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
- Tested SHA: 9e787b7b0c0adb863497699c483caa2ea5f84f99
- Workflow ref: main
- Workflow SHA: 9e787b7b0c0adb863497699c483caa2ea5f84f99
- Kova repository: openclaw/Kova
- Kova ref: 5f1ac692af2058217c793aa06af9e28dbf46c1bd
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 15174542927](https://github.com/openclaw/openclaw/actions/runs/45944896184/artifacts/15174542927); its checksum is published under the bundles directory.
