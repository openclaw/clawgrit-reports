# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260816-052008-59c396
- Generated: 2026-08-16T05:22:39.469Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,147 MB | 1,239 MB | 1,249 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,147 MB | 1,239 MB | 1,249 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 156 % | 157 % | 157 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.1 ms | 10.9 ms | 10.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 886 MB | 887 MB | 888 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 153 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,277 ms | 3,286 ms | 3,287 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,295 ms | 3,303 ms | 3,304 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 2,930 ms | 2,956 ms | 2,959 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,163 ms | 3,168 ms | 3,169 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,249 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,120 | <= 1050 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,147 | <= 1050 |

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
- Tested SHA: 78ca5fcfb61ea5f8f063822f4125214f46fc8491
- Workflow ref: main
- Workflow SHA: 78ca5fcfb61ea5f8f063822f4125214f46fc8491
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

The complete Kova bundle remains in [Actions artifact 9258682986](https://github.com/openclaw/openclaw/actions/runs/31928732515/artifacts/9258682986); its checksum is published under the bundles directory.
