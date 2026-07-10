# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-2026-07-10T144424Z
- Generated: 2026-07-10T14:46:48.513Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 867 MB | 867 MB | 867 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 142 % | 142 % | 142 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,030 ms | 5,030 ms | 5,030 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,031 ms | 5,031 ms | 5,031 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,001 ms | 5,001 ms | 5,001 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,931 ms | 2,931 ms | 2,931 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: b2c1db4b5eb601c498f36f649dda1155448476f6
- Tested SHA: b2c1db4b5eb601c498f36f649dda1155448476f6
- Workflow ref: release-ci/perf-b2c1db4b5eb6-20260710144320
- Workflow SHA: b2c1db4b5eb601c498f36f649dda1155448476f6
- Kova repository: openclaw/Kova
- Kova ref: a2dd84e7d65507e614afaff850d3932d18c859b6
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.5
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message
