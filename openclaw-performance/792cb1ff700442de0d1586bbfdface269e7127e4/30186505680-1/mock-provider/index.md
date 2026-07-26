# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260726-034014-3c0a77
- Generated: 2026-07-26T03:47:51.245Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 899 MB | 901 MB | 901 MB |
| fresh-install | fresh | Gateway RSS | 899 MB | 901 MB | 901 MB |
| fresh-install | fresh | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | fresh | Event Loop Max | 14.2 ms | 15.9 ms | 16.1 ms |
| fresh-install | onboarded-user | Primary RSS | 888 MB | 890 MB | 890 MB |
| fresh-install | onboarded-user | Gateway RSS | 888 MB | 890 MB | 890 MB |
| fresh-install | onboarded-user | Max CPU | 152 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 14.6 ms | 15 ms | 15 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 955 MB | 958 MB | 958 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 955 MB | 958 MB | 958 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 153 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 15 ms | 22 ms | 22.7 ms |
| bundled-plugin-startup | fresh | Primary RSS | 968 MB | 984 MB | 986 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 968 MB | 984 MB | 986 MB |
| bundled-plugin-startup | fresh | Max CPU | 154 % | 155 % | 155 % |
| bundled-plugin-startup | fresh | Event Loop Max | 17.8 ms | 21.5 ms | 21.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 882 MB | 883 MB | 884 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 153 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,731 ms | 4,793 ms | 4,800 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,731 ms | 4,755 ms | 4,758 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,721 ms | 4,794 ms | 4,802 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,222 ms | 4,294 ms | 4,302 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 955 MB | 968 MB | 970 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 955 MB | 968 MB | 970 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 15.4 ms | 16.7 ms | 16.9 ms |

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
- Tested ref: 792cb1ff700442de0d1586bbfdface269e7127e4
- Tested SHA: 792cb1ff700442de0d1586bbfdface269e7127e4
- Workflow ref: main
- Workflow SHA: f3ba035f16440d56c76625cc6a44a09f0623dd96
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

The complete Kova bundle remains in [Actions artifact 8627259980](https://github.com/openclaw/openclaw/actions/runs/30186505680/artifacts/8627259980); its checksum is published under the bundles directory.
