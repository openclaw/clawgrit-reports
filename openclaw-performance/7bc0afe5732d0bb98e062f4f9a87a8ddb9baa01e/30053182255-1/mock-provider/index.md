# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-232723-c7aeea
- Generated: 2026-07-23T23:34:59.515Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 927 MB | 928 MB | 928 MB |
| fresh-install | fresh | Gateway RSS | 927 MB | 928 MB | 928 MB |
| fresh-install | fresh | Max CPU | 146 % | 154 % | 155 % |
| fresh-install | fresh | Event Loop Max | 11.2 ms | 11.8 ms | 11.9 ms |
| fresh-install | onboarded-user | Primary RSS | 932 MB | 954 MB | 956 MB |
| fresh-install | onboarded-user | Gateway RSS | 932 MB | 954 MB | 956 MB |
| fresh-install | onboarded-user | Max CPU | 152 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 10.8 ms | 11.1 ms | 11.1 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 921 MB | 933 MB | 934 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 921 MB | 933 MB | 934 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 150 % | 151 % | 151 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 20.9 ms | 23.5 ms | 23.8 ms |
| bundled-plugin-startup | fresh | Primary RSS | 936 MB | 939 MB | 940 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 936 MB | 939 MB | 940 MB |
| bundled-plugin-startup | fresh | Max CPU | 154 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 16.3 ms | 22.6 ms | 23.3 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 958 MB | 972 MB | 974 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 162 % | 166 % | 167 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,118 ms | 5,159 ms | 5,163 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,006 ms | 5,153 ms | 5,169 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,056 ms | 5,121 ms | 5,128 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,791 ms | 4,794 ms | 4,795 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 937 MB | 965 MB | 969 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 937 MB | 965 MB | 969 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 155 % | 155 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 19.5 ms | 19.6 ms | 19.6 ms |

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
- Tested ref: 7bc0afe5732d0bb98e062f4f9a87a8ddb9baa01e
- Tested SHA: 7bc0afe5732d0bb98e062f4f9a87a8ddb9baa01e
- Workflow ref: main
- Workflow SHA: b7d77b0f215ee115e62a86d8c382cd3168d6f718
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

The complete Kova bundle remains in [Actions artifact 8581944332](https://github.com/openclaw/openclaw/actions/runs/30053182255/artifacts/8581944332); its checksum is published under the bundles directory.
