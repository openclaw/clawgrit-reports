# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261005-053714-d01089
- Generated: 2026-10-05T05:55:51.184Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,258 MB | 1,277 MB | 1,279 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,258 MB | 1,277 MB | 1,279 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 197 % | 204 % | 205 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 17.4 ms | 19 ms | 19.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,121 MB | 1,125 MB | 1,126 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 198 % | 202 % | 202 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,395 ms | 6,398 ms | 6,399 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,403 ms | 6,408 ms | 6,409 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,216 ms | 6,234 ms | 6,236 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,176 ms | 6,180 ms | 6,181 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,279 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,456 | <= 1440 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,258 | <= 1177 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,241 | <= 1177 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: f27df1d88709bebfb205bc11585ddb8e0b80b1c5
- Workflow ref: main
- Workflow SHA: f27df1d88709bebfb205bc11585ddb8e0b80b1c5
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11327772985](https://github.com/openclaw/openclaw/actions/runs/37268440705/artifacts/11327772985); its checksum is published under the bundles directory.
