# OpenClaw Source Performance

Generated: 2026-11-23T05:36:45.186Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 8775.3ms | 8838.7ms | 6224.8ms | 7997.8ms | 8757.1ms | 702.3ms | 1099.9MB | 1.280 |
| skipChannels | gateway, skip channels | 8749.3ms | 8782.5ms | 6203.7ms | 8242.5ms | 8733.0ms | 704.5ms | 1084.8MB | 1.271 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 8378.3ms | 8421.6ms | 6228.7ms | 7921.8ms | 8373.6ms | 705.1ms | 1065.3MB | 1.204 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 8411.5ms | 8461.7ms | 6248.8ms | 7943.6ms | 8394.2ms | 706.4ms | 1087.0MB | 1.201 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 9303.8ms | 9383.7ms | 6959.0ms | 8695.7ms | 9295.3ms | 716.1ms | 1100.7MB | 1.203 |
| oneInternalHook | gateway, one configured internal hook | 10116.8ms | 10423.0ms | 7279.2ms | 9379.7ms | 10083.5ms | 729.2ms | 1090.3MB | 1.225 |
| allInternalHooks | gateway, all internal hooks | 9425.3ms | 9802.8ms | 6735.0ms | 8773.1ms | 9417.8ms | 729.6ms | 1117.5MB | 1.273 |
| fiftyPlugins | gateway, 50 manifest plugins | 9162.0ms | 9672.9ms | 6432.6ms | 8684.8ms | 9155.4ms | 726.4ms | 1094.7MB | 1.215 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8577.7ms | 8585.1ms | 6430.8ms | 8096.3ms | 8573.9ms | 718.0ms | 1092.9MB | 1.176 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1111.4MB | 1099.9MB | -11.5MB (-1.0%) | +14.2MB (+5.1%) | stable |
| gateway boot | skipChannels | 1099.3MB | 1084.8MB | -14.5MB (-1.3%) | +21.3MB (+8.6%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1081.4MB | 1065.3MB | -16.1MB (-1.5%) | +9.0MB (+3.8%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1073.2MB | 1087.0MB | +13.8MB (+1.3%) | +25.3MB (+10.9%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1114.9MB | 1100.7MB | -14.2MB (-1.3%) | +28.3MB (+11.5%) | stable |
| gateway boot | oneInternalHook | 1113.3MB | 1090.3MB | -23.0MB (-2.1%) | +21.4MB (+9.2%) | stable |
| gateway boot | allInternalHooks | 1094.1MB | 1117.5MB | +23.4MB (+2.1%) | +64.0MB (+31.4%) | stable |
| gateway boot | fiftyPlugins | 1105.5MB | 1094.7MB | -10.8MB (-1.0%) | +7.2MB (+2.9%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1105.4MB | 1092.9MB | -12.5MB (-1.1%) | +21.9MB (+9.4%) | stable |
| cli | gatewayHealthJsonWarmState | 68.1MiB | 67.7MiB | -0.3MiB (-0.5%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 68.0MiB | 68.0MiB | +0.0MiB (+0.0%) | n/a | stable |
| cli | configGetGatewayPort | 67.9MiB | 67.7MiB | -0.3MiB (-0.4%) | n/a | stable |
| mock hello | gateway RSS delta avg | 527.2MB | 584.6MB | +57.4MB (+10.9%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.9MB | 0.0MB | ok |
| all 185 bundled plugins | 559.0MB | 512.1MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 364.0MB | 317.1MB | ok |
| active-memory | 343.9MB | 297.0MB | ok |
| workboard | 342.0MB | 295.1MB | ok |
| knowledge | 340.5MB | 293.7MB | ok |
| agentsapi | 337.5MB | 290.6MB | ok |
| clickclack | 336.2MB | 289.4MB | ok |
| muse | 332.6MB | 285.7MB | ok |
| team-reports | 324.9MB | 278.1MB | ok |
| policy | 324.8MB | 277.9MB | ok |
| telegram | 324.0MB | 277.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 9062.8ms | 9167.9ms |
| default | process.bootstrap | 4361.6ms | 4571.3ms |
| default | runtime.post-attach | 1535.4ms | 1621.1ms |
| default | cli.main.gateway-run-bootstrap | 1521.5ms | 1779.4ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1521.5ms | 1779.4ms |
| skipChannels | cli.main.gateway-run-parse | 7936.0ms | 7997.3ms |
| skipChannels | process.bootstrap | 4322.1ms | 4425.8ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1546.1ms | 1624.8ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1546.1ms | 1624.8ms |
| skipChannels | cli.command.config-ready | 1543.9ms | 1622.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 7569.1ms | 7607.1ms |
| preparedRuntimeCatalogStall | process.bootstrap | 4325.3ms | 4352.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1517.8ms | 1522.0ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1517.8ms | 1522.0ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1515.6ms | 1520.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 7599.5ms | 7665.9ms |
| preparedRuntimeScaleOne | process.bootstrap | 4345.7ms | 4360.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1500.5ms | 1554.1ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1500.5ms | 1554.1ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1498.5ms | 1552.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 8506.6ms | 8561.1ms |
| preparedRuntimeScaleMany | process.bootstrap | 4922.7ms | 5113.9ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1938.0ms | 1948.7ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1938.0ms | 1948.7ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1935.8ms | 1946.6ms |
| oneInternalHook | cli.main.gateway-run-parse | 9326.5ms | 10023.0ms |
| oneInternalHook | process.bootstrap | 5240.2ms | 5771.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2032.8ms | 2441.1ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 2032.8ms | 2441.1ms |
| oneInternalHook | cli.command.config-ready | 2030.4ms | 2439.0ms |
| allInternalHooks | cli.main.gateway-run-parse | 8651.5ms | 9064.3ms |
| allInternalHooks | process.bootstrap | 4768.6ms | 5084.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1760.1ms | 1900.6ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1760.1ms | 1900.6ms |
| allInternalHooks | cli.command.config-ready | 1757.9ms | 1898.4ms |
| fiftyPlugins | cli.main.gateway-run-parse | 8500.6ms | 9020.9ms |
| fiftyPlugins | process.bootstrap | 4465.2ms | 5108.3ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1595.7ms | 1605.1ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1595.7ms | 1605.1ms |
| fiftyPlugins | cli.command.config-ready | 1593.4ms | 1603.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 7766.0ms | 7769.4ms |
| fiftyStartupLazyPlugins | process.bootstrap | 4529.5ms | 4547.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1679.0ms | 1682.4ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1679.0ms | 1682.4ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1676.7ms | 1680.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 19691.0ms | 0.508 | 1647.0MB | 2320.2MB | 673.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 19258.0ms | 0.467 | 1700.6MB | 2215.5MB | 515.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 19290.0ms | 0.467 | 1641.8MB | 2207.4MB | 565.6MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 1114.1ms | 1399.0ms | 67.7MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 996.6ms | 1109.8ms | 68.0MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1225.0ms | 1227.0ms | 67.7MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 41 | 43 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 576.5ms |
| baseline | v2 | smoke | 3.53.4 | 41 | 43 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 528.6ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -14.7% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 2.2ms | 2.3ms | 1000 | 20 | 2.1ms | +7.8% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.6ms | 0.7ms | 250 | 20 | 0.6ms | +9.5% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.5ms | 0.5ms | 696 | 20 | 0.5ms | -3.1% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.2ms | +2.3% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.2ms | -0.5% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.2ms | -4.5% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.2ms | -1.7% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.4ms | 0.5ms | 675 | 20 | 0.5ms | -10.9% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +45.2% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.3ms | 256 | 20 | 0.2ms | +20.1% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 3.0ms | 4.4ms | 256 | 20 | 4.1ms | +6.9% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

