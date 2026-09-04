# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260904-052919-6cfe52
- Generated: 2026-09-04T05:30:51.314Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 542 MB | 542 MB | 542 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 129 % | 129 % | 129 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,070 ms | 4,070 ms | 4,070 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,077 ms | 4,077 ms | 4,077 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,929 ms | 3,929 ms | 3,929 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 1,917 ms | 1,917 ms | 1,917 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: e5d413f7e54a85f0a365ddcf36bd1ba23afcb212
- Workflow ref: main
- Workflow SHA: e5d413f7e54a85f0a365ddcf36bd1ba23afcb212
- Kova repository: openclaw/Kova
- Kova ref: 81919463ef9620722373c813192c688573f2b533
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9924822876](https://github.com/openclaw/openclaw/actions/runs/33840244800/artifacts/9924822876); its checksum is published under the bundles directory.
