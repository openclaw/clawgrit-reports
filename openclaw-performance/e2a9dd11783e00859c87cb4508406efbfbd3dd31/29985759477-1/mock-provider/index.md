# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-064059-805726
- Generated: 2026-07-23T06:48:15.153Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 910 MB | 916 MB | 916 MB |
| fresh-install | fresh | Gateway RSS | 910 MB | 916 MB | 916 MB |
| fresh-install | fresh | Max CPU | 151 % | 152 % | 152 % |
| fresh-install | fresh | Event Loop Max | 10.6 ms | 10.9 ms | 11 ms |
| fresh-install | onboarded-user | Primary RSS | 925 MB | 931 MB | 932 MB |
| fresh-install | onboarded-user | Gateway RSS | 925 MB | 931 MB | 932 MB |
| fresh-install | onboarded-user | Max CPU | 155 % | 156 % | 156 % |
| fresh-install | onboarded-user | Event Loop Max | 10.3 ms | 10.4 ms | 10.4 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 917 MB | 929 MB | 930 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 917 MB | 929 MB | 930 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 152 % | 152 % | 152 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 19.8 ms | 19.9 ms | 20 ms |
| bundled-plugin-startup | fresh | Primary RSS | 922 MB | 930 MB | 931 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 922 MB | 930 MB | 931 MB |
| bundled-plugin-startup | fresh | Max CPU | 156 % | 156 % | 156 % |
| bundled-plugin-startup | fresh | Event Loop Max | 16.3 ms | 19.3 ms | 19.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 961 MB | 984 MB | 987 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 155 % | 155 % | 155 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,560 ms | 4,583 ms | 4,585 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,564 ms | 4,585 ms | 4,587 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,491 ms | 4,544 ms | 4,550 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,255 ms | 4,284 ms | 4,287 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 915 MB | 919 MB | 919 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 915 MB | 919 MB | 919 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 152 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 16.1 ms | 21.5 ms | 22.2 ms |

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
- Tested ref: e2a9dd11783e00859c87cb4508406efbfbd3dd31
- Tested SHA: e2a9dd11783e00859c87cb4508406efbfbd3dd31
- Workflow ref: main
- Workflow SHA: cca67fc842409367ef649ecf63828b412242ccb4
- Kova repository: openclaw/Kova
- Kova ref: 1bf080f6dbf8800a3187591493f2551824e4ccc7
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8555084348](https://github.com/openclaw/openclaw/actions/runs/29985759477/artifacts/8555084348); its checksum is published under the bundles directory.
