# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261008-052837-5b15b5
- Generated: 2026-10-08T05:31:25.674Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,179 MB | 1,179 MB | 1,179 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 184 % | 184 % | 184 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 21,005 ms | 21,005 ms | 21,005 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 21,038 ms | 21,038 ms | 21,038 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 20,380 ms | 20,380 ms | 20,380 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 19,162 ms | 19,162 ms | 19,162 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,179 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 19,197 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 18,506 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 20,380 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 19,197 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 18,506 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 6dd7b2e00b3edaf07383052660f2cb8cddf8575d
- Workflow ref: main
- Workflow SHA: 6dd7b2e00b3edaf07383052660f2cb8cddf8575d
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11530426787](https://github.com/openclaw/openclaw/actions/runs/37732439164/artifacts/11530426787); its checksum is published under the bundles directory.
