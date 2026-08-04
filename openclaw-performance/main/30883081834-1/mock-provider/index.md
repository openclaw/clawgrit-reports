# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260804-061150-7146f2
- Generated: 2026-08-04T06:14:18.927Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 968 MB | 989 MB | 991 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 968 MB | 989 MB | 991 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 156 % | 161 % | 161 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 20.7 ms | 21.1 ms | 21.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 866 MB | 866 MB | 867 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 157 % | 159 % | 159 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,686 ms | 3,892 ms | 3,915 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,687 ms | 3,704 ms | 3,706 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,678 ms | 3,901 ms | 3,926 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,559 ms | 3,766 ms | 3,789 ms |

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
- Tested SHA: 3f2fb7e36589e79408dcfdf93df231eea4850978
- Workflow ref: main
- Workflow SHA: 3f2fb7e36589e79408dcfdf93df231eea4850978
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

The complete Kova bundle remains in [Actions artifact 8882094243](https://github.com/openclaw/openclaw/actions/runs/30883081834/artifacts/8882094243); its checksum is published under the bundles directory.
