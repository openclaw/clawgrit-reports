# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260926-052335-358ecb
- Generated: 2026-09-26T05:25:32.393Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 10,513 ms | 10,513 ms | 10,513 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 10,521 ms | 10,521 ms | 10,521 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 10,359 ms | 10,359 ms | 10,359 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 9,107 ms | 9,107 ms | 9,107 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,218 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 37469917520b379b8cf231cc2f99424242489151
- Workflow ref: main
- Workflow SHA: 37469917520b379b8cf231cc2f99424242489151
- Kova repository: openclaw/Kova
- Kova ref: 14d7413dfc0f2b79c771dad83aca6d99413182bd
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10899302597](https://github.com/openclaw/openclaw/actions/runs/36220583682/artifacts/10899302597); its checksum is published under the bundles directory.
