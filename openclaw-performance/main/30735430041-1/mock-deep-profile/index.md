# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260802-061333-6468fb
- Generated: 2026-08-02T06:15:17.201Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 984 MB | 984 MB | 984 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 984 MB | 984 MB | 984 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 15.7 ms | 15.7 ms | 15.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,067 MB | 1,067 MB | 1,067 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 159 % | 159 % | 159 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,344 ms | 5,344 ms | 5,344 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,329 ms | 5,329 ms | 5,329 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,345 ms | 5,345 ms | 5,345 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,756 ms | 4,756 ms | 4,756 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.status-cli.peakRssMb | 901 | <= 900 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,067 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: df8cc5a45810ec8f8b0e308868af2871d601bf40
- Workflow ref: main
- Workflow SHA: df8cc5a45810ec8f8b0e308868af2871d601bf40
- Kova repository: openclaw/Kova
- Kova ref: 283070760a16655b28835061774158b8b11b4aff
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8829438671](https://github.com/openclaw/openclaw/actions/runs/30735430041/artifacts/8829438671); its checksum is published under the bundles directory.
