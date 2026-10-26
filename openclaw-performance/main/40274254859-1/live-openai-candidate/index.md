# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261026-052901-836b63
- Generated: 2026-10-26T05:32:13.611Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,487 MB | 1,487 MB | 1,487 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 213 % | 213 % | 213 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 11,524 ms | 11,524 ms | 11,524 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 11,544 ms | 11,544 ms | 11,544 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 11,136 ms | 11,136 ms | 11,136 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 9,910 ms | 9,910 ms | 9,910 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,487 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,671 | <= 1400 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 75a1bcebd6a9b5eae2ca6c1d82bed61507d7d706
- Workflow ref: main
- Workflow SHA: 75a1bcebd6a9b5eae2ca6c1d82bed61507d7d706
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12629717682](https://github.com/openclaw/openclaw/actions/runs/40274254859/artifacts/12629717682); its checksum is published under the bundles directory.
