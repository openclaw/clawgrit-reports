# OpenClaw Source Performance

Generated: 2026-09-24T05:32:44.323Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4327.8ms | 4896.0ms | 3614.7ms | 3593.5ms | 4278.9ms | 205.7ms | 784.5MB | 1.225 |
| skipChannels | gateway, skip channels | 4650.2ms | 4684.1ms | 3799.0ms | 4037.7ms | 4643.9ms | 199.4ms | 999.6MB | 1.290 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4212.4ms | 4422.5ms | 3767.6ms | 3736.6ms | 4196.6ms | 207.3ms | 775.7MB | 1.207 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4373.3ms | 4795.1ms | 3840.1ms | 3817.9ms | 4366.1ms | 197.9ms | 778.7MB | 1.251 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4476.1ms | 4757.1ms | 3498.3ms | 3798.1ms | 4469.7ms | 212.6ms | 764.3MB | 1.261 |
| oneInternalHook | gateway, one configured internal hook | 5410.3ms | 5872.3ms | 3986.1ms | 4589.6ms | 5397.2ms | 223.2ms | 959.9MB | 1.294 |
| allInternalHooks | gateway, all internal hooks | 4820.9ms | 4865.6ms | 4222.6ms | 4197.0ms | 4816.6ms | 213.8ms | 947.9MB | 1.262 |
| fiftyPlugins | gateway, 50 manifest plugins | 4852.0ms | 5074.2ms | 3531.1ms | 3903.4ms | 4845.7ms | 206.5ms | 777.4MB | 1.237 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4127.2ms | 4593.5ms | 3706.4ms | 3676.9ms | 4123.0ms | 216.6ms | 785.8MB | 1.217 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 836.5MB | 784.5MB | -52.0MB (-6.2%) | -29.0MB (-9.0%) | stable |
| gateway boot | skipChannels | 929.7MB | 999.6MB | +69.9MB (+7.5%) | +89.0MB (+46.0%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 781.5MB | 775.7MB | -5.8MB (-0.7%) | +7.0MB (+2.6%) | stable |
| gateway boot | preparedRuntimeScaleOne | 777.4MB | 778.7MB | +1.3MB (+0.2%) | -23.7MB (-8.5%) | stable |
| gateway boot | preparedRuntimeScaleMany | 786.2MB | 764.3MB | -21.9MB (-2.8%) | +19.5MB (+8.3%) | stable |
| gateway boot | oneInternalHook | 937.6MB | 959.9MB | +22.4MB (+2.4%) | +2.6MB (+0.9%) | stable |
| gateway boot | allInternalHooks | 948.6MB | 947.9MB | -0.7MB (-0.1%) | +10.1MB (+3.7%) | stable |
| gateway boot | fiftyPlugins | 816.4MB | 777.4MB | -39.1MB (-4.8%) | +0.6MB (+0.2%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 751.4MB | 785.8MB | +34.4MB (+4.6%) | +91.9MB (+46.0%) | stable |
| cli | gatewayHealthJsonWarmState | 74.2MiB | 74.2MiB | +0.1MiB (+0.1%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 73.9MiB | 74.3MiB | +0.4MiB (+0.6%) | n/a | stable |
| cli | configGetGatewayPort | 73.6MiB | 74.0MiB | +0.3MiB (+0.4%) | n/a | stable |
| mock hello | gateway RSS delta avg | 281.0MB | 255.8MB | -25.2MB (-9.0%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 159 bundled plugins | 564.9MB | 518.6MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| migrate-hermes | 363.8MB | 317.6MB | ok |
| active-memory | 354.6MB | 308.3MB | ok |
| llm-task | 353.3MB | 307.1MB | ok |
| workboard | 351.4MB | 305.2MB | ok |
| policy | 325.6MB | 279.3MB | ok |
| discord | 323.3MB | 277.1MB | ok |
| canvas | 322.7MB | 276.4MB | ok |
| deepinfra | 317.4MB | 271.1MB | ok |
| agentsapi | 314.0MB | 267.8MB | ok |
| voice-call | 306.7MB | 260.5MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2192.2ms | 2697.4ms |
| default | cli.main.gateway-run-bootstrap | 1228.5ms | 1579.2ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1228.5ms | 1579.2ms |
| default | cli.command.config-ready | 1227.8ms | 1578.4ms |
| default | process.bootstrap.cli.command.config-ready | 1227.8ms | 1578.4ms |
| skipChannels | process.bootstrap | 2215.5ms | 2571.5ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1250.2ms | 1490.1ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1250.2ms | 1490.1ms |
| skipChannels | cli.command.config-ready | 1249.5ms | 1489.3ms |
| skipChannels | process.bootstrap.cli.command.config-ready | 1249.5ms | 1489.3ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2298.6ms | 2328.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1272.2ms | 1312.3ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1272.2ms | 1312.3ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1271.5ms | 1311.3ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.command.config-ready | 1271.5ms | 1311.3ms |
| preparedRuntimeScaleOne | process.bootstrap | 2340.0ms | 2434.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1320.8ms | 1325.7ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1320.8ms | 1325.7ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1320.1ms | 1324.8ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.command.config-ready | 1320.1ms | 1324.8ms |
| preparedRuntimeScaleMany | process.bootstrap | 2265.6ms | 2443.8ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1302.4ms | 1421.8ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1302.4ms | 1421.8ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1301.6ms | 1420.9ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.command.config-ready | 1301.6ms | 1420.9ms |
| oneInternalHook | process.bootstrap | 2411.5ms | 2986.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1322.3ms | 1698.4ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1322.3ms | 1698.4ms |
| oneInternalHook | cli.command.config-ready | 1321.5ms | 1697.2ms |
| oneInternalHook | process.bootstrap.cli.command.config-ready | 1321.5ms | 1697.2ms |
| allInternalHooks | process.bootstrap | 2444.0ms | 2510.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1367.5ms | 1447.7ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1367.5ms | 1447.7ms |
| allInternalHooks | cli.command.config-ready | 1366.7ms | 1446.4ms |
| allInternalHooks | process.bootstrap.cli.command.config-ready | 1366.7ms | 1446.4ms |
| fiftyPlugins | process.bootstrap | 2291.3ms | 2372.7ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1303.8ms | 1368.3ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1303.8ms | 1368.3ms |
| fiftyPlugins | cli.command.config-ready | 1303.1ms | 1367.5ms |
| fiftyPlugins | process.bootstrap.cli.command.config-ready | 1303.1ms | 1367.5ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2284.5ms | 2369.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1278.9ms | 1318.9ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1278.9ms | 1318.9ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1278.2ms | 1318.3ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.command.config-ready | 1278.2ms | 1318.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12978.0ms | 0.308 | 1374.2MB | 1642.4MB | 268.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 13421.0ms | 0.298 | 1383.7MB | 1641.5MB | 257.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 13387.0ms | 0.299 | 1384.9MB | 1626.2MB | 241.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 565.5ms | 585.9ms | 74.2MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 493.2ms | 530.9ms | 74.3MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 766.4ms | 830.4ms | 74.0MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 18 | 23 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 293.5ms |
| baseline | v2 | smoke | 3.53.3 | 18 | 23 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 326.5ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -4.8% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.6ms | 1.7ms | 1000 | 20 | 1.9ms | -14.7% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.5ms | 0.5ms | 250 | 20 | 0.5ms | +4.9% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.4ms | -16.8% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -16.0% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -16.4% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -14.3% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -16.3% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | -19.0% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -25.0% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.2ms | -19.0% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.8ms | 3.9ms | 256 | 20 | 6.9ms | -44.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

