# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260823-052000-b0af8b
- Generated: 2026-08-23T05:22:13.331Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1, PASS: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,058 MB | 1,058 MB | 1,058 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,058 MB | 1,058 MB | 1,058 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 146 % | 146 % | 146 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,164 MB | 1,164 MB | 1,164 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 148 % | 148 % | 148 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,657 ms | 5,657 ms | 5,657 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,685 ms | 5,685 ms | 5,685 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,134 ms | 5,134 ms | 5,134 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,032 ms | 5,032 ms | 5,032 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,058 | <= 1050 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 4d696fbe0d2bf53b8f590743a325667ea94f3f41
- Workflow ref: main
- Workflow SHA: 4d696fbe0d2bf53b8f590743a325667ea94f3f41
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9488138431](https://github.com/openclaw/openclaw/actions/runs/32620062599/artifacts/9488138431); its checksum is published under the bundles directory.
