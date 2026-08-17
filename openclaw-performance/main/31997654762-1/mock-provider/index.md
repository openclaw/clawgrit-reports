# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260817-052255-1a1b3e
- Generated: 2026-08-17T05:25:36.068Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,226 MB | 1,235 MB | 1,236 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,226 MB | 1,235 MB | 1,236 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 158 % | 159 % | 159 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10 ms | 11.8 ms | 12 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 931 MB | 935 MB | 935 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 155 % | 155 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,495 ms | 3,521 ms | 3,524 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,514 ms | 3,538 ms | 3,541 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,164 ms | 3,192 ms | 3,195 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,346 ms | 3,377 ms | 3,381 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,222 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,222 | <= 1200 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,236 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,236 | <= 1200 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,226 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,226 | <= 1200 |

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
- Tested SHA: b3ab276077464ed35c29707d7aea1607f9dc6cbd
- Workflow ref: main
- Workflow SHA: b3ab276077464ed35c29707d7aea1607f9dc6cbd
- Kova repository: openclaw/Kova
- Kova ref: 0f9e678e239b45db46d2bd930b7983203580df78
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 9277411464](https://github.com/openclaw/openclaw/actions/runs/31997654762/artifacts/9277411464); its checksum is published under the bundles directory.
