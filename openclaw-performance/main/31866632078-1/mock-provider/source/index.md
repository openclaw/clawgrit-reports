# OpenClaw Source Performance

Generated: 2026-08-15T05:28:22.082Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 13305.6ms | 13434.6ms | 13330.0ms | 12582.0ms | 13191.2ms | 122.9ms | 1616.9MB | 1.441 |
| skipChannels | gateway, skip channels | 13227.3ms | 13270.9ms | 13227.1ms | 12478.3ms | 12483.8ms | 113.5ms | 1532.6MB | 1.447 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3864.8ms | 4088.0ms | 3864.9ms | 3464.7ms | 3470.4ms | 119.9ms | 1029.0MB | 1.552 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4175.3ms | 4284.0ms | 4175.0ms | 3653.9ms | 3658.8ms | 122.6ms | 1042.7MB | 1.437 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5096.0ms | 7219.5ms | 5091.6ms | 4899.8ms | 4905.4ms | 119.4ms | 1214.9MB | 1.385 |
| oneInternalHook | gateway, one configured internal hook | 13224.5ms | 13340.1ms | 13224.4ms | 12492.6ms | 12498.9ms | 113.2ms | 1495.2MB | 1.424 |
| allInternalHooks | gateway, all internal hooks | 13269.1ms | 13368.7ms | 13269.1ms | 12511.1ms | 12516.5ms | 121.9ms | 2441.2MB | 1.432 |
| fiftyPlugins | gateway, 50 manifest plugins | 4273.0ms | 4319.5ms | 4272.8ms | 3772.9ms | 3778.1ms | 116.7ms | 1005.9MB | 1.438 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4096.9ms | 4208.9ms | 4096.6ms | 3618.3ms | 3619.9ms | 116.3ms | 1050.7MB | 1.494 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1219.8MB | 1616.9MB | +397.1MB (+32.6%) | +29.9MB (+3.9%) | watch |
| gateway boot | skipChannels | 1171.4MB | 1532.6MB | +361.2MB (+30.8%) | +38.5MB (+8.2%) | watch |
| gateway boot | preparedRuntimeCatalogStall | 962.9MB | 1029.0MB | +66.1MB (+6.9%) | +7.8MB (+1.8%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1029.7MB | 1042.7MB | +13.0MB (+1.3%) | -4.4MB (-1.0%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1144.9MB | 1214.9MB | +70.0MB (+6.1%) | -108.1MB (-15.1%) | stable |
| gateway boot | oneInternalHook | 1175.5MB | 1495.2MB | +319.7MB (+27.2%) | +110.4MB (+23.2%) | watch |
| gateway boot | allInternalHooks | 1171.5MB | 2441.2MB | +1269.7MB (+108.4%) | +1220.6MB (+261.1%) | watch |
| gateway boot | fiftyPlugins | 1145.6MB | 1005.9MB | -139.6MB (-12.2%) | -131.8MB (-23.0%) | improved |
| gateway boot | fiftyStartupLazyPlugins | 1001.3MB | 1050.7MB | +49.4MB (+4.9%) | +9.1MB (+2.1%) | stable |
| cli | gatewayHealthJsonConnected | 192.9MB | 193.5MB | +0.6MB (+0.3%) | n/a | stable |
| cli | gatewayHealthJsonFirstDevice | 192.8MB | 194.0MB | +1.2MB (+0.6%) | n/a | stable |
| cli | configGetGatewayPort | 192.8MB | 193.8MB | +1.0MB (+0.5%) | n/a | stable |
| mock hello | gateway RSS delta avg | 72.1MB | 63.8MB | -8.4MB (-11.6%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 87 bundled plugins | 697.1MB | 650.8MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 591.7MB | 545.5MB | ok |
| codex | 587.1MB | 540.9MB | ok |
| policy | 584.5MB | 538.3MB | ok |
| migrate-hermes | 582.3MB | 536.0MB | ok |
| memory-lancedb | 544.9MB | 498.7MB | ok |
| openai | 543.6MB | 497.4MB | ok |
| workboard | 540.9MB | 494.7MB | ok |
| llm-task | 540.7MB | 494.5MB | ok |
| active-memory | 526.9MB | 480.7MB | ok |
| beam | 526.7MB | 480.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 9670.8ms | 9800.4ms |
| default | plugins.runtime-post-bind | 9046.9ms | 9174.5ms |
| default | plugins.gateway-load.loadMs | 9020.9ms | 9150.6ms |
| default | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8629.4ms | 8767.6ms |
| default | plugins.gateway-load.plugin.teams-meetings.loadMs | 8628.3ms | 8766.4ms |
| skipChannels | runtime.post-attach | 9137.8ms | 9150.3ms |
| skipChannels | plugins.runtime-post-bind | 9120.9ms | 9131.7ms |
| skipChannels | plugins.gateway-load.loadMs | 9100.0ms | 9116.6ms |
| skipChannels | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8727.4ms | 8744.3ms |
| skipChannels | plugins.gateway-load.plugin.teams-meetings.loadMs | 8726.2ms | 8743.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 526.1ms | 529.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 473.5ms | 531.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 236.7ms | 250.3ms |
| preparedRuntimeCatalogStall | worker-environments.runtime-imports | 188.6ms | 200.8ms |
| preparedRuntimeCatalogStall | sidecars.reply-runtime | 180.6ms | 192.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 536.0ms | 549.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 528.7ms | 536.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 253.0ms | 262.9ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 218.9ms | 241.6ms |
| preparedRuntimeScaleOne | worker-environments.runtime-imports | 200.0ms | 200.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1603.5ms | 1623.8ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1352.2ms | 1374.3ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 998.1ms | 1021.4ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 587.2ms | 591.4ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 463.0ms | 480.3ms |
| oneInternalHook | runtime.post-attach | 9053.5ms | 9111.9ms |
| oneInternalHook | plugins.runtime-post-bind | 9034.8ms | 9082.5ms |
| oneInternalHook | plugins.gateway-load.loadMs | 9019.4ms | 9058.0ms |
| oneInternalHook | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8628.9ms | 8690.0ms |
| oneInternalHook | plugins.gateway-load.plugin.teams-meetings.loadMs | 8627.7ms | 8688.9ms |
| allInternalHooks | runtime.post-attach | 9007.8ms | 9102.8ms |
| allInternalHooks | plugins.runtime-post-bind | 8989.4ms | 9086.0ms |
| allInternalHooks | plugins.gateway-load.loadMs | 8974.8ms | 9061.7ms |
| allInternalHooks | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8609.6ms | 8694.7ms |
| allInternalHooks | plugins.gateway-load.plugin.teams-meetings.loadMs | 8608.5ms | 8693.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 563.4ms | 585.7ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 526.5ms | 545.4ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 277.2ms | 283.0ms |
| fiftyPlugins | sidecars.model-runtime | 190.6ms | 192.7ms |
| fiftyPlugins | worker-environments.runtime-imports | 185.9ms | 192.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 553.2ms | 563.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 532.2ms | 603.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 280.8ms | 283.5ms |
| fiftyStartupLazyPlugins | worker-environments.runtime-imports | 179.7ms | 181.8ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 173.5ms | 176.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13020.0ms | 0.077 | 1242.5MB | 1369.2MB | 126.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12890.0ms | 0.078 | 1282.9MB | 1314.3MB | 31.5MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 13065.0ms | 0.077 | 1411.2MB | 1444.3MB | 33.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 714.2ms | 719.2ms | 193.5MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 693.6ms | 696.0ms | 194.0MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1038.9ms | 1073.7ms | 193.8MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.3MB | 0.0MB | 0.0ms | 146.2ms |

## Observations

No data.

