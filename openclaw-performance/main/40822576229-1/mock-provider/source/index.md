# OpenClaw Source Performance

Generated: 2026-10-29T05:29:34.672Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5198.2ms | 5245.5ms | 3505.3ms | 4587.4ms | 5184.5ms | 474.8ms | 1251.1MB | 1.448 |
| skipChannels | gateway, skip channels | 5891.2ms | 5919.6ms | 3984.8ms | 5203.0ms | 5883.1ms | 537.5ms | 1252.2MB | 1.358 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 5635.4ms | 5745.2ms | 4118.6ms | 5133.4ms | 5602.9ms | 559.9ms | 1240.8MB | 1.425 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 5272.2ms | 5375.4ms | 3756.3ms | 4688.6ms | 5255.3ms | 518.0ms | 1248.1MB | 1.372 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 6478.9ms | 6996.7ms | 4414.4ms | 5709.0ms | 6461.2ms | 570.9ms | 1253.5MB | 1.436 |
| oneInternalHook | gateway, one configured internal hook | 5627.3ms | 5760.3ms | 3866.9ms | 5003.4ms | 5609.7ms | 521.7ms | 1226.6MB | 1.433 |
| allInternalHooks | gateway, all internal hooks | 5500.9ms | 5602.4ms | 3746.5ms | 4873.7ms | 5475.9ms | 523.4ms | 1258.8MB | 1.454 |
| fiftyPlugins | gateway, 50 manifest plugins | 5303.5ms | 5320.9ms | 3637.6ms | 4802.6ms | 5283.7ms | 499.3ms | 1243.0MB | 1.321 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 5033.3ms | 5262.8ms | 3629.5ms | 4540.8ms | 5011.6ms | 509.1ms | 1239.4MB | 1.425 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1479.6MB | 1251.1MB | -228.5MB (-15.4%) | +25.7MB (+8.5%) | improved |
| gateway boot | skipChannels | 1476.9MB | 1252.2MB | -224.6MB (-15.2%) | +23.9MB (+10.4%) | improved |
| gateway boot | preparedRuntimeCatalogStall | 1485.3MB | 1240.8MB | -244.5MB (-16.5%) | +5.4MB (+2.3%) | improved |
| gateway boot | preparedRuntimeScaleOne | 1425.9MB | 1248.1MB | -177.7MB (-12.5%) | +5.7MB (+2.5%) | improved |
| gateway boot | preparedRuntimeScaleMany | 1469.5MB | 1253.5MB | -216.0MB (-14.7%) | +22.4MB (+9.7%) | improved |
| gateway boot | oneInternalHook | 1477.1MB | 1226.6MB | -250.6MB (-17.0%) | +6.9MB (+2.9%) | improved |
| gateway boot | allInternalHooks | 1472.8MB | 1258.8MB | -214.1MB (-14.5%) | +23.2MB (+10.1%) | improved |
| gateway boot | fiftyPlugins | 1389.2MB | 1243.0MB | -146.2MB (-10.5%) | +23.6MB (+10.2%) | improved |
| gateway boot | fiftyStartupLazyPlugins | 1436.0MB | 1239.4MB | -196.6MB (-13.7%) | +6.3MB (+2.7%) | improved |
| cli | gatewayHealthJsonWarmState | 67.8MiB | 67.9MiB | +0.1MiB (+0.2%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 67.6MiB | 67.6MiB | +0.0MiB (+0.0%) | n/a | stable |
| cli | configGetGatewayPort | 67.6MiB | 67.4MiB | -0.2MiB (-0.3%) | n/a | stable |
| mock hello | gateway RSS delta avg | 58.1MB | 32.8MB | -25.3MB (-43.5%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.5MB | 0.0MB | ok |
| all 176 bundled plugins | 574.5MB | 530.0MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 403.5MB | 359.0MB | ok |
| workboard | 374.9MB | 330.4MB | ok |
| knowledge | 368.9MB | 324.4MB | ok |
| active-memory | 366.6MB | 322.1MB | ok |
| agentsapi | 339.0MB | 294.5MB | ok |
| policy | 338.0MB | 293.5MB | ok |
| muse | 335.6MB | 291.1MB | ok |
| team-reports | 326.6MB | 282.1MB | ok |
| clickclack | 316.3MB | 271.8MB | ok |
| copilot | 315.4MB | 270.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 5025.8ms | 5138.0ms |
| default | process.bootstrap | 2241.3ms | 2456.1ms |
| default | runtime.post-attach | 1136.8ms | 1237.8ms |
| default | cli.main.gateway-run-bootstrap | 780.8ms | 884.4ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 780.8ms | 884.4ms |
| skipChannels | cli.main.gateway-run-parse | 5407.4ms | 5420.7ms |
| skipChannels | process.bootstrap | 2591.8ms | 2661.3ms |
| skipChannels | cli.main.gateway-run-bootstrap | 900.8ms | 925.0ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 900.8ms | 925.0ms |
| skipChannels | cli.command.config-ready | 899.3ms | 923.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 5111.1ms | 5240.9ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2701.3ms | 2701.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 900.9ms | 952.9ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 900.9ms | 952.9ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 899.1ms | 951.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 4796.8ms | 4865.6ms |
| preparedRuntimeScaleOne | process.bootstrap | 2475.1ms | 2532.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 834.0ms | 900.5ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 834.0ms | 900.5ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 832.6ms | 899.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 5627.8ms | 6517.6ms |
| preparedRuntimeScaleMany | process.bootstrap | 2696.0ms | 3330.8ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 942.6ms | 1245.4ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 942.6ms | 1245.4ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 940.9ms | 1243.1ms |
| oneInternalHook | cli.main.gateway-run-parse | 5142.9ms | 5241.5ms |
| oneInternalHook | process.bootstrap | 2524.0ms | 2590.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 881.6ms | 894.9ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 881.6ms | 894.9ms |
| oneInternalHook | cli.command.config-ready | 880.1ms | 893.5ms |
| allInternalHooks | cli.main.gateway-run-parse | 5022.2ms | 5108.6ms |
| allInternalHooks | process.bootstrap | 2446.4ms | 2552.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 832.5ms | 860.7ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 832.5ms | 860.7ms |
| allInternalHooks | cli.command.config-ready | 831.2ms | 859.1ms |
| fiftyPlugins | cli.main.gateway-run-parse | 4897.4ms | 4902.0ms |
| fiftyPlugins | process.bootstrap | 2390.6ms | 2391.4ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 845.2ms | 846.3ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 845.2ms | 846.3ms |
| fiftyPlugins | cli.command.config-ready | 843.9ms | 845.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 4535.1ms | 4730.9ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2401.9ms | 2597.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 840.9ms | 937.9ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 840.9ms | 937.9ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 839.7ms | 936.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10905.0ms | 0.367 | 2116.0MB | 2173.7MB | 57.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10852.0ms | 0.369 | 2093.7MB | 2181.1MB | 87.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10811.0ms | 0.370 | 2184.7MB | 2138.0MB | -46.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 705.1ms | 760.7ms | 67.9MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 642.7ms | 718.2ms | 67.6MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 697.3ms | 728.2ms | 67.4MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 36 | 38 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 287.4ms |
| baseline | v2 | smoke | 3.53.4 | 35 | 38 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 273.9ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -5.3% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.5ms | 1.6ms | 1000 | 20 | 1.5ms | +0.8% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.5ms | 250 | 20 | 0.4ms | +8.3% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | -1.4% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -1.7% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -1.5% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +5.4% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +8.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +5.1% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +23.8% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.2ms | 256 | 20 | 0.1ms | +5.6% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.7ms | 2.2ms | 256 | 20 | 2.2ms | -0.6% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

