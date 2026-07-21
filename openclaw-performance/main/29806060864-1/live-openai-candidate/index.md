# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260721-060930-60c789
- Generated: 2026-07-21T06:10:35.887Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: INCOMPLETE: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 985 MB | 985 MB | 985 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 155 % | 155 % | 155 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,471 ms | 6,471 ms | 6,471 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,457 ms | 6,457 ms | 6,457 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,472 ms | 6,472 ms | 6,472 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,480 ms | 4,480 ms | 4,480 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | INCOMPLETE |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: b63ccef4099be8dcf8427ae95270165e18378979
- Workflow ref: main
- Workflow SHA: b63ccef4099be8dcf8427ae95270165e18378979
- Kova repository: openclaw/Kova
- Kova ref: f3d037b5b8aacd6adf8ef1dd2ea4c1d778ec7c6c
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8485565635](https://github.com/openclaw/openclaw/actions/runs/29806060864/artifacts/8485565635); its checksum is published under the bundles directory.
