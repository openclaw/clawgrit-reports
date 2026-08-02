# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260802-145029-ac5f9b
- Generated: 2026-08-02T14:57:36.401Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 15
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 972 MB | 975 MB | 975 MB |
| fresh-install | fresh | Gateway RSS | 972 MB | 975 MB | 975 MB |
| fresh-install | fresh | Max CPU | 161 % | 162 % | 162 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 981 MB | 983 MB | 983 MB |
| fresh-install | onboarded-user | Gateway RSS | 981 MB | 983 MB | 983 MB |
| fresh-install | onboarded-user | Max CPU | 156 % | 157 % | 157 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Primary RSS | 957 MB | 961 MB | 962 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 957 MB | 961 MB | 962 MB |
| bundled-plugin-startup | fresh | Max CPU | 160 % | 160 % | 160 % |
| bundled-plugin-startup | fresh | Event Loop Max | 17.2 ms | 17.8 ms | 17.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 850 MB | 863 MB | 865 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,330 ms | 3,346 ms | 3,347 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,332 ms | 3,346 ms | 3,348 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,320 ms | 3,331 ms | 3,332 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,207 ms | 3,222 ms | 3,223 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 956 MB | 961 MB | 962 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 956 MB | 961 MB | 962 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 156 % | 157 % | 157 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 21.1 ms | 22 ms | 22.1 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
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
- Tested ref: fe81123fe80ba85a4223555c4fa6542a8e422c35
- Tested SHA: fe81123fe80ba85a4223555c4fa6542a8e422c35
- Workflow ref: main
- Workflow SHA: fe81123fe80ba85a4223555c4fa6542a8e422c35
- Kova repository: openclaw/Kova
- Kova ref: 283070760a16655b28835061774158b8b11b4aff
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8835126153](https://github.com/openclaw/openclaw/actions/runs/30752966919/artifacts/8835126153); its checksum is published under the bundles directory.
