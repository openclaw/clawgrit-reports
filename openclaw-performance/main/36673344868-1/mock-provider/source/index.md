# OpenClaw Source Performance

Generated: 2026-09-30T05:34:50.236Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4565.4ms | 5110.8ms | 4040.4ms | 4020.5ms | 4516.2ms | 236.2ms | 779.3MB | 1.174 |
| skipChannels | gateway, skip channels | 4273.9ms | 5994.6ms | 4052.3ms | 3887.2ms | 4268.3ms | 212.1ms | 873.8MB | 1.193 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3891.9ms | 3927.0ms | 3751.3ms | 3687.1ms | 3886.6ms | 210.0ms | 743.1MB | 1.285 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3981.9ms | 3992.1ms | 3710.1ms | 3675.4ms | 3974.8ms | 209.1ms | 745.9MB | 1.269 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4301.2ms | 4306.3ms | 3877.0ms | 3868.0ms | 4291.8ms | 210.4ms | 757.2MB | 1.189 |
| oneInternalHook | gateway, one configured internal hook | 4203.3ms | 4351.4ms | 3997.9ms | 3845.4ms | 4198.0ms | 211.6ms | 782.6MB | 1.192 |
| allInternalHooks | gateway, all internal hooks | 4187.2ms | 4293.0ms | 4100.3ms | 3820.0ms | 4182.1ms | 212.1ms | 799.5MB | 1.197 |
| fiftyPlugins | gateway, 50 manifest plugins | 4513.5ms | 4524.9ms | 4048.0ms | 3830.7ms | 4506.7ms | 213.7ms | 766.9MB | 1.109 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3944.0ms | 4026.0ms | 3749.3ms | 3723.5ms | 3939.3ms | 213.2ms | 755.7MB | 1.278 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1520.4MB | 779.3MB | -741.1MB (-48.7%) | -9.0MB (-2.9%) | improved |
| gateway boot | skipChannels | 1413.9MB | 873.8MB | -540.0MB (-38.2%) | +8.7MB (+4.1%) | improved |
| gateway boot | preparedRuntimeCatalogStall | 1210.8MB | 743.1MB | -467.7MB (-38.6%) | +2.4MB (+1.1%) | improved |
| gateway boot | preparedRuntimeScaleOne | 1275.9MB | 745.9MB | -530.0MB (-41.5%) | +14.6MB (+6.9%) | improved |
| gateway boot | preparedRuntimeScaleMany | 1300.4MB | 757.2MB | -543.2MB (-41.8%) | -1.2MB (-0.5%) | improved |
| gateway boot | oneInternalHook | 1404.8MB | 782.6MB | -622.2MB (-44.3%) | -0.7MB (-0.3%) | improved |
| gateway boot | allInternalHooks | 1417.0MB | 799.5MB | -617.5MB (-43.6%) | +2.3MB (+1.1%) | improved |
| gateway boot | fiftyPlugins | 1276.5MB | 766.9MB | -509.6MB (-39.9%) | +9.1MB (+4.1%) | improved |
| gateway boot | fiftyStartupLazyPlugins | 1207.7MB | 755.7MB | -452.0MB (-37.4%) | +4.2MB (+1.9%) | improved |
| cli | gatewayHealthJsonWarmState | 74.4MiB | 74.3MiB | -0.1MiB (-0.1%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 74.4MiB | 74.4MiB | +0.0MiB (+0.1%) | n/a | stable |
| cli | configGetGatewayPort | 74.1MiB | 74.0MiB | -0.0MiB (-0.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | 457.3MB | 472.5MB | +15.2MB (+3.3%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 160 bundled plugins | 594.4MB | 548.1MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 371.8MB | 325.6MB | ok |
| active-memory | 357.5MB | 311.3MB | ok |
| discord | 319.6MB | 273.3MB | ok |
| canvas | 318.8MB | 272.5MB | ok |
| agentsapi | 317.5MB | 271.2MB | ok |
| policy | 313.9MB | 267.7MB | ok |
| zai | 312.6MB | 266.4MB | ok |
| deepinfra | 312.6MB | 266.3MB | ok |
| clickclack | 312.4MB | 266.1MB | ok |
| voice-call | 312.1MB | 265.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2812.6ms | 3151.7ms |
| default | cli.main.gateway-run-bootstrap | 1831.5ms | 2099.4ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1831.5ms | 2099.4ms |
| default | cli.command.config-ready | 1830.9ms | 2098.8ms |
| default | process.bootstrap.cli.command.config-ready | 1830.9ms | 2098.8ms |
| skipChannels | process.bootstrap | 2616.9ms | 3138.9ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1720.9ms | 1876.1ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1720.9ms | 1876.1ms |
| skipChannels | cli.command.config-ready | 1720.5ms | 1875.2ms |
| skipChannels | process.bootstrap.cli.command.config-ready | 1720.5ms | 1875.2ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2563.3ms | 2603.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1668.0ms | 1700.2ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1668.0ms | 1700.2ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1667.5ms | 1699.8ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.command.config-ready | 1667.5ms | 1699.8ms |
| preparedRuntimeScaleOne | process.bootstrap | 2536.1ms | 2605.1ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1657.4ms | 1678.5ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1657.4ms | 1678.5ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1657.0ms | 1678.0ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.command.config-ready | 1657.0ms | 1678.0ms |
| preparedRuntimeScaleMany | process.bootstrap | 2717.0ms | 2740.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1775.5ms | 1808.8ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1775.5ms | 1808.8ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1775.0ms | 1808.2ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.command.config-ready | 1775.0ms | 1808.2ms |
| oneInternalHook | process.bootstrap | 2582.4ms | 2670.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1695.8ms | 1745.0ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1695.8ms | 1745.0ms |
| oneInternalHook | cli.command.config-ready | 1695.3ms | 1744.6ms |
| oneInternalHook | process.bootstrap.cli.command.config-ready | 1695.3ms | 1744.6ms |
| allInternalHooks | process.bootstrap | 2563.9ms | 2626.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1674.6ms | 1706.5ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1674.6ms | 1706.5ms |
| allInternalHooks | cli.command.config-ready | 1674.2ms | 1706.0ms |
| allInternalHooks | process.bootstrap.cli.command.config-ready | 1674.2ms | 1706.0ms |
| fiftyPlugins | process.bootstrap | 2596.6ms | 2632.5ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1712.3ms | 1732.0ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1712.3ms | 1732.0ms |
| fiftyPlugins | cli.command.config-ready | 1711.9ms | 1731.5ms |
| fiftyPlugins | process.bootstrap.cli.command.config-ready | 1711.9ms | 1731.5ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2640.5ms | 2680.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1722.1ms | 1773.8ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1722.1ms | 1773.8ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1721.6ms | 1773.4ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.command.config-ready | 1721.6ms | 1773.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12920.0ms | 0.464 | 1409.1MB | 1826.2MB | 417.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12738.0ms | 0.393 | 1284.2MB | 1829.0MB | 544.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 14188.0ms | 0.564 | 1416.8MB | 1872.5MB | 455.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 612.8ms | 656.6ms | 74.3MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 586.6ms | 633.8ms | 74.4MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 966.0ms | 984.5ms | 74.0MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 19 | 24 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 391.3ms |
| baseline | v2 | smoke | 3.53.3 | 19 | 24 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 314.4ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +18.7% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 2.3ms | 3.1ms | 1000 | 20 | 5.1ms | -39.0% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.5ms | 0.8ms | 250 | 20 | 0.4ms | +91.9% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | +12.7% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +7.4% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +15.4% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +39.4% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +7.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +10.7% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +26.7% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.2ms | 256 | 20 | 0.1ms | +6.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 2.3ms | 6.5ms | 256 | 20 | 4.6ms | +40.8% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

