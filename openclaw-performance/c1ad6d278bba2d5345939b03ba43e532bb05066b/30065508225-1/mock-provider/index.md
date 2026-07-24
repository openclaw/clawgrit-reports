# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260724-035812-63eb46
- Generated: 2026-07-24T04:05:20.565Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 17, FAIL: 1
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 943 MB | 948 MB | 948 MB |
| fresh-install | fresh | Gateway RSS | 943 MB | 948 MB | 948 MB |
| fresh-install | fresh | Max CPU | 151 % | 153 % | 153 % |
| fresh-install | fresh | Event Loop Max | 10.6 ms | 10.7 ms | 10.7 ms |
| fresh-install | onboarded-user | Primary RSS | 925 MB | 928 MB | 929 MB |
| fresh-install | onboarded-user | Gateway RSS | 925 MB | 928 MB | 929 MB |
| fresh-install | onboarded-user | Max CPU | 152 % | 152 % | 152 % |
| fresh-install | onboarded-user | Event Loop Max | 10.4 ms | 10.6 ms | 10.7 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 922 MB | 923 MB | 923 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 922 MB | 923 MB | 923 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 153 % | 154 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 21.9 ms | 24.2 ms | 24.4 ms |
| bundled-plugin-startup | fresh | Primary RSS | 939 MB | 939 MB | 940 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 939 MB | 939 MB | 940 MB |
| bundled-plugin-startup | fresh | Max CPU | 138 % | 152 % | 153 % |
| bundled-plugin-startup | fresh | Event Loop Max | 21.2 ms | 22.6 ms | 22.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 964 MB | 965 MB | 965 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,408 ms | 4,521 ms | 4,534 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,415 ms | 4,537 ms | 4,551 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,274 ms | 4,400 ms | 4,414 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,129 ms | 4,223 ms | 4,233 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 942 MB | 955 MB | 957 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 942 MB | 955 MB | 957 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 151 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 20.4 ms | 24.2 ms | 24.6 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 676 | <= 650 |

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
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: c1ad6d278bba2d5345939b03ba43e532bb05066b
- Tested SHA: c1ad6d278bba2d5345939b03ba43e532bb05066b
- Workflow ref: main
- Workflow SHA: b88eeddeed1581817b715febc38b66c142d3ee09
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

The complete Kova bundle remains in [Actions artifact 8586206120](https://github.com/openclaw/openclaw/actions/runs/30065508225/artifacts/8586206120); its checksum is published under the bundles directory.
