# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260925-052511-89a13e
- Generated: 2026-09-25T05:27:23.143Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 15,241 ms | 15,241 ms | 15,241 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 15,408 ms | 15,408 ms | 15,408 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 12,065 ms | 12,065 ms | 12,065 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 13,648 ms | 13,648 ms | 13,648 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,275 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 13,827 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,253 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 13,827 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,253 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
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
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10848232876](https://github.com/openclaw/openclaw/actions/runs/36098375189/artifacts/10848232876); its checksum is published under the bundles directory.
