# OpenClaw Source Performance

Generated: 2026-08-16T18:41:17.238Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 13335.8ms | 13768.1ms | 13335.8ms | 3757.7ms | 13205.4ms | 113.5ms | 1481.7MB | 1.426 |
| skipChannels | gateway, skip channels | 13607.3ms | 13673.6ms | 13603.9ms | 3845.6ms | 3851.2ms | 118.9ms | 1473.1MB | 1.422 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3767.6ms | 3860.6ms | 3767.3ms | 3333.9ms | 3338.9ms | 114.7ms | 970.6MB | 1.340 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3744.6ms | 3777.9ms | 3744.4ms | 3194.1ms | 3199.2ms | 110.1ms | 1023.4MB | 1.346 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 7361.5ms | 7365.8ms | 4941.0ms | 4750.0ms | 4763.7ms | 121.8ms | 1238.2MB | 1.358 |
| oneInternalHook | gateway, one configured internal hook | 12690.3ms | 13038.3ms | 12690.4ms | 3620.6ms | 3637.0ms | 115.0ms | 2301.1MB | 1.457 |
| allInternalHooks | gateway, all internal hooks | 12579.6ms | 12804.2ms | 12579.5ms | 3519.9ms | 3531.8ms | 115.4ms | 1580.6MB | 1.445 |
| fiftyPlugins | gateway, 50 manifest plugins | 4288.7ms | 4296.2ms | 4285.3ms | 3580.3ms | 3585.3ms | 116.3ms | 1156.3MB | 1.415 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4148.8ms | 4187.4ms | 4148.6ms | 3454.6ms | 3459.6ms | 116.1ms | 1155.4MB | 1.449 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 148 bundled plugins | 914.7MB | 868.4MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| clickclack | 588.2MB | 541.9MB | ok |
| llm-task | 586.3MB | 540.0MB | ok |
| migrate-hermes | 581.4MB | 535.1MB | ok |
| active-memory | 579.9MB | 533.7MB | ok |
| memory-lancedb | 551.4MB | 505.2MB | ok |
| voice-call | 549.2MB | 502.9MB | ok |
| openai | 544.8MB | 498.5MB | ok |
| beam | 541.6MB | 495.3MB | ok |
| codex | 540.7MB | 494.4MB | ok |
| workboard | 539.5MB | 493.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 9851.4ms | 10176.4ms |
| default | sidecars.model-runtime | 9332.6ms | 9654.7ms |
| default | sidecars.model-runtime-build.workspaceFactsMs | 9320.9ms | 9643.2ms |
| default | sidecars.model-runtime-build.runtimePluginMs | 9311.7ms | 9634.7ms |
| default | cli.main.gateway-run-bootstrap | 565.3ms | 566.8ms |
| skipChannels | sidecars.model-runtime | 9489.4ms | 9534.7ms |
| skipChannels | sidecars.model-runtime-build.workspaceFactsMs | 9477.0ms | 9522.7ms |
| skipChannels | sidecars.model-runtime-build.runtimePluginMs | 9467.9ms | 9514.1ms |
| skipChannels | cli.main.gateway-run-bootstrap | 592.3ms | 602.2ms |
| skipChannels | cli.main.gateway-run-select-environment | 525.1ms | 542.8ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 502.4ms | 517.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 465.0ms | 482.7ms |
| preparedRuntimeCatalogStall | gateway.shutdown-runtime-import | 277.4ms | 288.9ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 234.9ms | 242.1ms |
| preparedRuntimeCatalogStall | worker-environments.runtime-imports | 181.0ms | 188.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 476.3ms | 485.8ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 442.3ms | 466.6ms |
| preparedRuntimeScaleOne | gateway.shutdown-runtime-import | 258.6ms | 282.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 225.3ms | 226.0ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 199.4ms | 202.9ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1525.0ms | 1531.3ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1271.1ms | 1286.0ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 965.9ms | 969.8ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 790.4ms | 796.4ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 749.2ms | 755.0ms |
| oneInternalHook | sidecars.model-runtime | 8735.7ms | 9073.1ms |
| oneInternalHook | sidecars.model-runtime-build.workspaceFactsMs | 8716.8ms | 9060.9ms |
| oneInternalHook | sidecars.model-runtime-build.runtimePluginMs | 8708.6ms | 9037.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 532.2ms | 534.6ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 481.0ms | 492.1ms |
| allInternalHooks | sidecars.model-runtime | 8666.3ms | 8751.5ms |
| allInternalHooks | sidecars.model-runtime-build.workspaceFactsMs | 8654.7ms | 8739.8ms |
| allInternalHooks | sidecars.model-runtime-build.runtimePluginMs | 8646.2ms | 8731.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 523.4ms | 545.6ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 469.7ms | 488.7ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 521.9ms | 532.1ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 508.7ms | 528.4ms |
| fiftyPlugins | sidecars.model-runtime | 389.9ms | 394.4ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 376.6ms | 380.7ms |
| fiftyPlugins | sidecars.model-runtime-build.runtimePluginMs | 304.7ms | 309.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 522.2ms | 524.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 496.8ms | 511.7ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 384.8ms | 399.1ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 371.7ms | 385.6ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.runtimePluginMs | 302.3ms | 309.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13468.0ms | 0.074 | 1267.8MB | 1302.6MB | 34.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12641.0ms | 0.079 | 1257.2MB | 1320.4MB | 63.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12315.0ms | 0.081 | 1303.2MB | 1337.7MB | 34.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 749.9ms | 759.7ms | 193.8MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 714.1ms | 724.7ms | 193.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 980.4ms | 1077.8ms | 193.8MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.3MB | 0.0MB | 0.0ms | 143.9ms |

## Observations

No data.

