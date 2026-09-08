# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260908-052441-7237f0
- Generated: 2026-09-08T05:27:18.576Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 612 MB | 615 MB | 615 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 612 MB | 615 MB | 615 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 140 % | 156 % | 157 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 11 ms | 11 ms | 11 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 407 MB | 419 MB | 421 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 166 % | 169 % | 169 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 1,928 ms | 1,933 ms | 1,934 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 1,888 ms | 1,895 ms | 1,896 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 1,936 ms | 1,937 ms | 1,937 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 1,843 ms | 1,849 ms | 1,849 ms |

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
- Tested SHA: bd49ac0b6c43ac0693f0bf8f6ba96d4deb333536
- Workflow ref: main
- Workflow SHA: bd49ac0b6c43ac0693f0bf8f6ba96d4deb333536
- Kova repository: openclaw/Kova
- Kova ref: 065d2ffd535f12fd0f3a15c412a08a456f580260
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10042084855](https://github.com/openclaw/openclaw/actions/runs/34190397606/artifacts/10042084855); its checksum is published under the bundles directory.
