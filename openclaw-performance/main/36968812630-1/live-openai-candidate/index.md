# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261002-052638-e0c1ea
- Generated: 2026-10-02T05:28:47.068Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,114 MB | 1,114 MB | 1,114 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 205 % | 205 % | 205 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 9,891 ms | 9,891 ms | 9,891 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 9,923 ms | 9,923 ms | 9,923 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 9,274 ms | 9,274 ms | 9,274 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 8,107 ms | 8,107 ms | 8,107 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: b21e522e2ad16371111ad06408a38742fd594f29
- Workflow ref: main
- Workflow SHA: b21e522e2ad16371111ad06408a38742fd594f29
- Kova repository: openclaw/Kova
- Kova ref: 4b8b1681446b868a44193ed6e97253a6c8bcbbbf
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11210239253](https://github.com/openclaw/openclaw/actions/runs/36968812630/artifacts/11210239253); its checksum is published under the bundles directory.
