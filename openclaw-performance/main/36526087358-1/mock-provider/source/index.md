# OpenClaw Source Performance

Generated: 2026-09-29T05:35:14.948Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5219.6ms | 5234.2ms | 4823.3ms | 4693.6ms | 5180.2ms | 221.6ms | 1520.4MB | 1.186 |
| skipChannels | gateway, skip channels | 5042.8ms | 5053.4ms | 4698.0ms | 4635.9ms | 5029.7ms | 205.1ms | 1413.9MB | 1.211 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4716.0ms | 4768.8ms | 4537.4ms | 4517.9ms | 4709.9ms | 218.5ms | 1210.8MB | 1.272 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4678.3ms | 5145.1ms | 4429.9ms | 4385.8ms | 4669.5ms | 213.7ms | 1275.9MB | 1.286 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5194.8ms | 5355.1ms | 4760.9ms | 4735.9ms | 5182.1ms | 214.1ms | 1300.4MB | 1.358 |
| oneInternalHook | gateway, one configured internal hook | 5212.2ms | 5355.9ms | 4916.9ms | 4765.7ms | 5205.3ms | 227.2ms | 1404.8MB | 1.345 |
| allInternalHooks | gateway, all internal hooks | 5120.7ms | 5408.1ms | 5037.4ms | 4674.8ms | 5112.9ms | 219.5ms | 1417.0MB | 1.376 |
| fiftyPlugins | gateway, 50 manifest plugins | 5453.4ms | 5457.1ms | 4775.6ms | 4719.2ms | 5441.3ms | 217.7ms | 1276.5MB | 1.466 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4807.2ms | 4815.1ms | 4594.4ms | 4569.6ms | 4800.0ms | 217.2ms | 1207.7MB | 1.263 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 771.0MB | 1520.4MB | +749.4MB (+97.2%) | -18.5MB (-5.7%) | watch |
| gateway boot | skipChannels | 767.2MB | 1413.9MB | +646.6MB (+84.3%) | -9.9MB (-4.4%) | watch |
| gateway boot | preparedRuntimeCatalogStall | 751.4MB | 1210.8MB | +459.4MB (+61.1%) | -10.4MB (-4.6%) | watch |
| gateway boot | preparedRuntimeScaleOne | 721.7MB | 1275.9MB | +554.2MB (+76.8%) | +20.6MB (+10.7%) | watch |
| gateway boot | preparedRuntimeScaleMany | 741.4MB | 1300.4MB | +559.0MB (+75.4%) | +0.5MB (+0.2%) | watch |
| gateway boot | oneInternalHook | 784.2MB | 1404.8MB | +620.6MB (+79.1%) | -1.8MB (-0.8%) | watch |
| gateway boot | allInternalHooks | 770.4MB | 1417.0MB | +646.6MB (+83.9%) | -9.6MB (-4.3%) | watch |
| gateway boot | fiftyPlugins | 740.1MB | 1276.5MB | +536.4MB (+72.5%) | -4.8MB (-2.1%) | watch |
| gateway boot | fiftyStartupLazyPlugins | 744.3MB | 1207.7MB | +463.4MB (+62.3%) | -4.5MB (-2.0%) | watch |
| cli | gatewayHealthJsonWarmState | 74.1MiB | 74.4MiB | +0.2MiB (+0.3%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 74.0MiB | 74.4MiB | +0.4MiB (+0.5%) | n/a | stable |
| cli | configGetGatewayPort | 74.0MiB | 74.1MiB | +0.0MiB (+0.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | 447.3MB | 457.3MB | +10.0MB (+2.2%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 160 bundled plugins | 563.9MB | 517.7MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 355.6MB | 309.4MB | ok |
| workboard | 354.9MB | 308.7MB | ok |
| discord | 326.4MB | 280.1MB | ok |
| opencode | 318.8MB | 272.6MB | ok |
| deepinfra | 316.5MB | 270.3MB | ok |
| agentsapi | 315.6MB | 269.3MB | ok |
| policy | 314.2MB | 267.9MB | ok |
| canvas | 312.9MB | 266.6MB | ok |
| clickclack | 311.0MB | 264.8MB | ok |
| voice-call | 309.1MB | 262.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2745.2ms | 2774.9ms |
| default | cli.main.gateway-run-bootstrap | 1799.8ms | 1840.8ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1799.8ms | 1840.8ms |
| default | cli.command.config-ready | 1799.3ms | 1840.3ms |
| default | process.bootstrap.cli.command.config-ready | 1799.3ms | 1840.3ms |
| skipChannels | process.bootstrap | 2636.4ms | 2651.9ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1734.3ms | 1734.8ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1734.3ms | 1734.8ms |
| skipChannels | cli.command.config-ready | 1733.7ms | 1734.3ms |
| skipChannels | process.bootstrap.cli.command.config-ready | 1733.7ms | 1734.3ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2682.3ms | 2699.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1755.0ms | 1761.8ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1755.0ms | 1761.8ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1754.5ms | 1761.3ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.command.config-ready | 1754.5ms | 1761.3ms |
| preparedRuntimeScaleOne | process.bootstrap | 2563.4ms | 2678.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1671.8ms | 1742.8ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1671.8ms | 1742.8ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1671.3ms | 1742.3ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.command.config-ready | 1671.3ms | 1742.3ms |
| preparedRuntimeScaleMany | process.bootstrap | 2813.5ms | 2833.0ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1835.2ms | 1852.4ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1835.2ms | 1852.4ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1834.6ms | 1851.8ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.command.config-ready | 1834.6ms | 1851.8ms |
| oneInternalHook | process.bootstrap | 2728.1ms | 2773.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1763.1ms | 1811.9ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1763.1ms | 1811.9ms |
| oneInternalHook | cli.command.config-ready | 1762.6ms | 1811.3ms |
| oneInternalHook | process.bootstrap.cli.command.config-ready | 1762.6ms | 1811.3ms |
| allInternalHooks | process.bootstrap | 2675.2ms | 2706.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1736.9ms | 1773.4ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1736.9ms | 1773.4ms |
| allInternalHooks | cli.command.config-ready | 1736.5ms | 1773.0ms |
| allInternalHooks | process.bootstrap.cli.command.config-ready | 1736.5ms | 1773.0ms |
| fiftyPlugins | process.bootstrap | 2718.7ms | 2769.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1789.5ms | 1820.8ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1789.5ms | 1820.8ms |
| fiftyPlugins | cli.command.config-ready | 1789.0ms | 1820.4ms |
| fiftyPlugins | process.bootstrap.cli.command.config-ready | 1789.0ms | 1820.4ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2717.7ms | 2734.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1779.4ms | 1815.3ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1779.4ms | 1815.3ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1778.9ms | 1814.8ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.command.config-ready | 1778.9ms | 1814.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12953.0ms | 0.463 | 1784.1MB | 2189.2MB | 405.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12940.0ms | 0.386 | 1786.6MB | 2228.8MB | 442.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 13341.0ms | 0.450 | 1682.4MB | 2206.9MB | 524.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 487.2ms | 504.4ms | 74.4MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 454.8ms | 466.2ms | 74.4MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 793.7ms | 809.7ms | 74.1MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 19 | 24 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 314.4ms |
| baseline | v2 | smoke | 3.53.3 | 19 | 23 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 313.9ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -11.1% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.7ms | 5.1ms | 1000 | 20 | 1.6ms | +210.7% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.4ms | +4.8% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | +3.8% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -1.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +0.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +2.0% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -2.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | -1.1% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | 0.0% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.1ms | +7.4% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.9ms | 4.6ms | 256 | 20 | 3.8ms | +20.6% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

