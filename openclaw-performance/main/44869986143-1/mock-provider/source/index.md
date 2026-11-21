# OpenClaw Source Performance

Generated: 2026-11-21T05:30:37.037Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7431.3ms | 7439.5ms | 5249.8ms | 6720.7ms | 7420.7ms | 586.1ms | 1111.4MB | 1.346 |
| skipChannels | gateway, skip channels | 7571.9ms | 7624.3ms | 5251.6ms | 7002.1ms | 7569.8ms | 590.7ms | 1099.3MB | 1.324 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 7225.4ms | 7258.9ms | 5271.4ms | 6780.9ms | 7219.4ms | 592.7ms | 1081.4MB | 1.256 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 7270.9ms | 7300.9ms | 5300.6ms | 6801.9ms | 7256.9ms | 590.0ms | 1073.2MB | 1.370 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 7366.1ms | 7400.2ms | 5283.1ms | 6829.0ms | 7375.0ms | 583.8ms | 1114.9MB | 1.231 |
| oneInternalHook | gateway, one configured internal hook | 7652.4ms | 7703.2ms | 5277.2ms | 6971.4ms | 7648.5ms | 589.6ms | 1113.3MB | 1.309 |
| allInternalHooks | gateway, all internal hooks | 7691.9ms | 7738.5ms | 5271.9ms | 6967.6ms | 7666.3ms | 580.5ms | 1094.1MB | 1.308 |
| fiftyPlugins | gateway, 50 manifest plugins | 7591.7ms | 7618.4ms | 5284.9ms | 7099.0ms | 7593.6ms | 583.2ms | 1105.5MB | 1.319 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7260.9ms | 7270.1ms | 5304.7ms | 6786.7ms | 7253.9ms | 586.5ms | 1105.4MB | 1.242 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1071.0MB | 1111.4MB | +40.3MB (+3.8%) | +20.4MB (+7.8%) | stable |
| gateway boot | skipChannels | 1135.9MB | 1099.3MB | -36.6MB (-3.2%) | +0.2MB (+0.1%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1098.7MB | 1081.4MB | -17.3MB (-1.6%) | +8.9MB (+3.9%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1101.6MB | 1073.2MB | -28.4MB (-2.6%) | -12.3MB (-5.0%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1105.0MB | 1114.9MB | +9.9MB (+0.9%) | -5.6MB (-2.2%) | stable |
| gateway boot | oneInternalHook | 1146.2MB | 1113.3MB | -32.9MB (-2.9%) | -13.3MB (-5.4%) | stable |
| gateway boot | allInternalHooks | 1129.4MB | 1094.1MB | -35.2MB (-3.1%) | -28.0MB (-12.1%) | stable |
| gateway boot | fiftyPlugins | 1070.1MB | 1105.5MB | +35.4MB (+3.3%) | +15.7MB (+6.8%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1090.2MB | 1105.4MB | +15.2MB (+1.4%) | -14.8MB (-6.0%) | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.9MB | 0.0MB | ok |
| all 185 bundled plugins | 563.9MB | 517.0MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 363.0MB | 316.2MB | ok |
| active-memory | 344.3MB | 297.4MB | ok |
| knowledge | 336.1MB | 289.2MB | ok |
| agentsapi | 334.7MB | 287.8MB | ok |
| workboard | 331.9MB | 285.0MB | ok |
| clickclack | 331.8MB | 284.9MB | ok |
| muse | 324.3MB | 277.4MB | ok |
| telegram | 320.4MB | 273.6MB | ok |
| policy | 319.4MB | 272.5MB | ok |
| copilot | 314.2MB | 267.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 7714.8ms | 7725.4ms |
| default | process.bootstrap | 3609.3ms | 3629.3ms |
| default | runtime.post-attach | 1386.9ms | 1393.7ms |
| default | cli.main.gateway-run-bootstrap | 1272.8ms | 1274.3ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1272.8ms | 1274.3ms |
| skipChannels | cli.main.gateway-run-parse | 6942.9ms | 6976.6ms |
| skipChannels | process.bootstrap | 3603.1ms | 3650.4ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1267.4ms | 1268.0ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1267.4ms | 1268.0ms |
| skipChannels | cli.command.config-ready | 1265.5ms | 1266.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 6583.7ms | 6642.7ms |
| preparedRuntimeCatalogStall | process.bootstrap | 3631.1ms | 3649.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1247.5ms | 1292.9ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1247.5ms | 1292.9ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1245.8ms | 1291.2ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 6618.3ms | 6675.3ms |
| preparedRuntimeScaleOne | process.bootstrap | 3655.1ms | 3655.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1268.1ms | 1284.4ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1268.1ms | 1284.4ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1266.3ms | 1282.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 6745.7ms | 6753.0ms |
| preparedRuntimeScaleMany | process.bootstrap | 3634.5ms | 3667.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1288.7ms | 1289.6ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1288.7ms | 1289.6ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1287.0ms | 1287.8ms |
| oneInternalHook | cli.main.gateway-run-parse | 7023.7ms | 7070.9ms |
| oneInternalHook | process.bootstrap | 3631.3ms | 3645.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1267.1ms | 1272.5ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1267.1ms | 1272.5ms |
| oneInternalHook | cli.command.config-ready | 1265.0ms | 1270.6ms |
| allInternalHooks | cli.main.gateway-run-parse | 7067.2ms | 7110.4ms |
| allInternalHooks | process.bootstrap | 3615.6ms | 3635.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1265.8ms | 1270.7ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1265.8ms | 1270.7ms |
| allInternalHooks | cli.command.config-ready | 1264.0ms | 1268.9ms |
| fiftyPlugins | cli.main.gateway-run-parse | 7120.8ms | 7139.7ms |
| fiftyPlugins | process.bootstrap | 3640.5ms | 3648.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1286.1ms | 1289.9ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1286.1ms | 1289.9ms |
| fiftyPlugins | cli.command.config-ready | 1284.1ms | 1288.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 6625.2ms | 6666.6ms |
| fiftyStartupLazyPlugins | process.bootstrap | 3658.5ms | 3671.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1303.5ms | 1305.4ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1303.5ms | 1305.4ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1301.8ms | 1303.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 16297.0ms | 0.491 | 1620.8MB | 2194.3MB | 573.5MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 16332.0ms | 0.490 | 1699.3MB | 2200.4MB | 501.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 16558.0ms | 0.483 | 1688.4MB | 2195.5MB | 507.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 945.5ms | 1026.8ms | 68.1MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 826.7ms | 841.6ms | 68.0MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1010.0ms | 1051.7ms | 67.9MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 41 | 43 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 528.6ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | n/a | n/a | n/a | n/a | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 2.1ms | 2.1ms | n/a | n/a | n/a | n/a | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.6ms | 0.6ms | n/a | n/a | n/a | n/a | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.4ms | 0.5ms | n/a | n/a | n/a | n/a | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.2ms | n/a | n/a | n/a | n/a | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.2ms | 0.2ms | n/a | n/a | n/a | n/a | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.2ms | 0.2ms | n/a | n/a | n/a | n/a | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.2ms | 0.2ms | n/a | n/a | n/a | n/a | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.4ms | 0.5ms | n/a | n/a | n/a | n/a | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | n/a | n/a | n/a | n/a | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | n/a | n/a | n/a | n/a | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 3.4ms | 4.1ms | n/a | n/a | n/a | n/a | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

