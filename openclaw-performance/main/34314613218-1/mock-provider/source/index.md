# OpenClaw Source Performance

Generated: 2026-09-09T05:29:40.634Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4326.5ms | 4421.7ms | 4326.1ms | 4035.8ms | 4247.4ms | 90.0ms | 577.4MB | 0.942 |
| skipChannels | gateway, skip channels | 4359.5ms | 4665.8ms | 3911.2ms | 4105.4ms | 3859.1ms | 89.7ms | 579.2MB | 1.072 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4147.4ms | 4228.9ms | 3926.5ms | 4017.8ms | 3877.2ms | 89.8ms | 561.7MB | 1.030 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4432.7ms | 5898.1ms | 4041.1ms | 4134.1ms | 3987.7ms | 91.0ms | 566.0MB | 1.017 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4827.1ms | 5329.4ms | 4119.3ms | 4206.3ms | 4070.1ms | 88.4ms | 613.1MB | 1.036 |
| oneInternalHook | gateway, one configured internal hook | 4315.6ms | 5167.7ms | 3755.3ms | 3978.1ms | 3679.1ms | 86.6ms | 619.4MB | 1.015 |
| allInternalHooks | gateway, all internal hooks | 3728.8ms | 3928.2ms | 3357.5ms | 3537.9ms | 3316.4ms | 80.8ms | 570.3MB | 1.075 |
| fiftyPlugins | gateway, 50 manifest plugins | 4123.1ms | 4365.0ms | 3817.2ms | 3946.6ms | 3772.3ms | 84.5ms | 570.7MB | 0.999 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3810.6ms | 3896.0ms | 3588.3ms | 3678.1ms | 3543.2ms | 82.4ms | 569.8MB | 1.054 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 577.5MB | 577.4MB | -0.1MB (-0.0%) | +23.3MB (+7.4%) | stable |
| gateway boot | skipChannels | 578.0MB | 579.2MB | +1.2MB (+0.2%) | -32.1MB (-10.5%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 544.9MB | 561.7MB | +16.9MB (+3.1%) | +2.8MB (+1.0%) | stable |
| gateway boot | preparedRuntimeScaleOne | 550.6MB | 566.0MB | +15.4MB (+2.8%) | +3.5MB (+1.3%) | stable |
| gateway boot | preparedRuntimeScaleMany | 608.5MB | 613.1MB | +4.6MB (+0.8%) | +0.5MB (+0.2%) | stable |
| gateway boot | oneInternalHook | 571.1MB | 619.4MB | +48.3MB (+8.5%) | -33.0MB (-10.8%) | stable |
| gateway boot | allInternalHooks | 579.6MB | 570.3MB | -9.3MB (-1.6%) | +1.4MB (+0.5%) | stable |
| gateway boot | fiftyPlugins | 557.0MB | 570.7MB | +13.7MB (+2.5%) | +0.9MB (+0.3%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 553.6MB | 569.8MB | +16.2MB (+2.9%) | +1.0MB (+0.4%) | stable |
| cli | gatewayHealthJsonWarmState | 74.1MB | 55.4MB | -18.7MB (-25.3%) | n/a | improved |
| cli | gatewayHealthJsonFreshState | 74.3MB | 55.5MB | -18.8MB (-25.3%) | n/a | improved |
| cli | configGetGatewayPort | 74.0MB | 55.4MB | -18.6MB (-25.2%) | n/a | improved |
| mock hello | gateway RSS delta avg | 137.9MB | 155.5MB | +17.6MB (+12.8%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 150 bundled plugins | 604.0MB | 557.7MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| llm-task | 375.7MB | 329.5MB | ok |
| workboard | 363.3MB | 317.0MB | ok |
| clickclack | 359.3MB | 313.1MB | ok |
| migrate-hermes | 354.8MB | 308.6MB | ok |
| discord | 354.5MB | 308.3MB | ok |
| active-memory | 353.0MB | 306.7MB | ok |
| copilot | 324.0MB | 277.8MB | ok |
| canvas | 323.7MB | 277.4MB | ok |
| policy | 321.6MB | 275.3MB | ok |
| deepinfra | 313.6MB | 267.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 3109.9ms | 3166.4ms |
| default | cli.main.gateway-run-bootstrap | 2349.7ms | 2356.8ms |
| default | cli.bootstrap.legacy-state-migrations | 837.6ms | 866.0ms |
| default | runtime.post-attach | 380.1ms | 382.0ms |
| default | cli.main.gateway-run-select-environment | 271.2ms | 286.5ms |
| skipChannels | process.bootstrap | 3085.4ms | 3376.1ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2333.3ms | 2581.6ms |
| skipChannels | cli.bootstrap.legacy-state-migrations | 858.5ms | 1002.2ms |
| skipChannels | cli.main.gateway-run-select-environment | 274.2ms | 286.9ms |
| skipChannels | gateway.server-start-import | 124.9ms | 160.6ms |
| preparedRuntimeCatalogStall | process.bootstrap | 3115.1ms | 3195.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 2382.0ms | 2443.9ms |
| preparedRuntimeCatalogStall | cli.bootstrap.legacy-state-migrations | 843.2ms | 876.9ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 261.5ms | 265.0ms |
| preparedRuntimeCatalogStall | gateway.server-start-import | 124.9ms | 125.4ms |
| preparedRuntimeScaleOne | process.bootstrap | 3193.1ms | 4282.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 2390.2ms | 3429.0ms |
| preparedRuntimeScaleOne | cli.bootstrap.legacy-state-migrations | 819.9ms | 1393.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 266.3ms | 291.4ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 130.1ms | 133.6ms |
| preparedRuntimeScaleMany | process.bootstrap | 3401.6ms | 3699.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 2672.0ms | 2866.7ms |
| preparedRuntimeScaleMany | cli.bootstrap.legacy-state-migrations | 813.4ms | 841.7ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 251.9ms | 263.6ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 244.6ms | 249.8ms |
| oneInternalHook | process.bootstrap | 2840.8ms | 4088.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2130.9ms | 3053.3ms |
| oneInternalHook | cli.bootstrap.legacy-state-migrations | 758.6ms | 1175.2ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 252.4ms | 398.8ms |
| oneInternalHook | gateway.server-start-import | 123.5ms | 125.6ms |
| allInternalHooks | process.bootstrap | 2683.4ms | 2799.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2019.8ms | 2094.5ms |
| allInternalHooks | cli.bootstrap.legacy-state-migrations | 725.5ms | 764.0ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 231.8ms | 240.2ms |
| allInternalHooks | gateway.server-start-import | 109.7ms | 123.5ms |
| fiftyPlugins | process.bootstrap | 3081.7ms | 3145.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2362.0ms | 2413.0ms |
| fiftyPlugins | cli.bootstrap.legacy-state-migrations | 811.2ms | 836.2ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 242.5ms | 247.9ms |
| fiftyPlugins | gateway.server-start-import | 116.9ms | 126.3ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2872.9ms | 2942.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2189.1ms | 2241.3ms |
| fiftyStartupLazyPlugins | cli.bootstrap.legacy-state-migrations | 737.1ms | 769.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 237.8ms | 244.5ms |
| fiftyStartupLazyPlugins | gateway.server-start-import | 113.2ms | 115.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9985.0ms | 0.100 | 624.7MB | 735.8MB | 111.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9615.0ms | 0.104 | 667.3MB | 846.4MB | 179.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9586.0ms | 0.104 | 620.8MB | 797.1MB | 176.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 350.5ms | 355.5ms | 55.4MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 345.3ms | 350.9ms | 55.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 730.4ms | 738.8ms | 55.4MB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 16 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 201.9ms |
| baseline | v2 | smoke | 3.53.3 | 16 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 212.7ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -17.6% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.5ms | 1.5ms | 1000 | 20 | 1.6ms | -4.3% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.4ms | -1.2% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | -2.0% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -4.4% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -4.7% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -5.6% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -2.9% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | -1.8% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -5.6% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | +0.5% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.2ms | 0.3ms | 256 | 20 | 0.3ms | -9.7% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

