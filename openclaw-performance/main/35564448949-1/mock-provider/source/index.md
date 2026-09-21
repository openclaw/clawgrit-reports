# OpenClaw Source Performance

Generated: 2026-09-21T05:35:21.156Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3339.3ms | 3345.0ms | 2455.1ms | 2903.8ms | 3298.8ms | 121.6ms | 690.9MB | 1.244 |
| skipChannels | gateway, skip channels | 3358.4ms | 3364.6ms | 2541.1ms | 3087.0ms | 2686.4ms | 129.5ms | 723.3MB | 1.207 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3086.1ms | 3135.8ms | 2569.1ms | 2900.9ms | 2697.4ms | 133.8ms | 657.9MB | 0.982 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3075.2ms | 3186.3ms | 2474.3ms | 2783.1ms | 2594.4ms | 127.4ms | 652.2MB | 0.976 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 3518.7ms | 3527.2ms | 2754.7ms | 3082.4ms | 2884.7ms | 133.7ms | 659.7MB | 1.169 |
| oneInternalHook | gateway, one configured internal hook | 3404.1ms | 3448.6ms | 2555.3ms | 3118.7ms | 2695.6ms | 128.1ms | 692.6MB | 1.198 |
| allInternalHooks | gateway, all internal hooks | 3326.1ms | 3396.4ms | 2533.2ms | 3048.7ms | 2675.6ms | 124.9ms | 685.0MB | 1.239 |
| fiftyPlugins | gateway, 50 manifest plugins | 3612.2ms | 3862.8ms | 2518.0ms | 2917.5ms | 2636.5ms | 124.9ms | 701.6MB | 1.118 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3111.8ms | 3249.4ms | 2596.6ms | 2911.1ms | 2721.8ms | 129.7ms | 681.2MB | 0.964 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 792.5MB | 690.9MB | -101.6MB (-12.8%) | +2.6MB (+0.9%) | improved |
| gateway boot | skipChannels | 792.2MB | 723.3MB | -68.9MB (-8.7%) | -20.7MB (-8.1%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 735.4MB | 657.9MB | -77.6MB (-10.5%) | +0.3MB (+0.1%) | improved |
| gateway boot | preparedRuntimeScaleOne | 738.6MB | 652.2MB | -86.5MB (-11.7%) | -30.8MB (-12.7%) | improved |
| gateway boot | preparedRuntimeScaleMany | 789.3MB | 659.7MB | -129.6MB (-16.4%) | -44.0MB (-17.3%) | improved |
| gateway boot | oneInternalHook | 747.9MB | 692.6MB | -55.3MB (-7.4%) | +36.9MB (+21.6%) | stable |
| gateway boot | allInternalHooks | 775.8MB | 685.0MB | -90.8MB (-11.7%) | -14.7MB (-6.1%) | improved |
| gateway boot | fiftyPlugins | 767.0MB | 701.6MB | -65.5MB (-8.5%) | +38.3MB (+21.3%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 733.1MB | 681.2MB | -51.9MB (-7.1%) | +43.1MB (+24.7%) | stable |
| cli | gatewayHealthJsonWarmState | 74.0MiB | 73.8MiB | -0.2MiB (-0.3%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 73.8MiB | 73.6MiB | -0.2MiB (-0.3%) | n/a | stable |
| cli | configGetGatewayPort | 73.9MiB | 73.6MiB | -0.2MiB (-0.3%) | n/a | stable |
| mock hello | gateway RSS delta avg | 281.7MB | 355.4MB | +73.7MB (+26.2%) | n/a | watch |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 157 bundled plugins | 543.5MB | 497.3MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| migrate-hermes | 351.7MB | 305.4MB | ok |
| llm-task | 348.0MB | 301.8MB | ok |
| active-memory | 339.6MB | 293.4MB | ok |
| workboard | 338.1MB | 291.9MB | ok |
| discord | 325.5MB | 279.2MB | ok |
| policy | 317.7MB | 271.5MB | ok |
| deepinfra | 314.7MB | 268.5MB | ok |
| opencode | 294.5MB | 248.3MB | ok |
| memory-core | 275.4MB | 229.2MB | ok |
| canvas | 269.9MB | 223.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 1917.3ms | 2004.1ms |
| default | cli.main.gateway-run-bootstrap | 1100.5ms | 1128.0ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1100.5ms | 1128.0ms |
| default | cli.command.config-ready | 1099.8ms | 1127.3ms |
| default | process.bootstrap.cli.command.config-ready | 1099.8ms | 1127.3ms |
| skipChannels | process.bootstrap | 1989.9ms | 2046.6ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1145.6ms | 1174.9ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1145.6ms | 1174.9ms |
| skipChannels | cli.command.config-ready | 1144.6ms | 1174.1ms |
| skipChannels | process.bootstrap.cli.command.config-ready | 1144.6ms | 1174.1ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2008.3ms | 2044.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1145.1ms | 1166.3ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1145.1ms | 1166.3ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1144.1ms | 1165.3ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.command.config-ready | 1144.1ms | 1165.3ms |
| preparedRuntimeScaleOne | process.bootstrap | 1948.0ms | 1991.8ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1129.2ms | 1159.1ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1129.2ms | 1159.1ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1127.1ms | 1158.3ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.command.config-ready | 1127.1ms | 1158.3ms |
| preparedRuntimeScaleMany | process.bootstrap | 2165.5ms | 2167.0ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1290.4ms | 1300.4ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1290.4ms | 1300.4ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1289.7ms | 1299.7ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.command.config-ready | 1289.7ms | 1299.7ms |
| oneInternalHook | process.bootstrap | 2005.0ms | 2037.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1150.4ms | 1155.1ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1150.4ms | 1155.1ms |
| oneInternalHook | cli.command.config-ready | 1149.5ms | 1154.1ms |
| oneInternalHook | process.bootstrap.cli.command.config-ready | 1149.5ms | 1154.1ms |
| allInternalHooks | process.bootstrap | 2008.1ms | 2035.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1163.4ms | 1174.7ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1163.4ms | 1174.7ms |
| allInternalHooks | cli.command.config-ready | 1162.6ms | 1174.0ms |
| allInternalHooks | process.bootstrap.cli.command.config-ready | 1162.6ms | 1174.0ms |
| fiftyPlugins | process.bootstrap | 1989.3ms | 2117.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1162.0ms | 1245.9ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1162.0ms | 1245.9ms |
| fiftyPlugins | cli.command.config-ready | 1161.3ms | 1245.1ms |
| fiftyPlugins | process.bootstrap.cli.command.config-ready | 1161.3ms | 1245.1ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2078.7ms | 2181.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1199.8ms | 1266.0ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1199.8ms | 1266.0ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1198.6ms | 1265.0ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.command.config-ready | 1198.6ms | 1265.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10172.0ms | 0.197 | 1131.4MB | 1487.5MB | 356.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10075.0ms | 0.199 | 1122.5MB | 1480.7MB | 358.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10582.0ms | 0.284 | 1121.8MB | 1473.5MB | 351.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 455.8ms | 515.5ms | 73.8MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 478.3ms | 486.2ms | 73.6MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 780.7ms | 850.8ms | 73.6MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 17 | 21 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 266.5ms |
| baseline | v2 | smoke | 3.53.3 | 17 | 21 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 252.1ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -25.9% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.6ms | 1.9ms | 1000 | 20 | 2.3ms | -16.7% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.5ms | -20.8% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.6ms | 696 | 20 | 0.4ms | +48.0% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -7.0% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -11.6% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -10.3% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -11.6% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | -14.5% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +42.1% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | -16.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.2ms | 0.3ms | 256 | 20 | 0.3ms | -3.4% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

