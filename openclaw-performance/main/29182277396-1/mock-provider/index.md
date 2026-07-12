# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260712-061203-891ac9
- Generated: 2026-07-12T06:14:45.861Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 8, FAIL: 1
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 789 MB | 799 MB | 800 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 789 MB | 799 MB | 800 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 135 % | 135 % | 135 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 9.5 ms | 10.5 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 823 MB | 826 MB | 827 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 823 MB | 826 MB | 827 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 146 % | 285 % | 300 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 10 ms | 22.5 ms | 23.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 773 MB | 809 MB | 813 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 143 % | 144 % | 145 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,644 ms | 3,943 ms | 3,976 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,603 ms | 3,906 ms | 3,940 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,649 ms | 3,945 ms | 3,978 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,522 ms | 3,786 ms | 3,815 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-runtime-deps | missing-plugin-index | resourceByRole.gateway.maxCpuPercent | 300 | <= 250 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 2a02ab6bbe6ada0b5d41204113651453faae8bed
- Workflow ref: main
- Workflow SHA: 2a02ab6bbe6ada0b5d41204113651453faae8bed
- Kova repository: openclaw/Kova
- Kova ref: 2b02b7d33418db0c6952c4cf8fe8a608e7964859
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8256838031](https://github.com/openclaw/openclaw/actions/runs/29182277396/artifacts/8256838031); its checksum is published under the bundles directory.
