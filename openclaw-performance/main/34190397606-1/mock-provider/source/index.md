# OpenClaw Source Performance

Generated: 2026-09-08T05:30:20.565Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3391.4ms | 3447.3ms | 3391.3ms | 3167.3ms | 3336.0ms | 76.6ms | 577.5MB | 0.885 |
| skipChannels | gateway, skip channels | 3728.1ms | 3782.5ms | 3327.8ms | 3514.8ms | 3277.8ms | 85.6ms | 578.0MB | 1.087 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3639.5ms | 3749.6ms | 3401.6ms | 3497.6ms | 3350.1ms | 80.5ms | 544.9MB | 1.099 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3758.1ms | 3906.5ms | 3363.6ms | 3454.5ms | 3317.5ms | 81.7ms | 550.6MB | 1.090 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4645.8ms | 4996.0ms | 4643.6ms | 4066.4ms | 3842.3ms | 86.9ms | 608.5MB | 1.084 |
| oneInternalHook | gateway, one configured internal hook | 4162.6ms | 4213.8ms | 3709.6ms | 3944.5ms | 3656.3ms | 88.8ms | 571.1MB | 1.009 |
| allInternalHooks | gateway, all internal hooks | 3746.6ms | 4366.6ms | 3355.1ms | 3532.1ms | 3301.4ms | 88.4ms | 579.6MB | 1.145 |
| fiftyPlugins | gateway, 50 manifest plugins | 4025.6ms | 4031.8ms | 3672.1ms | 3802.8ms | 3624.0ms | 83.4ms | 557.0MB | 1.047 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3857.3ms | 5286.7ms | 3636.0ms | 3725.2ms | 3591.3ms | 84.4ms | 553.6MB | 1.069 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 573.3MB | 577.5MB | +4.3MB (+0.7%) | -13.9MB (-4.3%) | stable |
| gateway boot | skipChannels | 571.7MB | 578.0MB | +6.3MB (+1.1%) | +1.8MB (+0.6%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 552.0MB | 544.9MB | -7.1MB (-1.3%) | -31.7MB (-10.4%) | stable |
| gateway boot | preparedRuntimeScaleOne | 557.2MB | 550.6MB | -6.6MB (-1.2%) | -31.7MB (-10.4%) | stable |
| gateway boot | preparedRuntimeScaleMany | 604.9MB | 608.5MB | +3.5MB (+0.6%) | +3.5MB (+1.3%) | stable |
| gateway boot | oneInternalHook | 567.4MB | 571.1MB | +3.7MB (+0.6%) | +5.3MB (+1.8%) | stable |
| gateway boot | allInternalHooks | 566.1MB | 579.6MB | +13.5MB (+2.4%) | +5.0MB (+1.7%) | stable |
| gateway boot | fiftyPlugins | 557.1MB | 557.0MB | -0.1MB (-0.0%) | -11.3MB (-3.9%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 562.4MB | 553.6MB | -8.8MB (-1.6%) | -13.5MB (-4.7%) | stable |
| cli | gatewayHealthJsonWarmState | 107.9MB | 74.1MB | -33.8MB (-31.3%) | n/a | improved |
| cli | gatewayHealthJsonFreshState | 107.6MB | 74.3MB | -33.3MB (-30.9%) | n/a | improved |
| cli | configGetGatewayPort | 107.6MB | 74.0MB | -33.6MB (-31.2%) | n/a | improved |
| mock hello | gateway RSS delta avg | 138.6MB | 137.9MB | -0.7MB (-0.5%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 150 bundled plugins | 600.2MB | 554.0MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 360.3MB | 314.1MB | ok |
| clickclack | 360.1MB | 313.9MB | ok |
| llm-task | 354.8MB | 308.5MB | ok |
| migrate-hermes | 354.1MB | 307.9MB | ok |
| active-memory | 351.9MB | 305.7MB | ok |
| discord | 351.7MB | 305.4MB | ok |
| copilot | 329.2MB | 283.0MB | ok |
| canvas | 324.3MB | 278.1MB | ok |
| policy | 323.0MB | 276.8MB | ok |
| deepinfra | 315.0MB | 268.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2471.5ms | 2478.6ms |
| default | cli.main.gateway-run-bootstrap | 1817.9ms | 1821.7ms |
| default | cli.bootstrap.legacy-state-migrations | 665.0ms | 671.0ms |
| default | runtime.post-attach | 284.5ms | 296.0ms |
| default | cli.main.gateway-run-select-environment | 224.8ms | 225.5ms |
| skipChannels | process.bootstrap | 2649.4ms | 2715.3ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1939.4ms | 2011.5ms |
| skipChannels | cli.bootstrap.legacy-state-migrations | 717.2ms | 736.8ms |
| skipChannels | cli.main.gateway-run-select-environment | 249.4ms | 252.5ms |
| skipChannels | gateway.server-start-import | 119.0ms | 123.0ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2657.5ms | 2837.8ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1987.2ms | 2119.7ms |
| preparedRuntimeCatalogStall | cli.bootstrap.legacy-state-migrations | 745.0ms | 750.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 235.4ms | 259.6ms |
| preparedRuntimeCatalogStall | gateway.server-start-import | 116.7ms | 133.0ms |
| preparedRuntimeScaleOne | process.bootstrap | 2671.9ms | 2804.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1997.9ms | 2134.8ms |
| preparedRuntimeScaleOne | cli.bootstrap.legacy-state-migrations | 706.0ms | 783.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 234.7ms | 240.5ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 126.0ms | 126.7ms |
| preparedRuntimeScaleMany | process.bootstrap | 3170.9ms | 3173.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 2391.9ms | 2449.0ms |
| preparedRuntimeScaleMany | cli.bootstrap.legacy-state-migrations | 718.0ms | 721.1ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 267.5ms | 348.7ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 253.2ms | 396.8ms |
| oneInternalHook | process.bootstrap | 2931.5ms | 3015.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2189.3ms | 2220.8ms |
| oneInternalHook | cli.bootstrap.legacy-state-migrations | 745.5ms | 764.2ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 274.5ms | 275.0ms |
| oneInternalHook | plugins.runtime-post-bind | 124.6ms | 178.7ms |
| allInternalHooks | process.bootstrap | 2668.1ms | 3318.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1960.7ms | 2487.3ms |
| allInternalHooks | cli.bootstrap.legacy-state-migrations | 741.7ms | 755.6ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 238.9ms | 250.0ms |
| allInternalHooks | gateway.server-start-import | 114.5ms | 118.3ms |
| fiftyPlugins | process.bootstrap | 2815.5ms | 2847.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2090.6ms | 2113.6ms |
| fiftyPlugins | cli.bootstrap.legacy-state-migrations | 722.8ms | 726.7ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 240.5ms | 256.4ms |
| fiftyPlugins | gateway.server-start-import | 129.7ms | 136.5ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2918.9ms | 4134.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2183.2ms | 3313.0ms |
| fiftyStartupLazyPlugins | cli.bootstrap.legacy-state-migrations | 768.4ms | 872.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 247.9ms | 276.1ms |
| fiftyStartupLazyPlugins | gateway.server-start-import | 120.2ms | 122.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9146.0ms | 0.109 | 618.5MB | 766.7MB | 148.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9123.0ms | 0.110 | 621.2MB | 742.4MB | 121.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 8886.0ms | 0.225 | 595.4MB | 739.8MB | 144.4MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 384.5ms | 389.5ms | 74.1MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 425.9ms | 482.6ms | 74.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 765.8ms | 780.9ms | 74.0MB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 16 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 212.7ms |
| baseline | v2 | smoke | 3.53.3 | 16 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 212.9ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -10.5% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.6ms | 1.6ms | 1000 | 20 | 1.6ms | -3.6% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.4ms | -9.4% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | -5.8% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +9.7% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +3.3% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +4.9% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -4.5% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | -4.5% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +20.0% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | -2.6% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.2ms | 0.3ms | 256 | 20 | 0.2ms | +26.7% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

