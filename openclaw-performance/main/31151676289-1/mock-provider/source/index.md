# OpenClaw Source Performance

Generated: 2026-08-07T05:54:12.308Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3683.6ms | 3830.7ms | 3683.3ms | 2666.2ms | 3530.8ms | 118.2ms | 998.3MB | 1.566 |
| skipChannels | gateway, skip channels | 3428.3ms | 3502.8ms | 3428.1ms | 2510.5ms | 2519.5ms | 110.1ms | 1109.7MB | 1.460 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3203.4ms | 3246.0ms | 3203.3ms | 2461.6ms | 2470.1ms | 113.7ms | 979.6MB | 1.604 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3321.9ms | 3332.9ms | 3321.8ms | 2428.5ms | 2437.7ms | 114.2ms | 1011.4MB | 1.505 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 3785.9ms | 4067.6ms | 3785.8ms | 2431.6ms | 2441.6ms | 119.5ms | 1050.6MB | 1.475 |
| oneInternalHook | gateway, one configured internal hook | 4084.1ms | 4230.5ms | 4083.9ms | 2963.2ms | 2977.6ms | 124.6ms | 981.5MB | 1.469 |
| allInternalHooks | gateway, all internal hooks | 3669.4ms | 3747.4ms | 3669.2ms | 2668.5ms | 2684.0ms | 117.0ms | 992.2MB | 1.365 |
| fiftyPlugins | gateway, 50 manifest plugins | 4070.1ms | 4102.0ms | 4070.0ms | 2871.4ms | 2939.1ms | 116.0ms | 1035.2MB | 1.486 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3907.3ms | 3926.7ms | 3904.8ms | 2669.7ms | 2744.6ms | 111.8ms | 1020.0MB | 1.536 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 974.3MB | 998.3MB | +23.9MB (+2.5%) | -10.9MB (-2.5%) | stable |
| gateway boot | skipChannels | 996.0MB | 1109.7MB | +113.8MB (+11.4%) | +57.0MB (+15.1%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1007.0MB | 979.6MB | -27.4MB (-2.7%) | +7.9MB (+2.4%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1008.0MB | 1011.4MB | +3.4MB (+0.3%) | -2.7MB (-0.8%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1014.4MB | 1050.6MB | +36.2MB (+3.6%) | +2.8MB (+0.8%) | stable |
| gateway boot | oneInternalHook | 975.6MB | 981.5MB | +5.9MB (+0.6%) | -2.7MB (-0.7%) | stable |
| gateway boot | allInternalHooks | 975.0MB | 992.2MB | +17.2MB (+1.8%) | +11.9MB (+3.2%) | stable |
| gateway boot | fiftyPlugins | 1036.6MB | 1035.2MB | -1.4MB (-0.1%) | -5.3MB (-1.3%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1020.9MB | 1020.0MB | -1.0MB (-0.1%) | -7.2MB (-1.9%) | stable |
| cli | gatewayHealthJsonConnected | 186.8MB | 186.8MB | 0.0MB (0.0%) | n/a | stable |
| cli | gatewayHealthJsonFirstDevice | 187.1MB | 186.9MB | -0.2MB (-0.1%) | n/a | stable |
| cli | configGetGatewayPort | 187.1MB | 187.1MB | +0.1MB (+0.0%) | n/a | stable |
| mock hello | gateway RSS delta avg | 83.9MB | 22.3MB | -61.6MB (-73.4%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 87 bundled plugins | 647.9MB | 601.6MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 578.8MB | 532.6MB | ok |
| openai | 578.1MB | 531.9MB | ok |
| memory-lancedb | 575.9MB | 529.6MB | ok |
| llm-task | 569.0MB | 522.8MB | ok |
| migrate-hermes | 540.8MB | 494.5MB | ok |
| active-memory | 532.4MB | 486.1MB | ok |
| workboard | 525.8MB | 479.6MB | ok |
| codex | 515.2MB | 468.9MB | ok |
| openrouter | 419.7MB | 373.5MB | ok |
| microsoft | 411.2MB | 365.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 1123.0ms | 1137.0ms |
| default | sidecars.model-runtime | 804.6ms | 823.1ms |
| default | sidecars.model-runtime-build.workspaceFactsMs | 793.7ms | 809.1ms |
| default | sidecars.model-runtime-build.runtimePluginMs | 779.3ms | 785.1ms |
| default | cli.main.gateway-run-select-environment | 440.3ms | 440.9ms |
| skipChannels | cli.main.gateway-run-select-environment | 413.7ms | 418.2ms |
| skipChannels | sidecars.model-runtime | 347.3ms | 356.3ms |
| skipChannels | cli.main.gateway-run-bootstrap | 343.9ms | 355.7ms |
| skipChannels | sidecars.model-runtime-build.workspaceFactsMs | 336.8ms | 345.1ms |
| skipChannels | sidecars.model-runtime-build.runtimePluginMs | 319.7ms | 329.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 452.3ms | 464.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 396.5ms | 397.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 172.2ms | 174.5ms |
| preparedRuntimeCatalogStall | gateway.server-impl-import | 129.2ms | 131.3ms |
| preparedRuntimeCatalogStall | startup.maintenance | 113.3ms | 114.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 442.5ms | 453.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 368.2ms | 389.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 169.3ms | 176.7ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 139.1ms | 146.7ms |
| preparedRuntimeScaleOne | gateway.server-impl-import | 129.1ms | 129.8ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 455.4ms | 480.3ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 436.3ms | 450.2ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 418.7ms | 431.0ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 368.1ms | 384.6ms |
| preparedRuntimeScaleMany | sidecars.chat-metadata | 320.4ms | 333.4ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 464.3ms | 468.3ms |
| oneInternalHook | sidecars.model-runtime | 420.5ms | 444.2ms |
| oneInternalHook | sidecars.model-runtime-build.workspaceFactsMs | 407.8ms | 431.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 403.4ms | 411.6ms |
| oneInternalHook | sidecars.model-runtime-build.runtimePluginMs | 388.3ms | 419.9ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 436.4ms | 451.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 367.9ms | 382.9ms |
| allInternalHooks | sidecars.model-runtime | 365.3ms | 369.3ms |
| allInternalHooks | sidecars.model-runtime-build.workspaceFactsMs | 353.9ms | 354.3ms |
| allInternalHooks | sidecars.model-runtime-build.runtimePluginMs | 334.1ms | 343.9ms |
| fiftyPlugins | sidecars.model-runtime | 536.4ms | 545.0ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 520.5ms | 531.8ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 458.8ms | 462.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 442.6ms | 456.9ms |
| fiftyPlugins | sidecars.model-runtime-build.runtimePluginMs | 241.7ms | 243.1ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 544.7ms | 551.6ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 531.4ms | 537.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 447.2ms | 464.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 424.3ms | 430.5ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.runtimePluginMs | 241.2ms | 242.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 16274.0ms | 0.123 | 1225.2MB | 1254.0MB | 28.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 16213.0ms | 0.123 | 1383.7MB | 1413.8MB | 30.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 16473.0ms | 0.121 | 1441.8MB | 1449.9MB | 8.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 727.5ms | 744.4ms | 186.8MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 675.9ms | 693.7ms | 186.9MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 899.3ms | 907.7ms | 187.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 144.3ms |

## Observations

No data.

