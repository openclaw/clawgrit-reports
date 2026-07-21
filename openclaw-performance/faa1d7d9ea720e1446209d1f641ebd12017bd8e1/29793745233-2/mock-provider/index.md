# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260721-015126-83155e
- Generated: 2026-07-21T01:57:03.937Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 817 MB | 818 MB | 819 MB |
| fresh-install | fresh | Gateway RSS | 817 MB | 818 MB | 819 MB |
| fresh-install | fresh | Max CPU | 146 % | 146 % | 146 % |
| fresh-install | fresh | Event Loop Max | 485 ms | 681 ms | 703 ms |
| fresh-install | onboarded-user | Primary RSS | 822 MB | 840 MB | 842 MB |
| fresh-install | onboarded-user | Gateway RSS | 822 MB | 840 MB | 842 MB |
| fresh-install | onboarded-user | Max CPU | 147 % | 147 % | 147 % |
| fresh-install | onboarded-user | Event Loop Max | 487 ms | 500 ms | 502 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 793 MB | 803 MB | 804 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 793 MB | 803 MB | 804 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 147 % | 148 % | 148 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 470 ms | 471 ms | 471 ms |
| bundled-plugin-startup | fresh | Primary RSS | 826 MB | 841 MB | 843 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 826 MB | 841 MB | 843 MB |
| bundled-plugin-startup | fresh | Max CPU | 147 % | 150 % | 150 % |
| bundled-plugin-startup | fresh | Event Loop Max | 516 ms | 543 ms | 546 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 906 MB | 917 MB | 918 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 155 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,116 ms | 3,178 ms | 3,184 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,121 ms | 3,179 ms | 3,185 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,115 ms | 3,167 ms | 3,173 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 2,854 ms | 2,902 ms | 2,907 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 820 MB | 840 MB | 842 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 820 MB | 840 MB | 842 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 146 % | 147 % | 147 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 482 ms | 486 ms | 486 ms |

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
- Tested ref: faa1d7d9ea720e1446209d1f641ebd12017bd8e1
- Tested SHA: faa1d7d9ea720e1446209d1f641ebd12017bd8e1
- Workflow ref: main
- Workflow SHA: 97130060dfdd3f4bbf568d74bbea50e9d1809cd6
- Kova repository: openclaw/Kova
- Kova ref: f3d037b5b8aacd6adf8ef1dd2ea4c1d778ec7c6c
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8481510891](https://github.com/openclaw/openclaw/actions/runs/29793745233/artifacts/8481510891); its checksum is published under the bundles directory.
