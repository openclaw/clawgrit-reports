# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260712-061200-e8f433
- Generated: 2026-07-12T06:13:27.693Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 979 MB | 979 MB | 979 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 979 MB | 979 MB | 979 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 142 % | 142 % | 142 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 24 ms | 24 ms | 24 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 990 MB | 990 MB | 990 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 147 % | 147 % | 147 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,278 ms | 4,278 ms | 4,278 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,112 ms | 4,112 ms | 4,112 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,287 ms | 4,287 ms | 4,287 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,769 ms | 3,769 ms | 3,769 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.plugin-cli.peakRssMb | 873 | <= 800 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 990 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 990 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 990 | <= 900 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 2a02ab6bbe6ada0b5d41204113651453faae8bed
- Workflow ref: main
- Workflow SHA: 2a02ab6bbe6ada0b5d41204113651453faae8bed
- Kova repository: openclaw/Kova
- Kova ref: 2b02b7d33418db0c6952c4cf8fe8a608e7964859
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8256830447](https://github.com/openclaw/openclaw/actions/runs/29182277396/artifacts/8256830447); its checksum is published under the bundles directory.
