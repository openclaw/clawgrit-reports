# OpenClaw Source Performance

Generated: 2026-10-25T05:34:49.703Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7019.9ms | 7524.2ms | 4059.1ms | 4636.1ms | 7017.0ms | 389.3ms | 1910.5MB | 1.994 |
| skipChannels | gateway, skip channels | 6829.8ms | 6990.7ms | 3962.7ms | 4582.0ms | 6810.2ms | 369.1ms | 1915.2MB | 1.903 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 6974.3ms | 7103.3ms | 4148.5ms | 4680.9ms | 6970.6ms | 373.6ms | 1990.8MB | 2.007 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 6771.6ms | 6778.1ms | 3926.4ms | 4514.4ms | 6752.1ms | 355.6ms | 1941.2MB | 1.920 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 7790.2ms | 7811.0ms | 3892.1ms | 4487.5ms | 7770.3ms | 361.4ms | 2148.4MB | 2.054 |
| oneInternalHook | gateway, one configured internal hook | 6285.9ms | 6559.8ms | 3805.7ms | 4397.2ms | 6278.2ms | 363.0ms | 1937.8MB | 1.921 |
| allInternalHooks | gateway, all internal hooks | 6573.7ms | 6964.4ms | 3941.6ms | 4535.5ms | 6567.9ms | 369.6ms | 1953.6MB | 1.866 |
| fiftyPlugins | gateway, 50 manifest plugins | 17813.0ms | 18372.7ms | 4839.1ms | 15079.5ms | 17808.9ms | 413.7ms | 4156.1MB | 1.759 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7965.1ms | 8879.7ms | 4838.7ms | 5314.1ms | 7962.4ms | 456.1ms | 1898.4MB | 2.021 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1907.6MB | 1910.5MB | +2.9MB (+0.2%) | -31.4MB (-9.8%) | stable |
| gateway boot | skipChannels | 1896.7MB | 1915.2MB | +18.5MB (+1.0%) | -22.4MB (-9.2%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 2031.1MB | 1990.8MB | -40.3MB (-2.0%) | -11.1MB (-4.6%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1968.4MB | 1941.2MB | -27.3MB (-1.4%) | -2.1MB (-0.9%) | stable |
| gateway boot | preparedRuntimeScaleMany | 2146.3MB | 2148.4MB | +2.1MB (+0.1%) | +3.2MB (+1.4%) | stable |
| gateway boot | oneInternalHook | 1919.8MB | 1937.8MB | +17.9MB (+0.9%) | -38.3MB (-13.6%) | stable |
| gateway boot | allInternalHooks | 1925.7MB | 1953.6MB | +28.0MB (+1.5%) | -24.7MB (-9.7%) | stable |
| gateway boot | fiftyPlugins | 4525.5MB | 4156.1MB | -369.4MB (-8.2%) | -32.9MB (-12.0%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1969.1MB | 1898.4MB | -70.6MB (-3.6%) | -18.3MB (-7.3%) | stable |
| cli | gatewayHealthJsonWarmState | 74.3MiB | 74.6MiB | +0.3MiB (+0.3%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 74.5MiB | 74.5MiB | +0.0MiB (+0.0%) | n/a | stable |
| cli | configGetGatewayPort | 74.7MiB | 74.9MiB | +0.3MiB (+0.3%) | n/a | stable |
| mock hello | gateway RSS delta avg | 73.2MB | 7.8MB | -65.4MB (-89.3%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.3MB | 0.0MB | ok |
| all 174 bundled plugins | 562.2MB | 517.8MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 408.5MB | 364.2MB | ok |
| active-memory | 384.1MB | 339.7MB | ok |
| workboard | 375.5MB | 331.1MB | ok |
| agentsapi | 342.9MB | 298.5MB | ok |
| muse | 340.2MB | 295.9MB | ok |
| policy | 335.0MB | 290.6MB | ok |
| copilot | 328.6MB | 284.2MB | ok |
| clickclack | 323.3MB | 279.0MB | ok |
| opencode | 321.9MB | 277.5MB | ok |
| memory-lancedb | 314.7MB | 270.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 7045.0ms | 7533.6ms |
| default | process.bootstrap | 2627.2ms | 2818.8ms |
| default | sidecars.channels | 1807.7ms | 1823.1ms |
| default | sidecars.main-session-recovery | 997.6ms | 1019.2ms |
| default | sidecars.main-session-recovery-scan | 983.2ms | 998.4ms |
| skipChannels | cli.main.gateway-run-parse | 6788.3ms | 7070.6ms |
| skipChannels | process.bootstrap | 2582.2ms | 2661.1ms |
| skipChannels | sidecars.channels | 1509.9ms | 1552.6ms |
| skipChannels | post-ready.maintenance | 1140.4ms | 1145.7ms |
| skipChannels | cli.main.gateway-run-bootstrap | 955.2ms | 979.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 6727.9ms | 6942.3ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2681.4ms | 2738.2ms |
| preparedRuntimeCatalogStall | sidecars.channels | 1726.7ms | 1831.6ms |
| preparedRuntimeCatalogStall | sidecars.main-session-recovery | 1169.0ms | 1265.2ms |
| preparedRuntimeCatalogStall | sidecars.main-session-recovery-scan | 1150.2ms | 1249.5ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 6830.2ms | 6877.8ms |
| preparedRuntimeScaleOne | process.bootstrap | 2593.0ms | 2728.4ms |
| preparedRuntimeScaleOne | sidecars.channels | 1417.7ms | 1524.8ms |
| preparedRuntimeScaleOne | post-ready.maintenance | 1095.2ms | 1108.1ms |
| preparedRuntimeScaleOne | post-ready.gateway-data.session-history-worker | 1018.9ms | 1033.8ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 7859.7ms | 7969.5ms |
| preparedRuntimeScaleMany | process.bootstrap | 2507.8ms | 2562.1ms |
| preparedRuntimeScaleMany | sidecars.channels | 1947.2ms | 2021.3ms |
| preparedRuntimeScaleMany | sidecars.main-session-recovery | 1387.5ms | 1457.1ms |
| preparedRuntimeScaleMany | sidecars.main-session-recovery-scan | 1373.6ms | 1439.1ms |
| oneInternalHook | cli.main.gateway-run-parse | 6406.8ms | 6416.2ms |
| oneInternalHook | process.bootstrap | 2489.2ms | 2643.3ms |
| oneInternalHook | sidecars.channels | 1480.6ms | 1498.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 941.1ms | 1014.5ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 941.1ms | 1014.5ms |
| allInternalHooks | cli.main.gateway-run-parse | 6566.5ms | 7019.6ms |
| allInternalHooks | process.bootstrap | 2597.2ms | 2699.2ms |
| allInternalHooks | sidecars.channels | 1455.6ms | 1461.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 962.1ms | 963.7ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 962.1ms | 963.7ms |
| fiftyPlugins | cli.main.gateway-run-parse | 17578.3ms | 18707.1ms |
| fiftyPlugins | plugins.runtime-post-bind | 9561.1ms | 10258.5ms |
| fiftyPlugins | plugins.gateway-load.loadMs | 9551.7ms | 10249.4ms |
| fiftyPlugins | process.bootstrap | 3131.2ms | 3196.4ms |
| fiftyPlugins | sidecars.channels | 1837.7ms | 1841.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 7955.4ms | 8918.7ms |
| fiftyStartupLazyPlugins | process.bootstrap | 3194.8ms | 3520.3ms |
| fiftyStartupLazyPlugins | sidecars.channels | 1939.1ms | 2139.2ms |
| fiftyStartupLazyPlugins | post-ready.gateway-data.session-history-worker | 1383.9ms | 1393.8ms |
| fiftyStartupLazyPlugins | post-ready.maintenance | 1315.3ms | 1441.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12917.0ms | 0.310 | 2019.9MB | 2135.6MB | 115.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 13646.0ms | 0.366 | 2077.0MB | 2066.9MB | -10.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 15864.0ms | 0.630 | 2044.5MB | 1962.4MB | -82.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 707.1ms | 716.1ms | 74.6MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 665.2ms | 689.2ms | 74.5MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 801.8ms | 896.5ms | 74.9MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 32 | 34 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 342.3ms |
| baseline | v2 | smoke | 3.53.4 | 31 | 32 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 255.0ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +44.4% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.6ms | 1.8ms | 1000 | 20 | 1.4ms | +24.5% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.5ms | 250 | 20 | 0.4ms | +23.9% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | +17.0% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +11.0% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +12.9% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +13.5% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.1ms | +45.2% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.5ms | 675 | 20 | 0.3ms | +68.6% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +31.6% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.2ms | 256 | 20 | 0.1ms | +11.9% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 2.0ms | 5.4ms | 256 | 20 | 7.0ms | -23.7% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

