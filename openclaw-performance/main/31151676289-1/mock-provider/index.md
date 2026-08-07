# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260807-054700-7cfc3b
- Generated: 2026-08-07T05:49:11.177Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 961 MB | 964 MB | 964 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 961 MB | 964 MB | 964 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 161 % | 163 % | 163 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 876 MB | 890 MB | 891 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 152 % | 152 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,353 ms | 3,449 ms | 3,460 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,366 ms | 3,467 ms | 3,478 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,115 ms | 3,224 ms | 3,236 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,226 ms | 3,328 ms | 3,339 ms |

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
- Tested SHA: e2402208e011657d01e3d68b0ba39bfe7cae0c96
- Workflow ref: main
- Workflow SHA: e2402208e011657d01e3d68b0ba39bfe7cae0c96
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

The complete Kova bundle remains in [Actions artifact 8983577829](https://github.com/openclaw/openclaw/actions/runs/31151676289/artifacts/8983577829); its checksum is published under the bundles directory.
