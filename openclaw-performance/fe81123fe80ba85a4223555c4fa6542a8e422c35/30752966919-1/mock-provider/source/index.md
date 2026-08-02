# OpenClaw Source Performance

Generated: 2026-08-02T14:55:15.937Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3189.3ms | 3227.1ms | 3189.1ms | 2872.9ms | 3141.3ms | 216.1ms | 1021.0MB | 1.263 |
| skipChannels | gateway, skip channels | 2854.9ms | 2914.7ms | 2854.7ms | 2820.1ms | 2835.0ms | 217.9ms | 913.6MB | 1.429 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 2736.5ms | 2786.8ms | 2730.6ms | 2683.9ms | 2692.7ms | 214.0ms | 844.7MB | 1.477 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 2712.8ms | 2718.9ms | 2712.5ms | 2636.0ms | 2644.4ms | 209.4ms | 851.7MB | 1.404 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 2735.4ms | 2849.3ms | 2735.1ms | 2660.5ms | 2668.8ms | 211.7ms | 890.1MB | 1.513 |
| oneInternalHook | gateway, one configured internal hook | 2879.4ms | 2935.3ms | 2879.1ms | 2842.0ms | 2857.5ms | 224.5ms | 899.5MB | 1.398 |
| allInternalHooks | gateway, all internal hooks | 2889.3ms | 2909.7ms | 2889.1ms | 2853.9ms | 2868.7ms | 217.4ms | 888.5MB | 1.389 |
| fiftyPlugins | gateway, 50 manifest plugins | 3016.6ms | 3025.1ms | 3016.2ms | 2929.4ms | 2967.4ms | 219.2ms | 848.1MB | 1.342 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3265.4ms | 3275.6ms | 3265.2ms | 2770.5ms | 2812.7ms | 220.9ms | 851.9MB | 1.526 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.0MB | 0.0MB | ok |
| all 87 bundled plugins | 685.3MB | 639.3MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| migrate-hermes | 545.3MB | 499.4MB | ok |
| acpx | 539.4MB | 493.4MB | ok |
| llm-task | 535.7MB | 489.7MB | ok |
| codex | 533.8MB | 487.8MB | ok |
| memory-lancedb | 532.3MB | 486.3MB | ok |
| openai | 529.4MB | 483.5MB | ok |
| google-meet | 528.3MB | 482.4MB | ok |
| workboard | 510.6MB | 464.6MB | ok |
| xai | 509.2MB | 463.3MB | ok |
| anthropic | 507.6MB | 461.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 556.5ms | 564.3ms |
| default | cli.main.gateway-run-select-environment | 304.3ms | 307.3ms |
| default | plugins.runtime-post-bind | 273.4ms | 285.4ms |
| default | plugins.gateway-load.loadMs | 248.9ms | 259.5ms |
| default | sidecars.model-runtime | 220.5ms | 225.5ms |
| skipChannels | cli.main.gateway-run-select-environment | 301.4ms | 314.5ms |
| skipChannels | runtime.post-attach | 282.3ms | 307.4ms |
| skipChannels | plugins.runtime-post-bind | 260.9ms | 279.5ms |
| skipChannels | plugins.gateway-load.loadMs | 238.0ms | 252.8ms |
| skipChannels | cli.main.gateway-run-pre-bootstrap | 141.9ms | 144.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 298.9ms | 301.5ms |
| preparedRuntimeCatalogStall | sidecars.model-runtime | 253.9ms | 258.2ms |
| preparedRuntimeCatalogStall | sidecars.model-runtime-build.workspaceFactsMs | 212.9ms | 217.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 150.1ms | 154.8ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 127.9ms | 131.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 295.0ms | 298.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 150.9ms | 157.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 129.8ms | 130.8ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 126.9ms | 128.6ms |
| preparedRuntimeScaleOne | sidecars.model-runtime-build.workspaceFactsMs | 121.9ms | 123.6ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 382.5ms | 388.2ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 374.7ms | 379.9ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 290.2ms | 300.2ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.staticProviderCatalogMs | 204.5ms | 204.8ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-pre-bootstrap | 159.3ms | 164.9ms |
| oneInternalHook | runtime.post-attach | 300.7ms | 313.0ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 292.4ms | 292.9ms |
| oneInternalHook | plugins.runtime-post-bind | 279.3ms | 285.2ms |
| oneInternalHook | plugins.gateway-load.loadMs | 251.4ms | 257.7ms |
| oneInternalHook | cli.main.gateway-run-pre-bootstrap | 149.3ms | 156.7ms |
| allInternalHooks | runtime.post-attach | 293.3ms | 300.6ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 291.3ms | 291.9ms |
| allInternalHooks | plugins.runtime-post-bind | 273.9ms | 274.0ms |
| allInternalHooks | plugins.gateway-load.loadMs | 247.2ms | 249.3ms |
| allInternalHooks | cli.main.gateway-run-pre-bootstrap | 146.1ms | 148.2ms |
| fiftyPlugins | sidecars.model-runtime | 344.1ms | 346.7ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 338.0ms | 340.6ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 323.0ms | 325.2ms |
| fiftyPlugins | runtime.post-attach | 208.8ms | 211.1ms |
| fiftyPlugins | sidecars.model-runtime-build.runtimePluginMs | 195.5ms | 196.3ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 334.4ms | 336.7ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 328.0ms | 329.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 318.1ms | 328.2ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.runtimePluginMs | 184.4ms | 184.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 173.1ms | 175.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 16019.0ms | 0.062 | 2708.2MB | 1387.4MB | -1320.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 15432.0ms | 0.130 | 1450.6MB | 1462.5MB | 11.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 15097.0ms | 0.199 | 1252.2MB | 1308.5MB | 56.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 688.4ms | 688.4ms | 186.8MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 646.2ms | 654.7ms | 187.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 857.8ms | 913.4ms | 187.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 134.8ms |

## Observations

No data.

