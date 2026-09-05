# OpenClaw Source Performance

Generated: 2026-09-05T05:27:07.870Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 2963.1ms | 2965.7ms | 2958.0ms | 2705.1ms | 2911.4ms | 89.0ms | 622.7MB | 1.021 |
| skipChannels | gateway, skip channels | 3133.7ms | 3160.8ms | 2727.9ms | 2915.5ms | 2692.0ms | 90.0ms | 625.0MB | 0.975 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 2938.2ms | 2953.5ms | 2730.6ms | 2830.0ms | 2696.9ms | 87.4ms | 587.6MB | 1.029 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3067.0ms | 3085.4ms | 2720.8ms | 2818.5ms | 2686.7ms | 88.3ms | 592.2MB | 0.995 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 3536.0ms | 3568.7ms | 2997.9ms | 3090.8ms | 2960.3ms | 91.4ms | 615.4MB | 1.149 |
| oneInternalHook | gateway, one configured internal hook | 2998.2ms | 3078.9ms | 2600.7ms | 2781.5ms | 2568.1ms | 89.7ms | 610.4MB | 1.002 |
| allInternalHooks | gateway, all internal hooks | 3026.1ms | 3070.6ms | 2618.8ms | 2799.6ms | 2581.2ms | 87.3ms | 623.4MB | 0.992 |
| fiftyPlugins | gateway, 50 manifest plugins | 3093.6ms | 3115.5ms | 2829.9ms | 2962.0ms | 2794.1ms | 90.3ms | 621.9MB | 0.973 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3054.9ms | 3095.9ms | 2842.8ms | 2939.2ms | 2804.6ms | 90.0ms | 622.4MB | 0.990 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 606.1MB | 622.7MB | +16.6MB (+2.7%) | -12.3MB (-3.3%) | stable |
| gateway boot | skipChannels | 606.9MB | 625.0MB | +18.1MB (+3.0%) | +30.4MB (+10.1%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 540.3MB | 587.6MB | +47.3MB (+8.8%) | +50.4MB (+18.6%) | stable |
| gateway boot | preparedRuntimeScaleOne | 545.1MB | 592.2MB | +47.1MB (+8.6%) | +51.3MB (+19.0%) | stable |
| gateway boot | preparedRuntimeScaleMany | 620.6MB | 615.4MB | -5.2MB (-0.8%) | +18.1MB (+5.6%) | stable |
| gateway boot | oneInternalHook | 654.5MB | 610.4MB | -44.2MB (-6.8%) | -18.1MB (-5.6%) | stable |
| gateway boot | allInternalHooks | 646.0MB | 623.4MB | -22.6MB (-3.5%) | +30.6MB (+10.1%) | stable |
| gateway boot | fiftyPlugins | 556.3MB | 621.9MB | +65.6MB (+11.8%) | +78.5MB (+29.6%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 599.6MB | 622.4MB | +22.8MB (+3.8%) | +41.0MB (+13.2%) | stable |
| cli | gatewayHealthJsonWarmState | 182.7MB | 186.2MB | +3.5MB (+1.9%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 184.2MB | 186.4MB | +2.2MB (+1.2%) | n/a | stable |
| cli | configGetGatewayPort | 182.7MB | 186.8MB | +4.1MB (+2.3%) | n/a | stable |
| mock hello | gateway RSS delta avg | 108.0MB | 157.4MB | +49.3MB (+45.7%) | n/a | watch |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 151 bundled plugins | 911.9MB | 865.7MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| codex | 670.1MB | 623.8MB | ok |
| llm-task | 652.1MB | 605.9MB | ok |
| migrate-hermes | 602.2MB | 555.9MB | ok |
| workboard | 597.6MB | 551.4MB | ok |
| clickclack | 595.9MB | 549.7MB | ok |
| copilot | 593.3MB | 547.0MB | ok |
| canvas | 592.3MB | 546.0MB | ok |
| active-memory | 586.7MB | 540.5MB | ok |
| deepinfra | 490.1MB | 443.9MB | ok |
| voice-call | 442.4MB | 396.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2065.9ms | 2093.2ms |
| default | cli.main.gateway-run-bootstrap | 1380.7ms | 1404.6ms |
| default | cli.bootstrap.legacy-state-migrations | 812.3ms | 813.0ms |
| default | cli.main.gateway-run-select-environment | 320.6ms | 322.3ms |
| default | runtime.post-attach | 315.8ms | 326.6ms |
| skipChannels | process.bootstrap | 2159.2ms | 2175.3ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1459.0ms | 1459.6ms |
| skipChannels | cli.bootstrap.legacy-state-migrations | 838.4ms | 853.6ms |
| skipChannels | cli.main.gateway-run-select-environment | 324.9ms | 331.5ms |
| skipChannels | sidecars.model-runtime | 111.3ms | 114.0ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2159.4ms | 2166.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1488.5ms | 1490.8ms |
| preparedRuntimeCatalogStall | cli.bootstrap.legacy-state-migrations | 818.3ms | 828.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 311.2ms | 325.8ms |
| preparedRuntimeCatalogStall | state.ownership | 101.3ms | 101.3ms |
| preparedRuntimeScaleOne | process.bootstrap | 2155.2ms | 2183.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1481.9ms | 1497.8ms |
| preparedRuntimeScaleOne | cli.bootstrap.legacy-state-migrations | 792.7ms | 811.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 322.2ms | 333.4ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 121.0ms | 121.4ms |
| preparedRuntimeScaleMany | process.bootstrap | 2411.9ms | 2448.0ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1710.0ms | 1726.8ms |
| preparedRuntimeScaleMany | cli.bootstrap.legacy-state-migrations | 825.4ms | 848.7ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 363.4ms | 367.7ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 235.5ms | 236.3ms |
| oneInternalHook | process.bootstrap | 2046.7ms | 2081.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1362.9ms | 1388.1ms |
| oneInternalHook | cli.bootstrap.legacy-state-migrations | 792.0ms | 811.4ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 321.4ms | 325.8ms |
| oneInternalHook | sidecars.model-runtime | 113.7ms | 114.7ms |
| allInternalHooks | process.bootstrap | 2049.7ms | 2058.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1364.5ms | 1387.8ms |
| allInternalHooks | cli.bootstrap.legacy-state-migrations | 785.3ms | 810.4ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 314.9ms | 321.8ms |
| allInternalHooks | sidecars.model-runtime | 107.2ms | 143.9ms |
| fiftyPlugins | process.bootstrap | 2250.5ms | 2252.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1559.5ms | 1564.6ms |
| fiftyPlugins | cli.bootstrap.legacy-state-migrations | 819.7ms | 826.0ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 329.9ms | 332.7ms |
| fiftyPlugins | state.ownership | 107.1ms | 108.7ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2260.3ms | 2272.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1546.7ms | 1576.8ms |
| fiftyStartupLazyPlugins | cli.bootstrap.legacy-state-migrations | 820.8ms | 845.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 329.3ms | 330.1ms |
| fiftyStartupLazyPlugins | state.ownership | 101.8ms | 104.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 7258.0ms | 0.138 | 613.7MB | 780.5MB | 166.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 7254.0ms | 0.138 | 593.6MB | 740.2MB | 146.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 7198.0ms | 0.139 | 605.7MB | 764.4MB | 158.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 711.6ms | 723.1ms | 186.2MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 710.9ms | 715.8ms | 186.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1158.4ms | 1196.5ms | 186.8MB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 15 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 208.9ms |
| baseline | v2 | smoke | 3.53.3 | 15 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 246.7ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -11.8% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.6ms | 1.6ms | 1000 | 20 | 1.8ms | -7.1% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.4ms | -6.3% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.4ms | -12.9% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -6.4% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -5.5% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -2.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -14.3% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | -6.4% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | 0.0% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | -2.7% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.3ms | -12.3% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

