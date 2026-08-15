# OpenClaw Source Performance

Generated: 2026-08-15T07:10:20.942Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 12746.8ms | 12841.6ms | 12746.7ms | 12061.0ms | 12626.9ms | 115.5ms | 1493.2MB | 1.413 |
| skipChannels | gateway, skip channels | 12684.2ms | 12738.2ms | 12684.1ms | 11972.3ms | 11977.9ms | 113.3ms | 1493.2MB | 1.427 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3705.3ms | 3708.3ms | 3705.1ms | 3319.9ms | 3321.3ms | 117.5ms | 1043.1MB | 1.361 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3845.2ms | 3892.6ms | 3844.9ms | 3301.5ms | 3306.8ms | 113.9ms | 1032.6MB | 1.332 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4805.4ms | 4902.7ms | 4801.3ms | 4639.1ms | 4644.1ms | 115.8ms | 1196.6MB | 1.387 |
| oneInternalHook | gateway, one configured internal hook | 12827.1ms | 12851.5ms | 12827.0ms | 12113.3ms | 12118.9ms | 114.8ms | 1489.2MB | 1.419 |
| allInternalHooks | gateway, all internal hooks | 12746.6ms | 12777.7ms | 12746.6ms | 12036.2ms | 12041.5ms | 112.5ms | 1428.4MB | 1.413 |
| fiftyPlugins | gateway, 50 manifest plugins | 4122.6ms | 4161.1ms | 4132.3ms | 3659.3ms | 3664.2ms | 116.1ms | 1060.2MB | 1.471 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4019.6ms | 4065.8ms | 4019.4ms | 3546.5ms | 3551.3ms | 115.4ms | 1046.9MB | 1.505 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 87 bundled plugins | 719.0MB | 672.7MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| llm-task | 587.0MB | 540.8MB | ok |
| migrate-hermes | 585.7MB | 539.5MB | ok |
| policy | 585.5MB | 539.2MB | ok |
| voice-call | 584.5MB | 538.2MB | ok |
| workboard | 551.7MB | 505.5MB | ok |
| active-memory | 548.2MB | 501.9MB | ok |
| openai | 539.5MB | 493.2MB | ok |
| memory-lancedb | 534.4MB | 488.1MB | ok |
| codex | 527.4MB | 481.2MB | ok |
| beam | 522.1MB | 475.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 9278.9ms | 9452.4ms |
| default | plugins.runtime-post-bind | 8691.7ms | 8826.2ms |
| default | plugins.gateway-load.loadMs | 8677.6ms | 8811.0ms |
| default | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8334.5ms | 8444.4ms |
| default | plugins.gateway-load.plugin.teams-meetings.loadMs | 8333.5ms | 8443.3ms |
| skipChannels | runtime.post-attach | 8660.6ms | 8690.0ms |
| skipChannels | plugins.runtime-post-bind | 8643.5ms | 8670.7ms |
| skipChannels | plugins.gateway-load.loadMs | 8628.9ms | 8648.5ms |
| skipChannels | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8257.8ms | 8274.0ms |
| skipChannels | plugins.gateway-load.plugin.teams-meetings.loadMs | 8256.7ms | 8272.9ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 491.1ms | 494.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 473.4ms | 478.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 230.9ms | 240.6ms |
| preparedRuntimeCatalogStall | sidecars.reply-runtime | 173.1ms | 175.9ms |
| preparedRuntimeCatalogStall | worker-environments.runtime-imports | 165.2ms | 171.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 491.0ms | 512.2ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 486.4ms | 487.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 236.6ms | 237.1ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 205.9ms | 213.6ms |
| preparedRuntimeScaleOne | worker-environments.runtime-imports | 165.0ms | 168.3ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1530.6ms | 1583.0ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1263.4ms | 1337.7ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 955.8ms | 1001.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 539.2ms | 547.0ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 456.8ms | 458.3ms |
| oneInternalHook | runtime.post-attach | 8758.5ms | 8798.9ms |
| oneInternalHook | plugins.runtime-post-bind | 8732.0ms | 8781.2ms |
| oneInternalHook | plugins.gateway-load.loadMs | 8717.3ms | 8766.2ms |
| oneInternalHook | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8363.2ms | 8413.1ms |
| oneInternalHook | plugins.gateway-load.plugin.teams-meetings.loadMs | 8362.1ms | 8412.0ms |
| allInternalHooks | runtime.post-attach | 8723.4ms | 8723.9ms |
| allInternalHooks | plugins.runtime-post-bind | 8706.5ms | 8707.6ms |
| allInternalHooks | plugins.gateway-load.loadMs | 8691.2ms | 8693.6ms |
| allInternalHooks | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8328.6ms | 8340.6ms |
| allInternalHooks | plugins.gateway-load.plugin.teams-meetings.loadMs | 8327.4ms | 8339.5ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 551.4ms | 558.9ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 511.2ms | 517.2ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 271.6ms | 274.2ms |
| fiftyPlugins | sidecars.model-runtime | 180.0ms | 182.6ms |
| fiftyPlugins | worker-environments.runtime-imports | 171.7ms | 175.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 550.3ms | 559.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 525.8ms | 528.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 275.8ms | 277.8ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 178.1ms | 178.4ms |
| fiftyStartupLazyPlugins | worker-environments.runtime-imports | 171.4ms | 172.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12787.0ms | 0.078 | 1351.1MB | 1357.0MB | 6.0MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12566.0ms | 0.080 | 1215.5MB | 1352.4MB | 136.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12530.0ms | 0.080 | 1216.1MB | 1342.9MB | 126.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 743.8ms | 748.0ms | 193.8MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 731.5ms | 785.3ms | 194.0MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 948.8ms | 950.5ms | 193.7MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.3MB | 0.0MB | 0.0ms | 150.9ms |

## Observations

No data.

