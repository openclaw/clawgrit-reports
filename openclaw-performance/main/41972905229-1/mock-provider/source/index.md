# OpenClaw Source Performance

Generated: 2026-11-05T05:28:23.862Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 8404.3ms | 8561.8ms | 5768.7ms | 7284.5ms | 8384.8ms | 813.1ms | 1239.3MB | 1.666 |
| skipChannels | gateway, skip channels | 7549.6ms | 8177.4ms | 5503.2ms | 6625.0ms | 7537.1ms | 743.7ms | 1242.7MB | 1.602 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 5241.8ms | 5979.7ms | 4109.9ms | 4773.4ms | 5233.6ms | 579.6ms | 1250.1MB | 1.526 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 5164.1ms | 5172.7ms | 3849.5ms | 4541.5ms | 5155.8ms | 527.2ms | 1260.4MB | 1.549 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5430.3ms | 5459.8ms | 3856.8ms | 4645.3ms | 5423.9ms | 532.2ms | 1273.8MB | 1.541 |
| oneInternalHook | gateway, one configured internal hook | 5364.7ms | 5488.7ms | 3838.9ms | 4696.2ms | 5360.1ms | 535.8ms | 1268.5MB | 1.493 |
| allInternalHooks | gateway, all internal hooks | 5324.6ms | 5352.9ms | 3771.2ms | 4666.5ms | 5311.4ms | 552.2ms | 1276.6MB | 1.502 |
| fiftyPlugins | gateway, 50 manifest plugins | 4770.5ms | 4807.6ms | 3475.5ms | 4294.9ms | 4762.5ms | 492.6ms | 1254.7MB | 1.476 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4490.9ms | 4569.6ms | 3431.7ms | 4041.3ms | 4482.6ms | 487.6ms | 1281.8MB | 1.532 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1260.5MB | 1239.3MB | -21.3MB (-1.7%) | +1.7MB (+0.5%) | stable |
| gateway boot | skipChannels | 1252.0MB | 1242.7MB | -9.3MB (-0.7%) | +6.6MB (+3.0%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1255.3MB | 1250.1MB | -5.3MB (-0.4%) | +0.6MB (+0.3%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1267.3MB | 1260.4MB | -6.9MB (-0.5%) | +0.5MB (+0.2%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1254.9MB | 1273.8MB | +19.0MB (+1.5%) | +11.4MB (+4.6%) | stable |
| gateway boot | oneInternalHook | 1239.7MB | 1268.5MB | +28.8MB (+2.3%) | +1.5MB (+0.7%) | stable |
| gateway boot | allInternalHooks | 1248.0MB | 1276.6MB | +28.5MB (+2.3%) | +2.0MB (+0.9%) | stable |
| gateway boot | fiftyPlugins | 1255.6MB | 1254.7MB | -0.9MB (-0.1%) | +1.6MB (+0.7%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1246.8MB | 1281.8MB | +35.0MB (+2.8%) | +1.7MB (+0.8%) | stable |
| cli | gatewayHealthJsonWarmState | 67.4MiB | 67.3MiB | -0.1MiB (-0.2%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 67.3MiB | 67.2MiB | -0.1MiB (-0.2%) | n/a | stable |
| cli | configGetGatewayPort | 67.3MiB | 67.6MiB | +0.3MiB (+0.5%) | n/a | stable |
| mock hello | gateway RSS delta avg | -2.5MB | -1.1MB | +1.4MB (-57.0%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.3MB | 0.0MB | ok |
| all 178 bundled plugins | 564.3MB | 520.0MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 399.8MB | 355.5MB | ok |
| knowledge | 384.5MB | 340.2MB | ok |
| active-memory | 383.6MB | 339.3MB | ok |
| workboard | 375.4MB | 331.1MB | ok |
| agentsapi | 340.8MB | 296.5MB | ok |
| policy | 333.7MB | 289.3MB | ok |
| clickclack | 330.9MB | 286.5MB | ok |
| team-reports | 326.3MB | 282.0MB | ok |
| admin-http-rpc | 319.8MB | 275.5MB | ok |
| opencode | 315.0MB | 270.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 8136.1ms | 8272.6ms |
| default | process.bootstrap | 3586.1ms | 3668.8ms |
| default | runtime.post-attach | 1657.1ms | 1766.5ms |
| default | cli.main.gateway-run-bootstrap | 1149.6ms | 1188.2ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1149.6ms | 1188.2ms |
| skipChannels | cli.main.gateway-run-parse | 6789.3ms | 7496.0ms |
| skipChannels | process.bootstrap | 3452.8ms | 3718.2ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1110.4ms | 1315.0ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1110.4ms | 1315.0ms |
| skipChannels | cli.command.config-ready | 1108.7ms | 1313.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 4620.1ms | 5305.9ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2744.7ms | 2923.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 934.8ms | 977.2ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 934.8ms | 977.2ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 933.1ms | 975.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 4618.4ms | 4648.6ms |
| preparedRuntimeScaleOne | process.bootstrap | 2445.0ms | 2559.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 776.0ms | 786.1ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 776.0ms | 786.1ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 774.5ms | 784.7ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 4889.9ms | 4907.1ms |
| preparedRuntimeScaleMany | process.bootstrap | 2457.0ms | 2555.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 795.0ms | 841.9ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 795.0ms | 841.9ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 793.6ms | 840.6ms |
| oneInternalHook | cli.main.gateway-run-parse | 4829.6ms | 4932.0ms |
| oneInternalHook | process.bootstrap | 2500.1ms | 2532.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 830.0ms | 833.8ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 830.0ms | 833.8ms |
| oneInternalHook | cli.command.config-ready | 828.5ms | 832.5ms |
| allInternalHooks | cli.main.gateway-run-parse | 4766.0ms | 4798.7ms |
| allInternalHooks | process.bootstrap | 2454.1ms | 2485.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 795.5ms | 797.2ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 795.5ms | 797.2ms |
| allInternalHooks | cli.command.config-ready | 794.1ms | 796.0ms |
| fiftyPlugins | cli.main.gateway-run-parse | 4304.8ms | 4360.9ms |
| fiftyPlugins | process.bootstrap | 2247.7ms | 2265.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 733.6ms | 736.7ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 733.6ms | 736.7ms |
| fiftyPlugins | cli.command.config-ready | 732.1ms | 735.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 4001.0ms | 4072.8ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2236.0ms | 2247.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 724.3ms | 735.5ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 724.3ms | 735.5ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 723.1ms | 734.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11033.0ms | 0.453 | 2034.2MB | 2084.4MB | 50.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11144.0ms | 0.449 | 2019.5MB | 2135.9MB | 116.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11345.0ms | 0.353 | 2245.2MB | 2075.4MB | -169.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 675.2ms | 676.9ms | 67.3MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 671.8ms | 687.6ms | 67.2MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 751.5ms | 765.9ms | 67.6MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 39 | 40 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 299.7ms |
| baseline | v2 | smoke | 3.53.4 | 39 | 40 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 352.7ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -15.4% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.6ms | 1.7ms | 1000 | 20 | 3.1ms | -42.9% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.5ms | 250 | 20 | 0.8ms | -37.1% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.4ms | 0.4ms | 696 | 20 | 0.5ms | -14.9% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.1ms | +31.1% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.2ms | +1.9% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +0.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -29.7% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.4ms | 675 | 20 | 0.6ms | -36.6% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -7.4% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.2ms | 256 | 20 | 0.2ms | -17.5% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.9ms | 4.4ms | 256 | 20 | 5.6ms | -21.6% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

