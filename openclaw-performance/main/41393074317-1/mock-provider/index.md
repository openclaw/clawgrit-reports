# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261102-051934-8f5515
- Generated: 2026-11-02T05:40:40.510Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 3, FAIL: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,607 MB | 1,609 MB | 1,609 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,607 MB | 1,609 MB | 1,609 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 192 % | 192 % | 192 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 36.9 ms | 38 ms | 38.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,452 MB | 1,470 MB | 1,473 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 199 % | 204 % | 205 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 6,668 ms | 6,706 ms | 6,711 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,992 ms | 5,997 ms | 5,998 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 6,704 ms | 6,744 ms | 6,748 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 6,439 ms | 6,463 ms | 6,465 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,445 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,629 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,473 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,656 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,452 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,636 | <= 1600 |

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
- Tested SHA: 52c106496b857099a47a09f3b944b6cd1f652711
- Workflow ref: main
- Workflow SHA: 52c106496b857099a47a09f3b944b6cd1f652711
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

The complete Kova bundle remains in [Actions artifact 13118952036](https://github.com/openclaw/openclaw/actions/runs/41393074317/artifacts/13118952036); its checksum is published under the bundles directory.
