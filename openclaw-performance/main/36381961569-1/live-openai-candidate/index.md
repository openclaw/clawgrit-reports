# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260928-053549-28ddec
- Generated: 2026-09-28T05:37:48.701Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,072 MB | 1,072 MB | 1,072 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 205 % | 205 % | 205 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 9,965 ms | 9,965 ms | 9,965 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 9,988 ms | 9,988 ms | 9,988 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 9,537 ms | 9,537 ms | 9,537 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 8,455 ms | 8,455 ms | 8,455 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,072 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 6bfe76fcd7d31f64629c6889ce34e54368221d51
- Workflow ref: main
- Workflow SHA: 6bfe76fcd7d31f64629c6889ce34e54368221d51
- Kova repository: openclaw/Kova
- Kova ref: 17304ab9d7aa283b78b1771a2585518fa5961048
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10953282149](https://github.com/openclaw/openclaw/actions/runs/36381961569/artifacts/10953282149); its checksum is published under the bundles directory.
