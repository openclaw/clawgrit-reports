# OpenClaw Source Performance

Generated: 2026-08-20T10:17:58.708Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 15013.3ms | 15136.2ms | 15013.2ms | 4108.9ms | 14837.7ms | 124.0ms | 1378.1MB | 1.399 |
| skipChannels | gateway, skip channels | 14569.4ms | 14895.3ms | 14562.9ms | 4097.9ms | 3660.4ms | 124.2ms | 1375.7MB | 1.410 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4307.5ms | 4383.4ms | 4302.2ms | 3963.9ms | 3741.2ms | 124.0ms | 922.8MB | 1.422 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4389.2ms | 4418.3ms | 4389.2ms | 3909.7ms | 3717.5ms | 125.4ms | 923.2MB | 1.396 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 7017.9ms | 7371.6ms | 7017.8ms | 5123.6ms | 4923.1ms | 113.5ms | 1097.5MB | 1.357 |
| oneInternalHook | gateway, one configured internal hook | 18162.1ms | 21664.1ms | 18162.0ms | 4694.3ms | 4198.9ms | 142.5ms | 1440.4MB | 1.385 |
| allInternalHooks | gateway, all internal hooks | 16165.7ms | 16877.0ms | 16165.7ms | 4363.7ms | 3884.9ms | 123.2ms | 1364.3MB | 1.422 |
| fiftyPlugins | gateway, 50 manifest plugins | 4516.1ms | 4540.4ms | 4516.0ms | 3922.0ms | 3653.1ms | 112.8ms | 1081.3MB | 1.339 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4322.2ms | 4332.2ms | 4321.0ms | 3874.9ms | 3696.6ms | 115.3ms | 1099.6MB | 1.388 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.4MB | 0.0MB | ok |
| all 147 bundled plugins | 884.6MB | 838.2MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| clickclack | 683.1MB | 636.8MB | ok |
| workboard | 601.5MB | 555.1MB | ok |
| opencode | 597.1MB | 550.8MB | ok |
| codex | 593.9MB | 547.5MB | ok |
| migrate-hermes | 590.5MB | 544.1MB | ok |
| active-memory | 586.5MB | 540.1MB | ok |
| beam | 582.1MB | 535.7MB | ok |
| memory-lancedb | 552.7MB | 506.3MB | ok |
| openai | 545.0MB | 498.7MB | ok |
| canvas | 544.8MB | 498.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 11093.1ms | 11238.9ms |
| default | sidecars.model-runtime | 10503.5ms | 10667.1ms |
| default | sidecars.model-runtime-build.workspaceFactsMs | 10491.3ms | 10655.4ms |
| default | sidecars.model-runtime-build.runtimePluginMs | 10481.7ms | 10637.7ms |
| default | cli.main.gateway-run-bootstrap | 629.4ms | 667.5ms |
| skipChannels | sidecars.model-runtime | 10283.2ms | 10398.3ms |
| skipChannels | sidecars.model-runtime-build.workspaceFactsMs | 10270.9ms | 10377.0ms |
| skipChannels | sidecars.model-runtime-build.runtimePluginMs | 10261.9ms | 10368.6ms |
| skipChannels | cli.main.gateway-run-bootstrap | 603.4ms | 630.3ms |
| skipChannels | cli.main.gateway-run-select-environment | 536.4ms | 558.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 571.0ms | 580.7ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 530.3ms | 583.0ms |
| preparedRuntimeCatalogStall | gateway.shutdown-runtime-import | 285.9ms | 302.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 264.5ms | 287.1ms |
| preparedRuntimeCatalogStall | worker-environments.runtime-imports | 219.6ms | 220.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 575.3ms | 585.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 546.6ms | 561.1ms |
| preparedRuntimeScaleOne | gateway.shutdown-runtime-import | 286.2ms | 306.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 261.5ms | 262.5ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 239.7ms | 252.8ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1614.8ms | 1621.3ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1449.2ms | 1546.6ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 967.4ms | 1000.4ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 556.6ms | 591.7ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 348.1ms | 358.8ms |
| oneInternalHook | sidecars.model-runtime | 12513.1ms | 16640.0ms |
| oneInternalHook | sidecars.model-runtime-build.workspaceFactsMs | 12500.9ms | 16623.9ms |
| oneInternalHook | sidecars.model-runtime-build.runtimePluginMs | 12491.8ms | 16607.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 729.3ms | 837.9ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 650.4ms | 674.4ms |
| allInternalHooks | sidecars.model-runtime | 11528.5ms | 11921.7ms |
| allInternalHooks | sidecars.model-runtime-build.workspaceFactsMs | 11517.1ms | 11909.5ms |
| allInternalHooks | sidecars.model-runtime-build.runtimePluginMs | 11506.7ms | 11900.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 644.9ms | 673.2ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 571.1ms | 575.7ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 545.5ms | 549.1ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 537.9ms | 564.5ms |
| fiftyPlugins | sidecars.model-runtime | 355.6ms | 381.3ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 339.5ms | 365.2ms |
| fiftyPlugins | gateway.shutdown-runtime-import | 275.2ms | 285.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 568.0ms | 568.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 563.8ms | 569.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 275.2ms | 288.5ms |
| fiftyStartupLazyPlugins | gateway.shutdown-runtime-import | 263.3ms | 268.3ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 213.0ms | 215.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12721.0ms | 0.079 | 1234.8MB | 1268.6MB | 33.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12966.0ms | 0.077 | 1181.7MB | 1201.2MB | 19.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12986.0ms | 0.077 | 1182.7MB | 1219.3MB | 36.6MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 681.1ms | 692.7ms | 206.2MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 676.1ms | 739.4ms | 206.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1147.9ms | 1215.9ms | 205.8MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.4MB | 0.0MB | 0.0ms | 167.1ms |

## Observations

No data.

