# OpenClaw Source Performance

Generated: 2026-08-14T05:50:27.463Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5223.9ms | 5412.9ms | 5223.8ms | 4372.2ms | 5099.1ms | 151.2ms | 1219.8MB | 1.545 |
| skipChannels | gateway, skip channels | 4821.0ms | 5078.5ms | 4808.7ms | 4044.8ms | 4051.4ms | 128.4ms | 1171.4MB | 1.489 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4281.0ms | 4296.0ms | 4278.2ms | 3810.4ms | 3821.0ms | 132.6ms | 962.9MB | 1.416 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4573.9ms | 4682.8ms | 4573.3ms | 3970.3ms | 3983.4ms | 137.8ms | 1029.7MB | 1.530 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 7563.1ms | 7572.0ms | 7563.2ms | 5303.6ms | 5309.2ms | 129.9ms | 1144.9MB | 1.324 |
| oneInternalHook | gateway, one configured internal hook | 4475.3ms | 4509.7ms | 4475.2ms | 3754.1ms | 3760.1ms | 125.5ms | 1175.5MB | 1.345 |
| allInternalHooks | gateway, all internal hooks | 4478.6ms | 4532.5ms | 4478.6ms | 3729.6ms | 3734.8ms | 124.3ms | 1171.5MB | 1.412 |
| fiftyPlugins | gateway, 50 manifest plugins | 4580.0ms | 4585.4ms | 4579.7ms | 4073.1ms | 4078.0ms | 127.3ms | 1145.6MB | 1.323 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4328.5ms | 4463.2ms | 4339.0ms | 3837.5ms | 3850.1ms | 116.6ms | 1001.3MB | 1.403 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1174.1MB | 1219.8MB | +45.6MB (+3.9%) | +11.0MB (+1.5%) | stable |
| gateway boot | skipChannels | 1154.8MB | 1171.4MB | +16.6MB (+1.4%) | -5.5MB (-1.2%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 945.2MB | 962.9MB | +17.7MB (+1.9%) | +7.5MB (+1.8%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1001.5MB | 1029.7MB | +28.2MB (+2.8%) | +18.3MB (+4.3%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1119.7MB | 1144.9MB | +25.2MB (+2.2%) | +39.6MB (+5.8%) | stable |
| gateway boot | oneInternalHook | 1165.7MB | 1175.5MB | +9.8MB (+0.8%) | -78.8MB (-14.2%) | stable |
| gateway boot | allInternalHooks | 1176.0MB | 1171.5MB | -4.6MB (-0.4%) | -3.7MB (-0.8%) | stable |
| gateway boot | fiftyPlugins | 1079.7MB | 1145.6MB | +65.9MB (+6.1%) | +45.1MB (+8.5%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1024.4MB | 1001.3MB | -23.1MB (-2.3%) | +3.2MB (+0.7%) | stable |
| cli | gatewayHealthJsonConnected | 192.5MB | 192.9MB | +0.4MB (+0.2%) | n/a | stable |
| cli | gatewayHealthJsonFirstDevice | 192.7MB | 192.8MB | +0.1MB (+0.0%) | n/a | stable |
| cli | configGetGatewayPort | 192.3MB | 192.8MB | +0.5MB (+0.2%) | n/a | stable |
| mock hello | gateway RSS delta avg | 90.8MB | 72.1MB | -18.6MB (-20.5%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 87 bundled plugins | 678.5MB | 632.3MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 593.4MB | 547.1MB | ok |
| codex | 591.4MB | 545.1MB | ok |
| openai | 586.8MB | 540.6MB | ok |
| migrate-hermes | 585.1MB | 538.8MB | ok |
| active-memory | 576.7MB | 530.4MB | ok |
| beam | 540.1MB | 493.8MB | ok |
| llm-task | 534.9MB | 488.6MB | ok |
| memory-lancedb | 531.9MB | 485.7MB | ok |
| workboard | 521.5MB | 475.2MB | ok |
| lmstudio | 424.2MB | 378.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 973.0ms | 995.3ms |
| default | cli.main.gateway-run-bootstrap | 718.0ms | 740.8ms |
| default | cli.main.gateway-run-select-environment | 581.6ms | 582.7ms |
| default | sidecars.model-runtime | 481.0ms | 486.6ms |
| default | sidecars.model-runtime-build.workspaceFactsMs | 449.5ms | 455.5ms |
| skipChannels | cli.main.gateway-run-bootstrap | 660.1ms | 807.7ms |
| skipChannels | cli.main.gateway-run-select-environment | 550.7ms | 579.4ms |
| skipChannels | sidecars.model-runtime | 421.4ms | 457.0ms |
| skipChannels | sidecars.model-runtime-build.workspaceFactsMs | 410.2ms | 444.9ms |
| skipChannels | sidecars.model-runtime-build.runtimePluginMs | 386.1ms | 415.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 667.9ms | 701.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 560.6ms | 562.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 254.2ms | 270.6ms |
| preparedRuntimeCatalogStall | sidecars.reply-runtime | 200.7ms | 205.9ms |
| preparedRuntimeCatalogStall | worker-environments.runtime-imports | 182.2ms | 186.1ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 695.2ms | 707.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 600.0ms | 627.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 272.0ms | 297.5ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 244.5ms | 245.6ms |
| preparedRuntimeScaleOne | worker-environments.runtime-imports | 193.2ms | 195.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1905.3ms | 1943.9ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1436.3ms | 1466.9ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 1109.3ms | 1159.0ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 611.1ms | 624.5ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 603.5ms | 604.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 610.7ms | 613.5ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 520.0ms | 526.3ms |
| oneInternalHook | sidecars.model-runtime | 406.0ms | 409.9ms |
| oneInternalHook | sidecars.model-runtime-build.workspaceFactsMs | 387.3ms | 395.1ms |
| oneInternalHook | sidecars.model-runtime-build.runtimePluginMs | 374.6ms | 378.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 599.3ms | 631.7ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 524.7ms | 546.4ms |
| allInternalHooks | sidecars.model-runtime | 401.3ms | 409.4ms |
| allInternalHooks | sidecars.model-runtime-build.workspaceFactsMs | 388.5ms | 389.0ms |
| allInternalHooks | sidecars.model-runtime-build.runtimePluginMs | 368.5ms | 380.4ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 771.1ms | 801.5ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 563.9ms | 583.8ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 286.0ms | 291.9ms |
| fiftyPlugins | sidecars.model-runtime | 202.3ms | 214.4ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 188.5ms | 200.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 730.1ms | 789.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 531.1ms | 537.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 274.4ms | 323.2ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 191.8ms | 194.6ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 179.0ms | 181.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12806.0ms | 0.078 | 1213.9MB | 1352.5MB | 138.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 13122.0ms | 0.076 | 1316.8MB | 1332.6MB | 15.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12774.0ms | 0.157 | 1188.7MB | 1250.7MB | 62.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 736.9ms | 742.9ms | 192.9MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 703.0ms | 703.7ms | 192.8MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 973.7ms | 979.0ms | 192.8MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.3MB | 0.0MB | 0.0ms | 153.8ms |

## Observations

No data.

