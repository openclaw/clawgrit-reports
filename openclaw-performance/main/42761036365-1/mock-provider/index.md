# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-261110-051804-00dd7f
- Generated: 2026-11-10T05:48:27.238Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 4, FAIL: 2
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,507 MB | 1,554 MB | 1,559 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,507 MB | 1,554 MB | 1,559 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 212 % | 220 % | 221 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 55.6 ms | 60.8 ms | 61.3 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,447 MB | 1,470 MB | 1,472 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 212 % | 222 % | 223 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 8,664 ms | 9,071 ms | 9,116 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 7,860 ms | 7,883 ms | 7,886 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 8,705 ms | 9,147 ms | 9,196 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 8,361 ms | 8,724 ms | 8,765 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,447 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,629 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,472 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,653 | <= 1600 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 8aa3ef4425c14dbfd32cc2ffb912fa4ea3dec646
- Workflow ref: main
- Workflow SHA: 8aa3ef4425c14dbfd32cc2ffb912fa4ea3dec646
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

The complete Kova bundle remains in [Actions artifact 13739705007](https://github.com/openclaw/openclaw/actions/runs/42761036365/artifacts/13739705007); its checksum is published under the bundles directory.
