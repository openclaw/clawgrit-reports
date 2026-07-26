# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260726-151144-99e2c4
- Generated: 2026-07-26T15:19:25.398Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 905 MB | 905 MB | 905 MB |
| fresh-install | fresh | Gateway RSS | 905 MB | 905 MB | 905 MB |
| fresh-install | fresh | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | fresh | Event Loop Max | 13 ms | 15.5 ms | 15.8 ms |
| fresh-install | onboarded-user | Primary RSS | 911 MB | 912 MB | 913 MB |
| fresh-install | onboarded-user | Gateway RSS | 911 MB | 912 MB | 913 MB |
| fresh-install | onboarded-user | Max CPU | 153 % | 153 % | 153 % |
| fresh-install | onboarded-user | Event Loop Max | 12.2 ms | 13.9 ms | 14.1 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 956 MB | 985 MB | 988 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 956 MB | 985 MB | 988 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 154 % | 155 % | 155 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 15.9 ms | 20.6 ms | 21.1 ms |
| bundled-plugin-startup | fresh | Primary RSS | 971 MB | 983 MB | 984 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 971 MB | 983 MB | 984 MB |
| bundled-plugin-startup | fresh | Max CPU | 154 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 16.9 ms | 22.2 ms | 22.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 875 MB | 890 MB | 892 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 153 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,692 ms | 4,762 ms | 4,769 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,693 ms | 4,765 ms | 4,773 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,675 ms | 4,698 ms | 4,701 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,176 ms | 4,223 ms | 4,228 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 994 MB | 1,012 MB | 1,014 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 994 MB | 1,012 MB | 1,014 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 154 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 15.6 ms | 19 ms | 19.4 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 5e6cf2a4d8189c1b425dd53d12d73a83bd25688a
- Tested SHA: 5e6cf2a4d8189c1b425dd53d12d73a83bd25688a
- Workflow ref: main
- Workflow SHA: 01f8bd9d12d25b616f4c16773b019d0816d42040
- Kova repository: openclaw/Kova
- Kova ref: 517952b835640a368c4af6dfe6dc8365ae841b57
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8633608740](https://github.com/openclaw/openclaw/actions/runs/30207636743/artifacts/8633608740); its checksum is published under the bundles directory.
