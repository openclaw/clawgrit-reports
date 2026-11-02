# OpenClaw Source Performance

Generated: 2026-11-02T05:27:00.768Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4188.7ms | 4203.4ms | 3034.2ms | 3622.4ms | 4171.7ms | 429.7ms | 1312.8MB | 1.432 |
| skipChannels | gateway, skip channels | 4205.3ms | 4205.8ms | 3036.1ms | 3704.7ms | 4190.1ms | 434.6ms | 1316.3MB | 1.429 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3952.6ms | 3983.4ms | 3035.8ms | 3540.6ms | 3935.1ms | 434.1ms | 1281.8MB | 1.269 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4043.3ms | 4054.6ms | 3017.0ms | 3539.8ms | 4029.0ms | 432.5ms | 1265.0MB | 1.239 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4305.0ms | 4337.0ms | 3064.6ms | 3608.9ms | 4291.8ms | 437.5ms | 1300.1MB | 1.400 |
| oneInternalHook | gateway, one configured internal hook | 4189.7ms | 4225.1ms | 3022.7ms | 3678.3ms | 4170.3ms | 431.0ms | 1301.5MB | 1.445 |
| allInternalHooks | gateway, all internal hooks | 4254.5ms | 4261.9ms | 3029.7ms | 3684.9ms | 4240.3ms | 433.4ms | 1291.5MB | 1.429 |
| fiftyPlugins | gateway, 50 manifest plugins | 4219.1ms | 4225.8ms | 3056.5ms | 3790.8ms | 4208.0ms | 434.7ms | 1310.7MB | 1.423 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3972.7ms | 3985.9ms | 3042.9ms | 3554.3ms | 3960.1ms | 433.1ms | 1282.4MB | 1.268 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1328.3MB | 1312.8MB | -15.5MB (-1.2%) | +0.1MB (+0.0%) | stable |
| gateway boot | skipChannels | 1312.4MB | 1316.3MB | +3.9MB (+0.3%) | +0.5MB (+0.2%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1283.6MB | 1281.8MB | -1.8MB (-0.1%) | +2.1MB (+1.0%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1274.3MB | 1265.0MB | -9.3MB (-0.7%) | +0.5MB (+0.2%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1303.4MB | 1300.1MB | -3.2MB (-0.2%) | +0.4MB (+0.2%) | stable |
| gateway boot | oneInternalHook | 1305.2MB | 1301.5MB | -3.7MB (-0.3%) | -45.8MB (-17.7%) | stable |
| gateway boot | allInternalHooks | 1322.9MB | 1291.5MB | -31.4MB (-2.4%) | +0.3MB (+0.1%) | stable |
| gateway boot | fiftyPlugins | 1308.5MB | 1310.7MB | +2.2MB (+0.2%) | +0.4MB (+0.2%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1272.1MB | 1282.4MB | +10.3MB (+0.8%) | +0.3MB (+0.1%) | stable |
| cli | gatewayHealthJsonWarmState | 67.3MiB | 67.5MiB | +0.2MiB (+0.3%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 67.4MiB | 67.4MiB | 0.0MiB (0.0%) | n/a | stable |
| cli | configGetGatewayPort | 67.4MiB | 67.2MiB | -0.2MiB (-0.3%) | n/a | stable |
| mock hello | gateway RSS delta avg | -5.5MB | 6.6MB | +12.1MB (-221.7%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.3MB | 0.0MB | ok |
| all 178 bundled plugins | 570.4MB | 526.1MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 401.6MB | 357.3MB | ok |
| knowledge | 387.1MB | 342.7MB | ok |
| active-memory | 385.9MB | 341.5MB | ok |
| workboard | 374.8MB | 330.5MB | ok |
| agentsapi | 341.7MB | 297.4MB | ok |
| policy | 338.1MB | 293.8MB | ok |
| clickclack | 333.6MB | 289.2MB | ok |
| muse | 330.2MB | 285.8MB | ok |
| team-reports | 326.7MB | 282.3MB | ok |
| admin-http-rpc | 318.8MB | 274.5MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 4006.3ms | 4019.1ms |
| default | process.bootstrap | 1980.0ms | 1989.4ms |
| default | runtime.post-attach | 764.9ms | 766.4ms |
| default | cli.main.gateway-run-bootstrap | 627.2ms | 632.4ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 627.2ms | 632.4ms |
| skipChannels | cli.main.gateway-run-parse | 3771.2ms | 3790.9ms |
| skipChannels | process.bootstrap | 1999.9ms | 2017.3ms |
| skipChannels | cli.main.gateway-run-bootstrap | 647.6ms | 647.6ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 647.6ms | 647.6ms |
| skipChannels | cli.command.config-ready | 646.5ms | 646.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 3533.4ms | 3535.2ms |
| preparedRuntimeCatalogStall | process.bootstrap | 1985.8ms | 2007.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 621.7ms | 632.9ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 621.7ms | 632.9ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 620.7ms | 631.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 3618.1ms | 3626.0ms |
| preparedRuntimeScaleOne | process.bootstrap | 1979.7ms | 1981.1ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 620.3ms | 623.6ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 620.3ms | 623.6ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 619.3ms | 622.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 3857.8ms | 3899.9ms |
| preparedRuntimeScaleMany | process.bootstrap | 2018.9ms | 2038.0ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 649.2ms | 658.3ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 649.2ms | 658.3ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 648.1ms | 657.2ms |
| oneInternalHook | cli.main.gateway-run-parse | 3763.5ms | 3797.9ms |
| oneInternalHook | process.bootstrap | 1980.7ms | 1987.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 626.1ms | 630.8ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 626.1ms | 630.8ms |
| oneInternalHook | cli.command.config-ready | 625.0ms | 629.7ms |
| allInternalHooks | cli.main.gateway-run-parse | 3837.2ms | 3843.6ms |
| allInternalHooks | process.bootstrap | 1989.7ms | 1997.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 627.4ms | 644.7ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 627.4ms | 644.7ms |
| allInternalHooks | cli.command.config-ready | 626.3ms | 643.6ms |
| fiftyPlugins | cli.main.gateway-run-parse | 3824.1ms | 3828.4ms |
| fiftyPlugins | process.bootstrap | 2014.3ms | 2026.9ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 646.6ms | 658.8ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 646.6ms | 658.8ms |
| fiftyPlugins | cli.command.config-ready | 645.5ms | 657.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 3542.7ms | 3559.9ms |
| fiftyStartupLazyPlugins | process.bootstrap | 1996.6ms | 2001.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 637.5ms | 645.4ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 637.5ms | 645.4ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 636.4ms | 644.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9969.0ms | 0.301 | 2094.0MB | 2101.4MB | 7.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9867.0ms | 0.304 | 2100.5MB | 2101.7MB | 1.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9851.0ms | 0.406 | 2101.1MB | 2112.4MB | 11.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 594.6ms | 619.0ms | 67.5MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 567.2ms | 592.7ms | 67.4MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 634.4ms | 648.7ms | 67.2MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 39 | 39 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 251.1ms |
| baseline | v2 | smoke | 3.53.4 | 38 | 39 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 250.2ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | 0.0% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.4ms | 1.4ms | 1000 | 20 | 1.5ms | -1.3% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.4ms | -1.7% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | -3.1% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +8.4% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -3.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +3.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | 0.0% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +2.1% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +5.0% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.1ms | +3.6% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.6ms | 2.0ms | 256 | 20 | 2.0ms | +0.8% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

