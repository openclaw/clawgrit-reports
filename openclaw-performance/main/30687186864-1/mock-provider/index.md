# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260801-061018-30ae21
- Generated: 2026-08-01T06:14:41.743Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 936 MB | 954 MB | 956 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 936 MB | 954 MB | 956 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 154 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.9 ms | 11.8 ms | 11.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,021 MB | 1,027 MB | 1,028 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 173 % | 174 % | 175 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,290 ms | 3,303 ms | 3,305 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,274 ms | 3,294 ms | 3,296 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,291 ms | 3,304 ms | 3,305 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,166 ms | 3,183 ms | 3,185 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,021 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,021 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,021 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,028 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,028 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,028 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,014 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,014 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,014 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 4caff51ff658f16048e5038aa6e5c015fa698d7a
- Workflow ref: main
- Workflow SHA: 4caff51ff658f16048e5038aa6e5c015fa698d7a
- Kova repository: openclaw/Kova
- Kova ref: 517952b835640a368c4af6dfe6dc8365ae841b57
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8814407454](https://github.com/openclaw/openclaw/actions/runs/30687186864/artifacts/8814407454); its checksum is published under the bundles directory.
