# OpenClaw Source Performance

Generated: 2026-09-14T05:33:45.403Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3320.8ms | 3341.6ms | 3320.7ms | 3075.6ms | 3255.5ms | 90.2ms | 621.1MB | 0.909 |
| skipChannels | gateway, skip channels | 3406.4ms | 3443.1ms | 2999.5ms | 3191.1ms | 2947.9ms | 90.8ms | 618.8MB | 0.884 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3320.6ms | 3364.0ms | 3084.3ms | 3185.8ms | 3032.2ms | 89.8ms | 614.9MB | 0.920 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3810.2ms | 3880.6ms | 3337.8ms | 3448.8ms | 3273.2ms | 102.9ms | 610.5MB | 1.105 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4406.3ms | 4484.7ms | 3334.2ms | 3434.3ms | 3279.2ms | 91.1ms | 676.1MB | 1.135 |
| oneInternalHook | gateway, one configured internal hook | 3637.9ms | 5724.8ms | 3063.4ms | 3269.9ms | 3009.7ms | 92.7ms | 666.7MB | 1.100 |
| allInternalHooks | gateway, all internal hooks | 3400.8ms | 3419.3ms | 3004.8ms | 3197.4ms | 2951.9ms | 90.4ms | 617.4MB | 0.889 |
| fiftyPlugins | gateway, 50 manifest plugins | 4006.5ms | 4033.5ms | 3116.6ms | 3326.4ms | 3060.7ms | 90.8ms | 636.5MB | 1.017 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3396.3ms | 3443.1ms | 3130.4ms | 3244.5ms | 3074.0ms | 93.9ms | 627.6MB | 0.893 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 589.9MB | 621.1MB | +31.2MB (+5.3%) | -50.7MB (-15.1%) | stable |
| gateway boot | skipChannels | 610.5MB | 618.8MB | +8.3MB (+1.4%) | -35.6MB (-14.5%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 505.7MB | 614.9MB | +109.2MB (+21.6%) | -16.5MB (-6.7%) | watch |
| gateway boot | preparedRuntimeScaleOne | 506.9MB | 610.5MB | +103.6MB (+20.4%) | -16.1MB (-6.5%) | watch |
| gateway boot | preparedRuntimeScaleMany | 574.2MB | 676.1MB | +101.9MB (+17.7%) | -22.2MB (-8.9%) | stable |
| gateway boot | oneInternalHook | 607.5MB | 666.7MB | +59.2MB (+9.7%) | -16.4MB (-6.7%) | stable |
| gateway boot | allInternalHooks | 599.4MB | 617.4MB | +18.0MB (+3.0%) | -25.1MB (-10.2%) | stable |
| gateway boot | fiftyPlugins | 540.2MB | 636.5MB | +96.3MB (+17.8%) | -20.0MB (-8.0%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 506.8MB | 627.6MB | +120.8MB (+23.8%) | -23.1MB (-9.3%) | watch |
| cli | gatewayHealthJsonWarmState | 63.9MiB | 64.0MiB | +0.1MiB (+0.2%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 63.7MiB | 63.8MiB | +0.0MiB (+0.0%) | n/a | stable |
| cli | configGetGatewayPort | 63.9MiB | 64.0MiB | +0.1MiB (+0.2%) | n/a | stable |
| mock hello | gateway RSS delta avg | 292.3MB | 182.6MB | -109.8MB (-37.6%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 152 bundled plugins | 557.8MB | 511.6MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| migrate-hermes | 346.6MB | 300.3MB | ok |
| active-memory | 346.5MB | 300.2MB | ok |
| llm-task | 340.4MB | 294.1MB | ok |
| workboard | 334.4MB | 288.2MB | ok |
| clickclack | 323.8MB | 277.6MB | ok |
| copilot | 315.7MB | 269.4MB | ok |
| discord | 315.7MB | 269.4MB | ok |
| deepinfra | 272.5MB | 226.3MB | ok |
| policy | 271.8MB | 225.6MB | ok |
| canvas | 265.4MB | 219.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2230.7ms | 2231.9ms |
| default | cli.main.gateway-run-bootstrap | 1611.7ms | 1617.0ms |
| default | runtime.post-attach | 323.1ms | 335.2ms |
| default | cli.bootstrap.legacy-state-migrations | 315.7ms | 326.4ms |
| default | cli.main.gateway-run-select-environment | 230.1ms | 237.5ms |
| skipChannels | process.bootstrap | 2249.6ms | 2256.8ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1623.2ms | 1645.0ms |
| skipChannels | cli.bootstrap.legacy-state-migrations | 313.4ms | 331.2ms |
| skipChannels | cli.main.gateway-run-select-environment | 234.4ms | 243.4ms |
| skipChannels | gateway.shutdown-runtime-import | 148.5ms | 148.8ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2312.0ms | 2344.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1681.4ms | 1702.0ms |
| preparedRuntimeCatalogStall | cli.bootstrap.legacy-state-migrations | 308.1ms | 315.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 237.5ms | 247.5ms |
| preparedRuntimeCatalogStall | gateway.shutdown-runtime-import | 148.2ms | 150.5ms |
| preparedRuntimeScaleOne | process.bootstrap | 2492.7ms | 2523.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1839.1ms | 1846.8ms |
| preparedRuntimeScaleOne | cli.bootstrap.legacy-state-migrations | 336.3ms | 348.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 256.3ms | 260.9ms |
| preparedRuntimeScaleOne | gateway.shutdown-runtime-import | 167.9ms | 170.1ms |
| preparedRuntimeScaleMany | process.bootstrap | 2548.1ms | 2568.9ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1936.3ms | 1960.5ms |
| preparedRuntimeScaleMany | sidecars.chat-metadata | 394.8ms | 399.9ms |
| preparedRuntimeScaleMany | cli.bootstrap.legacy-state-migrations | 321.1ms | 324.1ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 317.8ms | 327.2ms |
| oneInternalHook | process.bootstrap | 2288.7ms | 3705.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1667.9ms | 2675.9ms |
| oneInternalHook | cli.bootstrap.legacy-state-migrations | 331.4ms | 524.7ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 242.6ms | 387.7ms |
| oneInternalHook | post-ready.gateway-data.plugins | 153.0ms | 153.0ms |
| allInternalHooks | process.bootstrap | 2248.2ms | 2259.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1624.5ms | 1648.3ms |
| allInternalHooks | cli.bootstrap.legacy-state-migrations | 320.5ms | 321.6ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 235.7ms | 237.7ms |
| allInternalHooks | gateway.shutdown-runtime-import | 155.9ms | 156.7ms |
| fiftyPlugins | process.bootstrap | 2341.6ms | 2381.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1726.1ms | 1756.1ms |
| fiftyPlugins | sidecars.reply-runtime | 345.1ms | 345.2ms |
| fiftyPlugins | cli.bootstrap.legacy-state-migrations | 318.9ms | 325.8ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 229.3ms | 238.3ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2364.7ms | 2399.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1751.7ms | 1764.2ms |
| fiftyStartupLazyPlugins | cli.bootstrap.legacy-state-migrations | 318.9ms | 320.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 230.2ms | 235.1ms |
| fiftyStartupLazyPlugins | gateway.shutdown-runtime-import | 145.1ms | 148.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9127.0ms | 0.219 | 892.0MB | 1057.5MB | 165.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9090.0ms | 0.220 | 895.5MB | 1084.7MB | 189.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9093.0ms | 0.220 | 892.6MB | 1085.6MB | 193.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 366.4ms | 374.5ms | 64.0MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 368.5ms | 370.7ms | 63.8MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 723.8ms | 727.9ms | 64.0MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 17 | 20 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 204.1ms |
| baseline | v2 | smoke | 3.53.3 | 17 | 20 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 203.2ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | 0.0% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.5ms | 1.6ms | 1000 | 20 | 1.6ms | -1.4% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.4ms | +3.0% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | -11.8% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -6.3% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -10.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -12.6% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -8.3% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +23.6% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +23.5% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | +8.3% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | +3.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

