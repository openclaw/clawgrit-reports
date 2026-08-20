# OpenClaw Source Performance

Generated: 2026-08-20T12:42:38.563Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 18287.6ms | 18326.7ms | 18309.9ms | 4564.8ms | 18055.6ms | 139.8ms | 1939.0MB | 1.419 |
| skipChannels | gateway, skip channels | 14688.5ms | 16203.5ms | 14688.4ms | 4178.1ms | 3685.5ms | 122.6ms | 1451.7MB | 1.362 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3835.9ms | 3915.4ms | 3835.4ms | 3553.3ms | 3379.7ms | 113.2ms | 962.8MB | 1.317 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3978.5ms | 4034.7ms | 3978.5ms | 3507.5ms | 3335.0ms | 116.3ms | 1069.3MB | 1.265 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 7042.2ms | 8026.2ms | 7042.2ms | 5262.5ms | 5073.4ms | 126.9ms | 951.7MB | 1.371 |
| oneInternalHook | gateway, one configured internal hook | 14499.0ms | 16211.3ms | 14499.0ms | 4554.8ms | 4117.4ms | 131.2ms | 1589.0MB | 1.419 |
| allInternalHooks | gateway, all internal hooks | 13618.9ms | 14679.3ms | 13618.8ms | 4059.1ms | 3627.0ms | 113.9ms | 1406.1MB | 1.409 |
| fiftyPlugins | gateway, 50 manifest plugins | 4775.2ms | 4834.6ms | 4774.7ms | 4212.1ms | 3926.1ms | 126.5ms | 1053.6MB | 1.307 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4594.1ms | 4641.0ms | 4594.1ms | 4139.5ms | 3941.3ms | 124.8ms | 1097.3MB | 1.318 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 147 bundled plugins | 878.9MB | 832.6MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| xai | 598.2MB | 552.0MB | ok |
| memory-lancedb | 596.4MB | 550.2MB | ok |
| clickclack | 593.8MB | 547.5MB | ok |
| beam | 592.5MB | 546.2MB | ok |
| openai | 591.4MB | 545.2MB | ok |
| opencode | 590.1MB | 543.9MB | ok |
| workboard | 589.9MB | 543.7MB | ok |
| migrate-hermes | 582.7MB | 536.5MB | ok |
| llm-task | 579.1MB | 532.9MB | ok |
| active-memory | 549.0MB | 502.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 13899.1ms | 13932.6ms |
| default | sidecars.model-runtime | 13231.1ms | 13308.0ms |
| default | sidecars.model-runtime-build.workspaceFactsMs | 13215.8ms | 13296.1ms |
| default | sidecars.model-runtime-build.runtimePluginMs | 13204.2ms | 13286.3ms |
| default | cli.main.gateway-run-bootstrap | 728.4ms | 740.7ms |
| skipChannels | sidecars.model-runtime | 9820.5ms | 11712.6ms |
| skipChannels | sidecars.model-runtime-build.workspaceFactsMs | 9809.9ms | 11205.6ms |
| skipChannels | sidecars.model-runtime-build.runtimePluginMs | 9801.0ms | 11156.9ms |
| skipChannels | cli.main.gateway-run-bootstrap | 604.5ms | 629.3ms |
| skipChannels | cli.main.gateway-run-select-environment | 534.1ms | 668.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 524.2ms | 531.8ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 469.0ms | 506.7ms |
| preparedRuntimeCatalogStall | gateway.shutdown-runtime-import | 262.5ms | 272.9ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 230.4ms | 232.5ms |
| preparedRuntimeCatalogStall | worker-environments.runtime-imports | 191.8ms | 192.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 511.5ms | 526.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 469.5ms | 471.7ms |
| preparedRuntimeScaleOne | gateway.shutdown-runtime-import | 269.8ms | 276.5ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 229.7ms | 232.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 226.2ms | 228.7ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1667.8ms | 1779.0ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1358.8ms | 1379.8ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 1037.6ms | 1128.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 602.3ms | 834.5ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 346.1ms | 346.5ms |
| oneInternalHook | sidecars.model-runtime | 9656.9ms | 10995.5ms |
| oneInternalHook | sidecars.model-runtime-build.workspaceFactsMs | 9645.1ms | 10976.7ms |
| oneInternalHook | sidecars.model-runtime-build.runtimePluginMs | 9636.1ms | 10968.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 665.3ms | 808.2ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 554.0ms | 655.8ms |
| allInternalHooks | sidecars.model-runtime | 9288.5ms | 10169.1ms |
| allInternalHooks | sidecars.model-runtime-build.workspaceFactsMs | 9270.1ms | 10158.2ms |
| allInternalHooks | sidecars.model-runtime-build.runtimePluginMs | 9260.8ms | 10150.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 629.3ms | 719.1ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 501.7ms | 519.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 581.0ms | 636.2ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 579.4ms | 600.2ms |
| fiftyPlugins | sidecars.model-runtime | 368.1ms | 403.8ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 355.3ms | 390.4ms |
| fiftyPlugins | gateway.shutdown-runtime-import | 288.0ms | 298.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 589.2ms | 608.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 588.9ms | 622.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 294.5ms | 304.0ms |
| fiftyStartupLazyPlugins | gateway.shutdown-runtime-import | 287.4ms | 288.0ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 230.1ms | 230.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 14547.0ms | 0.069 | 1194.2MB | 1228.5MB | 34.3MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 14705.0ms | 0.068 | 1151.8MB | 1190.3MB | 38.5MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 15855.0ms | 0.126 | 1264.1MB | 1298.1MB | 33.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 1078.1ms | 1132.5ms | 206.6MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 1136.9ms | 1203.1ms | 205.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 2002.4ms | 2017.9ms | 207.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.4MB | 0.0MB | 0.1ms | 304.8ms |

## Observations

No data.

