# OpenClaw Source Performance

Generated: 2026-08-16T05:27:07.879Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 13464.3ms | 13519.4ms | 13457.9ms | 12714.7ms | 13338.5ms | 120.8ms | 2392.8MB | 1.479 |
| skipChannels | gateway, skip channels | 12621.2ms | 12621.2ms | 12606.8ms | 11917.6ms | 11923.1ms | 117.2ms | 1503.6MB | 1.434 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3609.8ms | 3671.7ms | 3609.6ms | 3227.2ms | 3232.1ms | 110.8ms | 1051.8MB | 1.389 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3803.2ms | 3812.7ms | 3802.9ms | 3277.5ms | 3282.3ms | 111.1ms | 978.6MB | 1.338 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4676.3ms | 4724.1ms | 4672.5ms | 4517.0ms | 4518.8ms | 113.9ms | 1106.6MB | 1.406 |
| oneInternalHook | gateway, one configured internal hook | 12634.7ms | 12648.5ms | 12634.6ms | 11909.4ms | 11914.9ms | 118.9ms | 1581.3MB | 1.443 |
| allInternalHooks | gateway, all internal hooks | 12484.4ms | 12502.1ms | 12484.3ms | 11767.9ms | 11773.4ms | 112.3ms | 1503.2MB | 1.442 |
| fiftyPlugins | gateway, 50 manifest plugins | 4058.4ms | 4076.4ms | 4058.2ms | 3576.4ms | 3581.2ms | 116.6ms | 1071.9MB | 1.488 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3934.3ms | 3979.8ms | 3933.9ms | 3464.0ms | 3469.0ms | 112.8ms | 991.7MB | 1.525 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.4MB | 0.0MB | ok |
| all 87 bundled plugins | 684.6MB | 638.2MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| migrate-hermes | 621.9MB | 575.5MB | ok |
| llm-task | 586.2MB | 539.8MB | ok |
| voice-call | 550.3MB | 503.9MB | ok |
| memory-lancedb | 548.0MB | 501.6MB | ok |
| openai | 545.6MB | 499.3MB | ok |
| codex | 543.1MB | 496.8MB | ok |
| active-memory | 539.8MB | 493.4MB | ok |
| workboard | 535.2MB | 488.8MB | ok |
| beam | 518.0MB | 471.6MB | ok |
| opencode-go | 424.3MB | 377.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 9819.4ms | 9972.5ms |
| default | plugins.runtime-post-bind | 9226.1ms | 9284.1ms |
| default | plugins.gateway-load.loadMs | 9204.6ms | 9260.6ms |
| default | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8847.8ms | 8872.2ms |
| default | plugins.gateway-load.plugin.teams-meetings.loadMs | 8846.7ms | 8870.9ms |
| skipChannels | runtime.post-attach | 8610.5ms | 8646.7ms |
| skipChannels | plugins.runtime-post-bind | 8593.7ms | 8630.1ms |
| skipChannels | plugins.gateway-load.loadMs | 8578.9ms | 8609.3ms |
| skipChannels | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8222.3ms | 8261.4ms |
| skipChannels | plugins.gateway-load.plugin.teams-meetings.loadMs | 8221.2ms | 8260.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 490.7ms | 498.7ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 463.7ms | 472.8ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 226.2ms | 233.6ms |
| preparedRuntimeCatalogStall | sidecars.reply-runtime | 172.5ms | 180.8ms |
| preparedRuntimeCatalogStall | worker-environments.runtime-imports | 159.6ms | 160.2ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 490.6ms | 509.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 469.4ms | 478.8ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 234.9ms | 235.1ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 202.2ms | 213.0ms |
| preparedRuntimeScaleOne | worker-environments.runtime-imports | 156.8ms | 159.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1466.3ms | 1498.4ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1284.5ms | 1285.0ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 920.5ms | 935.8ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 531.2ms | 535.2ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 451.5ms | 454.2ms |
| oneInternalHook | runtime.post-attach | 8619.0ms | 8629.6ms |
| oneInternalHook | plugins.runtime-post-bind | 8602.3ms | 8611.8ms |
| oneInternalHook | plugins.gateway-load.loadMs | 8588.0ms | 8597.5ms |
| oneInternalHook | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8227.0ms | 8241.6ms |
| oneInternalHook | plugins.gateway-load.plugin.teams-meetings.loadMs | 8225.9ms | 8240.6ms |
| allInternalHooks | runtime.post-attach | 8492.4ms | 8511.3ms |
| allInternalHooks | plugins.runtime-post-bind | 8475.3ms | 8494.6ms |
| allInternalHooks | plugins.gateway-load.loadMs | 8453.7ms | 8480.5ms |
| allInternalHooks | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8111.0ms | 8132.2ms |
| allInternalHooks | plugins.gateway-load.plugin.teams-meetings.loadMs | 8110.0ms | 8131.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 543.8ms | 554.1ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 508.3ms | 513.8ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 266.0ms | 267.3ms |
| fiftyPlugins | sidecars.model-runtime | 174.2ms | 179.3ms |
| fiftyPlugins | worker-environments.runtime-imports | 162.1ms | 162.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 523.8ms | 538.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 508.6ms | 514.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 259.7ms | 274.1ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 178.6ms | 178.6ms |
| fiftyStartupLazyPlugins | worker-environments.runtime-imports | 165.3ms | 165.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12559.0ms | 0.080 | 1213.1MB | 1276.4MB | 63.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12584.0ms | 0.159 | 1384.0MB | 1388.2MB | 4.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12654.0ms | 0.158 | 1385.4MB | 1401.3MB | 15.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 727.9ms | 740.7ms | 192.7MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 701.8ms | 728.4ms | 193.0MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 935.8ms | 970.2ms | 193.4MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.3MB | 0.0MB | 0.0ms | 144.2ms |

## Observations

No data.

