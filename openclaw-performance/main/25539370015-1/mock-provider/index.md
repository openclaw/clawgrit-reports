# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-08T055037Z
- Generated: 2026-05-08T05:51:58.769Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/main/25539370015-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 690 MB | 810 MB | 824 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 153 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,532 ms | 3,832 ms | 3,866 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,483 ms | 3,833 ms | 3,872 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,535 ms | 3,725 ms | 3,746 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,361 ms | 3,603 ms | 3,629 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: d29201fe4fc5f0280fe3582fddd3778e4e009995
- Workflow ref: main
- Workflow SHA: d29201fe4fc5f0280fe3582fddd3778e4e009995
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: mock
- Lane model: gpt-5.4
- Lane repeat: 3
- Include filters: scenario:fresh-install scenario:gateway-performance scenario:bundled-plugin-startup scenario:bundled-runtime-deps scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, and CLI startup numbers are in [source/index.md](source/index.md).
