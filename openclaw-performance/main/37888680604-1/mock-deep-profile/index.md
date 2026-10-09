# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261009-053020-24df8c
- Generated: 2026-10-09T05:40:40.332Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,450 MB | 1,450 MB | 1,450 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,450 MB | 1,450 MB | 1,450 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 231 % | 231 % | 231 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 29.6 ms | 29.6 ms | 29.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,865 MB | 1,865 MB | 1,865 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 327 % | 327 % | 327 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 21,658 ms | 21,658 ms | 21,658 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 20,300 ms | 20,300 ms | 20,300 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 21,729 ms | 21,729 ms | 21,729 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 19,761 ms | 19,761 ms | 19,761 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,450 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,737 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 21,729 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: e825e5918c2e98aaaa98c5a84417635256ef2025
- Workflow ref: main
- Workflow SHA: e825e5918c2e98aaaa98c5a84417635256ef2025
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11597359611](https://github.com/openclaw/openclaw/actions/runs/37888680604/artifacts/11597359611); its checksum is published under the bundles directory.
