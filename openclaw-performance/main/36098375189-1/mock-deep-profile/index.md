# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260925-052511-4e424a
- Generated: 2026-09-25T05:28:33.536Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 985 MB | 985 MB | 985 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 985 MB | 985 MB | 985 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 240 % | 240 % | 240 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 34.8 ms | 34.8 ms | 34.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 14,917 ms | 14,917 ms | 14,917 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 12,326 ms | 12,326 ms | 12,326 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 15,053 ms | 15,053 ms | 15,053 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 13,388 ms | 13,388 ms | 13,388 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":180.5,"upper":249.3} | <= 200 |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU interval baseline is missing for a late-discovered product process","CPU census lost unobserved process roles before counters could be captured","Product CPU interval or terminal wait accounting is incomplete"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.maxCpuPercent | {"lower":287.6,"upper":350.3} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 15,053 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 2584898818aa7a736a8cbe87b3648f18fd313de0
- Workflow ref: main
- Workflow SHA: 2584898818aa7a736a8cbe87b3648f18fd313de0
- Kova repository: openclaw/Kova
- Kova ref: 14d7413dfc0f2b79c771dad83aca6d99413182bd
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10848705592](https://github.com/openclaw/openclaw/actions/runs/36098375189/artifacts/10848705592); its checksum is published under the bundles directory.
