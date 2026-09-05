# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260905-052250-a4c08f
- Generated: 2026-09-05T05:24:17.640Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 638 MB | 638 MB | 638 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 127 % | 127 % | 127 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,749 ms | 4,749 ms | 4,749 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,138 ms | 4,138 ms | 4,138 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,781 ms | 4,781 ms | 4,781 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 1,823 ms | 1,823 ms | 1,823 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | providerFinalMs | 3,013 | <= 3000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 6df6aed680f81967f11e7598d08116cc6c015ba0
- Workflow ref: main
- Workflow SHA: 6df6aed680f81967f11e7598d08116cc6c015ba0
- Kova repository: openclaw/Kova
- Kova ref: 81919463ef9620722373c813192c688573f2b533
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9963670817](https://github.com/openclaw/openclaw/actions/runs/33946961918/artifacts/9963670817); its checksum is published under the bundles directory.
