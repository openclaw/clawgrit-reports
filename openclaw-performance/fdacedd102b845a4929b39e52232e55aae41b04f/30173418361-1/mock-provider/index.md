# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260725-202252-177772
- Generated: 2026-07-25T20:30:37.183Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 892 MB | 902 MB | 903 MB |
| fresh-install | fresh | Gateway RSS | 892 MB | 902 MB | 903 MB |
| fresh-install | fresh | Max CPU | 153 % | 153 % | 153 % |
| fresh-install | fresh | Event Loop Max | 14.6 ms | 15.6 ms | 15.7 ms |
| fresh-install | onboarded-user | Primary RSS | 901 MB | 910 MB | 911 MB |
| fresh-install | onboarded-user | Gateway RSS | 901 MB | 910 MB | 911 MB |
| fresh-install | onboarded-user | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 13.8 ms | 14.1 ms | 14.1 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 948 MB | 954 MB | 955 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 948 MB | 954 MB | 955 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 152 % | 152 % | 152 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 15.4 ms | 16.6 ms | 16.7 ms |
| bundled-plugin-startup | fresh | Primary RSS | 930 MB | 961 MB | 965 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 930 MB | 961 MB | 965 MB |
| bundled-plugin-startup | fresh | Max CPU | 154 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 20.4 ms | 26.2 ms | 26.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 892 MB | 897 MB | 897 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,716 ms | 4,731 ms | 4,733 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,702 ms | 4,733 ms | 4,736 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,696 ms | 4,715 ms | 4,717 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,211 ms | 4,216 ms | 4,216 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 961 MB | 969 MB | 970 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 961 MB | 969 MB | 970 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 16.8 ms | 18.7 ms | 18.9 ms |

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
- Tested ref: fdacedd102b845a4929b39e52232e55aae41b04f
- Tested SHA: fdacedd102b845a4929b39e52232e55aae41b04f
- Workflow ref: main
- Workflow SHA: a18c31437727c7a319ede155202c435286c6d8c7
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

The complete Kova bundle remains in [Actions artifact 8623624672](https://github.com/openclaw/openclaw/actions/runs/30173418361/artifacts/8623624672); its checksum is published under the bundles directory.
