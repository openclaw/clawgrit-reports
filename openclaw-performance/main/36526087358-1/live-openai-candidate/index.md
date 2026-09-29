# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260929-052700-d82342
- Generated: 2026-09-29T05:29:32.006Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,349 MB | 1,349 MB | 1,349 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 186 % | 186 % | 186 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 11,407 ms | 11,407 ms | 11,407 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 11,421 ms | 11,421 ms | 11,421 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 11,150 ms | 11,150 ms | 11,150 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 9,821 ms | 9,821 ms | 9,821 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,349 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,446 | <= 1400 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: ec101d561e2c852a7e3c419c1df9a5f0f620861c
- Workflow ref: main
- Workflow SHA: ec101d561e2c852a7e3c419c1df9a5f0f620861c
- Kova repository: openclaw/Kova
- Kova ref: 4b8b1681446b868a44193ed6e97253a6c8bcbbbf
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11013898758](https://github.com/openclaw/openclaw/actions/runs/36526087358/artifacts/11013898758); its checksum is published under the bundles directory.
