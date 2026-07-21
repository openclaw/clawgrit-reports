# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260721-205929-3ace3f
- Generated: 2026-07-21T21:06:15.906Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 910 MB | 923 MB | 924 MB |
| fresh-install | fresh | Gateway RSS | 910 MB | 923 MB | 924 MB |
| fresh-install | fresh | Max CPU | 154 % | 155 % | 155 % |
| fresh-install | fresh | Event Loop Max | 11.8 ms | 12.6 ms | 12.7 ms |
| fresh-install | onboarded-user | Primary RSS | 907 MB | 932 MB | 935 MB |
| fresh-install | onboarded-user | Gateway RSS | 907 MB | 932 MB | 935 MB |
| fresh-install | onboarded-user | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 11 ms | 12.4 ms | 12.5 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 899 MB | 902 MB | 903 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 899 MB | 902 MB | 903 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 154 % | 155 % | 155 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 12.7 ms | 13.7 ms | 13.8 ms |
| bundled-plugin-startup | fresh | Primary RSS | 927 MB | 936 MB | 937 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 927 MB | 936 MB | 937 MB |
| bundled-plugin-startup | fresh | Max CPU | 151 % | 155 % | 155 % |
| bundled-plugin-startup | fresh | Event Loop Max | 16.1 ms | 16.4 ms | 16.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 961 MB | 977 MB | 979 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 166 % | 169 % | 169 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,474 ms | 5,109 ms | 5,179 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,469 ms | 4,840 ms | 4,881 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,479 ms | 5,123 ms | 5,195 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,181 ms | 4,699 ms | 4,757 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 909 MB | 919 MB | 920 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 909 MB | 919 MB | 920 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 155 % | 155 % | 155 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 13.4 ms | 19.8 ms | 20.5 ms |

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
- Tested ref: a0bbdff0aca1545e6332683244321de32ade843a
- Tested SHA: a0bbdff0aca1545e6332683244321de32ade843a
- Workflow ref: main
- Workflow SHA: 1096b74ab748dc0373b0d9bbbb55cb2227257953
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

The complete Kova bundle remains in [Actions artifact 8510196722](https://github.com/openclaw/openclaw/actions/runs/29852055876/artifacts/8510196722); its checksum is published under the bundles directory.
