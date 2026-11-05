# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261105-051802-165e9d
- Generated: 2026-11-05T05:46:44.406Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 4, FAIL: 2
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,590 MB | 1,621 MB | 1,624 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,590 MB | 1,621 MB | 1,624 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 245 % | 259 % | 260 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 42.6 ms | 44.7 ms | 45 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,421 MB | 1,458 MB | 1,462 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 239 % | 250 % | 252 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 8,689 ms | 9,091 ms | 9,136 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 7,745 ms | 8,615 ms | 8,712 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 8,250 ms | 9,113 ms | 9,209 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 8,382 ms | 8,647 ms | 8,676 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,462 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,646 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,421 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,605 | <= 1600 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: a8dc255ec8102fb93ab1b16eb0d47a2f95709135
- Workflow ref: main
- Workflow SHA: a8dc255ec8102fb93ab1b16eb0d47a2f95709135
- Kova repository: openclaw/Kova
- Kova ref: 869493d1be0dcf10b7ddf96371cf35239a9efbd6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13391427381](https://github.com/openclaw/openclaw/actions/runs/41972905229/artifacts/13391427381); its checksum is published under the bundles directory.
