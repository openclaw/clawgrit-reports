# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260718-055410-b796af
- Generated: 2026-07-18T05:55:09.069Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: INCOMPLETE: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 983 MB | 983 MB | 983 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 163 % | 163 % | 163 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,970 ms | 4,970 ms | 4,970 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,973 ms | 4,973 ms | 4,973 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,913 ms | 4,913 ms | 4,913 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,455 ms | 3,455 ms | 3,455 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | INCOMPLETE |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 931ac3e2b5f15cc25170162304f531cf23979c82
- Workflow ref: main
- Workflow SHA: 931ac3e2b5f15cc25170162304f531cf23979c82
- Kova repository: openclaw/Kova
- Kova ref: f3d037b5b8aacd6adf8ef1dd2ea4c1d778ec7c6c
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8426148081](https://github.com/openclaw/openclaw/actions/runs/29633039110/artifacts/8426148081); its checksum is published under the bundles directory.
