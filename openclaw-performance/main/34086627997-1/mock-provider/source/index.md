# OpenClaw Source Performance

Generated: 2026-09-07T05:30:34.465Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3261.2ms | 3467.4ms | 3261.1ms | 3018.0ms | 3195.0ms | 84.1ms | 573.3MB | 1.269 |
| skipChannels | gateway, skip channels | 3492.9ms | 3653.1ms | 3093.3ms | 3277.9ms | 3046.1ms | 94.5ms | 571.7MB | 1.224 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3447.1ms | 3470.8ms | 3225.1ms | 3313.6ms | 3171.1ms | 93.1ms | 552.0MB | 1.247 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3478.2ms | 3478.8ms | 3095.6ms | 3189.8ms | 3047.1ms | 84.4ms | 557.2MB | 1.154 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4246.5ms | 4593.9ms | 3526.0ms | 3609.9ms | 3469.6ms | 91.7ms | 604.9MB | 1.177 |
| oneInternalHook | gateway, one configured internal hook | 3517.7ms | 3691.1ms | 3122.7ms | 3296.8ms | 3073.2ms | 88.4ms | 567.4MB | 1.164 |
| allInternalHooks | gateway, all internal hooks | 3577.8ms | 3601.9ms | 3148.2ms | 3332.2ms | 3098.5ms | 87.6ms | 566.1MB | 1.124 |
| fiftyPlugins | gateway, 50 manifest plugins | 3336.4ms | 3765.9ms | 3030.7ms | 3165.4ms | 2986.7ms | 83.4ms | 557.1MB | 1.199 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3657.0ms | 3702.0ms | 3413.8ms | 3501.7ms | 3362.2ms | 99.0ms | 562.4MB | 1.138 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 610.2MB | 573.3MB | -36.9MB (-6.1%) | -50.3MB (-13.3%) | stable |
| gateway boot | skipChannels | 614.0MB | 571.7MB | -42.3MB (-6.9%) | -21.6MB (-6.7%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 539.5MB | 552.0MB | +12.4MB (+2.3%) | +29.7MB (+10.8%) | stable |
| gateway boot | preparedRuntimeScaleOne | 591.7MB | 557.2MB | -34.6MB (-5.8%) | -25.8MB (-7.8%) | stable |
| gateway boot | preparedRuntimeScaleMany | 655.8MB | 604.9MB | -50.9MB (-7.8%) | -58.5MB (-17.5%) | stable |
| gateway boot | oneInternalHook | 607.8MB | 567.4MB | -40.4MB (-6.6%) | -25.3MB (-7.8%) | stable |
| gateway boot | allInternalHooks | 608.3MB | 566.1MB | -42.2MB (-6.9%) | -25.9MB (-8.0%) | stable |
| gateway boot | fiftyPlugins | 599.9MB | 557.1MB | -42.8MB (-7.1%) | -38.9MB (-11.9%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 600.0MB | 562.4MB | -37.6MB (-6.3%) | -37.3MB (-11.4%) | stable |
| cli | gatewayHealthJsonWarmState | 180.4MB | 107.9MB | -72.5MB (-40.2%) | n/a | improved |
| cli | gatewayHealthJsonFreshState | 179.1MB | 107.6MB | -71.5MB (-39.9%) | n/a | improved |
| cli | configGetGatewayPort | 178.9MB | 107.6MB | -71.3MB (-39.8%) | n/a | improved |
| mock hello | gateway RSS delta avg | 142.2MB | 138.6MB | -3.6MB (-2.5%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 149 bundled plugins | 605.3MB | 559.1MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| clickclack | 367.5MB | 321.3MB | ok |
| workboard | 359.1MB | 312.8MB | ok |
| discord | 355.8MB | 309.5MB | ok |
| migrate-hermes | 354.7MB | 308.4MB | ok |
| llm-task | 352.9MB | 306.6MB | ok |
| active-memory | 348.4MB | 302.1MB | ok |
| copilot | 327.1MB | 280.9MB | ok |
| canvas | 323.8MB | 277.5MB | ok |
| openrouter | 312.0MB | 265.7MB | ok |
| amazon-bedrock | 310.1MB | 263.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2215.2ms | 2433.0ms |
| default | cli.main.gateway-run-bootstrap | 1479.3ms | 1599.4ms |
| default | cli.bootstrap.legacy-state-migrations | 720.9ms | 728.0ms |
| default | cli.main.gateway-run-select-environment | 374.8ms | 388.4ms |
| default | runtime.post-attach | 310.0ms | 318.1ms |
| skipChannels | process.bootstrap | 2400.7ms | 2446.3ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1571.9ms | 1592.3ms |
| skipChannels | cli.bootstrap.legacy-state-migrations | 742.9ms | 785.1ms |
| skipChannels | cli.main.gateway-run-select-environment | 395.4ms | 418.3ms |
| skipChannels | plugins.runtime-post-bind | 117.4ms | 127.3ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2432.4ms | 2470.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1579.7ms | 1662.3ms |
| preparedRuntimeCatalogStall | cli.bootstrap.legacy-state-migrations | 718.0ms | 771.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 372.7ms | 385.5ms |
| preparedRuntimeCatalogStall | gateway.server-start-import | 121.5ms | 121.6ms |
| preparedRuntimeScaleOne | process.bootstrap | 2357.3ms | 2424.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1599.3ms | 1599.5ms |
| preparedRuntimeScaleOne | cli.bootstrap.legacy-state-migrations | 717.7ms | 723.1ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 363.8ms | 407.5ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 132.5ms | 144.1ms |
| preparedRuntimeScaleMany | process.bootstrap | 2821.0ms | 2957.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1940.5ms | 2029.4ms |
| preparedRuntimeScaleMany | cli.bootstrap.legacy-state-migrations | 772.6ms | 875.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 437.8ms | 477.3ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 269.8ms | 330.6ms |
| oneInternalHook | process.bootstrap | 2348.4ms | 2478.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1545.8ms | 1660.2ms |
| oneInternalHook | cli.bootstrap.legacy-state-migrations | 775.7ms | 811.3ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 396.4ms | 409.9ms |
| oneInternalHook | plugins.runtime-post-bind | 110.3ms | 125.3ms |
| allInternalHooks | process.bootstrap | 2376.1ms | 2429.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1581.4ms | 1582.3ms |
| allInternalHooks | cli.bootstrap.legacy-state-migrations | 735.8ms | 790.0ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 394.7ms | 408.4ms |
| allInternalHooks | plugins.runtime-post-bind | 120.9ms | 125.2ms |
| fiftyPlugins | process.bootstrap | 2370.8ms | 2613.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1596.0ms | 1836.7ms |
| fiftyPlugins | cli.bootstrap.legacy-state-migrations | 704.3ms | 845.8ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 378.0ms | 387.3ms |
| fiftyPlugins | cli.bootstrap.config-snapshot | 109.4ms | 113.6ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2635.8ms | 2645.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1744.6ms | 1816.8ms |
| fiftyStartupLazyPlugins | cli.bootstrap.legacy-state-migrations | 804.2ms | 809.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 408.9ms | 445.6ms |
| fiftyStartupLazyPlugins | gateway.server-start-import | 116.1ms | 117.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 8317.0ms | 0.120 | 627.3MB | 764.1MB | 136.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 7710.0ms | 0.130 | 619.0MB | 759.3MB | 140.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 7816.0ms | 0.128 | 599.7MB | 738.4MB | 138.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 480.1ms | 497.7ms | 107.9MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 698.8ms | 709.9ms | 107.6MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 850.0ms | 880.0ms | 107.6MB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 16 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 212.9ms |
| baseline | v2 | smoke | 3.53.3 | 16 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 207.6ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +18.7% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.6ms | 1.6ms | 1000 | 20 | 1.6ms | +2.7% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.5ms | -0.4% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | +3.7% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | 0.0% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +2.5% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +1.0% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +8.9% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +0.7% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -11.8% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | +6.7% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | +5.7% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

