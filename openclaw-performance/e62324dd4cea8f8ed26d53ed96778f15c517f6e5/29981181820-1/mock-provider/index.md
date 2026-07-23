# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-050554-fc97de
- Generated: 2026-07-23T05:07:51.504Z
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
- Tested ref: e62324dd4cea8f8ed26d53ed96778f15c517f6e5
- Tested SHA: e62324dd4cea8f8ed26d53ed96778f15c517f6e5
- Workflow ref: main
- Workflow SHA: f583114774850dc0953b2011ff2a2ed8eff291ca
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

The complete Kova bundle remains in [Actions artifact 8553274133](https://github.com/openclaw/openclaw/actions/runs/29981181820/artifacts/8553274133); its checksum is published under the bundles directory.
