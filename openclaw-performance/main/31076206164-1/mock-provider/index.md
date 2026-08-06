# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260806-060820-b9e9dd
- Generated: 2026-08-06T06:10:24.956Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 955 MB | 956 MB | 956 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 955 MB | 956 MB | 956 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 158 % | 160 % | 160 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 883 MB | 893 MB | 894 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 154 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,345 ms | 3,350 ms | 3,350 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,354 ms | 3,361 ms | 3,362 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,127 ms | 3,163 ms | 3,167 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,224 ms | 3,225 ms | 3,225 ms |

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
- Tested SHA: 874c63318b590a3567a49d36066d79d211f8be08
- Workflow ref: main
- Workflow SHA: 874c63318b590a3567a49d36066d79d211f8be08
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

The complete Kova bundle remains in [Actions artifact 8957663706](https://github.com/openclaw/openclaw/actions/runs/31076206164/artifacts/8957663706); its checksum is published under the bundles directory.
