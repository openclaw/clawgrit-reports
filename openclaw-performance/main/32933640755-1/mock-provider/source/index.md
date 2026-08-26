# OpenClaw Source Performance

Generated: 2026-08-26T05:27:19.944Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3493.7ms | 3970.2ms | 3485.1ms | 3184.3ms | 3417.6ms | 123.4ms | 496.5MB | 1.145 |
| skipChannels | gateway, skip channels | 4810.2ms | 4824.1ms | 2936.8ms | 3199.0ms | 2888.5ms | 119.5ms | 670.9MB | 1.267 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3595.5ms | 3627.3ms | 2240.0ms | 2356.4ms | 2203.3ms | 93.7ms | 649.6MB | 1.129 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3683.1ms | 4472.4ms | 2194.3ms | 2306.7ms | 2152.7ms | 94.2ms | 646.9MB | 1.118 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5258.9ms | 6469.5ms | 3829.4ms | 3940.3ms | 3790.1ms | 98.1ms | 616.8MB | 1.237 |
| oneInternalHook | gateway, one configured internal hook | 3841.7ms | 3885.2ms | 2283.7ms | 2530.7ms | 2245.8ms | 93.0ms | 674.1MB | 1.287 |
| allInternalHooks | gateway, all internal hooks | 3957.6ms | 3958.1ms | 2294.4ms | 2551.0ms | 2256.7ms | 90.8ms | 673.4MB | 1.286 |
| fiftyPlugins | gateway, 50 manifest plugins | 3819.2ms | 3970.1ms | 2331.5ms | 2546.5ms | 2297.4ms | 91.5ms | 677.1MB | 1.259 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 2619.6ms | 3650.6ms | 2359.4ms | 2478.7ms | 2321.6ms | 95.0ms | 656.8MB | 1.145 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 497.8MB | 496.5MB | -1.3MB (-0.3%) | +0.5MB (+0.2%) | stable |
| gateway boot | skipChannels | 668.3MB | 670.9MB | +2.6MB (+0.4%) | +2.2MB (+1.0%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 648.5MB | 649.6MB | +1.0MB (+0.2%) | +19.3MB (+8.5%) | stable |
| gateway boot | preparedRuntimeScaleOne | 652.9MB | 646.9MB | -6.0MB (-0.9%) | +19.0MB (+8.4%) | stable |
| gateway boot | preparedRuntimeScaleMany | 633.1MB | 616.8MB | -16.3MB (-2.6%) | -5.4MB (-1.6%) | stable |
| gateway boot | oneInternalHook | 670.5MB | 674.1MB | +3.7MB (+0.5%) | -6.2MB (-2.7%) | stable |
| gateway boot | allInternalHooks | 681.0MB | 673.4MB | -7.6MB (-1.1%) | -2.4MB (-1.1%) | stable |
| gateway boot | fiftyPlugins | 640.0MB | 677.1MB | +37.1MB (+5.8%) | -30.2MB (-11.6%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 624.7MB | 656.8MB | +32.2MB (+5.2%) | -57.7MB (-22.0%) | stable |
| cli | gatewayHealthJsonWarmState | 121.7MB | 122.2MB | +0.5MB (+0.4%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 121.9MB | 125.6MB | +3.7MB (+3.0%) | n/a | stable |
| cli | configGetGatewayPort | 121.5MB | 121.6MB | +0.1MB (+0.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | 55.1MB | 46.7MB | -8.4MB (-15.3%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 147 bundled plugins | 805.3MB | 759.1MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 593.5MB | 547.3MB | ok |
| clickclack | 588.8MB | 542.5MB | ok |
| migrate-hermes | 588.7MB | 542.4MB | ok |
| beam | 588.1MB | 541.9MB | ok |
| openai | 581.5MB | 535.3MB | ok |
| xai | 580.6MB | 534.4MB | ok |
| codex | 569.4MB | 523.1MB | ok |
| llm-task | 553.5MB | 507.2MB | ok |
| memory-lancedb | 548.1MB | 501.8MB | ok |
| canvas | 545.2MB | 498.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap | 732.1ms | 737.8ms |
| default | runtime.post-attach | 475.0ms | 790.3ms |
| default | cli.main.gateway-run-select-environment | 436.5ms | 509.5ms |
| default | cli.main.gateway-run-pre-bootstrap | 217.5ms | 224.8ms |
| default | plugins.runtime-post-bind | 207.7ms | 330.0ms |
| skipChannels | cli.main.gateway-run-bootstrap | 725.7ms | 758.5ms |
| skipChannels | cli.main.gateway-run-select-environment | 471.5ms | 486.9ms |
| skipChannels | post-ready.gateway-data.plugins | 227.4ms | 269.0ms |
| skipChannels | cli.main.gateway-run-pre-bootstrap | 209.0ms | 240.1ms |
| skipChannels | plugins.runtime-post-bind | 196.0ms | 243.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 483.6ms | 507.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 375.2ms | 380.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 187.7ms | 194.4ms |
| preparedRuntimeCatalogStall | gateway.server-start-import | 140.9ms | 151.2ms |
| preparedRuntimeCatalogStall | post-ready.gateway-data.plugins | 131.5ms | 146.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 485.8ms | 492.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 388.0ms | 402.3ms |
| preparedRuntimeScaleOne | post-ready.gateway-data.plugins | 196.8ms | 207.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 187.6ms | 193.2ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 144.1ms | 144.9ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1775.4ms | 2090.0ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 1132.6ms | 1320.1ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 786.7ms | 983.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 469.6ms | 548.0ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 349.6ms | 386.7ms |
| oneInternalHook | sidecars.internal-hooks | 1040.6ms | 1041.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 577.5ms | 588.3ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 356.4ms | 359.2ms |
| oneInternalHook | cli.main.gateway-run-pre-bootstrap | 177.8ms | 180.8ms |
| oneInternalHook | plugins.runtime-post-bind | 163.5ms | 165.7ms |
| allInternalHooks | sidecars.internal-hooks | 1113.6ms | 1131.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 577.4ms | 592.2ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 364.6ms | 366.6ms |
| allInternalHooks | post-ready.gateway-data.plugins | 178.6ms | 190.9ms |
| allInternalHooks | cli.main.gateway-run-pre-bootstrap | 178.0ms | 180.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 524.0ms | 527.2ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 387.4ms | 391.5ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 215.8ms | 216.8ms |
| fiftyPlugins | sidecars.model-runtime | 149.5ms | 152.3ms |
| fiftyPlugins | post-ready.gateway-data.plugins | 145.5ms | 145.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 510.4ms | 519.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 379.9ms | 387.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 214.3ms | 215.2ms |
| fiftyStartupLazyPlugins | post-ready.gateway-data.plugins | 194.6ms | 194.6ms |
| fiftyStartupLazyPlugins | gateway.server-start-import | 140.0ms | 142.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10555.0ms | 0.095 | 1016.8MB | 1084.8MB | 68.0MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11331.0ms | 0.000 | 1013.8MB | 1027.6MB | 13.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10823.0ms | 0.092 | 1027.5MB | 1085.8MB | 58.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 623.5ms | 636.9ms | 122.2MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 632.2ms | 637.2ms | 125.6MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 921.3ms | 959.1ms | 121.6MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.3MB | 0.0MB | 0.0ms | 164.4ms |

## Observations

No data.

