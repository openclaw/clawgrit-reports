# OpenClaw Source Performance

Generated: 2026-11-27T05:33:37.239Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6636.2ms | 6666.4ms | 5218.7ms | 6076.1ms | 6629.1ms | 532.2ms | 1088.6MB | 1.372 |
| skipChannels | gateway, skip channels | 6743.8ms | 6762.0ms | 5233.0ms | 6249.0ms | 6760.6ms | 535.1ms | 1063.9MB | 1.346 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 6772.2ms | 6822.3ms | 5275.8ms | 6338.6ms | 6760.9ms | 533.3ms | 1074.7MB | 1.330 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 6753.9ms | 6788.2ms | 5193.6ms | 6305.9ms | 6747.2ms | 529.2ms | 1059.1MB | 1.350 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 6887.6ms | 6914.1ms | 5237.9ms | 6344.8ms | 6880.1ms | 527.0ms | 1073.3MB | 1.308 |
| oneInternalHook | gateway, one configured internal hook | 6878.5ms | 6904.7ms | 5250.5ms | 6253.1ms | 6890.7ms | 528.0ms | 1075.5MB | 1.316 |
| allInternalHooks | gateway, all internal hooks | 6808.1ms | 6871.2ms | 5190.2ms | 6202.5ms | 6817.3ms | 526.6ms | 1066.8MB | 1.325 |
| fiftyPlugins | gateway, 50 manifest plugins | 7054.4ms | 7103.5ms | 5268.3ms | 6676.2ms | 7048.1ms | 519.2ms | 1072.0MB | 1.408 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 6564.8ms | 6578.6ms | 5358.9ms | 6103.2ms | 6554.8ms | 537.7ms | 1054.7MB | 1.378 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1129.4MB | 1088.6MB | -40.8MB (-3.6%) | -5.7MB (-1.9%) | stable |
| gateway boot | skipChannels | 1126.5MB | 1063.9MB | -62.5MB (-5.6%) | -1.5MB (-0.6%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1099.3MB | 1074.7MB | -24.5MB (-2.2%) | -9.2MB (-3.3%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1101.1MB | 1059.1MB | -41.9MB (-3.8%) | -9.0MB (-3.3%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1098.9MB | 1073.3MB | -25.6MB (-2.3%) | +21.5MB (+8.4%) | stable |
| gateway boot | oneInternalHook | 1155.5MB | 1075.5MB | -80.0MB (-6.9%) | +54.0MB (+24.6%) | stable |
| gateway boot | allInternalHooks | 1132.1MB | 1066.8MB | -65.3MB (-5.8%) | +15.1MB (+5.9%) | stable |
| gateway boot | fiftyPlugins | 1129.7MB | 1072.0MB | -57.7MB (-5.1%) | -45.2MB (-16.3%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1116.9MB | 1054.7MB | -62.2MB (-5.6%) | -8.5MB (-3.0%) | stable |
| cli | gatewayHealthJsonWarmState | 68.9MiB | 69.3MiB | +0.4MiB (+0.6%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 68.9MiB | 69.3MiB | +0.4MiB (+0.6%) | n/a | stable |
| cli | configGetGatewayPort | 68.9MiB | 69.0MiB | +0.1MiB (+0.2%) | n/a | stable |
| mock hello | gateway RSS delta avg | 505.1MB | 327.4MB | -177.7MB (-35.2%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.9MB | 0.0MB | ok |
| all 185 bundled plugins | 549.3MB | 502.4MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 367.4MB | 320.6MB | ok |
| active-memory | 344.6MB | 297.7MB | ok |
| workboard | 344.1MB | 297.2MB | ok |
| clickclack | 341.0MB | 294.1MB | ok |
| knowledge | 337.4MB | 290.5MB | ok |
| telegram | 337.4MB | 290.5MB | ok |
| agentsapi | 335.7MB | 288.8MB | ok |
| team-reports | 322.9MB | 276.0MB | ok |
| opencode | 318.9MB | 272.0MB | ok |
| beam | 315.8MB | 268.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 6907.2ms | 6968.8ms |
| default | process.bootstrap | 3597.9ms | 3649.3ms |
| default | cli.main.gateway-run-bootstrap | 1729.1ms | 1746.1ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1729.1ms | 1746.1ms |
| default | cli.command.config-ready | 1727.4ms | 1744.4ms |
| skipChannels | cli.main.gateway-run-parse | 6612.0ms | 6655.7ms |
| skipChannels | process.bootstrap | 3635.8ms | 3636.7ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1753.8ms | 1763.8ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1753.8ms | 1763.8ms |
| skipChannels | cli.command.config-ready | 1752.0ms | 1761.9ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 6592.6ms | 6614.6ms |
| preparedRuntimeCatalogStall | process.bootstrap | 3632.6ms | 3660.9ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1757.0ms | 1759.4ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1757.0ms | 1759.4ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1755.3ms | 1757.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 6544.1ms | 6568.0ms |
| preparedRuntimeScaleOne | process.bootstrap | 3575.5ms | 3623.8ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1722.4ms | 1740.0ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1722.4ms | 1740.0ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1718.3ms | 1719.8ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 6272.4ms | 6326.9ms |
| preparedRuntimeScaleMany | process.bootstrap | 3619.8ms | 3641.9ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1746.4ms | 1759.6ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1746.4ms | 1759.6ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1744.7ms | 1757.9ms |
| oneInternalHook | cli.main.gateway-run-parse | 6689.9ms | 6719.1ms |
| oneInternalHook | process.bootstrap | 3633.0ms | 3639.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1764.7ms | 1772.3ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1764.7ms | 1772.3ms |
| oneInternalHook | cli.command.config-ready | 1762.6ms | 1770.2ms |
| allInternalHooks | cli.main.gateway-run-parse | 6621.9ms | 6651.1ms |
| allInternalHooks | process.bootstrap | 3589.2ms | 3599.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1737.5ms | 1743.6ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1737.5ms | 1743.6ms |
| allInternalHooks | cli.command.config-ready | 1734.8ms | 1741.6ms |
| fiftyPlugins | cli.main.gateway-run-parse | 6573.0ms | 6639.5ms |
| fiftyPlugins | process.bootstrap | 3601.3ms | 3656.3ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1755.6ms | 1781.3ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1755.6ms | 1781.3ms |
| fiftyPlugins | cli.command.config-ready | 1753.1ms | 1779.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 6622.3ms | 6628.8ms |
| fiftyStartupLazyPlugins | process.bootstrap | 3696.9ms | 3733.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1804.6ms | 1807.1ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1804.6ms | 1807.1ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1802.5ms | 1805.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 23437.0ms | 0.341 | 1876.4MB | 2181.9MB | 305.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 22973.0ms | 0.435 | 1822.4MB | 2155.1MB | 332.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 23451.0ms | 0.298 | 1809.4MB | 2153.2MB | 343.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 892.4ms | 920.6ms | 69.3MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 798.5ms | 819.9ms | 69.3MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1038.1ms | 1050.1ms | 69.0MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 42 | 45 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 544.4ms |
| baseline | v2 | smoke | 3.53.4 | 42 | 45 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 786.1ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -3.0% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 2.1ms | 2.2ms | 1000 | 20 | 2.2ms | -1.6% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.6ms | 0.6ms | 250 | 20 | 0.6ms | -6.3% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.4ms | 0.5ms | 696 | 20 | 0.5ms | -5.6% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.2ms | -0.6% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.2ms | -0.9% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.2ms | +5.2% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.2ms | +2.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.4ms | 0.5ms | 675 | 20 | 0.4ms | +26.5% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -29.2% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.3ms | -19.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 3.4ms | 4.0ms | 256 | 20 | 4.4ms | -9.1% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

