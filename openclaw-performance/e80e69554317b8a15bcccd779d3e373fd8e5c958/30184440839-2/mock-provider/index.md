# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260726-023515-cd8442
- Generated: 2026-07-26T02:36:48.334Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: BLOCKED: 18
- Repeat: 3

## Key metrics

- No sampled key metrics were available; inspect the blocking records below.

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| fresh-install | fresh | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| fresh-install | fresh | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| fresh-install | onboarded-user | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| fresh-install | onboarded-user | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| fresh-install | onboarded-user | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.missing | missing | configured primary resource role observed in product samples |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.missing | missing | configured primary resource role observed in product samples |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | BLOCKED |  |
| fresh-install | fresh | BLOCKED |  |
| fresh-install | fresh | BLOCKED |  |
| fresh-install | onboarded-user | BLOCKED |  |
| fresh-install | onboarded-user | BLOCKED |  |
| fresh-install | onboarded-user | BLOCKED |  |
| bundled-runtime-deps | missing-plugin-index | BLOCKED |  |
| bundled-runtime-deps | missing-plugin-index | BLOCKED |  |
| bundled-runtime-deps | missing-plugin-index | BLOCKED |  |
| bundled-plugin-startup | fresh | BLOCKED |  |
| bundled-plugin-startup | fresh | BLOCKED |  |
| bundled-plugin-startup | fresh | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |
| agent-cold-warm-message | mock-openai-provider | BLOCKED |  |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| gateway-performance | many-bundled-plugins | BLOCKED |  |
| gateway-performance | many-bundled-plugins | BLOCKED |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: e80e69554317b8a15bcccd779d3e373fd8e5c958
- Tested SHA: e80e69554317b8a15bcccd779d3e373fd8e5c958
- Workflow ref: main
- Workflow SHA: 3807591ff4a345f32fb2a0dfb714888a19a81c72
- Kova repository: openclaw/Kova
- Kova ref: 517952b835640a368c4af6dfe6dc8365ae841b57
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8626684987](https://github.com/openclaw/openclaw/actions/runs/30184440839/artifacts/8626684987); its checksum is published under the bundles directory.
