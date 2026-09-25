# OpenClaw Source Performance

Generated: 2026-09-25T05:32:57.944Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5167.4ms | 5521.1ms | 4006.0ms | 4344.5ms | 5105.9ms | 253.1ms | 790.8MB | 1.268 |
| skipChannels | gateway, skip channels | 5531.7ms | 5654.9ms | 4561.2ms | 5030.8ms | 5515.2ms | 260.0ms | 896.6MB | 1.313 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 5032.1ms | 5039.4ms | 4897.8ms | 4673.1ms | 5027.8ms | 256.2ms | 763.1MB | 1.206 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 5490.8ms | 5549.5ms | 4559.4ms | 4981.7ms | 5486.5ms | 296.4ms | 763.9MB | 1.343 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5431.7ms | 5692.5ms | 4509.1ms | 4881.8ms | 5427.7ms | 260.3ms | 771.5MB | 1.289 |
| oneInternalHook | gateway, one configured internal hook | 5165.9ms | 5449.1ms | 4211.7ms | 4728.3ms | 5155.0ms | 224.7ms | 932.8MB | 1.371 |
| allInternalHooks | gateway, all internal hooks | 5177.3ms | 5273.9ms | 4213.2ms | 4676.3ms | 5172.7ms | 260.4ms | 904.1MB | 1.352 |
| fiftyPlugins | gateway, 50 manifest plugins | 7189.0ms | 7211.4ms | 5455.3ms | 6045.4ms | 7180.2ms | 263.9ms | 799.0MB | 1.248 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4565.6ms | 4588.6ms | 4045.9ms | 4272.9ms | 4546.8ms | 210.0ms | 771.9MB | 1.314 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 784.5MB | 790.8MB | +6.3MB (+0.8%) | -4.4MB (-1.5%) | stable |
| gateway boot | skipChannels | 999.6MB | 896.6MB | -103.0MB (-10.3%) | -87.6MB (-31.0%) | improved |
| gateway boot | preparedRuntimeCatalogStall | 775.7MB | 763.1MB | -12.6MB (-1.6%) | -27.7MB (-9.9%) | stable |
| gateway boot | preparedRuntimeScaleOne | 778.7MB | 763.9MB | -14.8MB (-1.9%) | +32.3MB (+12.6%) | stable |
| gateway boot | preparedRuntimeScaleMany | 764.3MB | 771.5MB | +7.2MB (+0.9%) | -52.8MB (-20.7%) | stable |
| gateway boot | oneInternalHook | 959.9MB | 932.8MB | -27.1MB (-2.8%) | -88.4MB (-31.2%) | stable |
| gateway boot | allInternalHooks | 947.9MB | 904.1MB | -43.9MB (-4.6%) | -85.1MB (-30.0%) | stable |
| gateway boot | fiftyPlugins | 777.4MB | 799.0MB | +21.7MB (+2.8%) | -83.1MB (-28.5%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 785.8MB | 771.9MB | -13.8MB (-1.8%) | -91.5MB (-31.4%) | stable |
| cli | gatewayHealthJsonWarmState | 74.2MiB | 74.3MiB | +0.1MiB (+0.2%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 74.3MiB | 74.2MiB | -0.1MiB (-0.2%) | n/a | stable |
| cli | configGetGatewayPort | 74.0MiB | 74.0MiB | 0.0MiB (0.0%) | n/a | stable |
| mock hello | gateway RSS delta avg | 255.8MB | 210.9MB | -44.9MB (-17.5%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 159 bundled plugins | 561.9MB | 515.6MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 357.1MB | 310.7MB | ok |
| workboard | 351.9MB | 305.6MB | ok |
| canvas | 328.5MB | 282.1MB | ok |
| agentsapi | 327.9MB | 281.6MB | ok |
| discord | 324.5MB | 278.1MB | ok |
| clickclack | 324.0MB | 277.7MB | ok |
| policy | 318.4MB | 272.0MB | ok |
| deepinfra | 313.7MB | 267.3MB | ok |
| memory-core | 309.1MB | 262.7MB | ok |
| voice-call | 308.3MB | 261.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2688.0ms | 2759.8ms |
| default | cli.main.gateway-run-bootstrap | 1504.3ms | 1560.8ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1504.3ms | 1560.8ms |
| default | cli.command.config-ready | 1503.3ms | 1559.9ms |
| default | process.bootstrap.cli.command.config-ready | 1503.3ms | 1559.9ms |
| skipChannels | process.bootstrap | 2872.8ms | 2953.0ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1636.3ms | 1638.0ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1636.3ms | 1638.0ms |
| skipChannels | cli.command.config-ready | 1635.2ms | 1636.8ms |
| skipChannels | process.bootstrap.cli.command.config-ready | 1635.2ms | 1636.8ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2814.3ms | 2842.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1582.3ms | 1596.6ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1582.3ms | 1596.6ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1581.4ms | 1595.5ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.command.config-ready | 1581.4ms | 1595.5ms |
| preparedRuntimeScaleOne | process.bootstrap | 2956.6ms | 3040.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1651.3ms | 1698.6ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1651.3ms | 1698.6ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1650.1ms | 1697.7ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.command.config-ready | 1650.1ms | 1697.7ms |
| preparedRuntimeScaleMany | process.bootstrap | 3030.9ms | 3047.8ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1784.3ms | 1787.9ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1784.3ms | 1787.9ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1783.2ms | 1786.6ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.command.config-ready | 1783.2ms | 1786.6ms |
| oneInternalHook | process.bootstrap | 2725.8ms | 2801.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1538.0ms | 1615.1ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1538.0ms | 1615.1ms |
| oneInternalHook | cli.command.config-ready | 1537.0ms | 1614.1ms |
| oneInternalHook | process.bootstrap.cli.command.config-ready | 1537.0ms | 1614.1ms |
| allInternalHooks | process.bootstrap | 2641.3ms | 2710.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1453.4ms | 1554.0ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1453.4ms | 1554.0ms |
| allInternalHooks | cli.command.config-ready | 1452.5ms | 1553.2ms |
| allInternalHooks | process.bootstrap.cli.command.config-ready | 1452.5ms | 1553.2ms |
| fiftyPlugins | process.bootstrap | 2882.1ms | 3308.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1585.2ms | 1781.1ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1585.2ms | 1781.1ms |
| fiftyPlugins | cli.command.config-ready | 1584.3ms | 1780.0ms |
| fiftyPlugins | process.bootstrap.cli.command.config-ready | 1584.3ms | 1780.0ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2565.9ms | 2602.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1446.6ms | 1456.8ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1446.6ms | 1456.8ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1445.7ms | 1456.0ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.command.config-ready | 1445.7ms | 1456.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13495.0ms | 0.296 | 1361.0MB | 1561.5MB | 200.5MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 14201.0ms | 0.282 | 1369.8MB | 1581.1MB | 211.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 13376.0ms | 0.299 | 1348.4MB | 1569.3MB | 220.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 485.2ms | 573.9ms | 74.3MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 453.4ms | 461.4ms | 74.2MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 839.6ms | 857.1ms | 74.0MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 19 | 23 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 299.6ms |
| baseline | v2 | smoke | 3.53.3 | 18 | 23 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 293.5ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | 0.0% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.6ms | 2.2ms | 1000 | 20 | 1.7ms | +35.4% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.5ms | 250 | 20 | 0.5ms | +6.2% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | -2.3% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +14.3% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | 0.0% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +1.0% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | 0.0% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +4.4% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +6.7% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.1ms | +2.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.8ms | 4.1ms | 256 | 20 | 3.9ms | +5.4% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

