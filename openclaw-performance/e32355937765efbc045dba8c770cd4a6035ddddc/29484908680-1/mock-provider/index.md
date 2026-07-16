# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260716-085152-75ea41
- Generated: 2026-07-16T08:56:54.833Z
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
- Tested ref: e32355937765efbc045dba8c770cd4a6035ddddc
- Tested SHA: e32355937765efbc045dba8c770cd4a6035ddddc
- Workflow ref: main
- Workflow SHA: ea3ac194f49deb5d4ef35bbb4904b247cc49106b
- Kova repository: openclaw/Kova
- Kova ref: f3d037b5b8aacd6adf8ef1dd2ea4c1d778ec7c6c
- Kova profile: release
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8370127892](https://github.com/openclaw/openclaw/actions/runs/29484908680/artifacts/8370127892); its checksum is published under the bundles directory.
