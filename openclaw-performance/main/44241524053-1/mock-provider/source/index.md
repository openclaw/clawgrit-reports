# OpenClaw Source Performance

Generated: 2026-11-18T05:22:03.580Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 8612.3ms | 8621.7ms | 6126.2ms | 7828.4ms | 8593.8ms | 712.6ms | 1092.2MB | 1.280 |
| skipChannels | gateway, skip channels | 8650.3ms | 8657.9ms | 6145.1ms | 8012.3ms | 8620.3ms | 701.3ms | 1124.9MB | 1.276 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 8154.1ms | 8177.2ms | 6106.4ms | 7677.9ms | 8117.8ms | 705.5ms | 1097.2MB | 1.239 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 8222.8ms | 8226.4ms | 6158.6ms | 7748.6ms | 8204.2ms | 711.2ms | 1098.6MB | 1.242 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 8381.5ms | 8391.0ms | 6204.7ms | 7824.3ms | 8362.7ms | 707.1ms | 1102.5MB | 1.312 |
| oneInternalHook | gateway, one configured internal hook | 8847.6ms | 8869.0ms | 6194.0ms | 8057.9ms | 8816.7ms | 708.5ms | 1150.4MB | 1.255 |
| allInternalHooks | gateway, all internal hooks | 8756.5ms | 8776.8ms | 6119.9ms | 7966.7ms | 8728.1ms | 709.7ms | 1143.8MB | 1.262 |
| fiftyPlugins | gateway, 50 manifest plugins | 8595.4ms | 8603.3ms | 6185.5ms | 8082.1ms | 8583.0ms | 714.9ms | 1108.8MB | 1.285 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8257.6ms | 8293.9ms | 6183.9ms | 7756.2ms | 8246.2ms | 705.9ms | 1109.6MB | 1.224 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1093.6MB | 1092.2MB | -1.4MB (-0.1%) | +22.8MB (+7.9%) | stable |
| gateway boot | skipChannels | 1116.3MB | 1124.9MB | +8.6MB (+0.8%) | +2.8MB (+1.2%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1080.9MB | 1097.2MB | +16.4MB (+1.5%) | +1.5MB (+0.7%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1076.1MB | 1098.6MB | +22.5MB (+2.1%) | +6.7MB (+3.0%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1093.0MB | 1102.5MB | +9.5MB (+0.9%) | -11.2MB (-4.3%) | stable |
| gateway boot | oneInternalHook | 1122.5MB | 1150.4MB | +27.9MB (+2.5%) | +16.6MB (+7.2%) | stable |
| gateway boot | allInternalHooks | 1114.4MB | 1143.8MB | +29.4MB (+2.6%) | +1.3MB (+0.5%) | stable |
| gateway boot | fiftyPlugins | 1126.9MB | 1108.8MB | -18.1MB (-1.6%) | -25.7MB (-9.4%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1076.7MB | 1109.6MB | +32.9MB (+3.1%) | +0.4MB (+0.2%) | stable |
| cli | gatewayHealthJsonWarmState | 67.6MiB | 67.8MiB | +0.2MiB (+0.3%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 67.2MiB | 68.0MiB | +0.8MiB (+1.2%) | n/a | stable |
| cli | configGetGatewayPort | 67.3MiB | 67.8MiB | +0.5MiB (+0.7%) | n/a | stable |
| mock hello | gateway RSS delta avg | 276.5MB | 450.4MB | +173.9MB (+62.9%) | n/a | watch |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.9MB | 0.0MB | ok |
| all 185 bundled plugins | 559.3MB | 512.4MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 365.9MB | 319.0MB | ok |
| active-memory | 342.4MB | 295.5MB | ok |
| knowledge | 335.2MB | 288.3MB | ok |
| agentsapi | 333.9MB | 287.0MB | ok |
| telegram | 333.8MB | 287.0MB | ok |
| clickclack | 333.6MB | 286.7MB | ok |
| workboard | 330.4MB | 283.5MB | ok |
| muse | 323.7MB | 276.8MB | ok |
| policy | 318.1MB | 271.2MB | ok |
| copilot | 312.4MB | 265.5MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 8284.9ms | 8311.9ms |
| default | process.bootstrap | 4290.0ms | 4298.2ms |
| default | runtime.post-attach | 1629.9ms | 1656.6ms |
| default | cli.main.gateway-run-bootstrap | 1502.6ms | 1517.5ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1502.6ms | 1517.5ms |
| skipChannels | cli.main.gateway-run-parse | 7860.9ms | 7889.8ms |
| skipChannels | process.bootstrap | 4300.4ms | 4319.1ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1525.9ms | 1547.6ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1525.9ms | 1547.6ms |
| skipChannels | cli.command.config-ready | 1523.8ms | 1545.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 7356.9ms | 7377.6ms |
| preparedRuntimeCatalogStall | process.bootstrap | 4271.1ms | 4274.7ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1500.7ms | 1516.0ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1500.7ms | 1516.0ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1498.7ms | 1513.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 7412.9ms | 7421.9ms |
| preparedRuntimeScaleOne | process.bootstrap | 4298.8ms | 4303.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1485.0ms | 1499.7ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1485.0ms | 1499.7ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1483.1ms | 1497.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 7587.4ms | 7596.6ms |
| preparedRuntimeScaleMany | process.bootstrap | 4336.0ms | 4339.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1553.9ms | 1561.0ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1553.9ms | 1561.0ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1551.7ms | 1558.9ms |
| oneInternalHook | cli.main.gateway-run-parse | 8043.0ms | 8079.2ms |
| oneInternalHook | process.bootstrap | 4332.6ms | 4375.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1512.4ms | 1535.3ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1512.4ms | 1535.3ms |
| oneInternalHook | cli.command.config-ready | 1510.4ms | 1533.4ms |
| allInternalHooks | cli.main.gateway-run-parse | 7973.4ms | 7988.1ms |
| allInternalHooks | process.bootstrap | 4304.2ms | 4305.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1528.6ms | 1541.9ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1528.6ms | 1541.9ms |
| allInternalHooks | cli.command.config-ready | 1526.6ms | 1539.9ms |
| fiftyPlugins | cli.main.gateway-run-parse | 7953.3ms | 7973.3ms |
| fiftyPlugins | process.bootstrap | 4342.9ms | 4344.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1548.2ms | 1551.0ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1548.2ms | 1551.0ms |
| fiftyPlugins | cli.command.config-ready | 1546.2ms | 1548.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 7461.8ms | 7519.6ms |
| fiftyStartupLazyPlugins | process.bootstrap | 4343.7ms | 4356.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1573.2ms | 1576.5ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1573.2ms | 1576.5ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1571.3ms | 1574.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 19455.0ms | 0.411 | 1832.8MB | 2264.8MB | 431.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 18707.0ms | 0.535 | 1760.0MB | 2232.2MB | 472.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 18673.0ms | 0.482 | 1757.5MB | 2204.5MB | 447.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 1165.6ms | 1575.1ms | 67.8MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 970.9ms | 984.5ms | 68.0MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1227.3ms | 1254.7ms | 67.8MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 40 | 43 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 586.0ms |
| baseline | v2 | smoke | 3.53.4 | 40 | 42 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 293.3ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +84.2% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 2.2ms | 4.4ms | 1000 | 20 | 4.5ms | -2.0% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.6ms | 0.7ms | 250 | 20 | 0.4ms | +53.1% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.5ms | 0.5ms | 696 | 20 | 0.3ms | +47.5% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.1ms | +56.3% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.1ms | +63.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.1ms | +59.4% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.1ms | +56.0% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.4ms | 0.5ms | 675 | 20 | 0.3ms | +61.0% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +63.6% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.1ms | +65.0% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 3.0ms | 3.6ms | 256 | 20 | 1.9ms | +85.0% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

