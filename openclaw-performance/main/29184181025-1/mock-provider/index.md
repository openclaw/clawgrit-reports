# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260712-072937-8bbe84
- Generated: 2026-07-12T07:31:46.764Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 9
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 787 MB | 806 MB | 808 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 787 MB | 806 MB | 808 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 122 % | 129 % | 130 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 9.4 ms | 9.9 ms | 10 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 789 MB | 792 MB | 793 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 789 MB | 792 MB | 793 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 135 % | 135 % | 135 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 10 ms | 11.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 798 MB | 841 MB | 846 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 141 % | 142 % | 143 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,823 ms | 3,101 ms | 3,132 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,830 ms | 2,848 ms | 2,850 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,799 ms | 3,112 ms | 3,147 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,719 ms | 2,989 ms | 3,019 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: f5a50db5691b828d830bd33b6ac11a0a99f50c05
- Workflow ref: main
- Workflow SHA: f5a50db5691b828d830bd33b6ac11a0a99f50c05
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

The complete Kova bundle remains in [Actions artifact 8257494203](https://github.com/openclaw/openclaw/actions/runs/29184181025/artifacts/8257494203); its checksum is published under the bundles directory.
