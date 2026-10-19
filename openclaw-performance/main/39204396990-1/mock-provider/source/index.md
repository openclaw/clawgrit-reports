# OpenClaw Source Performance

Generated: 2026-10-19T05:35:04.137Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4315.3ms | 4372.7ms | 3107.0ms | 3799.0ms | 4229.8ms | 248.1ms | 1311.1MB | 1.393 |
| skipChannels | gateway, skip channels | 4243.9ms | 4695.7ms | 3071.4ms | 3792.5ms | 4199.0ms | 254.1ms | 1512.2MB | 1.491 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4391.5ms | 4604.3ms | 3266.7ms | 3990.6ms | 4376.8ms | 278.6ms | 1525.9MB | 1.416 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4607.8ms | 4670.0ms | 3318.3ms | 4074.2ms | 4588.8ms | 268.1ms | 1509.8MB | 1.318 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4586.7ms | 4671.4ms | 3196.4ms | 3939.1ms | 4561.0ms | 259.0ms | 1566.7MB | 1.386 |
| oneInternalHook | gateway, one configured internal hook | 4314.6ms | 5564.4ms | 3089.3ms | 3799.7ms | 4271.7ms | 269.4ms | 1542.9MB | 1.438 |
| allInternalHooks | gateway, all internal hooks | 4277.7ms | 4407.2ms | 3061.7ms | 3792.2ms | 4232.4ms | 242.0ms | 1556.2MB | 1.403 |
| fiftyPlugins | gateway, 50 manifest plugins | 11512.0ms | 11628.3ms | 2986.1ms | 11013.0ms | 11497.5ms | 240.7ms | 4032.3MB | 1.376 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3902.8ms | 3919.8ms | 2954.1ms | 3477.6ms | 3878.4ms | 239.8ms | 1286.2MB | 1.286 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1276.1MB | 1311.1MB | +35.0MB (+2.7%) | +25.9MB (+8.0%) | stable |
| gateway boot | skipChannels | 1497.8MB | 1512.2MB | +14.4MB (+1.0%) | +22.7MB (+9.0%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1612.0MB | 1525.9MB | -86.1MB (-5.3%) | -22.2MB (-8.2%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1514.3MB | 1509.8MB | -4.5MB (-0.3%) | +14.6MB (+6.1%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1551.7MB | 1566.7MB | +15.0MB (+1.0%) | -13.7MB (-5.2%) | stable |
| gateway boot | oneInternalHook | 1496.9MB | 1542.9MB | +45.9MB (+3.1%) | +39.8MB (+17.7%) | stable |
| gateway boot | allInternalHooks | 1493.8MB | 1556.2MB | +62.4MB (+4.2%) | +32.4MB (+13.1%) | stable |
| gateway boot | fiftyPlugins | 4166.8MB | 4032.3MB | -134.5MB (-3.2%) | +21.7MB (+8.5%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1519.3MB | 1286.2MB | -233.1MB (-15.3%) | +30.7MB (+12.5%) | improved |
| cli | gatewayHealthJsonWarmState | 74.0MiB | 73.7MiB | -0.3MiB (-0.4%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 73.9MiB | 73.8MiB | -0.2MiB (-0.2%) | n/a | stable |
| cli | configGetGatewayPort | 73.9MiB | 74.0MiB | +0.1MiB (+0.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | 453.6MB | 447.3MB | -6.3MB (-1.4%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 170 bundled plugins | 558.9MB | 512.7MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 383.7MB | 337.4MB | ok |
| workboard | 381.0MB | 334.8MB | ok |
| agentsapi | 358.3MB | 312.1MB | ok |
| copilot | 338.9MB | 292.7MB | ok |
| muse | 338.8MB | 292.6MB | ok |
| voice-call | 336.6MB | 290.3MB | ok |
| policy | 336.3MB | 290.1MB | ok |
| minimax | 324.4MB | 278.2MB | ok |
| opencode | 324.0MB | 277.8MB | ok |
| deepinfra | 318.7MB | 272.5MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 4426.7ms | 4482.3ms |
| default | process.bootstrap | 1932.1ms | 2001.0ms |
| default | runtime.post-attach | 693.7ms | 693.8ms |
| default | cli.main.gateway-run-bootstrap | 686.4ms | 720.3ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 686.4ms | 720.3ms |
| skipChannels | cli.main.gateway-run-parse | 4977.0ms | 5392.9ms |
| skipChannels | process.bootstrap | 1961.2ms | 2051.5ms |
| skipChannels | cli.main.gateway-run-bootstrap | 703.4ms | 711.7ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 703.4ms | 711.7ms |
| skipChannels | cli.command.config-ready | 702.0ms | 710.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 5088.0ms | 5333.7ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2034.9ms | 2080.8ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 712.2ms | 749.8ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 712.2ms | 749.8ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 710.9ms | 748.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 5361.0ms | 5376.1ms |
| preparedRuntimeScaleOne | process.bootstrap | 2070.7ms | 2077.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 725.1ms | 740.8ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 725.1ms | 740.8ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 724.0ms | 739.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 5699.7ms | 5812.4ms |
| preparedRuntimeScaleMany | process.bootstrap | 1954.1ms | 2077.4ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 700.8ms | 757.0ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 700.8ms | 757.0ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 699.1ms | 755.8ms |
| oneInternalHook | cli.main.gateway-run-parse | 4954.0ms | 6342.7ms |
| oneInternalHook | process.bootstrap | 1980.2ms | 2131.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 671.3ms | 757.1ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 671.3ms | 757.1ms |
| oneInternalHook | cli.command.config-ready | 670.3ms | 755.5ms |
| allInternalHooks | cli.main.gateway-run-parse | 5041.0ms | 5126.7ms |
| allInternalHooks | process.bootstrap | 1914.2ms | 1975.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 683.6ms | 696.5ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 683.6ms | 696.5ms |
| allInternalHooks | cli.command.config-ready | 682.5ms | 695.5ms |
| fiftyPlugins | cli.main.gateway-run-parse | 12333.1ms | 12435.8ms |
| fiftyPlugins | plugins.runtime-post-bind | 7419.7ms | 7498.5ms |
| fiftyPlugins | plugins.gateway-load.loadMs | 7415.0ms | 7494.3ms |
| fiftyPlugins | process.bootstrap | 1867.2ms | 1959.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 692.4ms | 718.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 3980.0ms | 3989.4ms |
| fiftyStartupLazyPlugins | process.bootstrap | 1825.7ms | 1890.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 659.8ms | 702.8ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 659.8ms | 702.8ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 658.5ms | 701.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10500.0ms | 0.762 | 1568.2MB | 2029.0MB | 460.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9839.0ms | 0.813 | 1599.1MB | 2034.3MB | 435.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9973.0ms | 0.802 | 1567.6MB | 2013.6MB | 446.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 560.2ms | 569.6ms | 73.7MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 482.8ms | 483.9ms | 73.8MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 561.5ms | 611.5ms | 74.0MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 28 | 31 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 277.3ms |
| baseline | v2 | smoke | 3.53.3 | 27 | 31 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 273.4ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -15.0% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.4ms | 1.7ms | 1000 | 20 | 1.4ms | +16.0% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.4ms | +0.5% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | -4.0% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -0.9% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -1.6% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -1.9% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -1.0% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | -2.9% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | 0.0% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.1ms | -4.3% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.7ms | 3.5ms | 256 | 20 | 3.1ms | +14.3% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

