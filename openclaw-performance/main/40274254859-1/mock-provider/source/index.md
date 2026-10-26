# OpenClaw Source Performance

Generated: 2026-10-26T05:38:19.593Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5444.9ms | 5467.4ms | 3177.7ms | 3623.8ms | 5441.0ms | 284.9ms | 1935.4MB | 1.845 |
| skipChannels | gateway, skip channels | 5409.5ms | 5514.9ms | 3187.5ms | 3670.7ms | 5404.4ms | 286.3ms | 1936.9MB | 1.871 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 5278.0ms | 5295.4ms | 3180.7ms | 3624.1ms | 5249.0ms | 288.5ms | 1986.3MB | 1.920 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 5391.6ms | 5416.4ms | 3186.7ms | 3642.5ms | 5366.1ms | 284.2ms | 1959.1MB | 1.860 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 6332.2ms | 6384.8ms | 3277.8ms | 3756.6ms | 6332.0ms | 293.3ms | 2107.1MB | 2.031 |
| oneInternalHook | gateway, one configured internal hook | 5427.5ms | 5459.6ms | 3205.5ms | 3720.7ms | 5395.5ms | 290.5ms | 1934.5MB | 1.842 |
| allInternalHooks | gateway, all internal hooks | 5445.9ms | 5450.2ms | 3202.0ms | 3693.9ms | 5414.9ms | 289.9ms | 1964.2MB | 1.864 |
| fiftyPlugins | gateway, 50 manifest plugins | 11696.2ms | 11709.4ms | 3200.2ms | 9899.6ms | 11684.5ms | 288.4ms | 4273.6MB | 1.626 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 5224.2ms | 5289.7ms | 3224.7ms | 3511.7ms | 5204.6ms | 288.2ms | 1943.7MB | 1.922 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1910.5MB | 1935.4MB | +24.9MB (+1.3%) | +0.5MB (+0.2%) | stable |
| gateway boot | skipChannels | 1915.2MB | 1936.9MB | +21.7MB (+1.1%) | +7.6MB (+3.4%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1990.8MB | 1986.3MB | -4.5MB (-0.2%) | -20.4MB (-8.8%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1941.2MB | 1959.1MB | +17.9MB (+0.9%) | -30.1MB (-12.5%) | stable |
| gateway boot | preparedRuntimeScaleMany | 2148.4MB | 2107.1MB | -41.3MB (-1.9%) | -31.2MB (-13.5%) | stable |
| gateway boot | oneInternalHook | 1937.8MB | 1934.5MB | -3.3MB (-0.2%) | -20.1MB (-8.2%) | stable |
| gateway boot | allInternalHooks | 1953.6MB | 1964.2MB | +10.6MB (+0.5%) | -6.0MB (-2.6%) | stable |
| gateway boot | fiftyPlugins | 4156.1MB | 4273.6MB | +117.5MB (+2.8%) | +8.8MB (+3.7%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1898.4MB | 1943.7MB | +45.3MB (+2.4%) | 0.0MB (0.0%) | stable |
| cli | gatewayHealthJsonWarmState | 74.6MiB | 67.3MiB | -7.3MiB (-9.7%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 74.5MiB | 67.3MiB | -7.2MiB (-9.6%) | n/a | stable |
| cli | configGetGatewayPort | 74.9MiB | 67.2MiB | -7.7MiB (-10.3%) | n/a | stable |
| mock hello | gateway RSS delta avg | 7.8MB | 232.7MB | +224.9MB (+2877.1%) | n/a | watch |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.3MB | 0.0MB | ok |
| all 175 bundled plugins | 572.3MB | 528.0MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 408.4MB | 364.1MB | ok |
| active-memory | 385.5MB | 341.2MB | ok |
| knowledge | 376.6MB | 332.2MB | ok |
| workboard | 375.5MB | 331.2MB | ok |
| agentsapi | 341.8MB | 297.5MB | ok |
| policy | 335.8MB | 291.4MB | ok |
| copilot | 329.6MB | 285.2MB | ok |
| muse | 329.4MB | 285.0MB | ok |
| deepinfra | 329.4MB | 285.0MB | ok |
| opencode | 319.8MB | 275.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 5279.7ms | 5478.1ms |
| default | process.bootstrap | 2075.6ms | 2081.6ms |
| default | sidecars.channels | 1379.1ms | 1425.0ms |
| default | cli.main.gateway-run-bootstrap | 773.8ms | 776.7ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 773.8ms | 776.7ms |
| skipChannels | cli.main.gateway-run-parse | 5256.7ms | 5413.2ms |
| skipChannels | process.bootstrap | 2088.2ms | 2107.0ms |
| skipChannels | sidecars.channels | 1295.7ms | 1352.3ms |
| skipChannels | cli.main.gateway-run-bootstrap | 773.8ms | 781.7ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 773.8ms | 781.7ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 5026.3ms | 5053.0ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2074.3ms | 2089.6ms |
| preparedRuntimeCatalogStall | sidecars.channels | 1235.8ms | 1287.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 760.8ms | 784.6ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 760.8ms | 784.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 5172.7ms | 5360.3ms |
| preparedRuntimeScaleOne | process.bootstrap | 2082.0ms | 2082.5ms |
| preparedRuntimeScaleOne | sidecars.channels | 1256.6ms | 1275.2ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 766.1ms | 773.9ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 766.1ms | 773.9ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 6320.8ms | 6359.2ms |
| preparedRuntimeScaleMany | process.bootstrap | 2128.2ms | 2142.7ms |
| preparedRuntimeScaleMany | sidecars.channels | 1603.2ms | 1604.3ms |
| preparedRuntimeScaleMany | sidecars.main-session-recovery | 1055.0ms | 1056.5ms |
| preparedRuntimeScaleMany | sidecars.main-session-recovery-scan | 1041.0ms | 1042.9ms |
| oneInternalHook | cli.main.gateway-run-parse | 5170.7ms | 5189.9ms |
| oneInternalHook | process.bootstrap | 2094.1ms | 2109.9ms |
| oneInternalHook | sidecars.channels | 1259.4ms | 1268.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 781.6ms | 787.5ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 781.6ms | 787.5ms |
| allInternalHooks | cli.main.gateway-run-parse | 5166.0ms | 5417.5ms |
| allInternalHooks | process.bootstrap | 2101.3ms | 2103.8ms |
| allInternalHooks | sidecars.channels | 1237.8ms | 1281.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 776.0ms | 788.8ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 776.0ms | 788.8ms |
| fiftyPlugins | cli.main.gateway-run-parse | 11755.1ms | 11794.2ms |
| fiftyPlugins | plugins.runtime-post-bind | 6419.3ms | 6489.7ms |
| fiftyPlugins | plugins.gateway-load.loadMs | 6415.1ms | 6485.8ms |
| fiftyPlugins | process.bootstrap | 2099.8ms | 2110.9ms |
| fiftyPlugins | sidecars.channels | 1299.4ms | 1310.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 4976.4ms | 5285.8ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2118.6ms | 2123.1ms |
| fiftyStartupLazyPlugins | sidecars.channels | 1292.5ms | 1331.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 794.7ms | 795.1ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 794.7ms | 795.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11745.0ms | 0.341 | 2021.6MB | 2164.6MB | 143.0MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11742.0ms | 0.341 | 1958.5MB | 2229.5MB | 271.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11645.0ms | 0.343 | 1896.8MB | 2181.0MB | 284.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 516.3ms | 549.5ms | 67.3MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 490.7ms | 492.1ms | 67.3MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 545.9ms | 557.5ms | 67.2MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 33 | 37 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 261.9ms |
| baseline | v2 | smoke | 3.53.4 | 32 | 34 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 342.3ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -30.8% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.4ms | 1.4ms | 1000 | 20 | 1.8ms | -19.7% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.5ms | -16.0% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | -11.2% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -8.3% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -9.3% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +0.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -29.1% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.5ms | -37.9% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -20.0% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.2ms | -6.6% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.8ms | 2.3ms | 256 | 20 | 5.4ms | -57.1% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

