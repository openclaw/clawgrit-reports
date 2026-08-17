# OpenClaw Source Performance

Generated: 2026-08-17T05:32:40.225Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 14686.1ms | 15798.5ms | 14686.2ms | 4011.9ms | 14509.5ms | 122.9ms | 1580.9MB | 1.430 |
| skipChannels | gateway, skip channels | 13247.0ms | 13372.7ms | 13246.9ms | 3891.9ms | 3476.2ms | 118.5ms | 1615.5MB | 1.444 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3826.8ms | 3923.8ms | 3826.3ms | 3534.8ms | 3347.4ms | 115.0ms | 1200.9MB | 1.529 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4009.3ms | 4082.7ms | 4009.1ms | 3568.7ms | 3383.4ms | 116.8ms | 1088.6MB | 1.506 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 7369.0ms | 7391.0ms | 4968.0ms | 4854.5ms | 4673.9ms | 114.5ms | 1250.0MB | 1.383 |
| oneInternalHook | gateway, one configured internal hook | 12965.1ms | 13723.9ms | 12957.0ms | 3771.8ms | 3347.2ms | 113.3ms | 1569.0MB | 1.397 |
| allInternalHooks | gateway, all internal hooks | 12857.1ms | 12989.6ms | 12834.0ms | 3768.0ms | 3372.9ms | 116.9ms | 1649.4MB | 1.421 |
| fiftyPlugins | gateway, 50 manifest plugins | 4370.6ms | 4414.1ms | 4370.3ms | 3765.3ms | 3478.2ms | 111.9ms | 1216.7MB | 1.377 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4288.6ms | 4302.5ms | 4288.6ms | 3689.7ms | 3506.8ms | 114.5ms | 1171.7MB | 1.407 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1541.8MB | 1580.9MB | +39.1MB (+2.5%) | +118.2MB (+12.5%) | stable |
| gateway boot | skipChannels | 2007.1MB | 1615.5MB | -391.5MB (-19.5%) | -741.3MB (-56.3%) | improved |
| gateway boot | preparedRuntimeCatalogStall | 1030.8MB | 1200.9MB | +170.0MB (+16.5%) | +155.8MB (+36.3%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1039.0MB | 1088.6MB | +49.5MB (+4.8%) | +34.1MB (+8.3%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1224.8MB | 1250.0MB | +25.3MB (+2.1%) | +146.5MB (+24.2%) | stable |
| gateway boot | oneInternalHook | 1620.3MB | 1569.0MB | -51.3MB (-3.2%) | -83.1MB (-12.6%) | stable |
| gateway boot | allInternalHooks | 1466.4MB | 1649.4MB | +183.1MB (+12.5%) | -302.6MB (-42.2%) | stable |
| gateway boot | fiftyPlugins | 1061.3MB | 1216.7MB | +155.4MB (+14.6%) | +211.9MB (+56.3%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1074.2MB | 1171.7MB | +97.5MB (+9.1%) | -17.4MB (-3.9%) | stable |
| cli | gatewayHealthJsonConnected | 193.5MB | 194.9MB | +1.5MB (+0.8%) | n/a | stable |
| cli | gatewayHealthJsonFirstDevice | 193.7MB | 196.3MB | +2.6MB (+1.4%) | n/a | stable |
| cli | configGetGatewayPort | 193.7MB | 194.9MB | +1.2MB (+0.6%) | n/a | stable |
| mock hello | gateway RSS delta avg | 30.5MB | 42.8MB | +12.3MB (+40.4%) | n/a | watch |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 148 bundled plugins | 807.2MB | 761.0MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| memory-lancedb | 600.1MB | 553.9MB | ok |
| codex | 589.2MB | 542.9MB | ok |
| openai | 589.1MB | 542.8MB | ok |
| voice-call | 579.7MB | 533.4MB | ok |
| opencode | 567.9MB | 521.6MB | ok |
| active-memory | 550.4MB | 504.2MB | ok |
| clickclack | 543.0MB | 496.8MB | ok |
| workboard | 540.9MB | 494.7MB | ok |
| policy | 535.8MB | 489.6MB | ok |
| llm-task | 534.1MB | 487.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 10972.6ms | 11926.4ms |
| default | sidecars.model-runtime | 10400.7ms | 11366.3ms |
| default | sidecars.model-runtime-build.workspaceFactsMs | 10387.7ms | 11352.1ms |
| default | sidecars.model-runtime-build.runtimePluginMs | 10377.4ms | 11332.4ms |
| default | cli.main.gateway-run-bootstrap | 630.6ms | 685.1ms |
| skipChannels | sidecars.model-runtime | 9089.5ms | 9239.7ms |
| skipChannels | sidecars.model-runtime-build.workspaceFactsMs | 9074.0ms | 9223.9ms |
| skipChannels | sidecars.model-runtime-build.runtimePluginMs | 9065.9ms | 9213.8ms |
| skipChannels | cli.main.gateway-run-bootstrap | 588.3ms | 607.5ms |
| skipChannels | cli.main.gateway-run-select-environment | 507.4ms | 529.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 513.7ms | 535.8ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 470.2ms | 491.6ms |
| preparedRuntimeCatalogStall | gateway.shutdown-runtime-import | 271.4ms | 273.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 233.7ms | 237.4ms |
| preparedRuntimeCatalogStall | worker-environments.runtime-imports | 189.9ms | 193.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 525.3ms | 525.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 506.7ms | 541.1ms |
| preparedRuntimeScaleOne | gateway.shutdown-runtime-import | 277.0ms | 284.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 242.0ms | 250.5ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 214.9ms | 215.0ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1551.1ms | 1571.5ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1299.3ms | 1338.9ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 958.2ms | 974.8ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 804.9ms | 842.9ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 747.8ms | 773.7ms |
| oneInternalHook | sidecars.model-runtime | 8894.9ms | 9690.9ms |
| oneInternalHook | sidecars.model-runtime-build.workspaceFactsMs | 8879.8ms | 9673.2ms |
| oneInternalHook | sidecars.model-runtime-build.runtimePluginMs | 8863.0ms | 9664.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 559.9ms | 560.2ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 474.4ms | 506.0ms |
| allInternalHooks | sidecars.model-runtime | 8856.2ms | 8924.1ms |
| allInternalHooks | sidecars.model-runtime-build.workspaceFactsMs | 8840.9ms | 8909.1ms |
| allInternalHooks | sidecars.model-runtime-build.runtimePluginMs | 8832.4ms | 8900.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 566.0ms | 577.6ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 475.9ms | 492.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 535.2ms | 536.5ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 514.3ms | 535.9ms |
| fiftyPlugins | sidecars.model-runtime | 407.4ms | 445.7ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 388.5ms | 410.4ms |
| fiftyPlugins | sidecars.model-runtime-build.runtimePluginMs | 319.9ms | 321.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 553.1ms | 554.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 529.9ms | 534.9ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 406.8ms | 414.7ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 387.3ms | 395.1ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.runtimePluginMs | 313.0ms | 316.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13886.0ms | 0.072 | 1413.1MB | 1446.5MB | 33.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 14095.0ms | 0.000 | 1439.7MB | 1411.7MB | -28.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 13328.0ms | 0.075 | 1326.5MB | 1449.5MB | 123.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 720.0ms | 761.9ms | 194.9MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 699.8ms | 707.9ms | 196.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 966.3ms | 1000.6ms | 194.9MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.3MB | 0.0MB | 0.0ms | 146.5ms |

## Observations

No data.

