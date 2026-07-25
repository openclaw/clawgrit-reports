# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260725-060201-607986
- Generated: 2026-07-25T06:03:09.695Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,009 MB | 1,009 MB | 1,009 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 152 % | 152 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 8,223 ms | 8,223 ms | 8,223 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 8,189 ms | 8,189 ms | 8,189 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 8,225 ms | 8,225 ms | 8,225 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,408 ms | 5,408 ms | 5,408 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,009 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,009 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,009 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: bdd5653c3ed9772ba0b1501955149988a43fd78a
- Workflow ref: main
- Workflow SHA: bdd5653c3ed9772ba0b1501955149988a43fd78a
- Kova repository: openclaw/Kova
- Kova ref: 1bf080f6dbf8800a3187591493f2551824e4ccc7
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8616290981](https://github.com/openclaw/openclaw/actions/runs/30146777206/artifacts/8616290981); its checksum is published under the bundles directory.
