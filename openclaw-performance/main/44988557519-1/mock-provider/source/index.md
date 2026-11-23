# OpenClaw Source Performance

Generated: 2026-11-22T05:31:04.390Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7621.1ms | 7670.8ms | 5410.0ms | 6911.9ms | 7610.2ms | 607.1ms | 1138.5MB | 1.332 |
| skipChannels | gateway, skip channels | 7600.9ms | 7639.2ms | 5326.0ms | 7050.4ms | 7587.8ms | 597.6ms | 1105.1MB | 1.323 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 7220.9ms | 7257.2ms | 5292.2ms | 6806.0ms | 7222.9ms | 580.0ms | 1069.6MB | 1.251 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 7257.7ms | 7325.3ms | 5318.8ms | 6826.1ms | 7266.1ms | 605.1ms | 1075.0MB | 1.365 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 7416.4ms | 7525.4ms | 5346.7ms | 6908.0ms | 7403.5ms | 586.4ms | 1107.2MB | 1.329 |
| oneInternalHook | gateway, one configured internal hook | 7757.7ms | 7785.6ms | 5327.5ms | 7095.4ms | 7741.9ms | 578.1ms | 1088.0MB | 1.299 |
| allInternalHooks | gateway, all internal hooks | 7750.9ms | 7893.6ms | 5326.4ms | 7027.8ms | 7740.5ms | 585.3ms | 1126.9MB | 1.294 |
| fiftyPlugins | gateway, 50 manifest plugins | 7581.1ms | 7611.4ms | 5265.7ms | 7103.4ms | 7589.9ms | 577.4ms | 1112.9MB | 1.321 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7238.7ms | 7257.6ms | 5308.6ms | 6789.2ms | 7247.3ms | 588.5ms | 1091.0MB | 1.247 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1111.4MB | 1138.5MB | +27.2MB (+2.4%) | +33.3MB (+11.9%) | stable |
| gateway boot | skipChannels | 1099.3MB | 1105.1MB | +5.7MB (+0.5%) | +4.0MB (+1.6%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1081.4MB | 1069.6MB | -11.8MB (-1.1%) | -5.8MB (-2.4%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1073.2MB | 1075.0MB | +1.8MB (+0.2%) | +18.0MB (+7.7%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1114.9MB | 1107.2MB | -7.7MB (-0.7%) | +26.6MB (+10.8%) | stable |
| gateway boot | oneInternalHook | 1113.3MB | 1088.0MB | -25.3MB (-2.3%) | -11.2MB (-4.8%) | stable |
| gateway boot | allInternalHooks | 1094.1MB | 1126.9MB | +32.8MB (+3.0%) | +46.4MB (+22.7%) | stable |
| gateway boot | fiftyPlugins | 1105.5MB | 1112.9MB | +7.4MB (+0.7%) | +5.5MB (+2.2%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1105.4MB | 1091.0MB | -14.4MB (-1.3%) | +19.5MB (+8.4%) | stable |
| cli | gatewayHealthJsonWarmState | 68.1MiB | 68.0MiB | -0.0MiB (-0.0%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 68.0MiB | 67.9MiB | -0.1MiB (-0.1%) | n/a | stable |
| cli | configGetGatewayPort | 67.9MiB | 67.9MiB | -0.0MiB (-0.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | 527.2MB | 527.8MB | +0.6MB (+0.1%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 47.0MB | 0.0MB | ok |
| all 185 bundled plugins | 552.9MB | 505.8MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 368.7MB | 321.7MB | ok |
| active-memory | 344.3MB | 297.3MB | ok |
| workboard | 343.4MB | 296.4MB | ok |
| telegram | 339.6MB | 292.6MB | ok |
| knowledge | 339.6MB | 292.6MB | ok |
| agentsapi | 335.2MB | 288.2MB | ok |
| clickclack | 329.8MB | 282.8MB | ok |
| muse | 323.1MB | 276.1MB | ok |
| team-reports | 321.7MB | 274.6MB | ok |
| copilot | 313.5MB | 266.5MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 7930.2ms | 7955.9ms |
| default | process.bootstrap | 3705.0ms | 3705.5ms |
| default | runtime.post-attach | 1437.7ms | 1443.9ms |
| default | cli.main.gateway-run-bootstrap | 1281.8ms | 1317.3ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1281.8ms | 1317.3ms |
| skipChannels | cli.main.gateway-run-parse | 6957.4ms | 6993.3ms |
| skipChannels | process.bootstrap | 3642.3ms | 3665.5ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1277.7ms | 1289.0ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1277.7ms | 1289.0ms |
| skipChannels | cli.command.config-ready | 1276.0ms | 1287.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 6585.0ms | 6623.3ms |
| preparedRuntimeCatalogStall | process.bootstrap | 3612.0ms | 3647.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1267.3ms | 1284.6ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1267.3ms | 1284.6ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1265.6ms | 1282.8ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 6602.9ms | 6657.2ms |
| preparedRuntimeScaleOne | process.bootstrap | 3653.8ms | 3673.2ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1252.8ms | 1267.9ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1252.8ms | 1267.9ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1251.0ms | 1266.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 6759.0ms | 6861.0ms |
| preparedRuntimeScaleMany | process.bootstrap | 3666.9ms | 3685.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1316.5ms | 1330.6ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1316.5ms | 1330.6ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1314.8ms | 1328.8ms |
| oneInternalHook | cli.main.gateway-run-parse | 7129.2ms | 7156.8ms |
| oneInternalHook | process.bootstrap | 3630.5ms | 3638.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1281.9ms | 1287.7ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1281.9ms | 1287.7ms |
| oneInternalHook | cli.command.config-ready | 1280.2ms | 1285.9ms |
| allInternalHooks | cli.main.gateway-run-parse | 7130.4ms | 7256.5ms |
| allInternalHooks | process.bootstrap | 3635.4ms | 3681.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1282.2ms | 1299.1ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1282.2ms | 1299.1ms |
| allInternalHooks | cli.command.config-ready | 1280.3ms | 1297.2ms |
| fiftyPlugins | cli.main.gateway-run-parse | 7096.0ms | 7118.3ms |
| fiftyPlugins | process.bootstrap | 3637.0ms | 3657.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1287.7ms | 1319.6ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1287.7ms | 1319.6ms |
| fiftyPlugins | cli.command.config-ready | 1286.0ms | 1317.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 6600.2ms | 6620.4ms |
| fiftyStartupLazyPlugins | process.bootstrap | 3656.7ms | 3664.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1304.6ms | 1324.6ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1304.6ms | 1324.6ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1302.6ms | 1322.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 16888.0ms | 0.474 | 1692.2MB | 2205.6MB | 513.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 16791.0ms | 0.476 | 1674.1MB | 2174.4MB | 500.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 16732.0ms | 0.478 | 1700.9MB | 2270.5MB | 569.6MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 996.4ms | 1178.9ms | 68.0MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 857.9ms | 933.1ms | 67.9MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1035.8ms | 1039.6ms | 67.9MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 41 | 43 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 524.1ms |
| baseline | v2 | smoke | 3.53.4 | 41 | 43 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 528.6ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -8.8% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 2.1ms | 2.1ms | 1000 | 20 | 2.1ms | -0.6% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.5ms | 0.6ms | 250 | 20 | 0.6ms | -8.0% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.4ms | 0.5ms | 696 | 20 | 0.5ms | -0.4% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.2ms | -1.2% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.2ms | -11.7% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.2ms | -5.6% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.2ms | -8.5% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.4ms | 0.4ms | 675 | 20 | 0.5ms | -18.4% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +6.5% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | -1.0% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 3.5ms | 4.3ms | 256 | 20 | 4.1ms | +6.3% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

