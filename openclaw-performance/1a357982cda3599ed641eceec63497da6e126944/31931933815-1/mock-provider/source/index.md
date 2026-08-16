# OpenClaw Source Performance

Generated: 2026-08-16T06:49:03.011Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 12697.2ms | 12965.6ms | 12697.1ms | 11994.2ms | 12574.7ms | 116.3ms | 1447.6MB | 1.442 |
| skipChannels | gateway, skip channels | 12542.7ms | 12543.0ms | 12542.6ms | 11835.1ms | 11848.2ms | 112.6ms | 1552.5MB | 1.437 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3635.4ms | 3641.3ms | 3635.2ms | 3245.3ms | 3250.0ms | 115.9ms | 992.5MB | 1.389 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3774.2ms | 3801.6ms | 3773.9ms | 3253.9ms | 3258.5ms | 116.3ms | 1033.3MB | 1.334 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4707.0ms | 4713.5ms | 4702.9ms | 4542.0ms | 4546.9ms | 114.0ms | 1153.9MB | 1.429 |
| oneInternalHook | gateway, one configured internal hook | 12521.0ms | 12551.4ms | 12520.9ms | 11821.2ms | 11826.8ms | 111.8ms | 1512.7MB | 1.450 |
| allInternalHooks | gateway, all internal hooks | 13580.6ms | 14559.1ms | 13603.0ms | 12702.8ms | 12708.8ms | 129.2ms | 2458.4MB | 1.442 |
| fiftyPlugins | gateway, 50 manifest plugins | 4872.5ms | 5528.6ms | 4872.3ms | 4163.4ms | 4170.2ms | 120.0ms | 1007.4MB | 1.475 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3977.5ms | 4001.2ms | 3977.3ms | 3495.9ms | 3501.0ms | 115.0ms | 1003.6MB | 1.508 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 87 bundled plugins | 678.2MB | 631.9MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| openai | 591.8MB | 545.5MB | ok |
| memory-lancedb | 585.1MB | 538.8MB | ok |
| codex | 546.4MB | 500.1MB | ok |
| llm-task | 542.3MB | 496.0MB | ok |
| workboard | 537.8MB | 491.6MB | ok |
| migrate-hermes | 537.6MB | 491.4MB | ok |
| beam | 526.7MB | 480.4MB | ok |
| active-memory | 523.6MB | 477.4MB | ok |
| voice-call | 519.6MB | 473.4MB | ok |
| google | 422.3MB | 376.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 9337.5ms | 9558.2ms |
| default | plugins.runtime-post-bind | 8734.1ms | 8958.8ms |
| default | plugins.gateway-load.loadMs | 8712.8ms | 8935.5ms |
| default | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8354.7ms | 8575.8ms |
| default | plugins.gateway-load.plugin.teams-meetings.loadMs | 8353.6ms | 8574.7ms |
| skipChannels | runtime.post-attach | 8567.0ms | 8606.0ms |
| skipChannels | plugins.runtime-post-bind | 8550.4ms | 8579.5ms |
| skipChannels | plugins.gateway-load.loadMs | 8535.7ms | 8565.0ms |
| skipChannels | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8180.1ms | 8207.4ms |
| skipChannels | plugins.gateway-load.plugin.teams-meetings.loadMs | 8179.0ms | 8206.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 495.8ms | 495.9ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 452.1ms | 471.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 229.5ms | 235.7ms |
| preparedRuntimeCatalogStall | sidecars.reply-runtime | 176.2ms | 176.2ms |
| preparedRuntimeCatalogStall | worker-environments.runtime-imports | 163.6ms | 166.2ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 483.7ms | 511.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 469.7ms | 483.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 234.6ms | 237.8ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 198.9ms | 205.7ms |
| preparedRuntimeScaleOne | worker-environments.runtime-imports | 162.5ms | 165.3ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1499.6ms | 1508.3ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1254.5ms | 1261.4ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 930.1ms | 935.9ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 530.2ms | 537.9ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 451.7ms | 460.5ms |
| oneInternalHook | runtime.post-attach | 8527.4ms | 8579.3ms |
| oneInternalHook | plugins.runtime-post-bind | 8510.3ms | 8561.5ms |
| oneInternalHook | plugins.gateway-load.loadMs | 8495.5ms | 8539.2ms |
| oneInternalHook | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8135.7ms | 8166.9ms |
| oneInternalHook | plugins.gateway-load.plugin.teams-meetings.loadMs | 8134.6ms | 8165.7ms |
| allInternalHooks | runtime.post-attach | 9424.9ms | 9957.4ms |
| allInternalHooks | plugins.runtime-post-bind | 9406.5ms | 9936.1ms |
| allInternalHooks | plugins.gateway-load.loadMs | 9392.4ms | 9913.9ms |
| allInternalHooks | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8959.0ms | 9488.6ms |
| allInternalHooks | plugins.gateway-load.plugin.teams-meetings.loadMs | 8957.8ms | 9487.4ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 557.4ms | 809.7ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 530.5ms | 725.5ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 277.8ms | 410.3ms |
| fiftyPlugins | runtime.post-attach | 209.0ms | 230.8ms |
| fiftyPlugins | worker-environments.runtime-imports | 185.3ms | 216.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 531.4ms | 548.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 510.7ms | 513.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 259.9ms | 275.0ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 181.0ms | 182.5ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 165.2ms | 167.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12813.0ms | 0.156 | 1192.0MB | 1322.0MB | 130.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12498.0ms | 0.080 | 1217.8MB | 1343.1MB | 125.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12931.0ms | 0.077 | 1682.7MB | 1803.7MB | 121.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 724.7ms | 740.1ms | 193.2MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 690.5ms | 728.3ms | 193.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 915.8ms | 922.1ms | 193.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.3MB | 0.0MB | 0.0ms | 142.7ms |

## Observations

No data.

