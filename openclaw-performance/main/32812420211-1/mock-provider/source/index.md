# OpenClaw Source Performance

Generated: 2026-08-25T05:26:29.702Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 2767.5ms | 2810.0ms | 2767.0ms | 2544.6ms | 2723.1ms | 85.7ms | 497.8MB | 1.087 |
| skipChannels | gateway, skip channels | 3880.6ms | 3944.2ms | 2467.6ms | 2703.3ms | 2428.3ms | 85.1ms | 668.3MB | 1.268 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3777.1ms | 3791.5ms | 2447.2ms | 2559.1ms | 2415.0ms | 86.0ms | 648.5MB | 1.093 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3491.2ms | 3508.2ms | 2211.1ms | 2326.4ms | 2178.0ms | 79.1ms | 652.9MB | 1.157 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5338.4ms | 5422.0ms | 3542.8ms | 3650.0ms | 3512.9ms | 79.4ms | 633.1MB | 1.127 |
| oneInternalHook | gateway, one configured internal hook | 3905.9ms | 3994.0ms | 2440.2ms | 2670.6ms | 2404.3ms | 82.4ms | 670.5MB | 1.252 |
| allInternalHooks | gateway, all internal hooks | 4030.2ms | 4170.1ms | 2549.0ms | 2795.6ms | 2515.4ms | 86.3ms | 681.0MB | 1.262 |
| fiftyPlugins | gateway, 50 manifest plugins | 4147.9ms | 4197.3ms | 2672.6ms | 2880.8ms | 2635.9ms | 86.3ms | 640.0MB | 1.258 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3123.7ms | 3134.6ms | 2871.4ms | 2985.7ms | 2832.1ms | 90.1ms | 624.7MB | 1.015 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1089.7MB | 497.8MB | -591.9MB (-54.3%) | -316.9MB (-53.9%) | improved |
| gateway boot | skipChannels | 1097.0MB | 668.3MB | -428.7MB (-39.1%) | -380.2MB (-62.7%) | improved |
| gateway boot | preparedRuntimeCatalogStall | 959.8MB | 648.5MB | -311.2MB (-32.4%) | -386.2MB (-63.0%) | improved |
| gateway boot | preparedRuntimeScaleOne | 976.9MB | 652.9MB | -324.0MB (-33.2%) | -276.3MB (-54.9%) | improved |
| gateway boot | preparedRuntimeScaleMany | 1089.4MB | 633.1MB | -456.3MB (-41.9%) | -441.1MB (-56.2%) | improved |
| gateway boot | oneInternalHook | 1085.8MB | 670.5MB | -415.3MB (-38.3%) | -265.5MB (-53.9%) | improved |
| gateway boot | allInternalHooks | 1128.8MB | 681.0MB | -447.8MB (-39.7%) | -370.6MB (-62.0%) | improved |
| gateway boot | fiftyPlugins | 1048.5MB | 640.0MB | -408.5MB (-39.0%) | -244.2MB (-48.5%) | improved |
| gateway boot | fiftyStartupLazyPlugins | 1025.1MB | 624.7MB | -400.4MB (-39.1%) | -225.0MB (-46.2%) | improved |
| cli | gatewayHealthJsonWarmState | 204.7MB | 121.7MB | -83.0MB (-40.6%) | n/a | improved |
| cli | gatewayHealthJsonFreshState | 204.8MB | 121.9MB | -82.9MB (-40.5%) | n/a | improved |
| cli | configGetGatewayPort | 205.5MB | 121.5MB | -84.0MB (-40.9%) | n/a | improved |
| mock hello | gateway RSS delta avg | 71.3MB | 55.1MB | -16.2MB (-22.7%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 147 bundled plugins | 852.5MB | 806.2MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| codex | 622.8MB | 576.5MB | ok |
| clickclack | 596.5MB | 550.1MB | ok |
| canvas | 594.6MB | 548.3MB | ok |
| workboard | 594.2MB | 547.9MB | ok |
| beam | 591.4MB | 545.0MB | ok |
| migrate-hermes | 583.6MB | 537.2MB | ok |
| llm-task | 583.5MB | 537.2MB | ok |
| opencode | 566.8MB | 520.4MB | ok |
| memory-lancedb | 559.2MB | 512.8MB | ok |
| active-memory | 542.0MB | 495.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap | 699.4ms | 703.6ms |
| default | cli.main.gateway-run-select-environment | 372.2ms | 376.5ms |
| default | runtime.post-attach | 350.9ms | 354.2ms |
| default | cli.main.gateway-run-pre-bootstrap | 225.4ms | 228.4ms |
| default | plugins.runtime-post-bind | 153.4ms | 158.5ms |
| skipChannels | cli.main.gateway-run-bootstrap | 725.2ms | 725.9ms |
| skipChannels | cli.main.gateway-run-select-environment | 360.2ms | 367.6ms |
| skipChannels | cli.main.gateway-run-pre-bootstrap | 219.8ms | 223.5ms |
| skipChannels | plugins.runtime-post-bind | 155.3ms | 162.0ms |
| skipChannels | plugins.gateway-load.loadMs | 141.0ms | 147.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 639.6ms | 652.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 391.0ms | 405.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 251.7ms | 256.1ms |
| preparedRuntimeCatalogStall | post-ready.gateway-data.plugins | 165.9ms | 175.3ms |
| preparedRuntimeCatalogStall | cli.bootstrap.config-snapshot | 105.9ms | 113.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 578.3ms | 609.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 353.9ms | 354.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 221.9ms | 241.4ms |
| preparedRuntimeScaleOne | post-ready.gateway-data.plugins | 161.8ms | 161.8ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 137.9ms | 138.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1642.7ms | 1676.8ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1191.4ms | 1196.7ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 960.6ms | 961.0ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 392.7ms | 395.8ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 325.4ms | 328.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 711.6ms | 730.6ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 364.5ms | 373.3ms |
| oneInternalHook | cli.main.gateway-run-pre-bootstrap | 213.1ms | 234.9ms |
| oneInternalHook | post-ready.gateway-data.plugins | 178.4ms | 187.4ms |
| oneInternalHook | plugins.runtime-post-bind | 148.3ms | 175.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 725.7ms | 725.9ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 392.0ms | 393.7ms |
| allInternalHooks | cli.main.gateway-run-pre-bootstrap | 236.0ms | 239.3ms |
| allInternalHooks | post-ready.gateway-data.plugins | 156.4ms | 176.0ms |
| allInternalHooks | plugins.runtime-post-bind | 154.2ms | 161.4ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 736.9ms | 772.6ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 402.1ms | 422.6ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 281.9ms | 289.2ms |
| fiftyPlugins | sidecars.model-runtime | 139.7ms | 143.4ms |
| fiftyPlugins | post-ready.gateway-data.plugins | 133.8ms | 157.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 786.1ms | 791.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 438.0ms | 455.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 300.0ms | 325.7ms |
| fiftyStartupLazyPlugins | cli.bootstrap.config-snapshot | 137.8ms | 152.8ms |
| fiftyStartupLazyPlugins | cli.config-snapshot | 128.7ms | 135.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11121.0ms | 0.090 | 986.6MB | 1108.9MB | 122.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11397.0ms | 0.000 | 1058.6MB | 1066.7MB | 8.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11307.0ms | 0.088 | 1135.8MB | 1170.6MB | 34.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 559.9ms | 567.0ms | 121.7MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 543.6ms | 554.7ms | 121.9MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 926.4ms | 950.2ms | 121.5MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.4MB | 0.0MB | 0.0ms | 162.8ms |

## Observations

No data.

