# OpenClaw Source Performance

Generated: 2026-09-19T05:27:32.503Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3261.4ms | 3300.4ms | 2984.0ms | 2885.6ms | 3202.6ms | 125.0ms | 635.6MB | 1.226 |
| skipChannels | gateway, skip channels | 3169.6ms | 3241.5ms | 3169.3ms | 2950.2ms | 2639.8ms | 117.7ms | 665.4MB | 0.984 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 2870.0ms | 2917.3ms | 2841.2ms | 2687.7ms | 2498.6ms | 117.1ms | 633.0MB | 1.054 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3032.4ms | 3056.8ms | 2879.8ms | 2732.6ms | 2546.6ms | 117.7ms | 599.0MB | 1.008 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 3417.7ms | 3476.5ms | 3084.0ms | 2978.6ms | 2788.6ms | 119.5ms | 667.8MB | 1.183 |
| oneInternalHook | gateway, one configured internal hook | 3164.7ms | 3424.3ms | 3164.5ms | 2919.5ms | 2589.7ms | 122.7ms | 627.7MB | 1.168 |
| allInternalHooks | gateway, all internal hooks | 3108.4ms | 3158.2ms | 3108.1ms | 2865.2ms | 2545.2ms | 117.8ms | 637.2MB | 0.971 |
| fiftyPlugins | gateway, 50 manifest plugins | 3673.6ms | 3700.2ms | 3673.4ms | 2966.7ms | 2663.2ms | 122.2ms | 665.4MB | 1.098 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 2993.7ms | 3034.7ms | 2911.0ms | 2811.3ms | 2636.6ms | 118.8ms | 651.0MB | 1.004 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 659.1MB | 635.6MB | -23.5MB (-3.6%) | +13.3MB (+4.7%) | stable |
| gateway boot | skipChannels | 637.3MB | 665.4MB | +28.1MB (+4.4%) | 0.0MB (0.0%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 641.6MB | 633.0MB | -8.6MB (-1.3%) | -80.5MB (-26.6%) | stable |
| gateway boot | preparedRuntimeScaleOne | 612.9MB | 599.0MB | -13.9MB (-2.3%) | -21.1MB (-9.4%) | stable |
| gateway boot | preparedRuntimeScaleMany | 630.0MB | 667.8MB | +37.8MB (+6.0%) | +22.8MB (+9.3%) | stable |
| gateway boot | oneInternalHook | 639.9MB | 627.7MB | -12.2MB (-1.9%) | -27.1MB (-11.2%) | stable |
| gateway boot | allInternalHooks | 638.0MB | 637.2MB | -0.8MB (-0.1%) | +11.5MB (+5.1%) | stable |
| gateway boot | fiftyPlugins | 643.6MB | 665.4MB | +21.8MB (+3.4%) | -67.3MB (-23.0%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 662.1MB | 651.0MB | -11.1MB (-1.7%) | -73.0MB (-24.4%) | stable |
| cli | gatewayHealthJsonWarmState | 70.9MiB | 73.6MiB | +2.6MiB (+3.7%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 70.6MiB | 73.5MiB | +2.9MiB (+4.1%) | n/a | stable |
| cli | configGetGatewayPort | 70.6MiB | 73.4MiB | +2.8MiB (+4.0%) | n/a | stable |
| mock hello | gateway RSS delta avg | 266.6MB | 250.5MB | -16.2MB (-6.1%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 153 bundled plugins | 532.4MB | 486.2MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| migrate-hermes | 345.9MB | 299.7MB | ok |
| active-memory | 337.6MB | 291.3MB | ok |
| llm-task | 335.8MB | 289.5MB | ok |
| workboard | 335.1MB | 288.9MB | ok |
| copilot | 322.8MB | 276.6MB | ok |
| policy | 322.4MB | 276.2MB | ok |
| deepinfra | 317.0MB | 270.7MB | ok |
| opencode | 303.9MB | 257.6MB | ok |
| discord | 295.4MB | 249.2MB | ok |
| canvas | 282.3MB | 236.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2049.2ms | 2096.5ms |
| default | cli.main.gateway-run-bootstrap | 1259.7ms | 1313.9ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1259.7ms | 1313.9ms |
| default | cli.command.config-ready | 1258.6ms | 1313.0ms |
| default | process.bootstrap.cli.command.config-ready | 1258.6ms | 1313.0ms |
| skipChannels | process.bootstrap | 2012.7ms | 2071.6ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1230.0ms | 1278.0ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1230.0ms | 1278.0ms |
| skipChannels | cli.command.config-ready | 1229.3ms | 1277.0ms |
| skipChannels | process.bootstrap.cli.command.config-ready | 1229.3ms | 1277.0ms |
| preparedRuntimeCatalogStall | process.bootstrap | 1908.0ms | 1951.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1170.4ms | 1190.8ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1170.4ms | 1190.8ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1169.7ms | 1190.0ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.command.config-ready | 1169.7ms | 1190.0ms |
| preparedRuntimeScaleOne | process.bootstrap | 1930.3ms | 1956.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1189.9ms | 1237.3ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1189.9ms | 1237.3ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1189.1ms | 1236.6ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.command.config-ready | 1189.1ms | 1236.6ms |
| preparedRuntimeScaleMany | process.bootstrap | 2130.7ms | 2195.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1351.2ms | 1406.7ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1351.2ms | 1406.7ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1350.5ms | 1406.0ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.command.config-ready | 1350.5ms | 1406.0ms |
| oneInternalHook | process.bootstrap | 1962.3ms | 1995.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1196.0ms | 1201.4ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1196.0ms | 1201.4ms |
| oneInternalHook | cli.command.config-ready | 1195.1ms | 1200.7ms |
| oneInternalHook | process.bootstrap.cli.command.config-ready | 1195.1ms | 1200.7ms |
| allInternalHooks | process.bootstrap | 1958.9ms | 1977.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1212.3ms | 1217.7ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1212.3ms | 1217.7ms |
| allInternalHooks | cli.command.config-ready | 1211.4ms | 1217.0ms |
| allInternalHooks | process.bootstrap.cli.command.config-ready | 1211.4ms | 1217.0ms |
| fiftyPlugins | process.bootstrap | 2045.7ms | 2092.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1261.9ms | 1304.8ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1261.9ms | 1304.8ms |
| fiftyPlugins | cli.command.config-ready | 1261.2ms | 1304.0ms |
| fiftyPlugins | process.bootstrap.cli.command.config-ready | 1261.2ms | 1304.0ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2033.8ms | 2060.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1262.1ms | 1273.6ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1262.1ms | 1273.6ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1261.3ms | 1272.9ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.command.config-ready | 1261.3ms | 1272.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 8914.0ms | 0.224 | 1152.6MB | 1401.4MB | 248.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 8820.0ms | 0.340 | 1145.8MB | 1379.2MB | 233.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 8904.0ms | 0.225 | 1139.2MB | 1408.4MB | 269.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 407.5ms | 625.9ms | 73.6MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 411.8ms | 414.5ms | 73.5MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 743.5ms | 748.6ms | 73.4MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 17 | 21 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 218.2ms |
| baseline | v2 | smoke | 3.53.3 | 17 | 21 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 225.4ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -15.8% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.6ms | 1.8ms | 1000 | 20 | 1.8ms | -1.1% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.5ms | -12.1% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.4ms | -14.2% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -11.7% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.1ms | +22.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -1.9% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -1.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | -8.0% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -5.9% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | -13.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.3ms | -10.4% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

