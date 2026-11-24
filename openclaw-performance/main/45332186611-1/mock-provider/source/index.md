# OpenClaw Source Performance

Generated: 2026-11-24T05:31:37.276Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6711.9ms | 6831.3ms | 4860.9ms | 6159.5ms | 6737.3ms | 555.8ms | 1138.0MB | 1.317 |
| skipChannels | gateway, skip channels | 6609.9ms | 6612.6ms | 4715.8ms | 6217.7ms | 6597.0ms | 536.7ms | 1107.4MB | 1.212 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 6468.5ms | 6505.4ms | 4746.5ms | 6047.5ms | 6481.9ms | 547.1ms | 1055.8MB | 1.248 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 6479.3ms | 6505.3ms | 4756.2ms | 6098.0ms | 6494.5ms | 539.5ms | 1087.9MB | 1.241 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 6755.1ms | 7160.9ms | 4922.6ms | 6277.4ms | 6770.2ms | 568.2ms | 1121.2MB | 1.333 |
| oneInternalHook | gateway, one configured internal hook | 7119.7ms | 7292.9ms | 5016.5ms | 6594.9ms | 7113.6ms | 596.4ms | 1111.9MB | 1.273 |
| allInternalHooks | gateway, all internal hooks | 6847.3ms | 7484.0ms | 4776.6ms | 6351.9ms | 6863.4ms | 552.7ms | 1136.4MB | 1.336 |
| fiftyPlugins | gateway, 50 manifest plugins | 6797.6ms | 6955.2ms | 4820.3ms | 6404.5ms | 6795.5ms | 558.1ms | 1092.4MB | 1.327 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 6409.4ms | 6451.6ms | 4710.3ms | 5922.4ms | 6425.3ms | 538.0ms | 1085.2MB | 1.284 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1099.9MB | 1138.0MB | +38.1MB (+3.5%) | +0.9MB (+0.3%) | stable |
| gateway boot | skipChannels | 1084.8MB | 1107.4MB | +22.6MB (+2.1%) | +4.8MB (+1.8%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1065.3MB | 1055.8MB | -9.5MB (-0.9%) | +7.3MB (+3.0%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1087.0MB | 1087.9MB | +0.9MB (+0.1%) | -6.5MB (-2.5%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1100.7MB | 1121.2MB | +20.5MB (+1.9%) | +6.9MB (+2.5%) | stable |
| gateway boot | oneInternalHook | 1090.3MB | 1111.9MB | +21.6MB (+2.0%) | +18.4MB (+7.2%) | stable |
| gateway boot | allInternalHooks | 1117.5MB | 1136.4MB | +18.8MB (+1.7%) | +4.4MB (+1.6%) | stable |
| gateway boot | fiftyPlugins | 1094.7MB | 1092.4MB | -2.3MB (-0.2%) | +16.6MB (+6.5%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1092.9MB | 1085.2MB | -7.7MB (-0.7%) | +16.7MB (+6.6%) | stable |
| cli | gatewayHealthJsonWarmState | 67.7MiB | 68.3MiB | +0.5MiB (+0.8%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 68.0MiB | 68.0MiB | -0.0MiB (-0.0%) | n/a | stable |
| cli | configGetGatewayPort | 67.7MiB | 68.0MiB | +0.3MiB (+0.4%) | n/a | stable |
| mock hello | gateway RSS delta avg | 584.6MB | 571.0MB | -13.6MB (-2.3%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 47.0MB | 0.0MB | ok |
| all 185 bundled plugins | 560.0MB | 513.0MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 366.5MB | 319.5MB | ok |
| active-memory | 346.2MB | 299.2MB | ok |
| workboard | 344.9MB | 297.9MB | ok |
| knowledge | 339.3MB | 292.3MB | ok |
| clickclack | 338.9MB | 291.9MB | ok |
| telegram | 338.3MB | 291.2MB | ok |
| agentsapi | 336.2MB | 289.2MB | ok |
| muse | 329.7MB | 282.7MB | ok |
| team-reports | 326.9MB | 279.9MB | ok |
| copilot | 318.3MB | 271.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 7028.8ms | 7081.6ms |
| default | process.bootstrap | 3375.0ms | 3434.1ms |
| default | cli.main.gateway-run-bootstrap | 1217.3ms | 1232.2ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1217.3ms | 1232.2ms |
| default | cli.command.config-ready | 1215.5ms | 1230.2ms |
| skipChannels | cli.main.gateway-run-parse | 6040.6ms | 6066.8ms |
| skipChannels | process.bootstrap | 3260.1ms | 3262.6ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1174.8ms | 1179.4ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1174.8ms | 1179.4ms |
| skipChannels | cli.command.config-ready | 1173.1ms | 1177.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 5882.8ms | 5959.5ms |
| preparedRuntimeCatalogStall | process.bootstrap | 3253.3ms | 3302.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1149.8ms | 1154.3ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1149.8ms | 1154.3ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1148.0ms | 1152.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 5859.9ms | 5930.5ms |
| preparedRuntimeScaleOne | process.bootstrap | 3294.2ms | 3324.5ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1179.8ms | 1185.8ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1179.8ms | 1185.8ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1178.0ms | 1184.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 6175.9ms | 6543.3ms |
| preparedRuntimeScaleMany | process.bootstrap | 3429.4ms | 3588.8ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1252.8ms | 1274.1ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1252.8ms | 1274.1ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1251.1ms | 1270.1ms |
| oneInternalHook | cli.main.gateway-run-parse | 6516.0ms | 6654.3ms |
| oneInternalHook | process.bootstrap | 3477.5ms | 3495.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1236.8ms | 1257.8ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1236.8ms | 1257.8ms |
| oneInternalHook | cli.command.config-ready | 1234.9ms | 1255.7ms |
| allInternalHooks | cli.main.gateway-run-parse | 6308.0ms | 6858.5ms |
| allInternalHooks | process.bootstrap | 3302.6ms | 3583.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1180.6ms | 1270.3ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1180.6ms | 1270.3ms |
| allInternalHooks | cli.command.config-ready | 1179.0ms | 1268.4ms |
| fiftyPlugins | cli.main.gateway-run-parse | 6345.0ms | 6479.8ms |
| fiftyPlugins | process.bootstrap | 3320.3ms | 3433.5ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1212.6ms | 1222.3ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1212.6ms | 1222.3ms |
| fiftyPlugins | cli.command.config-ready | 1210.9ms | 1220.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 5829.3ms | 5868.3ms |
| fiftyStartupLazyPlugins | process.bootstrap | 3277.0ms | 3297.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1175.7ms | 1209.2ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1175.7ms | 1209.2ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1173.9ms | 1207.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 15280.0ms | 0.524 | 1706.0MB | 2287.1MB | 581.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 14972.0ms | 0.468 | 1692.9MB | 2306.2MB | 613.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 15120.0ms | 0.463 | 1711.4MB | 2229.8MB | 518.4MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 838.8ms | 1095.3ms | 68.3MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 754.1ms | 777.9ms | 68.0MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 876.9ms | 927.5ms | 68.0MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 41 | 43 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 481.3ms |
| baseline | v2 | smoke | 3.53.4 | 41 | 43 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 576.5ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -10.3% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.9ms | 1.9ms | 1000 | 20 | 2.3ms | -15.3% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.5ms | 0.5ms | 250 | 20 | 0.7ms | -22.4% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.4ms | 0.4ms | 696 | 20 | 0.5ms | -16.5% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -20.6% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.2ms | -13.7% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -17.6% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -20.1% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.4ms | 0.4ms | 675 | 20 | 0.5ms | -20.0% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -33.3% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.3ms | -26.7% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 2.3ms | 3.2ms | 256 | 20 | 4.4ms | -27.3% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

