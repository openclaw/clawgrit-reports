# OpenClaw Source Performance

Generated: 2026-09-04T05:34:06.527Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3154.5ms | 3214.3ms | 3153.7ms | 2901.5ms | 3103.3ms | 94.5ms | 606.1MB | 0.975 |
| skipChannels | gateway, skip channels | 3068.5ms | 3115.2ms | 2636.2ms | 2827.1ms | 2603.4ms | 86.7ms | 606.9MB | 0.986 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3139.4ms | 3197.3ms | 2934.7ms | 3034.0ms | 2898.5ms | 94.4ms | 540.3MB | 0.958 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3436.2ms | 3608.6ms | 3038.4ms | 3140.0ms | 2997.0ms | 96.6ms | 545.1MB | 1.108 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 3969.1ms | 4911.5ms | 3349.8ms | 3444.8ms | 3311.2ms | 101.7ms | 620.6MB | 1.018 |
| oneInternalHook | gateway, one configured internal hook | 3959.2ms | 3972.2ms | 3297.1ms | 3541.6ms | 3240.0ms | 97.6ms | 654.5MB | 1.073 |
| allInternalHooks | gateway, all internal hooks | 3897.4ms | 3957.5ms | 3303.7ms | 3536.1ms | 3257.0ms | 109.1ms | 646.0MB | 1.030 |
| fiftyPlugins | gateway, 50 manifest plugins | 3922.2ms | 3946.6ms | 3578.0ms | 3722.7ms | 3532.3ms | 108.3ms | 556.3MB | 1.081 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3372.5ms | 3372.8ms | 3158.2ms | 3250.8ms | 3117.9ms | 95.4ms | 599.6MB | 1.186 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 597.2MB | 606.1MB | +8.9MB (+1.5%) | +0.2MB (+0.1%) | stable |
| gateway boot | skipChannels | 608.4MB | 606.9MB | -1.5MB (-0.2%) | -0.2MB (-0.1%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 536.9MB | 540.3MB | +3.4MB (+0.6%) | +8.4MB (+3.2%) | stable |
| gateway boot | preparedRuntimeScaleOne | 543.5MB | 545.1MB | +1.5MB (+0.3%) | +3.9MB (+1.5%) | stable |
| gateway boot | preparedRuntimeScaleMany | 623.7MB | 620.6MB | -3.2MB (-0.5%) | +5.0MB (+1.6%) | stable |
| gateway boot | oneInternalHook | 606.0MB | 654.5MB | +48.5MB (+8.0%) | +23.9MB (+7.9%) | stable |
| gateway boot | allInternalHooks | 641.6MB | 646.0MB | +4.4MB (+0.7%) | +0.3MB (+0.1%) | stable |
| gateway boot | fiftyPlugins | 591.4MB | 556.3MB | -35.2MB (-5.9%) | -52.4MB (-16.5%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 552.8MB | 599.6MB | +46.8MB (+8.5%) | +27.0MB (+9.5%) | stable |
| cli | gatewayHealthJsonWarmState | 183.7MB | 182.7MB | -1.0MB (-0.5%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 183.8MB | 184.2MB | +0.4MB (+0.2%) | n/a | stable |
| cli | configGetGatewayPort | 182.5MB | 182.7MB | +0.2MB (+0.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | 37.5MB | 108.0MB | +70.6MB (+188.3%) | n/a | watch |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 151 bundled plugins | 881.2MB | 835.0MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| copilot | 645.8MB | 599.6MB | ok |
| codex | 614.7MB | 568.4MB | ok |
| clickclack | 599.0MB | 552.8MB | ok |
| llm-task | 595.9MB | 549.6MB | ok |
| workboard | 592.7MB | 546.4MB | ok |
| active-memory | 592.4MB | 546.1MB | ok |
| migrate-hermes | 590.9MB | 544.7MB | ok |
| canvas | 582.7MB | 536.5MB | ok |
| openrouter | 437.4MB | 391.1MB | ok |
| discord | 436.2MB | 390.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2184.8ms | 2298.3ms |
| default | cli.main.gateway-run-bootstrap | 1471.6ms | 1549.4ms |
| default | cli.bootstrap.legacy-state-migrations | 851.5ms | 896.0ms |
| default | cli.main.gateway-run-select-environment | 334.4ms | 355.7ms |
| default | runtime.post-attach | 317.6ms | 348.8ms |
| skipChannels | process.bootstrap | 2074.3ms | 2111.5ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1393.4ms | 1420.8ms |
| skipChannels | cli.bootstrap.legacy-state-migrations | 814.3ms | 825.3ms |
| skipChannels | cli.main.gateway-run-select-environment | 316.5ms | 317.8ms |
| skipChannels | sidecars.model-runtime | 124.5ms | 140.6ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2320.7ms | 2351.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1605.3ms | 1621.1ms |
| preparedRuntimeCatalogStall | cli.bootstrap.legacy-state-migrations | 885.9ms | 914.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 340.2ms | 350.2ms |
| preparedRuntimeCatalogStall | state.ownership | 102.9ms | 108.4ms |
| preparedRuntimeScaleOne | process.bootstrap | 2424.5ms | 2582.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1684.5ms | 1822.1ms |
| preparedRuntimeScaleOne | cli.bootstrap.legacy-state-migrations | 921.4ms | 1014.1ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 350.4ms | 353.2ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 128.6ms | 133.9ms |
| preparedRuntimeScaleMany | process.bootstrap | 2717.9ms | 3382.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1926.6ms | 2382.4ms |
| preparedRuntimeScaleMany | cli.bootstrap.legacy-state-migrations | 957.7ms | 1094.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 401.7ms | 514.5ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 277.0ms | 312.3ms |
| oneInternalHook | process.bootstrap | 2523.5ms | 2612.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1713.3ms | 1823.5ms |
| oneInternalHook | cli.bootstrap.legacy-state-migrations | 1028.9ms | 1043.6ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 384.7ms | 386.0ms |
| oneInternalHook | post-ready.gateway-data.plugins | 170.2ms | 186.2ms |
| allInternalHooks | process.bootstrap | 2580.3ms | 2823.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1747.3ms | 1910.5ms |
| allInternalHooks | cli.bootstrap.legacy-state-migrations | 1023.9ms | 1105.3ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 395.7ms | 462.8ms |
| allInternalHooks | post-ready.gateway-data.plugins | 152.3ms | 190.0ms |
| fiftyPlugins | process.bootstrap | 2838.3ms | 2875.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1970.4ms | 2006.2ms |
| fiftyPlugins | cli.bootstrap.legacy-state-migrations | 1035.8ms | 1073.9ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 416.6ms | 425.3ms |
| fiftyPlugins | state.ownership | 116.9ms | 120.9ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2526.9ms | 2531.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1728.4ms | 1767.6ms |
| fiftyStartupLazyPlugins | cli.bootstrap.legacy-state-migrations | 909.9ms | 947.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 360.3ms | 395.5ms |
| fiftyStartupLazyPlugins | state.ownership | 108.2ms | 111.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 7218.0ms | 0.139 | 593.7MB | 691.9MB | 98.3MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 8533.0ms | 0.117 | 579.3MB | 694.1MB | 114.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 7532.0ms | 0.133 | 579.0MB | 690.0MB | 110.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 758.3ms | 767.5ms | 182.7MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 767.2ms | 776.9ms | 184.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1269.3ms | 1399.6ms | 182.7MB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 15 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 246.7ms |
| baseline | v2 | smoke | 3.53.3 | 15 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 239.0ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -22.7% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.7ms | 1.8ms | 1000 | 20 | 1.8ms | -0.6% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.4ms | +0.2% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.4ms | 696 | 20 | 0.3ms | +14.8% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +4.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -2.3% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +3.9% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +10.2% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +7.7% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +12.5% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | +0.9% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.3ms | 0.3ms | 256 | 20 | 0.3ms | +3.9% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

