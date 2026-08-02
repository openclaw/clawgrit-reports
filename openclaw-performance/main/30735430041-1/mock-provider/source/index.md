# OpenClaw Source Performance

Generated: 2026-08-02T06:18:17.512Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3068.2ms | 3072.6ms | 3068.1ms | 2757.1ms | 3014.9ms | 206.2ms | 974.2MB | 1.318 |
| skipChannels | gateway, skip channels | 2785.0ms | 2797.5ms | 2784.7ms | 2752.1ms | 2760.7ms | 216.9ms | 928.1MB | 1.444 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 2626.2ms | 2635.9ms | 2625.9ms | 2562.6ms | 2571.7ms | 210.1ms | 828.1MB | 1.530 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 2653.0ms | 2678.9ms | 2651.3ms | 2585.1ms | 2594.0ms | 216.0ms | 828.6MB | 1.414 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 2693.6ms | 2734.2ms | 2677.1ms | 2610.6ms | 2617.2ms | 214.0ms | 925.8MB | 1.285 |
| oneInternalHook | gateway, one configured internal hook | 2810.6ms | 2824.2ms | 2810.4ms | 2777.7ms | 2791.6ms | 215.1ms | 912.4MB | 1.446 |
| allInternalHooks | gateway, all internal hooks | 2803.9ms | 2852.6ms | 2803.7ms | 2768.3ms | 2782.7ms | 218.6ms | 931.2MB | 1.435 |
| fiftyPlugins | gateway, 50 manifest plugins | 2907.4ms | 2907.8ms | 2907.2ms | 2825.0ms | 2864.6ms | 213.1ms | 853.9MB | 1.387 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3199.0ms | 3207.2ms | 3173.3ms | 2712.9ms | 2749.1ms | 218.2ms | 862.7MB | 1.263 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 974.8MB | 974.2MB | -0.6MB (-0.1%) | +16.8MB (+3.7%) | stable |
| gateway boot | skipChannels | 963.2MB | 928.1MB | -35.0MB (-3.6%) | +46.4MB (+12.1%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 857.9MB | 828.1MB | -29.8MB (-3.5%) | -49.7MB (-14.4%) | stable |
| gateway boot | preparedRuntimeScaleOne | 864.3MB | 828.6MB | -35.8MB (-4.1%) | -7.8MB (-2.3%) | stable |
| gateway boot | preparedRuntimeScaleMany | 893.5MB | 925.8MB | +32.3MB (+3.6%) | +16.0MB (+4.8%) | stable |
| gateway boot | oneInternalHook | 976.2MB | 912.4MB | -63.8MB (-6.5%) | -11.1MB (-2.7%) | stable |
| gateway boot | allInternalHooks | 997.2MB | 931.2MB | -66.0MB (-6.6%) | -69.7MB (-13.9%) | stable |
| gateway boot | fiftyPlugins | 837.0MB | 853.9MB | +16.9MB (+2.0%) | +10.4MB (+3.7%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 834.9MB | 862.7MB | +27.8MB (+3.3%) | +59.7MB (+19.7%) | stable |
| cli | configGetGatewayPort | 186.6MB | 187.3MB | +0.6MB (+0.3%) | n/a | stable |
| mock hello | gateway RSS delta avg | -313.7MB | -354.7MB | -41.0MB (+13.1%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.5MB | 0.0MB | ok |
| all 87 bundled plugins | 679.0MB | 634.5MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| openai | 581.2MB | 536.7MB | ok |
| anthropic | 571.9MB | 527.5MB | ok |
| memory-lancedb | 543.6MB | 499.1MB | ok |
| acpx | 538.0MB | 493.6MB | ok |
| llm-task | 536.8MB | 492.3MB | ok |
| migrate-hermes | 536.5MB | 492.1MB | ok |
| codex | 535.4MB | 490.9MB | ok |
| google-meet | 534.3MB | 489.8MB | ok |
| active-memory | 510.2MB | 465.7MB | ok |
| voice-call | 507.9MB | 463.5MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 537.5ms | 543.5ms |
| default | cli.main.gateway-run-select-environment | 284.6ms | 290.4ms |
| default | plugins.runtime-post-bind | 264.5ms | 265.8ms |
| default | plugins.gateway-load.loadMs | 237.2ms | 241.2ms |
| default | sidecars.model-runtime | 218.0ms | 220.1ms |
| skipChannels | runtime.post-attach | 284.9ms | 294.3ms |
| skipChannels | cli.main.gateway-run-select-environment | 284.2ms | 284.9ms |
| skipChannels | plugins.runtime-post-bind | 266.4ms | 268.6ms |
| skipChannels | plugins.gateway-load.loadMs | 240.0ms | 241.9ms |
| skipChannels | cli.main.gateway-run-pre-bootstrap | 142.6ms | 148.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 286.8ms | 286.8ms |
| preparedRuntimeCatalogStall | sidecars.model-runtime | 250.1ms | 265.6ms |
| preparedRuntimeCatalogStall | sidecars.model-runtime-build.workspaceFactsMs | 209.2ms | 222.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 144.7ms | 149.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 124.2ms | 126.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 291.9ms | 294.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 153.0ms | 157.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 131.0ms | 135.0ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 126.7ms | 127.7ms |
| preparedRuntimeScaleOne | sidecars.model-runtime-build.workspaceFactsMs | 121.8ms | 122.4ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 380.3ms | 381.5ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 372.2ms | 373.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 294.3ms | 311.0ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.staticProviderCatalogMs | 203.7ms | 204.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-pre-bootstrap | 150.3ms | 154.3ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 294.5ms | 296.7ms |
| oneInternalHook | runtime.post-attach | 293.8ms | 294.8ms |
| oneInternalHook | plugins.runtime-post-bind | 268.9ms | 270.0ms |
| oneInternalHook | plugins.gateway-load.loadMs | 242.5ms | 247.5ms |
| oneInternalHook | cli.main.gateway-run-pre-bootstrap | 138.5ms | 141.3ms |
| allInternalHooks | runtime.post-attach | 286.7ms | 287.5ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 285.4ms | 287.2ms |
| allInternalHooks | plugins.runtime-post-bind | 267.6ms | 269.1ms |
| allInternalHooks | plugins.gateway-load.loadMs | 241.2ms | 246.4ms |
| allInternalHooks | cli.main.gateway-run-pre-bootstrap | 140.5ms | 148.7ms |
| fiftyPlugins | sidecars.model-runtime | 336.7ms | 344.0ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 330.6ms | 338.0ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 306.3ms | 309.8ms |
| fiftyPlugins | runtime.post-attach | 205.9ms | 217.6ms |
| fiftyPlugins | sidecars.model-runtime-build.runtimePluginMs | 192.0ms | 195.7ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 324.1ms | 334.4ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 317.8ms | 328.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 305.0ms | 319.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 178.4ms | 179.9ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.runtimePluginMs | 175.3ms | 184.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 15927.0ms | 0.000 | 2759.7MB | 1666.8MB | -1092.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 15651.0ms | 0.128 | 1686.4MB | 1698.3MB | 12.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 15482.0ms | 0.129 | 1681.1MB | 1697.9MB | 16.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 694.8ms | 702.2ms | 187.7MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 621.5ms | 637.4ms | 187.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 863.2ms | 894.0ms | 187.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 137.1ms |

## Observations

No data.

