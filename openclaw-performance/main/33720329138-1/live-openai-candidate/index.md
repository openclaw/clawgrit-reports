# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260903-054844-f1529d
- Generated: 2026-09-03T05:50:16.351Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 548 MB | 548 MB | 548 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 128 % | 128 % | 128 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,676 ms | 4,676 ms | 4,676 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,730 ms | 4,730 ms | 4,730 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,657 ms | 3,657 ms | 3,657 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,037 ms | 2,037 ms | 2,037 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: a828190b2953483a4a181ff5d23c283e92713d47
- Workflow ref: main
- Workflow SHA: a828190b2953483a4a181ff5d23c283e92713d47
- Kova repository: openclaw/Kova
- Kova ref: 81919463ef9620722373c813192c688573f2b533
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9880057027](https://github.com/openclaw/openclaw/actions/runs/33720329138/artifacts/9880057027); its checksum is published under the bundles directory.
