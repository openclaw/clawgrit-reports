# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260714-124747-090cd1
- Generated: 2026-07-14T12:54:49.033Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 851 MB | 854 MB | 855 MB |
| fresh-install | fresh | Gateway RSS | 851 MB | 854 MB | 855 MB |
| fresh-install | fresh | Max CPU | 145 % | 148 % | 148 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 852 MB | 852 MB | 852 MB |
| fresh-install | onboarded-user | Gateway RSS | 852 MB | 852 MB | 852 MB |
| fresh-install | onboarded-user | Max CPU | 155 % | 159 % | 159 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 844 MB | 848 MB | 849 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 844 MB | 848 MB | 849 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 151 % | 156 % | 157 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 13.8 ms | 24 ms | 25.1 ms |
| bundled-plugin-startup | fresh | Primary RSS | 852 MB | 852 MB | 852 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 852 MB | 852 MB | 852 MB |
| bundled-plugin-startup | fresh | Max CPU | 156 % | 158 % | 158 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 11 ms | 12.3 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 866 MB | 869 MB | 870 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 166 % | 166 % | 166 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,815 ms | 3,983 ms | 4,002 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,678 ms | 3,983 ms | 4,017 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,778 ms | 3,829 ms | 3,835 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,670 ms | 3,806 ms | 3,821 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 852 MB | 853 MB | 853 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 852 MB | 853 MB | 853 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 155 % | 157 % | 157 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

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
- Tested ref: 9de11f098e65ffe3bbe610f34f3e87fd82b2774f
- Tested SHA: 9de11f098e65ffe3bbe610f34f3e87fd82b2774f
- Workflow ref: main
- Workflow SHA: ee416f0447518bf6e833556411ddd6c3e6c39c55
- Kova repository: openclaw/Kova
- Kova ref: 678ff0b764b8786c2e436efbe4efac7d9aac10f8
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8311290290](https://github.com/openclaw/openclaw/actions/runs/29333790255/artifacts/8311290290); its checksum is published under the bundles directory.
