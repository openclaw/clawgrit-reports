# OpenClaw Source Performance

Generated: 2026-08-23T05:26:11.897Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4851.2ms | 4973.4ms | 4849.2ms | 4181.0ms | 4710.4ms | 114.4ms | 1053.8MB | 1.407 |
| skipChannels | gateway, skip channels | 4646.4ms | 4803.1ms | 4646.4ms | 4166.2ms | 3704.2ms | 116.1ms | 1093.0MB | 1.308 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4097.3ms | 4304.0ms | 4096.8ms | 3827.4ms | 3642.8ms | 114.8ms | 1048.1MB | 1.223 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4148.3ms | 4333.5ms | 4147.8ms | 3747.9ms | 3569.7ms | 117.4ms | 933.4MB | 1.225 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 7054.0ms | 7080.2ms | 7053.0ms | 5325.6ms | 5130.1ms | 114.4ms | 1083.4MB | 1.326 |
| oneInternalHook | gateway, one configured internal hook | 4891.2ms | 5524.1ms | 4890.7ms | 4083.9ms | 3656.7ms | 116.4ms | 1092.4MB | 1.448 |
| allInternalHooks | gateway, all internal hooks | 5583.0ms | 5749.9ms | 4211.2ms | 4158.3ms | 3675.4ms | 111.7ms | 1101.4MB | 1.437 |
| fiftyPlugins | gateway, 50 manifest plugins | 4567.5ms | 4615.9ms | 4567.5ms | 4134.9ms | 3865.8ms | 123.0ms | 1063.6MB | 1.318 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4546.6ms | 4580.4ms | 4546.2ms | 4108.3ms | 3908.3ms | 116.5ms | 1064.5MB | 1.355 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1081.2MB | 1053.8MB | -27.3MB (-2.5%) | +105.3MB (+27.4%) | stable |
| gateway boot | skipChannels | 1051.7MB | 1093.0MB | +41.3MB (+3.9%) | +113.8MB (+23.3%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 955.3MB | 1048.1MB | +92.8MB (+9.7%) | +108.5MB (+21.9%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1056.8MB | 933.4MB | -123.4MB (-11.7%) | -140.1MB (-23.2%) | improved |
| gateway boot | preparedRuntimeScaleMany | 1065.7MB | 1083.4MB | +17.6MB (+1.7%) | +11.2MB (+1.5%) | stable |
| gateway boot | oneInternalHook | 1068.1MB | 1092.4MB | +24.4MB (+2.3%) | +115.0MB (+23.6%) | stable |
| gateway boot | allInternalHooks | 1103.5MB | 1101.4MB | -2.1MB (-0.2%) | +8.2MB (+1.4%) | stable |
| gateway boot | fiftyPlugins | 1093.2MB | 1063.6MB | -29.6MB (-2.7%) | +26.8MB (+4.4%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1100.3MB | 1064.5MB | -35.8MB (-3.3%) | +18.2MB (+3.0%) | stable |
| cli | gatewayHealthJsonWarmState | 203.5MB | 205.7MB | +2.3MB (+1.1%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 204.2MB | 204.5MB | +0.3MB (+0.2%) | n/a | stable |
| cli | configGetGatewayPort | 204.0MB | 204.1MB | +0.1MB (+0.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | 98.1MB | 78.2MB | -19.9MB (-20.3%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 147 bundled plugins | 803.9MB | 757.7MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| memory-lancedb | 594.3MB | 548.0MB | ok |
| workboard | 593.3MB | 547.1MB | ok |
| opencode | 588.3MB | 542.1MB | ok |
| active-memory | 587.3MB | 541.0MB | ok |
| beam | 585.6MB | 539.4MB | ok |
| llm-task | 580.9MB | 534.7MB | ok |
| openai | 544.5MB | 498.3MB | ok |
| migrate-hermes | 543.9MB | 497.7MB | ok |
| codex | 541.6MB | 495.3MB | ok |
| clickclack | 539.9MB | 493.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 848.4ms | 898.7ms |
| default | cli.main.gateway-run-bootstrap | 695.7ms | 746.2ms |
| default | cli.main.gateway-run-select-environment | 515.3ms | 528.3ms |
| default | plugins.runtime-post-bind | 325.5ms | 345.8ms |
| default | plugins.gateway-load.loadMs | 310.3ms | 322.4ms |
| skipChannels | cli.main.gateway-run-bootstrap | 702.1ms | 741.0ms |
| skipChannels | cli.main.gateway-run-select-environment | 502.7ms | 540.1ms |
| skipChannels | plugins.runtime-post-bind | 307.6ms | 342.4ms |
| skipChannels | plugins.gateway-load.loadMs | 285.6ms | 326.7ms |
| skipChannels | gateway.shutdown-runtime-import | 285.2ms | 300.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 603.3ms | 640.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 539.5ms | 556.6ms |
| preparedRuntimeCatalogStall | gateway.shutdown-runtime-import | 273.0ms | 289.9ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 245.8ms | 246.8ms |
| preparedRuntimeCatalogStall | sidecars.reply-runtime | 197.4ms | 203.2ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 604.5ms | 624.5ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 528.2ms | 543.5ms |
| preparedRuntimeScaleOne | gateway.shutdown-runtime-import | 277.5ms | 288.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 234.8ms | 235.2ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 213.1ms | 225.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1713.3ms | 1751.7ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1325.1ms | 1326.3ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 986.5ms | 1030.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 593.8ms | 595.9ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 331.6ms | 331.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 675.4ms | 706.2ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 495.1ms | 527.8ms |
| oneInternalHook | plugins.runtime-post-bind | 303.0ms | 310.3ms |
| oneInternalHook | plugins.gateway-load.loadMs | 287.5ms | 288.1ms |
| oneInternalHook | gateway.shutdown-runtime-import | 282.1ms | 342.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 695.8ms | 748.1ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 507.0ms | 510.4ms |
| allInternalHooks | plugins.runtime-post-bind | 327.9ms | 352.7ms |
| allInternalHooks | plugins.gateway-load.loadMs | 313.1ms | 335.4ms |
| allInternalHooks | gateway.shutdown-runtime-import | 269.3ms | 282.7ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 662.2ms | 669.8ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 551.3ms | 556.6ms |
| fiftyPlugins | gateway.shutdown-runtime-import | 287.3ms | 304.7ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 273.7ms | 276.9ms |
| fiftyPlugins | sidecars.model-runtime | 244.9ms | 245.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 712.2ms | 742.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 550.6ms | 593.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 278.0ms | 278.2ms |
| fiftyStartupLazyPlugins | gateway.shutdown-runtime-import | 275.9ms | 292.3ms |
| fiftyStartupLazyPlugins | worker-environments.runtime-imports | 198.7ms | 201.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13468.0ms | 0.074 | 1210.6MB | 1304.7MB | 94.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 13244.0ms | 0.076 | 1224.7MB | 1294.9MB | 70.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 13137.0ms | 0.076 | 1188.3MB | 1258.5MB | 70.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 711.3ms | 736.0ms | 205.7MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 728.9ms | 733.4ms | 204.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1170.8ms | 1178.4ms | 204.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.4MB | 0.0MB | 0.0ms | 153.7ms |

## Observations

No data.

