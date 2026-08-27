# OpenClaw Source Performance

Generated: 2026-08-27T07:56:04.216Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4500.5ms | 4527.9ms | 4500.3ms | 4040.2ms | 4396.3ms | 147.1ms | 487.6MB | 1.169 |
| skipChannels | gateway, skip channels | 6266.3ms | 6528.9ms | 3581.2ms | 3929.7ms | 3527.3ms | 147.0ms | 693.7MB | 1.302 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 5682.0ms | 5828.2ms | 3308.5ms | 3457.7ms | 3252.2ms | 134.5ms | 646.7MB | 1.254 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 5297.2ms | 5301.8ms | 3046.0ms | 3176.9ms | 3002.4ms | 124.3ms | 649.2MB | 1.320 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 6704.6ms | 6865.4ms | 4852.8ms | 4958.2ms | 4798.5ms | 122.4ms | 631.9MB | 1.238 |
| oneInternalHook | gateway, one configured internal hook | 4076.1ms | 4092.2ms | 2431.2ms | 2697.2ms | 2392.5ms | 101.0ms | 677.0MB | 1.278 |
| allInternalHooks | gateway, all internal hooks | 3861.2ms | 3921.7ms | 2289.6ms | 2565.3ms | 2252.7ms | 94.9ms | 690.7MB | 1.275 |
| fiftyPlugins | gateway, 50 manifest plugins | 3822.0ms | 3848.3ms | 2345.7ms | 2565.6ms | 2314.9ms | 88.6ms | 676.8MB | 1.299 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 2479.0ms | 2492.9ms | 2233.5ms | 2352.8ms | 2200.3ms | 90.7ms | 472.9MB | 0.834 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 496.5MB | 487.6MB | -9.0MB (-1.8%) | -29.0MB (-10.7%) | stable |
| gateway boot | skipChannels | 670.9MB | 693.7MB | +22.8MB (+3.4%) | +4.3MB (+1.9%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 649.6MB | 646.7MB | -2.9MB (-0.4%) | -20.8MB (-8.5%) | stable |
| gateway boot | preparedRuntimeScaleOne | 646.9MB | 649.2MB | +2.3MB (+0.4%) | -44.5MB (-18.1%) | stable |
| gateway boot | preparedRuntimeScaleMany | 616.8MB | 631.9MB | +15.1MB (+2.5%) | +7.4MB (+2.2%) | stable |
| gateway boot | oneInternalHook | 674.1MB | 677.0MB | +2.9MB (+0.4%) | +11.5MB (+5.2%) | stable |
| gateway boot | allInternalHooks | 673.4MB | 690.7MB | +17.4MB (+2.6%) | +5.8MB (+2.6%) | stable |
| gateway boot | fiftyPlugins | 677.1MB | 676.8MB | -0.3MB (-0.0%) | +22.3MB (+9.7%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 656.8MB | 472.9MB | -183.9MB (-28.0%) | +11.4MB (+5.6%) | improved |
| cli | gatewayHealthJsonWarmState | 122.2MB | 121.9MB | -0.3MB (-0.2%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 125.6MB | 122.0MB | -3.6MB (-2.9%) | n/a | stable |
| cli | configGetGatewayPort | 121.6MB | 125.9MB | +4.2MB (+3.5%) | n/a | stable |
| mock hello | gateway RSS delta avg | 46.7MB | 47.6MB | +0.9MB (+1.9%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 150 bundled plugins | 840.2MB | 793.9MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| xai | 596.3MB | 550.0MB | ok |
| codex | 596.0MB | 549.8MB | ok |
| llm-task | 593.3MB | 547.1MB | ok |
| memory-lancedb | 591.2MB | 544.9MB | ok |
| migrate-hermes | 590.9MB | 544.7MB | ok |
| workboard | 590.6MB | 544.4MB | ok |
| opencode | 590.3MB | 544.1MB | ok |
| clickclack | 589.7MB | 543.5MB | ok |
| active-memory | 589.2MB | 542.9MB | ok |
| beam | 555.2MB | 509.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap | 954.8ms | 1034.5ms |
| default | runtime.post-attach | 694.8ms | 744.0ms |
| default | cli.main.gateway-run-select-environment | 576.6ms | 627.7ms |
| default | plugins.runtime-post-bind | 301.8ms | 329.0ms |
| default | cli.main.gateway-run-pre-bootstrap | 295.7ms | 303.2ms |
| skipChannels | cli.main.gateway-run-bootstrap | 913.4ms | 942.0ms |
| skipChannels | cli.main.gateway-run-select-environment | 579.9ms | 585.2ms |
| skipChannels | plugins.runtime-post-bind | 282.7ms | 320.6ms |
| skipChannels | cli.main.gateway-run-pre-bootstrap | 260.9ms | 261.1ms |
| skipChannels | plugins.gateway-load.loadMs | 249.7ms | 279.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 736.1ms | 789.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 562.4ms | 601.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 268.0ms | 315.8ms |
| preparedRuntimeCatalogStall | post-ready.gateway-data.plugins | 214.5ms | 226.7ms |
| preparedRuntimeCatalogStall | gateway.server-start-import | 203.3ms | 219.5ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 665.7ms | 694.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 516.6ms | 518.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 238.0ms | 246.3ms |
| preparedRuntimeScaleOne | post-ready.gateway-data.plugins | 203.0ms | 211.6ms |
| preparedRuntimeScaleOne | gateway.server-start-import | 186.6ms | 194.4ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 2308.4ms | 2390.0ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 1529.9ms | 1534.6ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 942.6ms | 953.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 524.7ms | 557.4ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 384.5ms | 391.8ms |
| oneInternalHook | sidecars.internal-hooks | 1031.5ms | 1122.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 632.5ms | 661.2ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 394.5ms | 403.0ms |
| oneInternalHook | cli.main.gateway-run-pre-bootstrap | 170.7ms | 178.8ms |
| oneInternalHook | plugins.runtime-post-bind | 165.4ms | 174.9ms |
| allInternalHooks | sidecars.internal-hooks | 1056.0ms | 1078.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 603.1ms | 612.8ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 359.1ms | 375.1ms |
| allInternalHooks | post-ready.gateway-data.plugins | 232.2ms | 248.2ms |
| allInternalHooks | plugins.runtime-post-bind | 164.3ms | 184.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 517.2ms | 521.0ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 374.4ms | 394.0ms |
| fiftyPlugins | post-ready.gateway-data.plugins | 197.5ms | 265.9ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 197.0ms | 200.8ms |
| fiftyPlugins | sidecars.model-runtime | 150.8ms | 151.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 478.8ms | 498.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 361.8ms | 363.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 193.1ms | 198.8ms |
| fiftyStartupLazyPlugins | gateway.server-start-import | 134.0ms | 137.2ms |
| fiftyStartupLazyPlugins | plugins.bootstrap | 76.7ms | 79.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10744.0ms | 0.000 | 1055.6MB | 1076.0MB | 20.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10815.0ms | 0.000 | 1060.4MB | 1083.2MB | 22.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10197.0ms | 0.098 | 982.5MB | 1082.0MB | 99.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 579.5ms | 615.3ms | 121.9MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 586.0ms | 598.4ms | 122.0MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 896.4ms | 915.0ms | 125.9MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.0ms | 141.4ms |

## Observations

No data.

