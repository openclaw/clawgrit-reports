# OpenClaw Source Performance

Generated: 2026-09-27T05:31:38.229Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4938.0ms | 5010.5ms | 4126.0ms | 4113.8ms | 4888.5ms | 235.9ms | 743.8MB | 1.215 |
| skipChannels | gateway, skip channels | 4718.0ms | 4921.4ms | 4504.0ms | 4315.2ms | 4710.6ms | 225.8ms | 764.9MB | 1.272 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4125.5ms | 4215.6ms | 4046.6ms | 3896.6ms | 4108.8ms | 225.9ms | 745.4MB | 1.232 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4683.0ms | 4777.6ms | 4274.9ms | 4337.0ms | 4667.5ms | 219.5ms | 732.9MB | 1.281 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5096.2ms | 5125.2ms | 4194.1ms | 4585.9ms | 5088.5ms | 240.8ms | 734.5MB | 1.219 |
| oneInternalHook | gateway, one configured internal hook | 5171.3ms | 5196.1ms | 4853.1ms | 4698.9ms | 5165.7ms | 266.1ms | 895.8MB | 1.215 |
| allInternalHooks | gateway, all internal hooks | 5269.8ms | 5281.4ms | 5032.9ms | 4759.9ms | 5264.9ms | 263.1ms | 889.6MB | 1.173 |
| fiftyPlugins | gateway, 50 manifest plugins | 5476.5ms | 5503.6ms | 5136.9ms | 4648.2ms | 5469.0ms | 248.7ms | 737.3MB | 1.278 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4893.9ms | 5098.8ms | 4654.6ms | 4604.5ms | 4866.7ms | 262.3ms | 746.4MB | 1.229 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 762.6MB | 743.8MB | -18.8MB (-2.5%) | -28.1MB (-8.7%) | stable |
| gateway boot | skipChannels | 760.6MB | 764.9MB | +4.3MB (+0.6%) | +0.2MB (+0.1%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 738.4MB | 745.4MB | +7.0MB (+0.9%) | +3.7MB (+1.9%) | stable |
| gateway boot | preparedRuntimeScaleOne | 735.8MB | 732.9MB | -3.0MB (-0.4%) | -0.2MB (-0.1%) | stable |
| gateway boot | preparedRuntimeScaleMany | 722.1MB | 734.5MB | +12.4MB (+1.7%) | +1.1MB (+0.5%) | stable |
| gateway boot | oneInternalHook | 755.7MB | 895.8MB | +140.2MB (+18.5%) | -30.6MB (-13.7%) | stable |
| gateway boot | allInternalHooks | 743.2MB | 889.6MB | +146.4MB (+19.7%) | -24.9MB (-11.0%) | stable |
| gateway boot | fiftyPlugins | 733.5MB | 737.3MB | +3.8MB (+0.5%) | -12.2MB (-5.9%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 731.2MB | 746.4MB | +15.3MB (+2.1%) | +1.2MB (+0.6%) | stable |
| cli | gatewayHealthJsonWarmState | 74.4MiB | 74.0MiB | -0.3MiB (-0.5%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 74.2MiB | 73.7MiB | -0.5MiB (-0.6%) | n/a | stable |
| cli | configGetGatewayPort | 74.1MiB | 74.1MiB | -0.0MiB (-0.0%) | n/a | stable |
| mock hello | gateway RSS delta avg | 336.4MB | 357.0MB | +20.6MB (+6.1%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 158 bundled plugins | 557.4MB | 511.2MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| agentsapi | 374.4MB | 328.1MB | ok |
| active-memory | 359.3MB | 313.0MB | ok |
| workboard | 356.5MB | 310.3MB | ok |
| discord | 331.6MB | 285.3MB | ok |
| clickclack | 316.4MB | 270.1MB | ok |
| policy | 315.5MB | 269.3MB | ok |
| deepinfra | 313.8MB | 267.6MB | ok |
| opencode | 312.1MB | 265.9MB | ok |
| acpx | 309.5MB | 263.3MB | ok |
| voice-call | 307.2MB | 260.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2892.6ms | 2897.1ms |
| default | cli.main.gateway-run-bootstrap | 1796.7ms | 1866.4ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1796.7ms | 1866.4ms |
| default | cli.command.config-ready | 1796.2ms | 1865.9ms |
| default | process.bootstrap.cli.command.config-ready | 1796.2ms | 1865.9ms |
| skipChannels | process.bootstrap | 2908.2ms | 3048.2ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1836.6ms | 1901.8ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1836.6ms | 1901.8ms |
| skipChannels | cli.command.config-ready | 1836.0ms | 1901.2ms |
| skipChannels | process.bootstrap.cli.command.config-ready | 1836.0ms | 1901.2ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2702.6ms | 2767.8ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1705.7ms | 1768.0ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1705.7ms | 1768.0ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1705.3ms | 1767.5ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.command.config-ready | 1705.3ms | 1767.5ms |
| preparedRuntimeScaleOne | process.bootstrap | 2938.2ms | 3160.2ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1875.0ms | 1934.6ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1875.0ms | 1934.6ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1874.3ms | 1934.0ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.command.config-ready | 1874.3ms | 1934.0ms |
| preparedRuntimeScaleMany | process.bootstrap | 3177.1ms | 3282.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 2028.5ms | 2139.2ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 2028.5ms | 2139.2ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 2027.9ms | 2138.6ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.command.config-ready | 2027.9ms | 2138.6ms |
| oneInternalHook | process.bootstrap | 3211.0ms | 3215.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2015.3ms | 2025.1ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 2015.3ms | 2025.1ms |
| oneInternalHook | cli.command.config-ready | 2014.8ms | 2024.4ms |
| oneInternalHook | process.bootstrap.cli.command.config-ready | 2014.8ms | 2024.4ms |
| allInternalHooks | process.bootstrap | 3243.9ms | 3268.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2053.1ms | 2072.8ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 2053.1ms | 2072.8ms |
| allInternalHooks | cli.command.config-ready | 2052.4ms | 2072.2ms |
| allInternalHooks | process.bootstrap.cli.command.config-ready | 2052.4ms | 2072.2ms |
| fiftyPlugins | process.bootstrap | 3059.2ms | 3268.3ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1930.5ms | 2038.5ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1930.5ms | 2038.5ms |
| fiftyPlugins | cli.command.config-ready | 1929.9ms | 2037.9ms |
| fiftyPlugins | process.bootstrap.cli.command.config-ready | 1929.9ms | 2037.9ms |
| fiftyStartupLazyPlugins | process.bootstrap | 3254.3ms | 3430.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2120.1ms | 2178.2ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 2120.1ms | 2178.2ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 2119.5ms | 2177.5ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.command.config-ready | 2119.5ms | 2177.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12025.0ms | 0.416 | 1283.8MB | 1648.4MB | 364.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 13371.0ms | 0.449 | 1330.4MB | 1685.8MB | 355.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 13565.0ms | 0.442 | 1289.7MB | 1640.8MB | 351.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 596.5ms | 609.1ms | 74.0MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 565.1ms | 662.5ms | 73.7MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1017.3ms | 1069.9ms | 74.1MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 19 | 23 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 378.0ms |
| baseline | v2 | smoke | 3.53.3 | 19 | 23 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 314.6ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +36.8% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 2.2ms | 3.1ms | 1000 | 20 | 4.9ms | -36.1% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.5ms | 0.5ms | 250 | 20 | 0.4ms | +13.4% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.4ms | 696 | 20 | 0.3ms | +11.7% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.1ms | +41.1% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +13.7% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.1ms | +89.7% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +15.5% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +15.5% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +31.3% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.2ms | 256 | 20 | 0.1ms | +10.6% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 2.2ms | 4.8ms | 256 | 20 | 3.8ms | +26.5% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

