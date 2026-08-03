# OpenClaw Source Performance

Generated: 2026-08-03T06:26:40.592Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3453.5ms | 3535.3ms | 3453.4ms | 3094.2ms | 3395.5ms | 236.5ms | 1004.1MB | 1.463 |
| skipChannels | gateway, skip channels | 3200.1ms | 3200.4ms | 3199.7ms | 3133.1ms | 3144.6ms | 237.0ms | 903.2MB | 1.562 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3031.7ms | 3062.7ms | 3031.2ms | 2838.8ms | 2848.3ms | 225.1ms | 856.4MB | 1.402 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3119.0ms | 3333.3ms | 3119.0ms | 2912.0ms | 2930.6ms | 239.0ms | 834.0MB | 1.569 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 3555.9ms | 5258.2ms | 3041.8ms | 2956.0ms | 2966.2ms | 239.6ms | 997.4MB | 1.428 |
| oneInternalHook | gateway, one configured internal hook | 3346.4ms | 3404.8ms | 3346.2ms | 3305.6ms | 3320.3ms | 252.1ms | 911.7MB | 1.519 |
| allInternalHooks | gateway, all internal hooks | 3363.1ms | 3399.3ms | 3362.6ms | 3301.2ms | 3316.4ms | 273.2ms | 894.3MB | 1.536 |
| fiftyPlugins | gateway, 50 manifest plugins | 3430.9ms | 3472.5ms | 3430.7ms | 3363.6ms | 3405.8ms | 254.2ms | 839.6MB | 1.516 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3627.9ms | 3653.6ms | 3627.7ms | 3017.5ms | 3068.7ms | 235.4ms | 789.2MB | 1.391 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 974.2MB | 1004.1MB | +29.9MB (+3.1%) | +69.9MB (+14.7%) | stable |
| gateway boot | skipChannels | 928.1MB | 903.2MB | -24.9MB (-2.7%) | +14.5MB (+3.4%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 828.1MB | 856.4MB | +28.4MB (+3.4%) | +45.8MB (+15.5%) | stable |
| gateway boot | preparedRuntimeScaleOne | 828.6MB | 834.0MB | +5.4MB (+0.7%) | +2.4MB (+0.7%) | stable |
| gateway boot | preparedRuntimeScaleMany | 925.8MB | 997.4MB | +71.6MB (+7.7%) | -2.7MB (-0.8%) | stable |
| gateway boot | oneInternalHook | 912.4MB | 911.7MB | -0.7MB (-0.1%) | +50.2MB (+12.8%) | stable |
| gateway boot | allInternalHooks | 931.2MB | 894.3MB | -36.9MB (-4.0%) | +12.0MB (+2.8%) | stable |
| gateway boot | fiftyPlugins | 853.9MB | 839.6MB | -14.4MB (-1.7%) | +86.2MB (+29.6%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 862.7MB | 789.2MB | -73.5MB (-8.5%) | -9.7MB (-2.7%) | stable |
| cli | gatewayHealthJsonConnected | 187.7MB | 187.0MB | -0.7MB (-0.4%) | n/a | stable |
| cli | gatewayHealthJsonFirstDevice | 187.5MB | 187.3MB | -0.2MB (-0.1%) | n/a | stable |
| cli | configGetGatewayPort | 187.3MB | 187.0MB | -0.3MB (-0.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | -354.7MB | -302.4MB | +52.3MB (-14.8%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.0MB | 0.0MB | ok |
| all 87 bundled plugins | 719.1MB | 673.2MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| memory-lancedb | 571.5MB | 525.5MB | ok |
| anthropic | 547.2MB | 501.2MB | ok |
| acpx | 543.0MB | 497.0MB | ok |
| codex | 538.2MB | 492.3MB | ok |
| llm-task | 535.9MB | 489.9MB | ok |
| google-meet | 528.8MB | 482.9MB | ok |
| migrate-hermes | 528.3MB | 482.4MB | ok |
| xai | 528.1MB | 482.1MB | ok |
| voice-call | 509.4MB | 463.4MB | ok |
| workboard | 508.2MB | 462.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 619.8ms | 620.5ms |
| default | cli.main.gateway-run-select-environment | 329.3ms | 351.5ms |
| default | plugins.runtime-post-bind | 303.8ms | 308.3ms |
| default | plugins.gateway-load.loadMs | 275.9ms | 276.9ms |
| default | sidecars.model-runtime | 243.7ms | 248.5ms |
| skipChannels | runtime.post-attach | 344.4ms | 345.4ms |
| skipChannels | cli.main.gateway-run-select-environment | 320.7ms | 329.7ms |
| skipChannels | plugins.runtime-post-bind | 317.0ms | 320.6ms |
| skipChannels | plugins.gateway-load.loadMs | 288.5ms | 291.2ms |
| skipChannels | cli.main.gateway-run-pre-bootstrap | 156.4ms | 159.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 317.3ms | 321.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 160.7ms | 178.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 132.2ms | 164.3ms |
| preparedRuntimeCatalogStall | cli.main.dotenv | 117.1ms | 120.0ms |
| preparedRuntimeCatalogStall | startup.maintenance | 90.7ms | 114.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 333.6ms | 403.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 168.5ms | 169.5ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 144.6ms | 145.2ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 132.9ms | 133.0ms |
| preparedRuntimeScaleOne | sidecars.model-runtime-build.workspaceFactsMs | 126.4ms | 127.1ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 422.4ms | 428.8ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 412.4ms | 419.4ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 325.4ms | 346.7ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.staticProviderCatalogMs | 206.3ms | 207.0ms |
| preparedRuntimeScaleMany | post-ready.gateway-data.plugins | 179.7ms | 179.7ms |
| oneInternalHook | runtime.post-attach | 343.5ms | 346.1ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 333.2ms | 339.4ms |
| oneInternalHook | plugins.runtime-post-bind | 304.6ms | 311.3ms |
| oneInternalHook | plugins.gateway-load.loadMs | 280.2ms | 282.2ms |
| oneInternalHook | cli.main.gateway-run-pre-bootstrap | 176.4ms | 199.9ms |
| allInternalHooks | runtime.post-attach | 363.8ms | 415.2ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 345.2ms | 351.0ms |
| allInternalHooks | plugins.runtime-post-bind | 324.8ms | 383.8ms |
| allInternalHooks | plugins.gateway-load.loadMs | 305.5ms | 337.9ms |
| allInternalHooks | cli.main.gateway-run-pre-bootstrap | 199.5ms | 203.3ms |
| fiftyPlugins | sidecars.model-runtime | 508.6ms | 528.4ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 500.0ms | 518.5ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 369.7ms | 442.9ms |
| fiftyPlugins | runtime.post-attach | 248.0ms | 251.7ms |
| fiftyPlugins | sidecars.model-runtime-build.runtimePluginMs | 231.2ms | 289.3ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 438.9ms | 446.0ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 431.3ms | 438.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 336.6ms | 380.2ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.runtimePluginMs | 203.6ms | 224.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 187.7ms | 189.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 16430.0ms | 0.000 | 2497.8MB | 1420.2MB | -1077.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 16048.0ms | 0.125 | 1243.6MB | 1347.7MB | 104.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 15456.0ms | 0.129 | 1280.6MB | 1346.8MB | 66.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 790.7ms | 795.7ms | 187.0MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 686.3ms | 697.6ms | 187.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 893.1ms | 935.8ms | 187.0MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 157.1ms |

## Observations

No data.

