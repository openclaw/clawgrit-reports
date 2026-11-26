# OpenClaw Source Performance

Generated: 2026-11-26T05:36:47.071Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 9364.5ms | 9647.6ms | 6801.3ms | 8578.8ms | 9387.4ms | 740.5ms | 1129.4MB | 1.281 |
| skipChannels | gateway, skip channels | 9460.9ms | 9793.2ms | 6988.6ms | 8951.6ms | 9454.1ms | 721.4ms | 1126.5MB | 1.290 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 9011.5ms | 9160.2ms | 6765.8ms | 8522.6ms | 9026.7ms | 739.0ms | 1099.3MB | 1.255 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 8979.3ms | 9218.4ms | 6770.8ms | 8490.3ms | 8994.1ms | 733.0ms | 1101.1MB | 1.244 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 9274.4ms | 9697.0ms | 6901.7ms | 8662.4ms | 9260.7ms | 746.0ms | 1098.9MB | 1.294 |
| oneInternalHook | gateway, one configured internal hook | 9882.2ms | 9888.6ms | 7160.5ms | 9236.2ms | 9887.7ms | 735.3ms | 1155.5MB | 1.225 |
| allInternalHooks | gateway, all internal hooks | 9762.8ms | 9887.1ms | 6985.6ms | 9100.0ms | 9777.5ms | 733.0ms | 1132.1MB | 1.235 |
| fiftyPlugins | gateway, 50 manifest plugins | 9330.3ms | 9377.7ms | 6722.1ms | 8850.8ms | 9318.1ms | 726.8ms | 1129.7MB | 1.286 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 9067.4ms | 9164.6ms | 6826.5ms | 8571.9ms | 9060.6ms | 737.8ms | 1116.9MB | 1.236 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1120.7MB | 1129.4MB | +8.7MB (+0.8%) | -3.0MB (-1.0%) | stable |
| gateway boot | skipChannels | 1127.8MB | 1126.5MB | -1.3MB (-0.1%) | -1.8MB (-0.7%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1104.1MB | 1099.3MB | -4.9MB (-0.4%) | +4.5MB (+1.7%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1087.2MB | 1101.1MB | +13.9MB (+1.3%) | -2.2MB (-0.8%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1108.3MB | 1098.9MB | -9.3MB (-0.8%) | -15.8MB (-5.8%) | stable |
| gateway boot | oneInternalHook | 1143.4MB | 1155.5MB | +12.1MB (+1.1%) | -55.0MB (-20.0%) | stable |
| gateway boot | allInternalHooks | 1128.1MB | 1132.1MB | +3.9MB (+0.3%) | -18.3MB (-6.7%) | stable |
| gateway boot | fiftyPlugins | 1131.7MB | 1129.7MB | -1.9MB (-0.2%) | -1.5MB (-0.5%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1093.6MB | 1116.9MB | +23.3MB (+2.1%) | +6.5MB (+2.4%) | stable |
| cli | gatewayHealthJsonWarmState | 68.2MiB | 68.9MiB | +0.8MiB (+1.1%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 67.9MiB | 68.9MiB | +1.0MiB (+1.5%) | n/a | stable |
| cli | configGetGatewayPort | 68.3MiB | 68.9MiB | +0.5MiB (+0.8%) | n/a | stable |
| mock hello | gateway RSS delta avg | 643.9MB | 505.1MB | -138.8MB (-21.6%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 47.0MB | 0.0MB | ok |
| all 185 bundled plugins | 550.6MB | 503.6MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 368.1MB | 321.1MB | ok |
| knowledge | 350.0MB | 303.0MB | ok |
| workboard | 343.5MB | 296.5MB | ok |
| active-memory | 339.7MB | 292.7MB | ok |
| agentsapi | 336.5MB | 289.5MB | ok |
| telegram | 336.4MB | 289.5MB | ok |
| clickclack | 336.4MB | 289.4MB | ok |
| policy | 327.2MB | 280.2MB | ok |
| team-reports | 321.9MB | 275.0MB | ok |
| beam | 318.4MB | 271.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 9914.6ms | 10012.3ms |
| default | process.bootstrap | 4791.8ms | 4935.9ms |
| default | cli.main.gateway-run-bootstrap | 2238.6ms | 2358.8ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 2238.6ms | 2358.8ms |
| default | cli.command.config-ready | 2236.3ms | 2356.2ms |
| skipChannels | cli.main.gateway-run-parse | 8639.3ms | 8916.4ms |
| skipChannels | process.bootstrap | 4963.9ms | 5239.1ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2420.9ms | 2719.3ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 2420.9ms | 2719.3ms |
| skipChannels | cli.command.config-ready | 2418.7ms | 2716.9ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 8292.8ms | 8302.0ms |
| preparedRuntimeCatalogStall | process.bootstrap | 4749.1ms | 4945.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 2237.1ms | 2241.7ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 2237.1ms | 2241.7ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 2234.6ms | 2239.5ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 8129.1ms | 8496.0ms |
| preparedRuntimeScaleOne | process.bootstrap | 4777.6ms | 4936.1ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 2210.0ms | 2383.0ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 2210.0ms | 2383.0ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 2207.7ms | 2380.7ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 8403.6ms | 8870.8ms |
| preparedRuntimeScaleMany | process.bootstrap | 4808.8ms | 5208.4ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 2277.7ms | 2706.0ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 2277.7ms | 2706.0ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 2275.2ms | 2703.6ms |
| oneInternalHook | cli.main.gateway-run-parse | 9019.9ms | 9042.3ms |
| oneInternalHook | process.bootstrap | 5149.6ms | 5218.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2456.1ms | 2574.7ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 2456.1ms | 2574.7ms |
| oneInternalHook | cli.command.config-ready | 2453.6ms | 2572.4ms |
| allInternalHooks | cli.main.gateway-run-parse | 9052.4ms | 9084.9ms |
| allInternalHooks | process.bootstrap | 4884.8ms | 5189.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2330.3ms | 2612.8ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 2330.3ms | 2612.8ms |
| allInternalHooks | cli.command.config-ready | 2327.8ms | 2610.2ms |
| fiftyPlugins | cli.main.gateway-run-parse | 8652.3ms | 8704.7ms |
| fiftyPlugins | process.bootstrap | 4774.3ms | 4931.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2279.9ms | 2441.0ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 2279.9ms | 2441.0ms |
| fiftyPlugins | cli.command.config-ready | 2277.6ms | 2438.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 8239.2ms | 8325.8ms |
| fiftyStartupLazyPlugins | process.bootstrap | 4816.6ms | 4826.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2324.8ms | 2329.1ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 2324.8ms | 2329.1ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 2322.4ms | 2326.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 28587.0ms | 0.350 | 1995.8MB | 2506.0MB | 510.3MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 28626.0ms | 0.314 | 2042.6MB | 2499.4MB | 456.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 28751.0ms | 0.383 | 1956.2MB | 2504.4MB | 548.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 1171.1ms | 1240.7ms | 68.9MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 1084.6ms | 1130.4ms | 68.9MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1281.9ms | 1293.1ms | 68.9MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 42 | 45 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 786.1ms |
| baseline | v2 | smoke | 3.53.4 | 42 | 44 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 775.1ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -31.3% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 2.2ms | 2.2ms | 1000 | 20 | 2.8ms | -21.7% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.6ms | 0.6ms | 250 | 20 | 0.8ms | -21.9% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.5ms | 0.5ms | 696 | 20 | 0.7ms | -30.6% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.2ms | -28.5% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.3ms | -26.5% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.2ms | -28.9% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.3ms | -29.6% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.4ms | 0.4ms | 675 | 20 | 0.6ms | -29.5% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.1ms | -21.3% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.3ms | 256 | 20 | 0.3ms | -23.3% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 3.0ms | 4.4ms | 256 | 20 | 6.8ms | -35.0% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

