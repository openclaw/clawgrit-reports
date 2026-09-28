# OpenClaw Source Performance

Generated: 2026-09-28T05:42:10.808Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4169.4ms | 4209.1ms | 3817.7ms | 3687.8ms | 4126.1ms | 206.7ms | 771.0MB | 1.207 |
| skipChannels | gateway, skip channels | 4133.1ms | 4231.7ms | 3930.3ms | 3777.2ms | 4127.3ms | 210.9ms | 767.2MB | 1.214 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3763.8ms | 3772.8ms | 3619.8ms | 3558.2ms | 3762.8ms | 204.0ms | 751.4MB | 1.065 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3911.1ms | 3912.9ms | 3644.5ms | 3594.4ms | 3902.8ms | 206.8ms | 721.7MB | 1.282 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4208.3ms | 4208.4ms | 3826.2ms | 3770.3ms | 4202.3ms | 212.2ms | 741.4MB | 1.202 |
| oneInternalHook | gateway, one configured internal hook | 4132.9ms | 4156.4ms | 3914.6ms | 3761.9ms | 4123.6ms | 211.8ms | 784.2MB | 1.218 |
| allInternalHooks | gateway, all internal hooks | 4056.2ms | 4118.0ms | 3825.6ms | 3694.2ms | 4049.5ms | 200.5ms | 770.4MB | 1.240 |
| fiftyPlugins | gateway, 50 manifest plugins | 4497.6ms | 4515.5ms | 4464.0ms | 3797.3ms | 4491.3ms | 205.5ms | 740.1MB | 1.122 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3850.3ms | 3868.2ms | 3694.2ms | 3627.5ms | 3841.9ms | 202.4ms | 744.3MB | 1.293 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 743.8MB | 771.0MB | +27.2MB (+3.7%) | +32.7MB (+11.1%) | stable |
| gateway boot | skipChannels | 764.9MB | 767.2MB | +2.4MB (+0.3%) | +29.5MB (+15.2%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 745.4MB | 751.4MB | +6.0MB (+0.8%) | +25.8MB (+13.0%) | stable |
| gateway boot | preparedRuntimeScaleOne | 732.9MB | 721.7MB | -11.2MB (-1.5%) | -1.2MB (-0.6%) | stable |
| gateway boot | preparedRuntimeScaleMany | 734.5MB | 741.4MB | +6.8MB (+0.9%) | +8.1MB (+3.6%) | stable |
| gateway boot | oneInternalHook | 895.8MB | 784.2MB | -111.6MB (-12.5%) | +26.3MB (+13.6%) | improved |
| gateway boot | allInternalHooks | 889.6MB | 770.4MB | -119.3MB (-13.4%) | +21.6MB (+10.7%) | improved |
| gateway boot | fiftyPlugins | 737.3MB | 740.1MB | +2.7MB (+0.4%) | +32.0MB (+16.5%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 746.4MB | 744.3MB | -2.1MB (-0.3%) | +31.5MB (+16.2%) | stable |
| cli | gatewayHealthJsonWarmState | 74.0MiB | 74.1MiB | +0.1MiB (+0.2%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 73.7MiB | 74.0MiB | +0.3MiB (+0.4%) | n/a | stable |
| cli | configGetGatewayPort | 74.1MiB | 74.0MiB | -0.1MiB (-0.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | 357.0MB | 447.3MB | +90.3MB (+25.3%) | n/a | watch |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 158 bundled plugins | 589.2MB | 542.9MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 360.3MB | 314.0MB | ok |
| workboard | 356.0MB | 309.8MB | ok |
| discord | 327.1MB | 280.9MB | ok |
| agentsapi | 323.9MB | 277.7MB | ok |
| policy | 322.6MB | 276.3MB | ok |
| canvas | 320.7MB | 274.5MB | ok |
| opencode | 314.4MB | 268.1MB | ok |
| deepinfra | 312.0MB | 265.8MB | ok |
| clickclack | 310.6MB | 264.4MB | ok |
| copilot | 306.5MB | 260.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2570.9ms | 2577.7ms |
| default | cli.main.gateway-run-bootstrap | 1679.3ms | 1681.6ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1679.3ms | 1681.6ms |
| default | cli.command.config-ready | 1678.9ms | 1681.1ms |
| default | process.bootstrap.cli.command.config-ready | 1678.9ms | 1681.1ms |
| skipChannels | process.bootstrap | 2552.0ms | 2622.5ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1661.9ms | 1704.2ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1661.9ms | 1704.2ms |
| skipChannels | cli.command.config-ready | 1661.4ms | 1703.7ms |
| skipChannels | process.bootstrap.cli.command.config-ready | 1661.4ms | 1703.7ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2496.0ms | 2523.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1623.6ms | 1650.6ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1623.6ms | 1650.6ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1623.1ms | 1650.1ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.command.config-ready | 1623.1ms | 1650.1ms |
| preparedRuntimeScaleOne | process.bootstrap | 2531.0ms | 2531.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1638.5ms | 1639.6ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1638.5ms | 1639.6ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1638.1ms | 1639.2ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.command.config-ready | 1638.1ms | 1639.2ms |
| preparedRuntimeScaleMany | process.bootstrap | 2672.4ms | 2688.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1748.6ms | 1749.9ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1748.6ms | 1749.9ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1748.1ms | 1749.3ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.command.config-ready | 1748.1ms | 1749.3ms |
| oneInternalHook | process.bootstrap | 2548.8ms | 2560.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1649.8ms | 1659.9ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1649.8ms | 1659.9ms |
| oneInternalHook | cli.command.config-ready | 1649.3ms | 1659.5ms |
| oneInternalHook | process.bootstrap.cli.command.config-ready | 1649.3ms | 1659.5ms |
| allInternalHooks | process.bootstrap | 2499.6ms | 2499.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1625.8ms | 1632.5ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1625.8ms | 1632.5ms |
| allInternalHooks | cli.command.config-ready | 1625.4ms | 1632.0ms |
| allInternalHooks | process.bootstrap.cli.command.config-ready | 1625.4ms | 1632.0ms |
| fiftyPlugins | process.bootstrap | 2587.8ms | 2598.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1685.6ms | 1700.0ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1685.6ms | 1700.0ms |
| fiftyPlugins | cli.command.config-ready | 1685.2ms | 1699.6ms |
| fiftyPlugins | process.bootstrap.cli.command.config-ready | 1685.2ms | 1699.6ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2567.1ms | 2581.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1689.3ms | 1693.5ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1689.3ms | 1693.5ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1688.9ms | 1693.1ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.command.config-ready | 1688.9ms | 1693.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11461.0ms | 0.436 | 1293.3MB | 1750.9MB | 457.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11395.0ms | 0.439 | 1292.4MB | 1730.6MB | 438.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11476.0ms | 0.436 | 1288.6MB | 1734.7MB | 446.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 460.6ms | 493.9ms | 74.1MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 455.6ms | 457.5ms | 74.0MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 779.4ms | 781.0ms | 74.0MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 19 | 23 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 313.9ms |
| baseline | v2 | smoke | 3.53.3 | 19 | 23 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 378.0ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -30.8% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.6ms | 1.6ms | 1000 | 20 | 3.1ms | -47.9% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.5ms | -18.9% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.4ms | -18.4% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -30.4% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -18.1% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -49.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -16.5% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | -16.5% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -28.6% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.2ms | -13.4% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.8ms | 3.8ms | 256 | 20 | 4.8ms | -20.3% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

