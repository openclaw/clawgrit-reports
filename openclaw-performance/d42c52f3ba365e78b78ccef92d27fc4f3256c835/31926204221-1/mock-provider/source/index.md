# OpenClaw Source Performance

Generated: 2026-08-16T04:25:10.379Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 13098.5ms | 13221.7ms | 13098.5ms | 12375.2ms | 12979.1ms | 119.7ms | 1466.8MB | 1.388 |
| skipChannels | gateway, skip channels | 13235.2ms | 13339.0ms | 13229.0ms | 12502.5ms | 12519.5ms | 120.2ms | 1492.0MB | 1.446 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3808.1ms | 3815.9ms | 3807.9ms | 3414.2ms | 3418.2ms | 119.1ms | 1030.1MB | 1.328 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3956.3ms | 3962.9ms | 3956.1ms | 3423.1ms | 3433.5ms | 120.4ms | 1053.3MB | 1.517 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4905.6ms | 7192.5ms | 4902.0ms | 4741.6ms | 4747.3ms | 115.3ms | 1135.6MB | 1.390 |
| oneInternalHook | gateway, one configured internal hook | 13128.6ms | 13312.4ms | 13128.6ms | 12404.2ms | 12410.3ms | 114.4ms | 1505.6MB | 1.447 |
| allInternalHooks | gateway, all internal hooks | 13176.4ms | 13622.6ms | 13176.4ms | 12489.2ms | 12495.0ms | 114.1ms | 1504.6MB | 1.442 |
| fiftyPlugins | gateway, 50 manifest plugins | 4101.4ms | 4175.1ms | 4101.2ms | 3623.5ms | 3628.3ms | 118.6ms | 1005.8MB | 1.477 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3965.2ms | 4005.6ms | 3965.0ms | 3497.8ms | 3502.7ms | 113.5ms | 999.3MB | 1.498 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 87 bundled plugins | 684.9MB | 638.7MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| migrate-hermes | 588.4MB | 542.1MB | ok |
| llm-task | 586.9MB | 540.7MB | ok |
| codex | 548.1MB | 501.9MB | ok |
| openai | 541.1MB | 494.8MB | ok |
| memory-lancedb | 538.8MB | 492.6MB | ok |
| voice-call | 536.0MB | 489.8MB | ok |
| active-memory | 525.1MB | 478.9MB | ok |
| workboard | 524.7MB | 478.4MB | ok |
| beam | 521.4MB | 475.2MB | ok |
| lmstudio | 430.2MB | 383.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 9643.9ms | 9679.0ms |
| default | plugins.runtime-post-bind | 9026.4ms | 9066.7ms |
| default | plugins.gateway-load.loadMs | 9011.8ms | 9042.5ms |
| default | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8636.7ms | 8657.2ms |
| default | plugins.gateway-load.plugin.teams-meetings.loadMs | 8635.6ms | 8656.0ms |
| skipChannels | runtime.post-attach | 9091.0ms | 9222.5ms |
| skipChannels | plugins.runtime-post-bind | 9051.8ms | 9205.1ms |
| skipChannels | plugins.gateway-load.loadMs | 9036.9ms | 9189.0ms |
| skipChannels | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8662.3ms | 8814.7ms |
| skipChannels | plugins.gateway-load.plugin.teams-meetings.loadMs | 8661.1ms | 8813.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 504.7ms | 509.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 491.9ms | 495.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 239.2ms | 253.0ms |
| preparedRuntimeCatalogStall | sidecars.reply-runtime | 179.3ms | 180.4ms |
| preparedRuntimeCatalogStall | worker-environments.runtime-imports | 168.0ms | 170.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 511.3ms | 518.8ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 508.8ms | 514.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 247.2ms | 249.9ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 208.9ms | 211.2ms |
| preparedRuntimeScaleOne | worker-environments.runtime-imports | 163.0ms | 164.9ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1571.8ms | 1644.2ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1333.5ms | 1354.3ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 980.1ms | 1021.3ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 540.8ms | 556.3ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 467.9ms | 472.2ms |
| oneInternalHook | runtime.post-attach | 8975.7ms | 9221.3ms |
| oneInternalHook | plugins.runtime-post-bind | 8947.5ms | 9202.9ms |
| oneInternalHook | plugins.gateway-load.loadMs | 8932.5ms | 9187.8ms |
| oneInternalHook | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8565.3ms | 8807.9ms |
| oneInternalHook | plugins.gateway-load.plugin.teams-meetings.loadMs | 8564.2ms | 8806.7ms |
| allInternalHooks | runtime.post-attach | 8914.7ms | 9470.8ms |
| allInternalHooks | plugins.runtime-post-bind | 8880.0ms | 9440.4ms |
| allInternalHooks | plugins.gateway-load.loadMs | 8864.1ms | 9425.4ms |
| allInternalHooks | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8515.1ms | 9037.6ms |
| allInternalHooks | plugins.gateway-load.plugin.teams-meetings.loadMs | 8513.9ms | 9036.4ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 544.4ms | 570.0ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 513.1ms | 521.3ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 270.2ms | 279.4ms |
| fiftyPlugins | sidecars.model-runtime | 179.6ms | 183.2ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 166.1ms | 169.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 531.6ms | 545.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 510.8ms | 516.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 263.2ms | 267.3ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 176.0ms | 177.8ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 162.5ms | 164.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12463.0ms | 0.080 | 1242.3MB | 1377.8MB | 135.5MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12490.0ms | 0.160 | 1337.4MB | 1364.3MB | 26.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12591.0ms | 0.079 | 1206.8MB | 1271.2MB | 64.4MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 728.0ms | 732.4ms | 193.0MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 697.6ms | 747.4ms | 192.8MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 937.2ms | 943.5ms | 193.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.3MB | 0.0MB | 0.0ms | 150.9ms |

## Observations

No data.

