# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260927-052421-d12695
- Generated: 2026-09-27T05:26:38.155Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 10,800 ms | 10,800 ms | 10,800 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 10,831 ms | 10,831 ms | 10,831 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 10,204 ms | 10,204 ms | 10,204 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 9,357 ms | 9,357 ms | 9,357 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,192 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 13829435c8a876924ba0f57006dca10c365758b7
- Workflow ref: main
- Workflow SHA: 13829435c8a876924ba0f57006dca10c365758b7
- Kova repository: openclaw/Kova
- Kova ref: 14d7413dfc0f2b79c771dad83aca6d99413182bd
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10924945284](https://github.com/openclaw/openclaw/actions/runs/36297030444/artifacts/10924945284); its checksum is published under the bundles directory.
