# OpenClaw Source Performance

Generated: 2026-09-23T05:33:39.962Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4742.8ms | 4776.5ms | 4012.1ms | 4002.2ms | 4696.7ms | 139.6ms | 836.5MB | 1.065 |
| skipChannels | gateway, skip channels | 4604.4ms | 4679.1ms | 3663.9ms | 4072.7ms | 4598.5ms | 133.7ms | 929.7MB | 1.282 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4928.3ms | 5043.0ms | 4426.5ms | 4403.2ms | 4923.1ms | 140.1ms | 781.5MB | 1.217 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 5121.7ms | 5185.3ms | 4501.5ms | 4473.0ms | 5114.8ms | 155.9ms | 777.4MB | 1.171 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4613.7ms | 4880.0ms | 3917.2ms | 3898.5ms | 4604.4ms | 133.1ms | 786.2MB | 1.230 |
| oneInternalHook | gateway, one configured internal hook | 4550.5ms | 4616.2ms | 4008.6ms | 3975.6ms | 4539.1ms | 135.7ms | 937.6MB | 1.100 |
| allInternalHooks | gateway, all internal hooks | 4671.5ms | 4726.8ms | 4135.7ms | 4078.4ms | 4660.4ms | 132.0ms | 948.6MB | 1.269 |
| fiftyPlugins | gateway, 50 manifest plugins | 5607.9ms | 5697.3ms | 4089.1ms | 4526.2ms | 5601.8ms | 140.6ms | 816.4MB | 1.248 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4677.0ms | 4773.9ms | 3907.6ms | 4182.2ms | 4669.0ms | 143.9ms | 751.4MB | 1.257 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 768.3MB | 836.5MB | +68.2MB (+8.9%) | +21.2MB (+7.0%) | stable |
| gateway boot | skipChannels | 897.2MB | 929.7MB | +32.4MB (+3.6%) | -78.0MB (-28.7%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 757.2MB | 781.5MB | +24.3MB (+3.2%) | +2.2MB (+0.8%) | stable |
| gateway boot | preparedRuntimeScaleOne | 752.5MB | 777.4MB | +25.0MB (+3.3%) | +9.4MB (+3.5%) | stable |
| gateway boot | preparedRuntimeScaleMany | 774.3MB | 786.2MB | +11.9MB (+1.5%) | -65.9MB (-21.9%) | stable |
| gateway boot | oneInternalHook | 869.4MB | 937.6MB | +68.2MB (+7.8%) | +9.4MB (+3.5%) | stable |
| gateway boot | allInternalHooks | 895.8MB | 948.6MB | +52.9MB (+5.9%) | +74.4MB (+37.3%) | stable |
| gateway boot | fiftyPlugins | 756.4MB | 816.4MB | +60.0MB (+7.9%) | +9.3MB (+3.3%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 776.3MB | 751.4MB | -24.9MB (-3.2%) | -53.9MB (-21.2%) | stable |
| cli | gatewayHealthJsonWarmState | 74.7MiB | 74.2MiB | -0.5MiB (-0.7%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 74.3MiB | 73.9MiB | -0.4MiB (-0.5%) | n/a | stable |
| cli | configGetGatewayPort | 73.7MiB | 73.6MiB | -0.1MiB (-0.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | 198.6MB | 281.0MB | +82.4MB (+41.5%) | n/a | watch |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 159 bundled plugins | 555.2MB | 509.0MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 354.1MB | 307.8MB | ok |
| migrate-hermes | 349.6MB | 303.3MB | ok |
| active-memory | 340.5MB | 294.3MB | ok |
| llm-task | 340.0MB | 293.7MB | ok |
| clickclack | 316.7MB | 270.5MB | ok |
| policy | 315.8MB | 269.6MB | ok |
| deepinfra | 315.4MB | 269.1MB | ok |
| agentsapi | 314.4MB | 268.1MB | ok |
| opencode | 310.5MB | 264.2MB | ok |
| canvas | 298.6MB | 252.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2418.7ms | 2427.8ms |
| default | cli.main.gateway-run-bootstrap | 1346.5ms | 1347.9ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1346.5ms | 1347.9ms |
| default | cli.command.config-ready | 1345.7ms | 1347.1ms |
| default | process.bootstrap.cli.command.config-ready | 1345.7ms | 1347.1ms |
| skipChannels | process.bootstrap | 2373.5ms | 2475.0ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1327.5ms | 1371.0ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1327.5ms | 1371.0ms |
| skipChannels | cli.command.config-ready | 1326.7ms | 1370.1ms |
| skipChannels | process.bootstrap.cli.command.config-ready | 1326.7ms | 1370.1ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2660.3ms | 2748.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1475.3ms | 1585.4ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1475.3ms | 1585.4ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1474.4ms | 1584.3ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.command.config-ready | 1474.4ms | 1584.3ms |
| preparedRuntimeScaleOne | process.bootstrap | 2737.5ms | 2790.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1556.2ms | 1592.5ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1556.2ms | 1592.5ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1555.2ms | 1591.4ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.command.config-ready | 1555.2ms | 1591.4ms |
| preparedRuntimeScaleMany | process.bootstrap | 2399.2ms | 2451.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1400.8ms | 1410.0ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1400.8ms | 1410.0ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1400.0ms | 1409.2ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.command.config-ready | 1400.0ms | 1409.2ms |
| oneInternalHook | process.bootstrap | 2332.3ms | 2391.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1309.4ms | 1327.8ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1309.4ms | 1327.8ms |
| oneInternalHook | cli.command.config-ready | 1308.6ms | 1327.1ms |
| oneInternalHook | process.bootstrap.cli.command.config-ready | 1308.6ms | 1327.1ms |
| allInternalHooks | process.bootstrap | 2338.3ms | 2430.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1305.7ms | 1371.3ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1305.7ms | 1371.3ms |
| allInternalHooks | cli.command.config-ready | 1304.8ms | 1370.5ms |
| allInternalHooks | process.bootstrap.cli.command.config-ready | 1304.8ms | 1370.5ms |
| fiftyPlugins | process.bootstrap | 2648.8ms | 2690.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1481.1ms | 1486.4ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1481.1ms | 1486.4ms |
| fiftyPlugins | cli.command.config-ready | 1480.0ms | 1485.5ms |
| fiftyPlugins | process.bootstrap.cli.command.config-ready | 1480.0ms | 1485.5ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2585.5ms | 2652.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1447.5ms | 1505.4ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1447.5ms | 1505.4ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1446.7ms | 1504.6ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.command.config-ready | 1446.7ms | 1504.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 14296.0ms | 0.280 | 1368.7MB | 1628.3MB | 259.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 13852.0ms | 0.289 | 1314.8MB | 1635.6MB | 320.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 14187.0ms | 0.211 | 1372.0MB | 1634.4MB | 262.4MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 553.8ms | 654.7ms | 74.2MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 537.6ms | 545.6ms | 73.9MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1020.0ms | 1030.6ms | 73.6MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 18 | 23 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 326.5ms |
| baseline | v2 | smoke | 3.53.3 | 18 | 23 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 484.4ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -27.6% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.9ms | 1.9ms | 1000 | 20 | 2.1ms | -5.7% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.5ms | 0.5ms | 250 | 20 | 0.5ms | +6.3% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.4ms | 696 | 20 | 0.6ms | -33.4% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -35.2% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.3ms | -42.3% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -6.3% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +8.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +10.5% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +11.1% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | +9.1% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.9ms | 6.9ms | 256 | 20 | 10.0ms | -31.3% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

