# OpenClaw Source Performance

Generated: 2026-09-20T05:28:29.451Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3721.8ms | 3856.8ms | 2659.4ms | 3347.4ms | 3671.3ms | 139.2ms | 792.5MB | 1.087 |
| skipChannels | gateway, skip channels | 3664.0ms | 3748.9ms | 2592.1ms | 3395.3ms | 3037.1ms | 134.2ms | 792.2MB | 1.112 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3557.3ms | 3576.2ms | 2714.3ms | 3368.0ms | 3153.7ms | 140.3ms | 735.4MB | 1.125 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3699.3ms | 3802.3ms | 2763.8ms | 3396.8ms | 3193.7ms | 142.7ms | 738.6MB | 1.091 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4043.6ms | 4115.3ms | 2947.2ms | 3592.1ms | 3381.3ms | 143.0ms | 789.3MB | 1.215 |
| oneInternalHook | gateway, one configured internal hook | 3807.3ms | 3812.6ms | 2748.8ms | 3544.1ms | 3195.7ms | 135.2ms | 747.9MB | 1.067 |
| allInternalHooks | gateway, all internal hooks | 3471.0ms | 3648.5ms | 2470.7ms | 3196.4ms | 2875.6ms | 127.5ms | 775.8MB | 1.154 |
| fiftyPlugins | gateway, 50 manifest plugins | 4213.9ms | 4220.7ms | 2746.7ms | 3482.8ms | 3176.3ms | 136.2ms | 767.0MB | 1.209 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3570.3ms | 3639.6ms | 2719.0ms | 3356.6ms | 3157.2ms | 135.7ms | 733.1MB | 1.152 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 635.6MB | 792.5MB | +156.9MB (+24.7%) | -0.4MB (-0.1%) | watch |
| gateway boot | skipChannels | 665.4MB | 792.2MB | +126.8MB (+19.1%) | +29.8MB (+13.3%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 633.0MB | 735.4MB | +102.4MB (+16.2%) | -4.4MB (-2.0%) | stable |
| gateway boot | preparedRuntimeScaleOne | 599.0MB | 738.6MB | +139.6MB (+23.3%) | +38.7MB (+19.1%) | watch |
| gateway boot | preparedRuntimeScaleMany | 667.8MB | 789.3MB | +121.5MB (+18.2%) | -15.0MB (-5.6%) | stable |
| gateway boot | oneInternalHook | 627.7MB | 747.9MB | +120.2MB (+19.1%) | -43.7MB (-20.3%) | stable |
| gateway boot | allInternalHooks | 637.2MB | 775.8MB | +138.6MB (+21.8%) | +4.4MB (+1.9%) | watch |
| gateway boot | fiftyPlugins | 665.4MB | 767.0MB | +101.6MB (+15.3%) | -46.3MB (-20.5%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 651.0MB | 733.1MB | +82.1MB (+12.6%) | -51.5MB (-22.8%) | stable |
| cli | gatewayHealthJsonWarmState | 73.6MiB | 74.0MiB | +0.5MiB (+0.7%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 73.5MiB | 73.8MiB | +0.3MiB (+0.4%) | n/a | stable |
| cli | configGetGatewayPort | 73.4MiB | 73.9MiB | +0.4MiB (+0.6%) | n/a | stable |
| mock hello | gateway RSS delta avg | 250.5MB | 281.7MB | +31.2MB (+12.5%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 156 bundled plugins | 527.0MB | 480.7MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| llm-task | 350.1MB | 303.8MB | ok |
| migrate-hermes | 349.9MB | 303.7MB | ok |
| workboard | 348.8MB | 302.5MB | ok |
| active-memory | 338.6MB | 292.4MB | ok |
| discord | 327.8MB | 281.5MB | ok |
| copilot | 324.6MB | 278.4MB | ok |
| policy | 323.2MB | 277.0MB | ok |
| opencode | 308.5MB | 262.2MB | ok |
| canvas | 301.8MB | 255.6MB | ok |
| deepinfra | 289.1MB | 242.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2110.6ms | 2148.6ms |
| default | cli.main.gateway-run-bootstrap | 1270.3ms | 1300.6ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1270.3ms | 1300.6ms |
| default | cli.command.config-ready | 1269.5ms | 1299.7ms |
| default | process.bootstrap.cli.command.config-ready | 1269.5ms | 1299.7ms |
| skipChannels | process.bootstrap | 2008.0ms | 2109.8ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1211.3ms | 1282.9ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1211.3ms | 1282.9ms |
| skipChannels | cli.command.config-ready | 1210.6ms | 1282.1ms |
| skipChannels | process.bootstrap.cli.command.config-ready | 1210.6ms | 1282.1ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2118.7ms | 2136.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1253.9ms | 1266.6ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1253.9ms | 1266.6ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1252.7ms | 1265.8ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.command.config-ready | 1252.7ms | 1265.8ms |
| preparedRuntimeScaleOne | process.bootstrap | 2105.1ms | 2235.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1266.2ms | 1365.2ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1266.2ms | 1365.2ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1265.2ms | 1364.0ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.command.config-ready | 1265.2ms | 1364.0ms |
| preparedRuntimeScaleMany | process.bootstrap | 2323.6ms | 2407.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1466.6ms | 1503.8ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1466.6ms | 1503.8ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1465.7ms | 1502.9ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.command.config-ready | 1465.7ms | 1502.9ms |
| oneInternalHook | process.bootstrap | 2157.1ms | 2160.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1292.2ms | 1292.3ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1292.2ms | 1292.3ms |
| oneInternalHook | cli.command.config-ready | 1291.4ms | 1291.4ms |
| oneInternalHook | process.bootstrap.cli.command.config-ready | 1291.4ms | 1291.4ms |
| allInternalHooks | process.bootstrap | 1940.2ms | 2036.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1173.8ms | 1245.9ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1173.8ms | 1245.9ms |
| allInternalHooks | cli.command.config-ready | 1173.0ms | 1245.2ms |
| allInternalHooks | process.bootstrap.cli.command.config-ready | 1173.0ms | 1245.2ms |
| fiftyPlugins | process.bootstrap | 2149.9ms | 2222.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1305.4ms | 1339.1ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1305.4ms | 1339.1ms |
| fiftyPlugins | cli.command.config-ready | 1304.6ms | 1338.3ms |
| fiftyPlugins | process.bootstrap.cli.command.config-ready | 1304.6ms | 1338.3ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2134.8ms | 2228.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1295.2ms | 1379.0ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1295.2ms | 1379.0ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1294.5ms | 1378.1ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.command.config-ready | 1294.5ms | 1378.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10167.0ms | 0.197 | 1249.7MB | 1532.1MB | 282.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10453.0ms | 0.191 | 1280.6MB | 1544.8MB | 264.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9724.0ms | 0.206 | 1240.2MB | 1538.6MB | 298.4MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 541.3ms | 550.0ms | 74.0MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 497.5ms | 509.2ms | 73.8MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 858.9ms | 898.7ms | 73.9MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 17 | 21 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 252.1ms |
| baseline | v2 | smoke | 3.53.3 | 17 | 21 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 218.2ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +68.8% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.8ms | 2.3ms | 1000 | 20 | 1.8ms | +27.0% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.5ms | 0.5ms | 250 | 20 | 0.4ms | +27.2% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.4ms | 696 | 20 | 0.3ms | +33.1% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +1.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -12.6% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +14.7% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +13.1% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +19.4% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +18.7% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | +14.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.2ms | 0.3ms | 256 | 20 | 0.2ms | +14.7% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

