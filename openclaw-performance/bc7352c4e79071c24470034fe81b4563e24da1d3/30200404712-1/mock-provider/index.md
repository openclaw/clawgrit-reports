# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260726-113628-d6daad
- Generated: 2026-07-26T11:44:10.438Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 980 MB | 1,006 MB | 1,009 MB |
| fresh-install | fresh | Gateway RSS | 980 MB | 1,006 MB | 1,009 MB |
| fresh-install | fresh | Max CPU | 153 % | 153 % | 153 % |
| fresh-install | fresh | Event Loop Max | 11.9 ms | 21 ms | 22.1 ms |
| fresh-install | onboarded-user | Primary RSS | 1,009 MB | 1,011 MB | 1,012 MB |
| fresh-install | onboarded-user | Gateway RSS | 1,009 MB | 1,011 MB | 1,012 MB |
| fresh-install | onboarded-user | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 12.7 ms | 14.1 ms | 14.2 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 960 MB | 968 MB | 969 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 960 MB | 968 MB | 969 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 153 % | 154 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 16.2 ms | 23.1 ms | 23.9 ms |
| bundled-plugin-startup | fresh | Primary RSS | 948 MB | 967 MB | 969 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 948 MB | 967 MB | 969 MB |
| bundled-plugin-startup | fresh | Max CPU | 155 % | 155 % | 155 % |
| bundled-plugin-startup | fresh | Event Loop Max | 18.2 ms | 18.8 ms | 18.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 946 MB | 960 MB | 961 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 153 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,721 ms | 4,766 ms | 4,771 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,686 ms | 4,716 ms | 4,719 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,723 ms | 4,769 ms | 4,774 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,219 ms | 4,264 ms | 4,269 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 989 MB | 1,013 MB | 1,016 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 989 MB | 1,013 MB | 1,016 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 16.9 ms | 18.5 ms | 18.7 ms |

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
- Tested ref: bc7352c4e79071c24470034fe81b4563e24da1d3
- Tested SHA: bc7352c4e79071c24470034fe81b4563e24da1d3
- Workflow ref: main
- Workflow SHA: 43a695396d9ce08256e1603b66a5dc43ad04d907
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

The complete Kova bundle remains in [Actions artifact 8631541122](https://github.com/openclaw/openclaw/actions/runs/30200404712/artifacts/8631541122); its checksum is published under the bundles directory.
