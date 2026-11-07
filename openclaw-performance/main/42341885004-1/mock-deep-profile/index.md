# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261107-051642-ebbc7e
- Generated: 2026-11-07T05:29:38.101Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 1, FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,518 MB | 1,518 MB | 1,518 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,518 MB | 1,518 MB | 1,518 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 234 % | 234 % | 234 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 46.5 ms | 46.5 ms | 46.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,983 MB | 1,983 MB | 1,983 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 327 % | 327 % | 327 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 18,629 ms | 18,629 ms | 18,629 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 17,347 ms | 17,347 ms | 17,347 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 18,696 ms | 18,696 ms | 18,696 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 16,905 ms | 16,905 ms | 16,905 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.maxCpuPercent | {"lower":211.9,"upper":309.7} | <= 250 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 18,696 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 06b7e2405b399582942e462fcf89853ac4d4b6b5
- Workflow ref: main
- Workflow SHA: 06b7e2405b399582942e462fcf89853ac4d4b6b5
- Kova repository: openclaw/Kova
- Kova ref: 869493d1be0dcf10b7ddf96371cf35239a9efbd6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13562187592](https://github.com/openclaw/openclaw/actions/runs/42341885004/artifacts/13562187592); its checksum is published under the bundles directory.
