# OpenClaw Source Performance

Generated: 2026-10-07T05:37:42.904Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6229.6ms | 6362.0ms | 5460.0ms | 5718.8ms | 6180.3ms | 243.6ms | 880.7MB | 1.124 |
| skipChannels | gateway, skip channels | 6511.2ms | 6905.0ms | 5962.6ms | 6171.6ms | 6502.1ms | 286.2ms | 1096.0MB | 1.103 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 6391.7ms | 6458.6ms | 5930.7ms | 6139.6ms | 6379.8ms | 302.8ms | 846.3MB | 1.095 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 6601.9ms | 6682.3ms | 6023.9ms | 6260.4ms | 6590.7ms | 299.8ms | 848.3MB | 1.073 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 6358.5ms | 6910.6ms | 5668.1ms | 5882.4ms | 6339.5ms | 286.7ms | 872.0MB | 1.101 |
| oneInternalHook | gateway, one configured internal hook | 6161.6ms | 7527.1ms | 5521.1ms | 5735.1ms | 6151.4ms | 254.9ms | 1069.5MB | 1.136 |
| allInternalHooks | gateway, all internal hooks | 6877.0ms | 6897.0ms | 6201.0ms | 6405.7ms | 6859.7ms | 283.5ms | 1094.3MB | 1.018 |
| fiftyPlugins | gateway, 50 manifest plugins | 6332.6ms | 6777.3ms | 5581.7ms | 5834.8ms | 6308.0ms | 240.9ms | 873.9MB | 1.033 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7232.0ms | 7629.5ms | 6730.9ms | 6967.0ms | 7218.4ms | 331.9ms | 846.4MB | 1.106 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 882.5MB | 880.7MB | -1.9MB (-0.2%) | -0.3MB (-0.1%) | stable |
| gateway boot | skipChannels | 1078.6MB | 1096.0MB | +17.4MB (+1.6%) | +12.8MB (+5.9%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 841.1MB | 846.3MB | +5.2MB (+0.6%) | -0.2MB (-0.1%) | stable |
| gateway boot | preparedRuntimeScaleOne | 828.1MB | 848.3MB | +20.2MB (+2.4%) | +2.3MB (+1.0%) | stable |
| gateway boot | preparedRuntimeScaleMany | 850.4MB | 872.0MB | +21.5MB (+2.5%) | -13.3MB (-5.6%) | stable |
| gateway boot | oneInternalHook | 1081.7MB | 1069.5MB | -12.1MB (-1.1%) | -6.1MB (-2.6%) | stable |
| gateway boot | allInternalHooks | 1083.4MB | 1094.3MB | +10.9MB (+1.0%) | +11.2MB (+5.2%) | stable |
| gateway boot | fiftyPlugins | 876.7MB | 873.9MB | -2.8MB (-0.3%) | -0.2MB (-0.1%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 841.1MB | 846.4MB | +5.3MB (+0.6%) | +0.2MB (+0.1%) | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 162 bundled plugins | 581.2MB | 535.0MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 380.4MB | 334.2MB | ok |
| workboard | 375.7MB | 329.4MB | ok |
| agentsapi | 330.9MB | 284.7MB | ok |
| discord | 328.4MB | 282.1MB | ok |
| policy | 328.3MB | 282.0MB | ok |
| canvas | 321.8MB | 275.5MB | ok |
| voice-call | 314.8MB | 268.6MB | ok |
| clickclack | 311.5MB | 265.2MB | ok |
| deepinfra | 311.3MB | 265.1MB | ok |
| zoom-meetings | 302.6MB | 256.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 3731.7ms | 3931.7ms |
| default | cli.main.gateway-run-bootstrap | 2683.6ms | 2824.6ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 2683.6ms | 2824.6ms |
| default | cli.command.config-ready | 2682.0ms | 2823.1ms |
| default | process.bootstrap.cli.command.config-ready | 2682.0ms | 2823.1ms |
| skipChannels | process.bootstrap | 4023.3ms | 4302.8ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2817.3ms | 2958.0ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 2817.3ms | 2958.0ms |
| skipChannels | cli.command.config-ready | 2815.8ms | 2956.7ms |
| skipChannels | process.bootstrap.cli.command.config-ready | 2815.8ms | 2956.7ms |
| preparedRuntimeCatalogStall | process.bootstrap | 4125.2ms | 4237.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 2910.9ms | 3018.0ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 2910.9ms | 3018.0ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 2909.2ms | 3015.9ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.command.config-ready | 2909.2ms | 3015.9ms |
| preparedRuntimeScaleOne | process.bootstrap | 4155.0ms | 4208.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 2908.2ms | 3031.7ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 2908.2ms | 3031.7ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 2906.9ms | 3030.1ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.command.config-ready | 2906.9ms | 3030.1ms |
| preparedRuntimeScaleMany | process.bootstrap | 3906.5ms | 4336.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 2749.3ms | 3067.7ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 2749.3ms | 3067.7ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 2747.7ms | 3065.6ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.command.config-ready | 2747.7ms | 3065.6ms |
| oneInternalHook | process.bootstrap | 3696.8ms | 4570.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2562.3ms | 3119.4ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 2562.3ms | 3119.4ms |
| oneInternalHook | cli.command.config-ready | 2561.0ms | 3115.2ms |
| oneInternalHook | process.bootstrap.cli.command.config-ready | 2561.0ms | 3115.2ms |
| allInternalHooks | process.bootstrap | 4153.9ms | 4205.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2955.6ms | 2996.4ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 2955.6ms | 2996.4ms |
| allInternalHooks | cli.command.config-ready | 2954.1ms | 2994.9ms |
| allInternalHooks | process.bootstrap.cli.command.config-ready | 2954.1ms | 2994.9ms |
| fiftyPlugins | process.bootstrap | 3730.0ms | 4262.7ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2676.1ms | 3072.9ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 2676.1ms | 3072.9ms |
| fiftyPlugins | cli.command.config-ready | 2674.6ms | 3071.4ms |
| fiftyPlugins | process.bootstrap.cli.command.config-ready | 2674.6ms | 3071.4ms |
| fiftyStartupLazyPlugins | process.bootstrap | 4769.4ms | 5030.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 3439.3ms | 3546.8ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 3439.3ms | 3546.8ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 3437.4ms | 3544.5ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.command.config-ready | 3437.4ms | 3544.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13803.0ms | 0.507 | 1557.4MB | 2114.9MB | 557.5MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 13989.0ms | 0.500 | 1639.0MB | 2235.0MB | 596.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 13262.0ms | 0.452 | 1559.2MB | 2160.1MB | 601.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 542.1ms | 693.7ms | 73.7MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 515.5ms | 517.5ms | 73.3MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 847.7ms | 852.2ms | 73.6MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 20 | 24 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 317.5ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | n/a | n/a | n/a | n/a | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.6ms | 1.6ms | n/a | n/a | n/a | n/a | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | n/a | n/a | n/a | n/a | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | n/a | n/a | n/a | n/a | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | n/a | n/a | n/a | n/a | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | n/a | n/a | n/a | n/a | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | n/a | n/a | n/a | n/a | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | n/a | n/a | n/a | n/a | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | n/a | n/a | n/a | n/a | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | n/a | n/a | n/a | n/a | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | n/a | n/a | n/a | n/a | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.8ms | 3.2ms | n/a | n/a | n/a | n/a | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

