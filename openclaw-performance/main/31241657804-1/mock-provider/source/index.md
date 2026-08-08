# OpenClaw Source Performance

Generated: 2026-08-08T05:33:16.921Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3419.2ms | 3430.9ms | 3419.0ms | 2490.6ms | 3298.1ms | 110.0ms | 981.5MB | 1.476 |
| skipChannels | gateway, skip channels | 3416.0ms | 3419.3ms | 3412.2ms | 2488.3ms | 2505.5ms | 111.0ms | 1103.0MB | 1.465 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3018.5ms | 3024.8ms | 3018.4ms | 2315.3ms | 2323.9ms | 110.3ms | 976.8MB | 1.362 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3111.6ms | 3126.9ms | 3111.4ms | 2285.1ms | 2294.7ms | 109.0ms | 987.8MB | 1.304 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 3654.7ms | 3683.3ms | 3670.0ms | 2340.7ms | 2349.4ms | 110.5ms | 1020.7MB | 1.368 |
| oneInternalHook | gateway, one configured internal hook | 3382.6ms | 3412.3ms | 3382.5ms | 2455.6ms | 2473.8ms | 110.4ms | 981.0MB | 1.479 |
| allInternalHooks | gateway, all internal hooks | 3380.0ms | 3430.2ms | 3379.9ms | 2459.7ms | 2476.2ms | 109.9ms | 1022.2MB | 1.484 |
| fiftyPlugins | gateway, 50 manifest plugins | 3435.8ms | 3454.0ms | 3435.7ms | 2664.1ms | 2674.1ms | 109.7ms | 1025.8MB | 1.456 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3338.4ms | 3457.6ms | 3338.3ms | 2547.4ms | 2555.9ms | 113.0ms | 1017.9MB | 1.515 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 998.3MB | 981.5MB | -16.7MB (-1.7%) | -11.7MB (-2.7%) | stable |
| gateway boot | skipChannels | 1109.7MB | 1103.0MB | -6.7MB (-0.6%) | -3.8MB (-0.9%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 979.6MB | 976.8MB | -2.8MB (-0.3%) | +32.3MB (+9.7%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1011.4MB | 987.8MB | -23.6MB (-2.3%) | +7.4MB (+2.3%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1050.6MB | 1020.7MB | -29.9MB (-2.8%) | -5.2MB (-1.5%) | stable |
| gateway boot | oneInternalHook | 981.5MB | 981.0MB | -0.5MB (-0.0%) | -13.0MB (-3.4%) | stable |
| gateway boot | allInternalHooks | 992.2MB | 1022.2MB | +29.9MB (+3.0%) | -7.4MB (-2.0%) | stable |
| gateway boot | fiftyPlugins | 1035.2MB | 1025.8MB | -9.4MB (-0.9%) | -36.2MB (-9.2%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1020.0MB | 1017.9MB | -2.0MB (-0.2%) | +28.5MB (+7.6%) | stable |
| cli | gatewayHealthJsonConnected | 186.8MB | 189.2MB | +2.4MB (+1.3%) | n/a | stable |
| cli | gatewayHealthJsonFirstDevice | 186.9MB | 188.8MB | +1.9MB (+1.0%) | n/a | stable |
| cli | configGetGatewayPort | 187.1MB | 189.1MB | +2.0MB (+1.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | 22.3MB | 36.9MB | +14.5MB (+65.1%) | n/a | watch |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 87 bundled plugins | 797.8MB | 751.6MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| codex | 583.0MB | 536.8MB | ok |
| memory-lancedb | 579.4MB | 533.1MB | ok |
| migrate-hermes | 545.6MB | 499.4MB | ok |
| llm-task | 537.2MB | 490.9MB | ok |
| voice-call | 536.7MB | 490.5MB | ok |
| openai | 532.2MB | 485.9MB | ok |
| active-memory | 531.8MB | 485.5MB | ok |
| workboard | 514.1MB | 467.8MB | ok |
| google | 422.3MB | 376.1MB | ok |
| openrouter | 419.5MB | 373.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 1039.5ms | 1051.6ms |
| default | sidecars.model-runtime | 755.4ms | 761.6ms |
| default | sidecars.model-runtime-build.workspaceFactsMs | 744.8ms | 751.0ms |
| default | sidecars.model-runtime-build.runtimePluginMs | 734.3ms | 736.1ms |
| default | cli.main.gateway-run-select-environment | 410.3ms | 412.3ms |
| skipChannels | cli.main.gateway-run-select-environment | 416.2ms | 417.2ms |
| skipChannels | sidecars.model-runtime | 351.2ms | 358.5ms |
| skipChannels | cli.main.gateway-run-bootstrap | 342.2ms | 348.1ms |
| skipChannels | sidecars.model-runtime-build.workspaceFactsMs | 341.3ms | 348.1ms |
| skipChannels | sidecars.model-runtime-build.runtimePluginMs | 330.5ms | 333.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 429.1ms | 434.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 341.6ms | 352.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 150.5ms | 158.3ms |
| preparedRuntimeCatalogStall | gateway.server-impl-import | 121.4ms | 125.7ms |
| preparedRuntimeCatalogStall | startup.maintenance | 97.3ms | 102.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 419.0ms | 421.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 340.9ms | 353.8ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 154.9ms | 156.5ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 134.6ms | 134.7ms |
| preparedRuntimeScaleOne | gateway.server-impl-import | 126.6ms | 127.0ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 421.3ms | 433.4ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 413.0ms | 418.4ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 396.0ms | 399.3ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 360.4ms | 367.4ms |
| preparedRuntimeScaleMany | sidecars.chat-metadata | 305.7ms | 310.4ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 414.1ms | 416.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 340.6ms | 346.2ms |
| oneInternalHook | sidecars.model-runtime | 336.6ms | 338.7ms |
| oneInternalHook | sidecars.model-runtime-build.workspaceFactsMs | 326.5ms | 328.9ms |
| oneInternalHook | sidecars.model-runtime-build.runtimePluginMs | 310.7ms | 311.9ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 411.3ms | 415.1ms |
| allInternalHooks | sidecars.model-runtime | 336.0ms | 339.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 333.7ms | 351.6ms |
| allInternalHooks | sidecars.model-runtime-build.workspaceFactsMs | 325.0ms | 325.9ms |
| allInternalHooks | sidecars.model-runtime-build.runtimePluginMs | 310.2ms | 314.4ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 432.3ms | 434.3ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 401.7ms | 404.2ms |
| fiftyPlugins | sidecars.model-runtime | 189.0ms | 191.7ms |
| fiftyPlugins | startup.maintenance | 182.5ms | 183.5ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 181.7ms | 182.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 444.0ms | 446.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 403.6ms | 415.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 187.0ms | 193.4ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 183.9ms | 184.3ms |
| fiftyStartupLazyPlugins | startup.maintenance | 174.2ms | 183.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 15144.0ms | 0.132 | 1385.4MB | 1404.8MB | 19.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 15320.0ms | 0.131 | 1245.1MB | 1296.7MB | 51.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 15099.0ms | 0.132 | 1230.6MB | 1270.3MB | 39.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 718.8ms | 728.1ms | 189.2MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 666.8ms | 670.9ms | 188.8MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 868.0ms | 873.0ms | 189.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 137.7ms |

## Observations

No data.

