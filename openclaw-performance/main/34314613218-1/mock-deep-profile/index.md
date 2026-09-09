# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-260909-052359-b3fd08
- Generated: 2026-09-09T05:25:55.187Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 618 MB | 618 MB | 618 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 618 MB | 618 MB | 618 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 203 % | 203 % | 203 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.1 ms | 10.1 ms | 10.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 739 MB | 739 MB | 739 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 231 % | 231 % | 231 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,532 ms | 4,532 ms | 4,532 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,949 ms | 3,949 ms | 3,949 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,563 ms | 4,563 ms | 4,563 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,083 ms | 4,083 ms | 4,083 ms |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: d9216e894e89cec406d42607c175aeecf4a13ee9
- Workflow ref: main
- Workflow SHA: d9216e894e89cec406d42607c175aeecf4a13ee9
- Kova repository: openclaw/Kova
- Kova ref: 3da9582e9c3eef970ef102dc3950595e0876a1d5
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10089679796](https://github.com/openclaw/openclaw/actions/runs/34314613218/artifacts/10089679796); its checksum is published under the bundles directory.
