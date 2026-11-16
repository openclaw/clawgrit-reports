# OpenClaw Source Performance

Generated: 2026-11-16T05:33:00.761Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6367.9ms | 6575.2ms | 4757.2ms | 5788.9ms | 6351.3ms | 552.2ms | 1058.1MB | 1.413 |
| skipChannels | gateway, skip channels | 6373.7ms | 6587.6ms | 4744.9ms | 5900.8ms | 6353.7ms | 541.0ms | 1068.4MB | 1.412 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 6013.5ms | 6149.8ms | 4715.0ms | 5625.3ms | 5990.5ms | 547.1ms | 1035.4MB | 1.342 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 6195.1ms | 6540.4ms | 4865.4ms | 5823.5ms | 6184.0ms | 559.7ms | 1041.3MB | 1.376 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 6739.3ms | 6769.9ms | 5213.6ms | 6254.7ms | 6712.6ms | 598.3ms | 1054.6MB | 1.339 |
| oneInternalHook | gateway, one configured internal hook | 7152.0ms | 7172.2ms | 5190.0ms | 6464.9ms | 7126.2ms | 589.0ms | 1076.6MB | 1.405 |
| allInternalHooks | gateway, all internal hooks | 7044.4ms | 7226.4ms | 5080.4ms | 6386.4ms | 7036.0ms | 600.1ms | 1093.7MB | 1.424 |
| fiftyPlugins | gateway, 50 manifest plugins | 7014.0ms | 7111.2ms | 5243.9ms | 6556.2ms | 6985.9ms | 598.6ms | 1085.5MB | 1.426 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 6487.6ms | 6571.2ms | 5095.5ms | 6068.1ms | 6463.2ms | 591.2ms | 1029.2MB | 1.391 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1073.5MB | 1058.1MB | -15.3MB (-1.4%) | -22.2MB (-7.2%) | stable |
| gateway boot | skipChannels | 1060.3MB | 1068.4MB | +8.0MB (+0.8%) | -15.0MB (-6.1%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1051.8MB | 1035.4MB | -16.4MB (-1.6%) | -17.3MB (-6.8%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1063.3MB | 1041.3MB | -22.0MB (-2.1%) | -17.4MB (-6.8%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1058.7MB | 1054.6MB | -4.0MB (-0.4%) | -8.5MB (-3.3%) | stable |
| gateway boot | oneInternalHook | 1090.5MB | 1076.6MB | -13.9MB (-1.3%) | +4.5MB (+1.8%) | stable |
| gateway boot | allInternalHooks | 1075.0MB | 1093.7MB | +18.8MB (+1.7%) | -0.3MB (-0.1%) | stable |
| gateway boot | fiftyPlugins | 1077.8MB | 1085.5MB | +7.7MB (+0.7%) | -37.3MB (-13.8%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1077.3MB | 1029.2MB | -48.1MB (-4.5%) | -38.3MB (-14.2%) | stable |
| cli | gatewayHealthJsonWarmState | 68.0MiB | 68.1MiB | +0.1MiB (+0.2%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 67.8MiB | 67.6MiB | -0.2MiB (-0.3%) | n/a | stable |
| cli | configGetGatewayPort | 67.8MiB | 67.8MiB | 0.0MiB (0.0%) | n/a | stable |
| mock hello | gateway RSS delta avg | -12.3MB | 188.9MB | +201.2MB (-1640.6%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.9MB | 0.0MB | ok |
| all 184 bundled plugins | 559.0MB | 512.1MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 366.9MB | 320.0MB | ok |
| active-memory | 343.1MB | 296.2MB | ok |
| workboard | 341.4MB | 294.6MB | ok |
| knowledge | 336.4MB | 289.5MB | ok |
| agentsapi | 336.0MB | 289.1MB | ok |
| telegram | 332.6MB | 285.7MB | ok |
| muse | 327.6MB | 280.7MB | ok |
| clickclack | 313.8MB | 266.9MB | ok |
| policy | 313.1MB | 266.2MB | ok |
| copilot | 312.6MB | 265.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 6116.1ms | 6348.3ms |
| default | process.bootstrap | 3303.3ms | 3370.7ms |
| default | cli.main.gateway-run-bootstrap | 1177.3ms | 1178.9ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1177.3ms | 1178.9ms |
| default | cli.command.config-ready | 1175.2ms | 1177.2ms |
| skipChannels | cli.main.gateway-run-parse | 5802.1ms | 5984.9ms |
| skipChannels | process.bootstrap | 3314.1ms | 3443.7ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1146.5ms | 1209.2ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1146.5ms | 1209.2ms |
| skipChannels | cli.command.config-ready | 1144.4ms | 1207.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 5425.7ms | 5565.0ms |
| preparedRuntimeCatalogStall | process.bootstrap | 3241.0ms | 3370.7ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1125.8ms | 1147.2ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1125.8ms | 1147.2ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1124.0ms | 1145.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 5606.4ms | 5954.2ms |
| preparedRuntimeScaleOne | process.bootstrap | 3339.8ms | 3513.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1170.0ms | 1224.5ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1170.0ms | 1224.5ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1168.1ms | 1222.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 6149.9ms | 6162.5ms |
| preparedRuntimeScaleMany | process.bootstrap | 3603.8ms | 3635.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1304.7ms | 1332.4ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1304.7ms | 1332.4ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1302.4ms | 1330.3ms |
| oneInternalHook | cli.main.gateway-run-parse | 6506.2ms | 6551.1ms |
| oneInternalHook | process.bootstrap | 3601.7ms | 3609.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1263.8ms | 1266.9ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1263.8ms | 1266.9ms |
| oneInternalHook | cli.command.config-ready | 1261.7ms | 1264.8ms |
| allInternalHooks | cli.main.gateway-run-parse | 6432.0ms | 6600.9ms |
| allInternalHooks | process.bootstrap | 3534.2ms | 3580.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1262.9ms | 1309.5ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1262.9ms | 1309.5ms |
| allInternalHooks | cli.command.config-ready | 1260.7ms | 1307.2ms |
| fiftyPlugins | cli.main.gateway-run-parse | 6501.1ms | 6609.0ms |
| fiftyPlugins | process.bootstrap | 3674.4ms | 3682.5ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1301.3ms | 1306.9ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1301.3ms | 1306.9ms |
| fiftyPlugins | cli.command.config-ready | 1298.9ms | 1304.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 5837.5ms | 5962.6ms |
| fiftyStartupLazyPlugins | process.bootstrap | 3559.7ms | 3568.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1261.1ms | 1262.4ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1261.1ms | 1262.4ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1259.0ms | 1260.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 16843.0ms | 0.356 | 1729.2MB | 1925.9MB | 196.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 16501.0ms | 0.364 | 1669.3MB | 1857.9MB | 188.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 16383.0ms | 0.366 | 1686.1MB | 1867.6MB | 181.4MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 980.7ms | 1075.4ms | 68.1MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 841.9ms | 844.0ms | 67.6MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1014.1ms | 1018.3ms | 67.8MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 40 | 42 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 519.5ms |
| baseline | v2 | smoke | 3.53.4 | 40 | 42 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 486.0ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +56.0% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 2.0ms | 7.5ms | 1000 | 20 | 6.3ms | +19.6% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.5ms | 0.5ms | 250 | 20 | 0.5ms | -0.6% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.4ms | 0.4ms | 696 | 20 | 0.4ms | -0.2% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.1ms | +7.7% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.2ms | 0.0% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +0.7% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | 0.0% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.4ms | 675 | 20 | 0.4ms | +6.2% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +38.5% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | +1.7% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 2.4ms | 2.8ms | 256 | 20 | 2.8ms | -2.3% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

