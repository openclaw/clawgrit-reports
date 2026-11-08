# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261108-051725-9c96a0
- Generated: 2026-11-08T05:43:17.328Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 3, FAIL: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,605 MB | 1,613 MB | 1,613 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,605 MB | 1,613 MB | 1,613 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 200 % | 211 % | 212 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 45 ms | 45.5 ms | 45.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,470 MB | 1,480 MB | 1,482 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 224 % | 233 % | 234 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 8,586 ms | 8,879 ms | 8,911 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 7,886 ms | 7,994 ms | 8,006 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 8,617 ms | 8,930 ms | 8,965 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 8,284 ms | 8,558 ms | 8,588 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,439 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,623 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,482 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,665 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,470 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,655 | <= 1600 |

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
- Tested SHA: d43ff5a7e42ae141d1ec2eb2ade3216bfb31e916
- Workflow ref: main
- Workflow SHA: d43ff5a7e42ae141d1ec2eb2ade3216bfb31e916
- Kova repository: openclaw/Kova
- Kova ref: 869493d1be0dcf10b7ddf96371cf35239a9efbd6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13605384828](https://github.com/openclaw/openclaw/actions/runs/42449992668/artifacts/13605384828); its checksum is published under the bundles directory.
