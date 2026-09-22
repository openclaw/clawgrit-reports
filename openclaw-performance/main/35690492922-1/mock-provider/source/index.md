# OpenClaw Source Performance

Generated: 2026-09-22T05:37:47.534Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5529.4ms | 5828.7ms | 4498.5ms | 4567.4ms | 5462.3ms | 170.5ms | 768.3MB | 1.302 |
| skipChannels | gateway, skip channels | 5369.8ms | 6843.9ms | 4182.1ms | 4709.9ms | 5362.8ms | 163.4ms | 897.2MB | 1.169 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 5316.3ms | 5398.6ms | 4601.4ms | 4699.5ms | 5310.5ms | 162.2ms | 757.2MB | 1.297 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 5274.4ms | 5630.3ms | 4237.8ms | 4630.8ms | 5267.1ms | 165.3ms | 752.5MB | 1.243 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5536.1ms | 6179.7ms | 4347.4ms | 4713.5ms | 5530.7ms | 153.7ms | 774.3MB | 1.295 |
| oneInternalHook | gateway, one configured internal hook | 7017.9ms | 7106.5ms | 5240.4ms | 5943.5ms | 6984.7ms | 203.0ms | 869.4MB | 1.303 |
| allInternalHooks | gateway, all internal hooks | 6427.3ms | 7357.5ms | 5694.9ms | 5642.9ms | 6413.4ms | 176.8ms | 895.8MB | 1.258 |
| fiftyPlugins | gateway, 50 manifest plugins | 6095.9ms | 7277.3ms | 4991.4ms | 4939.9ms | 6086.4ms | 204.0ms | 756.4MB | 1.237 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 5222.4ms | 5241.3ms | 4379.4ms | 4704.3ms | 5211.2ms | 161.9ms | 776.3MB | 1.178 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 690.9MB | 768.3MB | +77.4MB (+11.2%) | +5.4MB (+1.8%) | stable |
| gateway boot | skipChannels | 723.3MB | 897.2MB | +173.9MB (+24.0%) | +37.7MB (+16.1%) | watch |
| gateway boot | preparedRuntimeCatalogStall | 657.9MB | 757.2MB | +99.4MB (+15.1%) | +52.0MB (+23.8%) | stable |
| gateway boot | preparedRuntimeScaleOne | 652.2MB | 752.5MB | +100.3MB (+15.4%) | +59.0MB (+28.0%) | stable |
| gateway boot | preparedRuntimeScaleMany | 659.7MB | 774.3MB | +114.6MB (+17.4%) | +90.9MB (+43.3%) | stable |
| gateway boot | oneInternalHook | 692.6MB | 869.4MB | +176.9MB (+25.5%) | +63.1MB (+30.3%) | watch |
| gateway boot | allInternalHooks | 685.0MB | 895.8MB | +210.7MB (+30.8%) | -27.1MB (-12.0%) | watch |
| gateway boot | fiftyPlugins | 701.6MB | 756.4MB | +54.8MB (+7.8%) | +63.9MB (+29.3%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 681.2MB | 776.3MB | +95.0MB (+14.0%) | +36.1MB (+16.6%) | stable |
| cli | gatewayHealthJsonWarmState | 73.8MiB | 74.7MiB | +0.8MiB (+1.1%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 73.6MiB | 74.3MiB | +0.6MiB (+0.9%) | n/a | stable |
| cli | configGetGatewayPort | 73.6MiB | 73.7MiB | +0.1MiB (+0.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | 355.4MB | 198.6MB | -156.8MB (-44.1%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 158 bundled plugins | 562.4MB | 516.1MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| migrate-hermes | 355.9MB | 309.7MB | ok |
| workboard | 353.0MB | 306.7MB | ok |
| llm-task | 345.6MB | 299.3MB | ok |
| active-memory | 340.5MB | 294.3MB | ok |
| clickclack | 314.8MB | 268.6MB | ok |
| deepinfra | 314.5MB | 268.2MB | ok |
| opencode | 311.0MB | 264.7MB | ok |
| acpx | 305.1MB | 258.9MB | ok |
| discord | 297.1MB | 250.9MB | ok |
| canvas | 295.8MB | 249.5MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2722.4ms | 2951.5ms |
| default | cli.main.gateway-run-bootstrap | 1510.7ms | 1650.5ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1510.7ms | 1650.5ms |
| default | cli.command.config-ready | 1509.7ms | 1649.3ms |
| default | process.bootstrap.cli.command.config-ready | 1509.7ms | 1649.3ms |
| skipChannels | process.bootstrap | 2808.1ms | 3588.1ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1611.6ms | 2049.3ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1611.6ms | 2049.3ms |
| skipChannels | cli.command.config-ready | 1610.4ms | 2047.9ms |
| skipChannels | process.bootstrap.cli.command.config-ready | 1610.4ms | 2047.9ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2793.7ms | 3073.7ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1536.0ms | 1748.4ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1536.0ms | 1748.4ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1535.0ms | 1747.5ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.command.config-ready | 1535.0ms | 1747.5ms |
| preparedRuntimeScaleOne | process.bootstrap | 2729.9ms | 2990.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1551.4ms | 1721.3ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1551.4ms | 1721.3ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1550.6ms | 1720.3ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.command.config-ready | 1550.6ms | 1720.3ms |
| preparedRuntimeScaleMany | process.bootstrap | 2931.3ms | 3098.0ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1654.3ms | 1796.4ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1654.3ms | 1796.4ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1653.1ms | 1795.3ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.command.config-ready | 1653.1ms | 1795.3ms |
| oneInternalHook | process.bootstrap | 3461.8ms | 3512.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1936.9ms | 1985.1ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1936.9ms | 1985.1ms |
| oneInternalHook | cli.command.config-ready | 1935.8ms | 1983.8ms |
| oneInternalHook | process.bootstrap.cli.command.config-ready | 1935.8ms | 1983.8ms |
| allInternalHooks | process.bootstrap | 3431.8ms | 3835.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2008.6ms | 2344.6ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 2008.6ms | 2344.6ms |
| allInternalHooks | cli.command.config-ready | 2006.9ms | 2343.0ms |
| allInternalHooks | process.bootstrap.cli.command.config-ready | 2006.9ms | 2343.0ms |
| fiftyPlugins | process.bootstrap | 3103.0ms | 3569.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1732.1ms | 2052.6ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1732.1ms | 2052.6ms |
| fiftyPlugins | cli.command.config-ready | 1731.1ms | 2051.3ms |
| fiftyPlugins | process.bootstrap.cli.command.config-ready | 1731.1ms | 2051.3ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2969.2ms | 3059.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1701.9ms | 1716.3ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1701.9ms | 1716.3ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1700.9ms | 1715.3ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.command.config-ready | 1700.9ms | 1715.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 14658.0ms | 0.205 | 1301.7MB | 1503.8MB | 202.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 15273.0ms | 0.262 | 1303.9MB | 1497.5MB | 193.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 15518.0ms | 0.193 | 1304.1MB | 1504.1MB | 200.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 678.0ms | 706.8ms | 74.7MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 679.7ms | 688.6ms | 74.3MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1292.9ms | 1323.2ms | 73.7MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 18 | 23 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 484.4ms |
| baseline | v2 | smoke | 3.53.3 | 17 | 21 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 266.5ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +45.0% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.8ms | 2.1ms | 1000 | 20 | 1.9ms | +9.5% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.5ms | 250 | 20 | 0.4ms | +8.5% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.4ms | 0.6ms | 696 | 20 | 0.6ms | -8.7% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.1ms | +80.4% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.3ms | 100 | 20 | 0.1ms | +96.1% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +21.0% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +5.6% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +3.1% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -33.3% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.2ms | 256 | 20 | 0.2ms | n/a (workload differs) | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 2.8ms | 10.0ms | 256 | 20 | 0.3ms | n/a (workload differs) | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

