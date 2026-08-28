# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260828-074950-a22e4b
- Generated: 2026-08-28T07:53:32.976Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 590 MB | 591 MB | 591 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 590 MB | 591 MB | 591 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 133 % | 138 % | 138 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 68 ms | 70.5 ms | 70.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 474 MB | 518 MB | 523 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 129 % | 131 % | 131 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,076 ms | 3,102 ms | 3,105 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,101 ms | 3,124 ms | 3,127 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,594 ms | 2,671 ms | 2,679 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,818 ms | 2,842 ms | 2,845 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: dfa21af9d7b92283a44c89084f911b4f4cf7a3bc
- Workflow ref: main
- Workflow SHA: dfa21af9d7b92283a44c89084f911b4f4cf7a3bc
- Kova repository: openclaw/Kova
- Kova ref: 1fe2f4081877bb12b7f7ed355349f98b8a0a6882
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9678523066](https://github.com/openclaw/openclaw/actions/runs/33152881591/artifacts/9678523066); its checksum is published under the bundles directory.
