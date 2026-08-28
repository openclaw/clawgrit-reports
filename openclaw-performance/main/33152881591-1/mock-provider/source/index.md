# OpenClaw Source Performance

Generated: 2026-08-28T07:56:41.470Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 2755.5ms | 2943.5ms | 2755.1ms | 2526.3ms | 2718.6ms | 84.6ms | 481.9MB | 1.159 |
| skipChannels | gateway, skip channels | 4885.1ms | 6469.6ms | 3304.2ms | 3758.8ms | 3234.8ms | 122.0ms | 662.7MB | 1.272 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4994.3ms | 7319.3ms | 3438.2ms | 3589.5ms | 3379.9ms | 129.9ms | 644.5MB | 1.230 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4485.2ms | 4897.3ms | 2869.0ms | 2990.5ms | 2825.3ms | 115.0ms | 644.4MB | 1.225 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4917.0ms | 5377.2ms | 3565.0ms | 3668.2ms | 3531.5ms | 93.3ms | 575.5MB | 1.220 |
| oneInternalHook | gateway, one configured internal hook | 3706.7ms | 4111.6ms | 2269.0ms | 2514.6ms | 2234.5ms | 89.3ms | 671.5MB | 1.216 |
| allInternalHooks | gateway, all internal hooks | 3954.8ms | 5043.8ms | 2329.8ms | 2581.5ms | 2300.0ms | 88.6ms | 666.3MB | 1.281 |
| fiftyPlugins | gateway, 50 manifest plugins | 4519.8ms | 5116.1ms | 2667.0ms | 2924.3ms | 2625.9ms | 91.9ms | 679.1MB | 1.222 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 2528.0ms | 5683.6ms | 2281.7ms | 2399.4ms | 2246.9ms | 87.9ms | 644.5MB | 1.232 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 487.6MB | 481.9MB | -5.6MB (-1.2%) | -11.5MB (-4.7%) | stable |
| gateway boot | skipChannels | 693.7MB | 662.7MB | -31.1MB (-4.5%) | -44.2MB (-19.0%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 646.7MB | 644.5MB | -2.2MB (-0.3%) | +16.6MB (+7.4%) | stable |
| gateway boot | preparedRuntimeScaleOne | 649.2MB | 644.4MB | -4.8MB (-0.7%) | +39.1MB (+19.4%) | stable |
| gateway boot | preparedRuntimeScaleMany | 631.9MB | 575.5MB | -56.4MB (-8.9%) | -39.7MB (-11.5%) | stable |
| gateway boot | oneInternalHook | 677.0MB | 671.5MB | -5.5MB (-0.8%) | -4.0MB (-1.7%) | stable |
| gateway boot | allInternalHooks | 690.7MB | 666.3MB | -24.4MB (-3.5%) | -47.2MB (-20.5%) | stable |
| gateway boot | fiftyPlugins | 676.8MB | 679.1MB | +2.2MB (+0.3%) | +0.3MB (+0.1%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 472.9MB | 644.5MB | +171.5MB (+36.3%) | +36.6MB (+17.0%) | watch |
| cli | gatewayHealthJsonWarmState | 121.9MB | 194.9MB | +73.1MB (+59.9%) | n/a | watch |
| cli | gatewayHealthJsonFreshState | 122.0MB | 194.7MB | +72.7MB (+59.6%) | n/a | watch |
| cli | configGetGatewayPort | 125.9MB | 195.0MB | +69.1MB (+54.9%) | n/a | watch |
| mock hello | gateway RSS delta avg | 47.6MB | 77.8MB | +30.3MB (+63.6%) | n/a | watch |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.4MB | 0.0MB | ok |
| all 149 bundled plugins | 826.7MB | 780.3MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| opencode | 628.1MB | 581.7MB | ok |
| codex | 599.8MB | 553.4MB | ok |
| beam | 592.9MB | 546.5MB | ok |
| active-memory | 591.7MB | 545.3MB | ok |
| workboard | 589.6MB | 543.3MB | ok |
| memory-lancedb | 589.3MB | 543.0MB | ok |
| migrate-hermes | 583.6MB | 537.3MB | ok |
| llm-task | 580.6MB | 534.2MB | ok |
| xai | 563.5MB | 517.1MB | ok |
| openai | 556.0MB | 509.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap | 663.6ms | 740.1ms |
| default | runtime.post-attach | 380.8ms | 405.0ms |
| default | cli.main.gateway-run-select-environment | 334.1ms | 388.3ms |
| default | plugins.runtime-post-bind | 168.8ms | 187.6ms |
| default | plugins.gateway-load.loadMs | 152.6ms | 171.7ms |
| skipChannels | cli.main.gateway-run-bootstrap | 926.4ms | 1160.4ms |
| skipChannels | plugins.runtime-post-bind | 381.6ms | 405.2ms |
| skipChannels | cli.main.gateway-run-select-environment | 374.0ms | 525.1ms |
| skipChannels | plugins.gateway-load.loadMs | 331.5ms | 359.2ms |
| skipChannels | sidecars.model-runtime | 219.9ms | 254.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 676.1ms | 955.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 561.3ms | 690.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 277.5ms | 315.0ms |
| preparedRuntimeCatalogStall | gateway.server-start-import | 175.6ms | 295.8ms |
| preparedRuntimeCatalogStall | post-ready.gateway-data.plugins | 137.0ms | 272.5ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 619.8ms | 743.2ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 473.4ms | 709.1ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 239.8ms | 399.9ms |
| preparedRuntimeScaleOne | post-ready.gateway-data.plugins | 190.2ms | 195.9ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 142.6ms | 157.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1574.2ms | 1848.4ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 984.3ms | 1151.2ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 706.6ms | 745.0ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 396.1ms | 476.6ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 333.7ms | 348.2ms |
| oneInternalHook | sidecars.internal-hooks | 964.5ms | 1044.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 658.0ms | 738.4ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 332.0ms | 404.3ms |
| oneInternalHook | post-ready.gateway-data.plugins | 169.5ms | 188.4ms |
| oneInternalHook | plugins.runtime-post-bind | 153.8ms | 166.7ms |
| allInternalHooks | sidecars.internal-hooks | 1106.6ms | 1773.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 721.2ms | 763.9ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 346.5ms | 378.6ms |
| allInternalHooks | plugins.runtime-post-bind | 182.6ms | 188.5ms |
| allInternalHooks | post-ready.gateway-data.plugins | 178.2ms | 215.9ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 583.1ms | 658.7ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 397.8ms | 401.4ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 201.7ms | 212.8ms |
| fiftyPlugins | post-ready.gateway-data.plugins | 193.1ms | 225.3ms |
| fiftyPlugins | sidecars.model-runtime | 185.2ms | 230.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 498.6ms | 725.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 391.6ms | 582.9ms |
| fiftyStartupLazyPlugins | post-ready.gateway-data.plugins | 238.9ms | 238.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 185.9ms | 278.0ms |
| fiftyStartupLazyPlugins | gateway.server-start-import | 134.1ms | 179.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 16830.0ms | 0.000 | 931.7MB | 968.7MB | 37.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 15835.0ms | 0.063 | 870.0MB | 973.4MB | 103.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 13314.0ms | 0.075 | 866.7MB | 959.7MB | 93.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 1518.4ms | 1525.1ms | 194.9MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 1250.8ms | 1263.6ms | 194.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1489.4ms | 1833.3ms | 195.0MB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 13 | 17 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 426.9ms |
| baseline | legacy | smoke | n/a | n/a | n/a | 4100 | 1000 | ok | 3.1MB | 0.0MB | 141.4ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | n/a | n/a | n/a | n/a | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 2.3ms | 2.5ms | n/a | n/a | n/a | n/a | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.6ms | 0.6ms | n/a | n/a | n/a | n/a | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.4ms | 0.5ms | n/a | n/a | n/a | n/a | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.2ms | n/a | n/a | n/a | n/a | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.2ms | n/a | n/a | n/a | n/a | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.2ms | n/a | n/a | n/a | n/a | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.2ms | n/a | n/a | n/a | n/a | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.4ms | 0.4ms | n/a | n/a | n/a | n/a | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | n/a | n/a | n/a | n/a | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.3ms | 0.4ms | n/a | n/a | n/a | n/a | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.3ms | 0.4ms | n/a | n/a | n/a | n/a | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

