# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261106-051745-2ec27d
- Generated: 2026-11-06T05:44:51.901Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 3, FAIL: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,589 MB | 1,621 MB | 1,624 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,589 MB | 1,621 MB | 1,624 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 249 % | 277 % | 280 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 42.2 ms | 44.4 ms | 44.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,502 MB | 1,522 MB | 1,524 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 230 % | 238 % | 239 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 7,899 ms | 7,909 ms | 7,910 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 6,898 ms | 7,061 ms | 7,079 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,942 ms | 7,961 ms | 7,963 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 7,605 ms | 7,607 ms | 7,607 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,502 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,686 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,495 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,679 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,524 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,708 | <= 1600 |

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
- Tested SHA: a04f6a382e73a876d0cdc4ee7cc8f0eeba93d5df
- Workflow ref: main
- Workflow SHA: a04f6a382e73a876d0cdc4ee7cc8f0eeba93d5df
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

The complete Kova bundle remains in [Actions artifact 13480538271](https://github.com/openclaw/openclaw/actions/runs/42167359268/artifacts/13480538271); its checksum is published under the bundles directory.
