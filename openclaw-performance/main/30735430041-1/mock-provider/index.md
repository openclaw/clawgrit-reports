# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260802-061454-c63813
- Generated: 2026-08-02T06:17:19.328Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 973 MB | 976 MB | 977 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 973 MB | 976 MB | 977 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 154 % | 157 % | 157 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 15.8 ms | 18.1 ms | 18.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 825 MB | 830 MB | 831 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 155 % | 155 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,320 ms | 3,378 ms | 3,384 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,288 ms | 3,305 ms | 3,307 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,323 ms | 3,382 ms | 3,389 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,204 ms | 3,263 ms | 3,270 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: df8cc5a45810ec8f8b0e308868af2871d601bf40
- Workflow ref: main
- Workflow SHA: df8cc5a45810ec8f8b0e308868af2871d601bf40
- Kova repository: openclaw/Kova
- Kova ref: 283070760a16655b28835061774158b8b11b4aff
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8829458615](https://github.com/openclaw/openclaw/actions/runs/30735430041/artifacts/8829458615); its checksum is published under the bundles directory.
