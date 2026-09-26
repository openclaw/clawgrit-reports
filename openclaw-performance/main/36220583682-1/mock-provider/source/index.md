# OpenClaw Source Performance

Generated: 2026-09-26T05:30:12.151Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4446.5ms | 4471.8ms | 3441.6ms | 3724.6ms | 4400.6ms | 212.0ms | 762.6MB | 1.156 |
| skipChannels | gateway, skip channels | 4304.6ms | 4343.1ms | 3475.3ms | 3923.4ms | 4296.4ms | 210.7ms | 760.6MB | 1.177 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3921.0ms | 3941.4ms | 3455.6ms | 3716.2ms | 3904.8ms | 210.4ms | 738.4MB | 1.026 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4022.3ms | 4054.2ms | 3443.9ms | 3698.3ms | 4014.3ms | 210.1ms | 735.8MB | 1.243 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4300.9ms | 4621.2ms | 3890.0ms | 3842.1ms | 4293.8ms | 204.8ms | 722.1MB | 1.222 |
| oneInternalHook | gateway, one configured internal hook | 4106.5ms | 4641.6ms | 4061.9ms | 3757.7ms | 4102.5ms | 203.3ms | 755.7MB | 1.231 |
| allInternalHooks | gateway, all internal hooks | 4108.0ms | 4122.5ms | 3330.3ms | 3751.9ms | 4104.4ms | 210.5ms | 743.2MB | 1.236 |
| fiftyPlugins | gateway, 50 manifest plugins | 4447.7ms | 4508.1ms | 4404.6ms | 3765.5ms | 4442.5ms | 211.1ms | 733.5MB | 1.126 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3975.0ms | 4004.6ms | 3700.5ms | 3751.8ms | 3960.8ms | 213.1ms | 731.2MB | 1.258 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 790.8MB | 762.6MB | -28.1MB (-3.6%) | +32.1MB (+11.1%) | stable |
| gateway boot | skipChannels | 896.6MB | 760.6MB | -136.0MB (-15.2%) | -1.0MB (-0.5%) | improved |
| gateway boot | preparedRuntimeCatalogStall | 763.1MB | 738.4MB | -24.6MB (-3.2%) | -57.1MB (-22.7%) | stable |
| gateway boot | preparedRuntimeScaleOne | 763.9MB | 735.8MB | -28.1MB (-3.7%) | -94.1MB (-32.7%) | stable |
| gateway boot | preparedRuntimeScaleMany | 771.5MB | 722.1MB | -49.4MB (-6.4%) | +21.9MB (+10.9%) | stable |
| gateway boot | oneInternalHook | 932.8MB | 755.7MB | -177.1MB (-19.0%) | +28.5MB (+14.6%) | improved |
| gateway boot | allInternalHooks | 904.1MB | 743.2MB | -160.9MB (-17.8%) | +28.4MB (+14.3%) | improved |
| gateway boot | fiftyPlugins | 799.0MB | 733.5MB | -65.5MB (-8.2%) | -2.6MB (-1.2%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 771.9MB | 731.2MB | -40.8MB (-5.3%) | -7.4MB (-3.7%) | stable |
| cli | gatewayHealthJsonWarmState | 74.3MiB | 74.4MiB | +0.0MiB (+0.0%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 74.2MiB | 74.2MiB | -0.0MiB (-0.0%) | n/a | stable |
| cli | configGetGatewayPort | 74.0MiB | 74.1MiB | +0.1MiB (+0.2%) | n/a | stable |
| mock hello | gateway RSS delta avg | 210.9MB | 336.4MB | +125.5MB (+59.5%) | n/a | watch |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.4MB | 0.0MB | ok |
| all 158 bundled plugins | 562.6MB | 516.2MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 358.8MB | 312.4MB | ok |
| workboard | 356.5MB | 310.2MB | ok |
| policy | 327.0MB | 280.6MB | ok |
| discord | 325.8MB | 279.5MB | ok |
| agentsapi | 320.3MB | 274.0MB | ok |
| deepinfra | 314.2MB | 267.8MB | ok |
| clickclack | 313.8MB | 267.4MB | ok |
| copilot | 313.3MB | 266.9MB | ok |
| opencode | 311.8MB | 265.4MB | ok |
| memory-core | 310.3MB | 263.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2515.6ms | 2586.1ms |
| default | cli.main.gateway-run-bootstrap | 1566.4ms | 1621.4ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1566.4ms | 1621.4ms |
| default | cli.command.config-ready | 1565.9ms | 1621.0ms |
| default | process.bootstrap.cli.command.config-ready | 1565.9ms | 1621.0ms |
| skipChannels | process.bootstrap | 2588.5ms | 2593.2ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1626.6ms | 1634.5ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1626.6ms | 1634.5ms |
| skipChannels | cli.command.config-ready | 1626.1ms | 1634.0ms |
| skipChannels | process.bootstrap.cli.command.config-ready | 1626.1ms | 1634.0ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2565.2ms | 2579.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1607.2ms | 1610.8ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1607.2ms | 1610.8ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1606.7ms | 1610.3ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.command.config-ready | 1606.7ms | 1610.3ms |
| preparedRuntimeScaleOne | process.bootstrap | 2560.0ms | 2562.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1597.2ms | 1608.5ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1597.2ms | 1608.5ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1596.7ms | 1607.9ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.command.config-ready | 1596.7ms | 1607.9ms |
| preparedRuntimeScaleMany | process.bootstrap | 2665.2ms | 2889.9ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1673.5ms | 1804.3ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1673.5ms | 1804.3ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1673.1ms | 1803.8ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.command.config-ready | 1673.1ms | 1803.8ms |
| oneInternalHook | process.bootstrap | 2504.3ms | 3003.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1566.8ms | 1901.2ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1566.8ms | 1901.2ms |
| oneInternalHook | cli.command.config-ready | 1566.4ms | 1900.7ms |
| oneInternalHook | process.bootstrap.cli.command.config-ready | 1566.4ms | 1900.7ms |
| allInternalHooks | process.bootstrap | 2464.3ms | 2486.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1549.6ms | 1568.5ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1549.6ms | 1568.5ms |
| allInternalHooks | cli.command.config-ready | 1549.2ms | 1568.1ms |
| allInternalHooks | process.bootstrap.cli.command.config-ready | 1549.2ms | 1568.1ms |
| fiftyPlugins | process.bootstrap | 2517.7ms | 2605.5ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1584.7ms | 1647.2ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1584.7ms | 1647.2ms |
| fiftyPlugins | cli.command.config-ready | 1584.3ms | 1646.8ms |
| fiftyPlugins | process.bootstrap.cli.command.config-ready | 1584.3ms | 1646.8ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2621.5ms | 2645.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1651.0ms | 1674.8ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1651.0ms | 1674.8ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1650.6ms | 1674.4ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.command.config-ready | 1650.6ms | 1674.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12997.0ms | 0.385 | 1137.9MB | 1547.4MB | 409.5MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11955.0ms | 0.335 | 1169.1MB | 1507.5MB | 338.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11178.0ms | 0.358 | 1266.5MB | 1527.9MB | 261.4MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 593.2ms | 678.2ms | 74.4MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 470.5ms | 493.8ms | 74.2MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 845.2ms | 855.7ms | 74.1MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 19 | 23 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 314.6ms |
| baseline | v2 | smoke | 3.53.3 | 19 | 23 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 299.6ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -5.0% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.7ms | 4.9ms | 1000 | 20 | 2.2ms | +119.1% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.5ms | -17.9% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | +5.3% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -6.7% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +7.4% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +3.9% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +6.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | -0.4% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | 0.0% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.1ms | +2.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.9ms | 3.8ms | 256 | 20 | 4.1ms | -6.0% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

