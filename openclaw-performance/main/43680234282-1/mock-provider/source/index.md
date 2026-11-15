# OpenClaw Source Performance

Generated: 2026-11-15T05:30:01.450Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7017.4ms | 7131.1ms | 5191.8ms | 6344.8ms | 7004.8ms | 611.0ms | 1073.5MB | 1.425 |
| skipChannels | gateway, skip channels | 6782.3ms | 6837.4ms | 5048.7ms | 6257.8ms | 6776.1ms | 575.0ms | 1060.3MB | 1.327 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 6754.1ms | 6930.3ms | 5242.9ms | 6288.6ms | 6723.2ms | 613.6ms | 1051.8MB | 1.352 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 6723.7ms | 6987.6ms | 5206.4ms | 6279.6ms | 6694.0ms | 606.0ms | 1063.3MB | 1.364 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 6982.6ms | 7024.3ms | 5342.0ms | 6440.8ms | 6964.2ms | 619.1ms | 1058.7MB | 1.440 |
| oneInternalHook | gateway, one configured internal hook | 7200.8ms | 7244.0ms | 5241.5ms | 6503.8ms | 7196.0ms | 608.4ms | 1090.5MB | 1.403 |
| allInternalHooks | gateway, all internal hooks | 7360.2ms | 7422.0ms | 5345.0ms | 6648.8ms | 7348.7ms | 612.6ms | 1075.0MB | 1.364 |
| fiftyPlugins | gateway, 50 manifest plugins | 7075.9ms | 7136.5ms | 5182.4ms | 6627.3ms | 7066.8ms | 596.7ms | 1077.8MB | 1.427 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 6430.4ms | 6500.8ms | 5058.6ms | 6029.6ms | 6406.9ms | 568.5ms | 1077.3MB | 1.400 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1202.4MB | 1073.5MB | -128.9MB (-10.7%) | +26.1MB (+9.2%) | improved |
| gateway boot | skipChannels | 1166.3MB | 1060.3MB | -106.0MB (-9.1%) | +27.9MB (+12.7%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1138.2MB | 1051.8MB | -86.4MB (-7.6%) | +39.9MB (+18.6%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1146.5MB | 1063.3MB | -83.2MB (-7.3%) | +39.4MB (+18.3%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1155.7MB | 1058.7MB | -97.1MB (-8.4%) | +7.3MB (+2.9%) | stable |
| gateway boot | oneInternalHook | 1177.2MB | 1090.5MB | -86.8MB (-7.4%) | +13.0MB (+5.6%) | stable |
| gateway boot | allInternalHooks | 1181.9MB | 1075.0MB | -106.9MB (-9.0%) | +33.3MB (+15.2%) | stable |
| gateway boot | fiftyPlugins | 1174.4MB | 1077.8MB | -96.6MB (-8.2%) | +54.2MB (+25.1%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1138.9MB | 1077.3MB | -61.6MB (-5.4%) | +54.1MB (+25.0%) | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.8MB | 0.0MB | ok |
| all 184 bundled plugins | 566.1MB | 519.3MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 368.7MB | 321.9MB | ok |
| workboard | 336.9MB | 290.1MB | ok |
| knowledge | 333.8MB | 287.0MB | ok |
| agentsapi | 333.5MB | 286.7MB | ok |
| muse | 329.1MB | 282.3MB | ok |
| active-memory | 329.0MB | 282.2MB | ok |
| telegram | 320.5MB | 273.7MB | ok |
| copilot | 319.2MB | 272.4MB | ok |
| clickclack | 313.5MB | 266.7MB | ok |
| policy | 311.6MB | 264.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 6637.0ms | 6818.0ms |
| default | process.bootstrap | 3646.3ms | 3673.1ms |
| default | cli.main.gateway-run-bootstrap | 1265.3ms | 1341.7ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1265.3ms | 1341.7ms |
| default | cli.command.config-ready | 1263.1ms | 1339.6ms |
| skipChannels | cli.main.gateway-run-parse | 6169.2ms | 6260.2ms |
| skipChannels | process.bootstrap | 3486.7ms | 3535.4ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1246.4ms | 1260.7ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1246.4ms | 1260.7ms |
| skipChannels | cli.command.config-ready | 1244.3ms | 1258.8ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 6109.8ms | 6269.9ms |
| preparedRuntimeCatalogStall | process.bootstrap | 3623.6ms | 3673.8ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1275.3ms | 1302.2ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1275.3ms | 1302.2ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1272.9ms | 1299.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 6079.5ms | 6301.7ms |
| preparedRuntimeScaleOne | process.bootstrap | 3628.3ms | 3802.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1321.3ms | 1409.9ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1321.3ms | 1409.9ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1319.1ms | 1407.7ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 6323.7ms | 6328.8ms |
| preparedRuntimeScaleMany | process.bootstrap | 3645.1ms | 3653.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1322.3ms | 1397.2ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1322.3ms | 1397.2ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1320.3ms | 1395.2ms |
| oneInternalHook | cli.main.gateway-run-parse | 6565.1ms | 6598.0ms |
| oneInternalHook | process.bootstrap | 3627.9ms | 3645.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1344.1ms | 1364.0ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1344.1ms | 1364.0ms |
| oneInternalHook | cli.command.config-ready | 1342.0ms | 1361.8ms |
| allInternalHooks | cli.main.gateway-run-parse | 6698.6ms | 6765.5ms |
| allInternalHooks | process.bootstrap | 3669.5ms | 3677.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1302.1ms | 1313.9ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1302.1ms | 1313.9ms |
| allInternalHooks | cli.command.config-ready | 1300.0ms | 1311.5ms |
| fiftyPlugins | cli.main.gateway-run-parse | 6498.1ms | 6526.3ms |
| fiftyPlugins | process.bootstrap | 3586.1ms | 3660.9ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1318.7ms | 1335.1ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1318.7ms | 1335.1ms |
| fiftyPlugins | cli.command.config-ready | 1316.6ms | 1333.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 5805.2ms | 5839.9ms |
| fiftyStartupLazyPlugins | process.bootstrap | 3506.2ms | 3619.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1313.4ms | 1325.6ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1313.4ms | 1325.6ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1311.4ms | 1323.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 16121.0ms | 0.248 | 1814.4MB | 1797.3MB | -17.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 15847.0ms | 0.252 | 1807.8MB | 1791.9MB | -15.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 15718.0ms | 0.382 | 1792.2MB | 1788.4MB | -3.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 882.8ms | 1078.6ms | 68.0MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 813.5ms | 856.4ms | 67.8MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 998.2ms | 999.0ms | 67.8MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 40 | 42 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 486.0ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | n/a | n/a | n/a | n/a | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.9ms | 6.3ms | n/a | n/a | n/a | n/a | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.5ms | 0.5ms | n/a | n/a | n/a | n/a | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.4ms | 0.4ms | n/a | n/a | n/a | n/a | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | n/a | n/a | n/a | n/a | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.2ms | 0.2ms | n/a | n/a | n/a | n/a | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | n/a | n/a | n/a | n/a | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | n/a | n/a | n/a | n/a | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.4ms | n/a | n/a | n/a | n/a | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | n/a | n/a | n/a | n/a | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | n/a | n/a | n/a | n/a | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 2.3ms | 2.8ms | n/a | n/a | n/a | n/a | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

