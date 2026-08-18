# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260818-052001-46b32b
- Generated: 2026-08-18T05:22:05.545Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 870 MB | 870 MB | 870 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 157 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,252 ms | 5,252 ms | 5,252 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,266 ms | 5,266 ms | 5,266 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,988 ms | 4,988 ms | 4,988 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,029 ms | 4,029 ms | 4,029 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 2eec0470652d6d6a559c355a9c517d45f0c066ae
- Workflow ref: main
- Workflow SHA: 2eec0470652d6d6a559c355a9c517d45f0c066ae
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9312063347](https://github.com/openclaw/openclaw/actions/runs/32102422776/artifacts/9312063347); its checksum is published under the bundles directory.
