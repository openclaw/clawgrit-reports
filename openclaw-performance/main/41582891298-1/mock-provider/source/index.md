# OpenClaw Source Performance

Generated: 2026-11-03T05:26:32.577Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4272.2ms | 4281.7ms | 3105.1ms | 3707.4ms | 4257.1ms | 430.6ms | 1335.3MB | 1.405 |
| skipChannels | gateway, skip channels | 4261.9ms | 4339.9ms | 3080.5ms | 3763.5ms | 4250.0ms | 431.3ms | 1306.2MB | 1.416 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4025.2ms | 4050.3ms | 3104.4ms | 3624.7ms | 4018.3ms | 430.3ms | 1267.4MB | 1.243 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4122.7ms | 4161.6ms | 3097.2ms | 3615.2ms | 4121.1ms | 433.8ms | 1273.2MB | 1.215 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4431.5ms | 4464.2ms | 3167.5ms | 3743.7ms | 4413.4ms | 432.1ms | 1315.4MB | 1.366 |
| oneInternalHook | gateway, one configured internal hook | 4323.8ms | 4349.7ms | 3138.6ms | 3805.1ms | 4308.2ms | 437.3ms | 1295.4MB | 1.390 |
| allInternalHooks | gateway, all internal hooks | 4332.4ms | 4334.8ms | 3120.7ms | 3779.7ms | 4328.6ms | 437.4ms | 1271.6MB | 1.390 |
| fiftyPlugins | gateway, 50 manifest plugins | 4336.5ms | 4337.2ms | 3133.7ms | 3899.3ms | 4325.0ms | 432.5ms | 1312.5MB | 1.389 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4060.9ms | 4073.0ms | 3123.8ms | 3627.3ms | 4043.2ms | 431.1ms | 1283.5MB | 1.236 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1312.8MB | 1335.3MB | +22.5MB (+1.7%) | +13.8MB (+4.3%) | stable |
| gateway boot | skipChannels | 1316.3MB | 1306.2MB | -10.1MB (-0.8%) | +4.4MB (+2.1%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1281.8MB | 1267.4MB | -14.4MB (-1.1%) | +4.7MB (+2.2%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1265.0MB | 1273.2MB | +8.2MB (+0.7%) | +4.6MB (+2.2%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1300.1MB | 1315.4MB | +15.3MB (+1.2%) | +2.1MB (+0.8%) | stable |
| gateway boot | oneInternalHook | 1301.5MB | 1295.4MB | -6.1MB (-0.5%) | +4.5MB (+2.1%) | stable |
| gateway boot | allInternalHooks | 1291.5MB | 1271.6MB | -19.9MB (-1.5%) | +4.7MB (+2.2%) | stable |
| gateway boot | fiftyPlugins | 1310.7MB | 1312.5MB | +1.7MB (+0.1%) | +4.4MB (+2.1%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1282.4MB | 1283.5MB | +1.1MB (+0.1%) | +4.6MB (+2.2%) | stable |
| cli | gatewayHealthJsonWarmState | 67.5MiB | 67.6MiB | +0.1MiB (+0.2%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 67.4MiB | 67.7MiB | +0.3MiB (+0.4%) | n/a | stable |
| cli | configGetGatewayPort | 67.2MiB | 67.4MiB | +0.2MiB (+0.3%) | n/a | stable |
| mock hello | gateway RSS delta avg | 6.6MB | -153.5MB | -160.1MB (-2414.4%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.5MB | 0.0MB | ok |
| all 178 bundled plugins | 582.6MB | 538.1MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 404.0MB | 359.5MB | ok |
| knowledge | 392.3MB | 347.8MB | ok |
| active-memory | 387.4MB | 342.9MB | ok |
| workboard | 379.2MB | 334.7MB | ok |
| agentsapi | 341.7MB | 297.2MB | ok |
| policy | 340.1MB | 295.6MB | ok |
| team-reports | 330.2MB | 285.7MB | ok |
| clickclack | 324.3MB | 279.8MB | ok |
| admin-http-rpc | 321.3MB | 276.9MB | ok |
| copilot | 318.2MB | 273.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 4100.0ms | 4104.4ms |
| default | process.bootstrap | 1986.0ms | 1986.9ms |
| default | runtime.post-attach | 767.2ms | 767.3ms |
| default | cli.main.gateway-run-bootstrap | 631.8ms | 632.0ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 631.8ms | 632.0ms |
| skipChannels | cli.main.gateway-run-parse | 3841.1ms | 3882.5ms |
| skipChannels | process.bootstrap | 1981.4ms | 2030.5ms |
| skipChannels | cli.main.gateway-run-bootstrap | 631.6ms | 638.8ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 631.6ms | 638.8ms |
| skipChannels | cli.command.config-ready | 630.5ms | 637.7ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 3607.8ms | 3629.9ms |
| preparedRuntimeCatalogStall | process.bootstrap | 1982.7ms | 1986.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 625.2ms | 628.1ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 625.2ms | 628.1ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 624.2ms | 627.1ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 3702.5ms | 3747.4ms |
| preparedRuntimeScaleOne | process.bootstrap | 1992.5ms | 1994.1ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 623.8ms | 626.0ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 623.8ms | 626.0ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 622.8ms | 625.0ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 3991.7ms | 4026.6ms |
| preparedRuntimeScaleMany | process.bootstrap | 2032.8ms | 2046.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 656.2ms | 666.3ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 656.2ms | 666.3ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 655.1ms | 665.2ms |
| oneInternalHook | cli.main.gateway-run-parse | 3883.5ms | 3925.6ms |
| oneInternalHook | process.bootstrap | 2004.3ms | 2036.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 635.8ms | 644.8ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 635.8ms | 644.8ms |
| oneInternalHook | cli.command.config-ready | 634.7ms | 643.7ms |
| allInternalHooks | cli.main.gateway-run-parse | 3900.6ms | 3915.5ms |
| allInternalHooks | process.bootstrap | 2002.9ms | 2006.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 636.3ms | 637.4ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 636.3ms | 637.4ms |
| allInternalHooks | cli.command.config-ready | 635.3ms | 636.4ms |
| fiftyPlugins | cli.main.gateway-run-parse | 3944.6ms | 3945.6ms |
| fiftyPlugins | process.bootstrap | 2006.3ms | 2009.3ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 645.4ms | 647.4ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 645.4ms | 647.4ms |
| fiftyPlugins | cli.command.config-ready | 644.4ms | 646.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 3633.0ms | 3662.8ms |
| fiftyStartupLazyPlugins | process.bootstrap | 1999.8ms | 2013.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 651.4ms | 656.1ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 651.4ms | 656.1ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 650.3ms | 655.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10291.0ms | 0.292 | 2238.3MB | 2078.1MB | -160.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10408.0ms | 0.288 | 2268.6MB | 2084.5MB | -184.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10165.0ms | 0.295 | 2235.9MB | 2119.7MB | -116.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 601.8ms | 603.4ms | 67.6MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 574.9ms | 653.0ms | 67.7MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 638.0ms | 646.1ms | 67.4MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 39 | 40 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 253.8ms |
| baseline | v2 | smoke | 3.53.4 | 39 | 39 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 251.1ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +5.6% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.4ms | 1.4ms | 1000 | 20 | 1.4ms | -2.3% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.4ms | +0.8% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.4ms | 696 | 20 | 0.3ms | +26.2% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -6.9% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +1.6% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | 0.0% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +1.0% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | -1.4% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +9.5% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.1ms | -2.1% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.6ms | 2.1ms | 256 | 20 | 2.0ms | +6.1% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

