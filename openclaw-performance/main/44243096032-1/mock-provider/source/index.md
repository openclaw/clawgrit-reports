# OpenClaw Source Performance

Generated: 2026-11-18T05:32:18.777Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7356.2ms | 7365.7ms | 5181.5ms | 6648.3ms | 7331.2ms | 578.0ms | 1138.1MB | 1.358 |
| skipChannels | gateway, skip channels | 7160.1ms | 7183.0ms | 5069.6ms | 6618.1ms | 7151.5ms | 558.8ms | 1131.3MB | 1.260 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 6723.3ms | 6743.2ms | 5012.2ms | 6320.8ms | 6705.6ms | 566.5ms | 1102.8MB | 1.341 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 6816.3ms | 6898.0ms | 5085.8ms | 6408.0ms | 6806.7ms | 574.5ms | 1104.9MB | 1.328 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 7068.1ms | 7105.2ms | 5179.3ms | 6549.2ms | 7061.0ms | 579.1ms | 1105.9MB | 1.280 |
| oneInternalHook | gateway, one configured internal hook | 7487.2ms | 7496.0ms | 5214.8ms | 6791.6ms | 7470.3ms | 587.5ms | 1153.9MB | 1.357 |
| allInternalHooks | gateway, all internal hooks | 7379.8ms | 7384.7ms | 5095.8ms | 6670.0ms | 7354.8ms | 573.9ms | 1145.8MB | 1.355 |
| fiftyPlugins | gateway, 50 manifest plugins | 7263.3ms | 7292.6ms | 5165.3ms | 6788.3ms | 7237.7ms | 580.8ms | 1141.5MB | 1.377 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7050.0ms | 7078.6ms | 5203.8ms | 6575.0ms | 7018.0ms | 583.3ms | 1096.2MB | 1.291 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1093.6MB | 1138.1MB | +44.6MB (+4.1%) | +22.7MB (+7.9%) | stable |
| gateway boot | skipChannels | 1116.3MB | 1131.3MB | +15.1MB (+1.4%) | +17.2MB (+7.5%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1080.9MB | 1102.8MB | +21.9MB (+2.0%) | +3.0MB (+1.3%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1076.1MB | 1104.9MB | +28.8MB (+2.7%) | +19.6MB (+8.7%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1093.0MB | 1105.9MB | +12.9MB (+1.2%) | -29.5MB (-11.2%) | stable |
| gateway boot | oneInternalHook | 1122.5MB | 1153.9MB | +31.4MB (+2.8%) | +16.5MB (+7.2%) | stable |
| gateway boot | allInternalHooks | 1114.4MB | 1145.8MB | +31.4MB (+2.8%) | +1.3MB (+0.5%) | stable |
| gateway boot | fiftyPlugins | 1126.9MB | 1141.5MB | +14.6MB (+1.3%) | -44.0MB (-16.2%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1076.7MB | 1096.2MB | +19.5MB (+1.8%) | +18.5MB (+8.1%) | stable |
| cli | gatewayHealthJsonWarmState | 67.6MiB | 68.0MiB | +0.4MiB (+0.7%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 67.2MiB | 67.8MiB | +0.6MiB (+0.9%) | n/a | stable |
| cli | configGetGatewayPort | 67.3MiB | 68.1MiB | +0.8MiB (+1.2%) | n/a | stable |
| mock hello | gateway RSS delta avg | 276.5MB | 407.6MB | +131.1MB (+47.4%) | n/a | watch |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.9MB | 0.0MB | ok |
| all 185 bundled plugins | 559.1MB | 512.2MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 368.1MB | 321.2MB | ok |
| active-memory | 342.7MB | 295.8MB | ok |
| clickclack | 335.7MB | 288.8MB | ok |
| knowledge | 334.9MB | 288.0MB | ok |
| agentsapi | 333.8MB | 286.9MB | ok |
| workboard | 329.8MB | 282.9MB | ok |
| muse | 326.2MB | 279.3MB | ok |
| telegram | 319.5MB | 272.6MB | ok |
| policy | 314.2MB | 267.3MB | ok |
| copilot | 312.8MB | 265.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 7117.7ms | 7136.7ms |
| default | process.bootstrap | 3590.5ms | 3603.1ms |
| default | runtime.post-attach | 1368.0ms | 1380.2ms |
| default | cli.main.gateway-run-bootstrap | 1259.9ms | 1264.7ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1259.9ms | 1264.7ms |
| skipChannels | cli.main.gateway-run-parse | 6563.6ms | 6575.3ms |
| skipChannels | process.bootstrap | 3507.7ms | 3523.0ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1225.5ms | 1228.6ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1225.5ms | 1228.6ms |
| skipChannels | cli.command.config-ready | 1223.8ms | 1226.9ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 6121.9ms | 6124.4ms |
| preparedRuntimeCatalogStall | process.bootstrap | 3478.8ms | 3485.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1210.0ms | 1217.8ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1210.0ms | 1217.8ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1203.6ms | 1215.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 6186.0ms | 6292.1ms |
| preparedRuntimeScaleOne | process.bootstrap | 3523.5ms | 3545.2ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1218.4ms | 1239.8ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1218.4ms | 1239.8ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1216.6ms | 1238.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 6435.4ms | 6438.4ms |
| preparedRuntimeScaleMany | process.bootstrap | 3560.9ms | 3618.3ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1256.2ms | 1278.5ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1256.2ms | 1278.5ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1254.4ms | 1276.6ms |
| oneInternalHook | cli.main.gateway-run-parse | 6846.6ms | 6866.2ms |
| oneInternalHook | process.bootstrap | 3583.9ms | 3600.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1251.3ms | 1252.2ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1251.3ms | 1252.2ms |
| oneInternalHook | cli.command.config-ready | 1249.3ms | 1250.4ms |
| allInternalHooks | cli.main.gateway-run-parse | 6762.8ms | 6764.5ms |
| allInternalHooks | process.bootstrap | 3538.8ms | 3549.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1230.2ms | 1233.2ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1230.2ms | 1233.2ms |
| allInternalHooks | cli.command.config-ready | 1228.1ms | 1231.5ms |
| fiftyPlugins | cli.main.gateway-run-parse | 6792.6ms | 6804.0ms |
| fiftyPlugins | process.bootstrap | 3593.4ms | 3619.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1282.7ms | 1296.2ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1282.7ms | 1296.2ms |
| fiftyPlugins | cli.command.config-ready | 1280.6ms | 1294.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 6440.2ms | 6454.6ms |
| fiftyStartupLazyPlugins | process.bootstrap | 3614.1ms | 3629.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1287.6ms | 1289.3ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1287.6ms | 1289.3ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1285.8ms | 1287.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 16456.0ms | 0.425 | 1807.7MB | 2200.1MB | 392.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 16284.0ms | 0.491 | 1785.8MB | 2234.6MB | 448.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 16380.0ms | 0.488 | 1781.4MB | 2163.0MB | 381.6MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 954.9ms | 1141.8ms | 68.0MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 813.1ms | 816.8ms | 67.8MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1040.5ms | 1042.8ms | 68.1MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 40 | 43 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 503.3ms |
| baseline | v2 | smoke | 3.53.4 | 40 | 42 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 293.3ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.1ms | 13 | 20 | 0.0ms | +378.9% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 2.1ms | 3.7ms | 1000 | 20 | 4.5ms | -18.1% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.5ms | 0.6ms | 250 | 20 | 0.4ms | +35.9% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.4ms | 0.5ms | 696 | 20 | 0.3ms | +47.2% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.1ms | +44.5% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.1ms | +51.2% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.1ms | +53.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.1ms | +60.6% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.4ms | 0.5ms | 675 | 20 | 0.3ms | +87.9% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +68.2% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.1ms | +40.6% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 3.4ms | 3.8ms | 256 | 20 | 1.9ms | +95.3% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

