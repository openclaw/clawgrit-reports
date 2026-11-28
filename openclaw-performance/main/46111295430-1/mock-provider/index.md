# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261128-051909-98fa39
- Generated: 2026-11-28T05:22:56.593Z
- Target: local-build:/home/runner/work/openclaw/openclaw
- Statuses: BLOCKED: 6
- Repeat: 3

## Key metrics

- No sampled key metrics were available; inspect the blocking records below.

## Violations

Found 15 violations. Each row shows one example from the Kova report.

| Kind | Metric | Count | Example scenario | State | Actual | Expected |
| --- | --- | ---: | --- | --- | ---: | --- |
| evidence | targetRuntime.nodeVersion | 3 | gateway-performance | many-bundled-plugins | missing-service-identity | Gateway runtime identity with matching OCM service PID and port |
| resource | resourceByRole.gateway.missing | 3 | gateway-performance | many-bundled-plugins | missing | configured primary resource role observed in product samples |
| diagnostics | openclawTimelineAvailable | 6 | gateway-performance | many-bundled-plugins | 0 | available |
| resource | resourceByRole.agent-process.missing | 3 | agent-cold-warm-message | mock-openai-provider | missing | configured primary resource role observed in product samples |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |
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
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 15249827841](https://github.com/openclaw/openclaw/actions/runs/46111295430/artifacts/15249827841); its checksum is published under the bundles directory.
