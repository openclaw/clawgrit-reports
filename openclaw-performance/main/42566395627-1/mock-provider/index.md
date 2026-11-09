# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261109-052008-f17acc
- Generated: 2026-11-09T05:45:52.713Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 3, FAIL: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,571 MB | 1,588 MB | 1,590 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,571 MB | 1,588 MB | 1,590 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 213 % | 229 % | 230 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 40.9 ms | 42 ms | 42.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,446 MB | 1,473 MB | 1,476 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 217 % | 220 % | 221 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,730 ms | 7,734 ms | 7,735 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,680 ms | 6,770 ms | 6,780 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,780 ms | 7,789 ms | 7,790 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 7,433 ms | 7,455 ms | 7,458 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,431 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,615 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,446 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,631 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,476 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,661 | <= 1600 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 9bdea97f3c1589841d1c1cf81a9bea7ae70886aa
- Workflow ref: main
- Workflow SHA: 9bdea97f3c1589841d1c1cf81a9bea7ae70886aa
- Kova repository: openclaw/Kova
- Kova ref: 869493d1be0dcf10b7ddf96371cf35239a9efbd6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13652253894](https://github.com/openclaw/openclaw/actions/runs/42566395627/artifacts/13652253894); its checksum is published under the bundles directory.
