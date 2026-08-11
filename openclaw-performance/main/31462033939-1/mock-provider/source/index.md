# OpenClaw Source Performance

Generated: 2026-08-11T05:43:58.252Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3894.7ms | 3906.4ms | 3894.2ms | 3195.0ms | 3781.3ms | 113.7ms | 1092.1MB | 1.545 |
| skipChannels | gateway, skip channels | 3976.1ms | 3988.1ms | 3975.8ms | 3262.1ms | 3269.0ms | 126.7ms | 1097.4MB | 1.558 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3378.9ms | 3391.6ms | 3379.1ms | 2984.0ms | 2996.8ms | 117.0ms | 1023.3MB | 1.490 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3489.1ms | 3558.6ms | 3488.7ms | 2980.2ms | 2986.6ms | 120.4ms | 987.4MB | 1.444 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4124.5ms | 4167.2ms | 4124.3ms | 3070.0ms | 3083.2ms | 119.6ms | 987.4MB | 1.478 |
| oneInternalHook | gateway, one configured internal hook | 3772.5ms | 3821.1ms | 3772.3ms | 3118.7ms | 3125.6ms | 116.8ms | 1126.8MB | 1.570 |
| allInternalHooks | gateway, all internal hooks | 3841.7ms | 3878.0ms | 3841.3ms | 3131.1ms | 3146.1ms | 117.8ms | 1096.3MB | 1.562 |
| fiftyPlugins | gateway, 50 manifest plugins | 3794.4ms | 3855.7ms | 3794.2ms | 3260.8ms | 3266.5ms | 117.3ms | 980.2MB | 1.345 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3654.6ms | 3963.1ms | 3654.4ms | 3175.4ms | 3181.5ms | 118.3ms | 990.2MB | 1.514 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1241.0MB | 1092.1MB | -148.9MB (-12.0%) | +155.2MB (+28.8%) | improved |
| gateway boot | skipChannels | 1281.6MB | 1097.4MB | -184.2MB (-14.4%) | -449.3MB (-52.6%) | improved |
| gateway boot | preparedRuntimeCatalogStall | 1275.8MB | 1023.3MB | -252.6MB (-19.8%) | -385.3MB (-44.8%) | improved |
| gateway boot | preparedRuntimeScaleOne | 1284.0MB | 987.4MB | -296.6MB (-23.1%) | -495.3MB (-57.3%) | improved |
| gateway boot | preparedRuntimeScaleMany | 1289.2MB | 987.4MB | -301.7MB (-23.4%) | -473.7MB (-56.4%) | improved |
| gateway boot | oneInternalHook | 1276.4MB | 1126.8MB | -149.6MB (-11.7%) | -406.8MB (-48.5%) | improved |
| gateway boot | allInternalHooks | 1489.9MB | 1096.3MB | -393.6MB (-26.4%) | -670.6MB (-62.1%) | improved |
| gateway boot | fiftyPlugins | 1284.4MB | 980.2MB | -304.2MB (-23.7%) | -487.2MB (-54.8%) | improved |
| gateway boot | fiftyStartupLazyPlugins | 1272.8MB | 990.2MB | -282.6MB (-22.2%) | -487.6MB (-57.8%) | improved |
| cli | gatewayHealthJsonConnected | 192.1MB | 189.6MB | -2.5MB (-1.3%) | n/a | stable |
| cli | gatewayHealthJsonFirstDevice | 192.4MB | 188.7MB | -3.7MB (-1.9%) | n/a | stable |
| cli | configGetGatewayPort | 192.0MB | 189.1MB | -2.9MB (-1.5%) | n/a | stable |
| mock hello | gateway RSS delta avg | 69.8MB | 194.5MB | +124.7MB (+178.8%) | n/a | watch |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.4MB | 0.0MB | ok |
| all 87 bundled plugins | 647.6MB | 601.3MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| codex | 557.1MB | 510.7MB | ok |
| voice-call | 554.9MB | 508.5MB | ok |
| workboard | 549.6MB | 503.3MB | ok |
| llm-task | 546.9MB | 500.5MB | ok |
| memory-lancedb | 546.8MB | 500.4MB | ok |
| openai | 536.1MB | 489.8MB | ok |
| migrate-hermes | 516.9MB | 470.5MB | ok |
| beam | 516.5MB | 470.1MB | ok |
| active-memory | 514.1MB | 467.7MB | ok |
| google | 426.6MB | 380.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 778.8ms | 780.4ms |
| default | cli.main.gateway-run-select-environment | 437.9ms | 451.8ms |
| default | cli.main.gateway-run-bootstrap | 436.7ms | 437.3ms |
| default | sidecars.model-runtime | 392.2ms | 393.7ms |
| default | sidecars.model-runtime-build.workspaceFactsMs | 381.6ms | 383.0ms |
| skipChannels | cli.main.gateway-run-select-environment | 453.7ms | 508.1ms |
| skipChannels | cli.main.gateway-run-bootstrap | 439.7ms | 449.8ms |
| skipChannels | sidecars.model-runtime | 386.2ms | 403.3ms |
| skipChannels | sidecars.model-runtime-build.workspaceFactsMs | 366.0ms | 380.2ms |
| skipChannels | sidecars.model-runtime-build.runtimePluginMs | 357.4ms | 371.7ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 454.5ms | 461.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 435.4ms | 435.9ms |
| preparedRuntimeCatalogStall | sidecars.reply-runtime | 175.6ms | 185.7ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 167.7ms | 176.2ms |
| preparedRuntimeCatalogStall | gateway.server-start-import | 139.7ms | 143.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 451.2ms | 458.5ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 430.3ms | 438.2ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 198.6ms | 207.1ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 178.0ms | 179.2ms |
| preparedRuntimeScaleOne | gateway.server-start-import | 150.5ms | 156.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 460.7ms | 461.0ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 458.5ms | 475.1ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 429.6ms | 470.5ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 428.9ms | 430.8ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 409.5ms | 410.0ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 434.4ms | 439.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 424.4ms | 439.7ms |
| oneInternalHook | sidecars.model-runtime | 365.7ms | 378.9ms |
| oneInternalHook | sidecars.model-runtime-build.workspaceFactsMs | 346.1ms | 357.5ms |
| oneInternalHook | sidecars.model-runtime-build.runtimePluginMs | 338.2ms | 349.4ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 446.5ms | 452.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 419.2ms | 430.7ms |
| allInternalHooks | sidecars.model-runtime | 378.6ms | 400.4ms |
| allInternalHooks | sidecars.model-runtime-build.workspaceFactsMs | 360.3ms | 376.9ms |
| allInternalHooks | sidecars.model-runtime-build.runtimePluginMs | 352.2ms | 368.3ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 485.2ms | 519.7ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 454.7ms | 464.7ms |
| fiftyPlugins | sidecars.model-runtime | 198.3ms | 236.2ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 196.3ms | 207.9ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 185.8ms | 223.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 491.6ms | 500.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 457.5ms | 494.3ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 200.9ms | 220.3ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 188.5ms | 207.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 188.0ms | 188.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12156.0ms | 0.082 | 1161.3MB | 1360.8MB | 199.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12696.0ms | 0.158 | 1159.3MB | 1362.0MB | 202.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12587.0ms | 0.079 | 1162.6MB | 1343.8MB | 181.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 743.1ms | 744.0ms | 189.6MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 755.6ms | 803.8ms | 188.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 946.0ms | 989.6ms | 189.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.3MB | 0.0MB | 0.0ms | 143.4ms |

## Observations

No data.

