# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261110-051847-79a183
- Generated: 2026-11-10T05:32:14.501Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,485 MB | 1,485 MB | 1,485 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,485 MB | 1,485 MB | 1,485 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 231 % | 231 % | 231 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 37.5 ms | 37.5 ms | 37.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 2,011 MB | 2,011 MB | 2,011 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 327 % | 327 % | 327 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 20,755 ms | 20,755 ms | 20,755 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 18,713 ms | 18,713 ms | 18,713 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 20,862 ms | 20,862 ms | 20,862 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 18,863 ms | 18,863 ms | 18,863 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":219.8,"upper":305.8} | <= 250 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 20,862 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 8aa3ef4425c14dbfd32cc2ffb912fa4ea3dec646
- Workflow ref: main
- Workflow SHA: 8aa3ef4425c14dbfd32cc2ffb912fa4ea3dec646
- Kova repository: openclaw/Kova
- Kova ref: 869493d1be0dcf10b7ddf96371cf35239a9efbd6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13737973927](https://github.com/openclaw/openclaw/actions/runs/42761036365/artifacts/13737973927); its checksum is published under the bundles directory.
