# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260722-183025-068e87
- Generated: 2026-07-22T18:38:08.458Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 935 MB | 936 MB | 936 MB |
| fresh-install | fresh | Gateway RSS | 935 MB | 936 MB | 936 MB |
| fresh-install | fresh | Max CPU | 154 % | 157 % | 157 % |
| fresh-install | fresh | Event Loop Max | 10.9 ms | 12.6 ms | 12.8 ms |
| fresh-install | onboarded-user | Primary RSS | 925 MB | 933 MB | 934 MB |
| fresh-install | onboarded-user | Gateway RSS | 925 MB | 933 MB | 934 MB |
| fresh-install | onboarded-user | Max CPU | 149 % | 154 % | 155 % |
| fresh-install | onboarded-user | Event Loop Max | 10.8 ms | 11.9 ms | 12 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 920 MB | 929 MB | 931 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 920 MB | 929 MB | 931 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 151 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 17.2 ms | 20 ms | 20.3 ms |
| bundled-plugin-startup | fresh | Primary RSS | 929 MB | 937 MB | 937 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 929 MB | 937 MB | 937 MB |
| bundled-plugin-startup | fresh | Max CPU | 141 % | 152 % | 153 % |
| bundled-plugin-startup | fresh | Event Loop Max | 14.4 ms | 17.2 ms | 17.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 956 MB | 970 MB | 972 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 155 % | 156 % | 156 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,642 ms | 4,700 ms | 4,707 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,652 ms | 4,659 ms | 4,660 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,456 ms | 4,684 ms | 4,709 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,338 ms | 4,432 ms | 4,442 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 926 MB | 936 MB | 937 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 926 MB | 936 MB | 937 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 152 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 16 ms | 17.1 ms | 17.2 ms |

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
- Tested ref: 4f33dee5bbf0649b12b11328d683a81dad5bc99a
- Tested SHA: 4f33dee5bbf0649b12b11328d683a81dad5bc99a
- Workflow ref: main
- Workflow SHA: df551c10a160b30ea00e0d69b173d782016e94e5
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

The complete Kova bundle remains in [Actions artifact 8540756976](https://github.com/openclaw/openclaw/actions/runs/29946817666/artifacts/8540756976); its checksum is published under the bundles directory.
