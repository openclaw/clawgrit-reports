# OpenClaw Source Performance

Generated: 2026-08-13T01:37:11.579Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4844.2ms | 4950.6ms | 4843.9ms | 4026.0ms | 4715.9ms | 127.8ms | 1144.2MB | 1.526 |
| skipChannels | gateway, skip channels | 4614.5ms | 4971.6ms | 4614.4ms | 3868.7ms | 3875.1ms | 117.5ms | 1138.3MB | 1.517 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4201.1ms | 4225.3ms | 4201.1ms | 3793.7ms | 3800.1ms | 117.4ms | 940.8MB | 1.509 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4228.1ms | 4274.1ms | 4227.8ms | 3688.3ms | 3694.1ms | 118.8ms | 960.3MB | 1.455 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 7503.6ms | 7990.3ms | 7503.1ms | 5272.4ms | 5280.5ms | 123.8ms | 1128.7MB | 1.466 |
| oneInternalHook | gateway, one configured internal hook | 4275.9ms | 4334.9ms | 4275.7ms | 3590.6ms | 3596.6ms | 128.1ms | 1188.1MB | 1.405 |
| allInternalHooks | gateway, all internal hooks | 4403.8ms | 4611.7ms | 4403.6ms | 3700.5ms | 3706.5ms | 120.4ms | 1130.8MB | 1.518 |
| fiftyPlugins | gateway, 50 manifest plugins | 4480.4ms | 4486.6ms | 4480.2ms | 3957.0ms | 3962.4ms | 124.7ms | 1056.7MB | 1.372 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4572.3ms | 4604.1ms | 4572.1ms | 3996.3ms | 4002.4ms | 119.0ms | 980.5MB | 1.369 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 87 bundled plugins | 672.9MB | 626.6MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 582.5MB | 536.3MB | ok |
| migrate-hermes | 581.8MB | 535.6MB | ok |
| active-memory | 546.8MB | 500.6MB | ok |
| codex | 544.3MB | 498.1MB | ok |
| llm-task | 535.7MB | 489.5MB | ok |
| openai | 532.3MB | 486.1MB | ok |
| workboard | 531.9MB | 485.7MB | ok |
| memory-lancedb | 524.3MB | 478.0MB | ok |
| beam | 512.6MB | 466.3MB | ok |
| google | 419.4MB | 373.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 906.3ms | 908.2ms |
| default | cli.main.gateway-run-bootstrap | 721.4ms | 721.8ms |
| default | cli.main.gateway-run-select-environment | 535.6ms | 572.9ms |
| default | sidecars.model-runtime | 438.7ms | 484.1ms |
| default | sidecars.model-runtime-build.workspaceFactsMs | 413.6ms | 472.0ms |
| skipChannels | cli.main.gateway-run-bootstrap | 671.6ms | 832.0ms |
| skipChannels | cli.main.gateway-run-select-environment | 523.3ms | 619.5ms |
| skipChannels | sidecars.model-runtime | 403.5ms | 441.9ms |
| skipChannels | sidecars.model-runtime-build.workspaceFactsMs | 392.3ms | 430.3ms |
| skipChannels | sidecars.model-runtime-build.runtimePluginMs | 367.9ms | 404.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 695.1ms | 711.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 563.5ms | 569.8ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 272.1ms | 302.1ms |
| preparedRuntimeCatalogStall | sidecars.reply-runtime | 187.4ms | 190.0ms |
| preparedRuntimeCatalogStall | gateway.server-start-import | 159.0ms | 161.8ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 704.2ms | 718.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 534.4ms | 534.8ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 268.8ms | 273.9ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 212.8ms | 223.7ms |
| preparedRuntimeScaleOne | gateway.server-start-import | 147.9ms | 148.3ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1904.9ms | 2078.3ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1384.4ms | 1434.4ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 1079.8ms | 1099.4ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 590.3ms | 608.8ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 568.8ms | 585.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 594.7ms | 602.7ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 495.2ms | 500.8ms |
| oneInternalHook | sidecars.model-runtime | 393.4ms | 405.2ms |
| oneInternalHook | sidecars.model-runtime-build.workspaceFactsMs | 382.4ms | 394.4ms |
| oneInternalHook | sidecars.model-runtime-build.runtimePluginMs | 366.5ms | 371.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 647.0ms | 685.8ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 504.4ms | 585.7ms |
| allInternalHooks | sidecars.model-runtime | 394.5ms | 395.8ms |
| allInternalHooks | sidecars.model-runtime-build.workspaceFactsMs | 383.3ms | 385.3ms |
| allInternalHooks | sidecars.model-runtime-build.runtimePluginMs | 364.8ms | 377.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 756.0ms | 775.2ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 547.9ms | 557.8ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 292.4ms | 300.1ms |
| fiftyPlugins | sidecars.model-runtime | 202.7ms | 207.2ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 189.5ms | 194.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 784.9ms | 829.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 535.5ms | 604.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 298.2ms | 309.4ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 214.6ms | 219.1ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 200.6ms | 201.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13448.0ms | 0.149 | 1276.3MB | 1287.9MB | 11.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 13193.0ms | 0.152 | 1285.1MB | 1362.9MB | 77.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 14405.0ms | 0.139 | 1129.6MB | 1325.3MB | 195.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 731.6ms | 739.9ms | 190.9MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 745.6ms | 758.1ms | 191.0MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1044.7ms | 1064.6ms | 190.8MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.3MB | 0.0MB | 0.0ms | 155.9ms |

## Observations

No data.

