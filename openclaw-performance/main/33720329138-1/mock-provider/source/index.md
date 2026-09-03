# OpenClaw Source Performance

Generated: 2026-09-03T05:53:38.529Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4161.8ms | 4306.3ms | 4160.9ms | 3818.5ms | 4077.3ms | 121.9ms | 597.2MB | 1.201 |
| skipChannels | gateway, skip channels | 3671.1ms | 3722.2ms | 3185.4ms | 3420.0ms | 3146.5ms | 116.6ms | 608.4MB | 1.093 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3074.2ms | 3197.3ms | 2897.5ms | 2996.7ms | 2862.8ms | 88.5ms | 536.9MB | 1.000 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3507.7ms | 3562.0ms | 3148.9ms | 3250.9ms | 3111.6ms | 101.8ms | 543.5MB | 1.158 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4044.4ms | 4044.6ms | 3451.6ms | 3552.8ms | 3410.5ms | 97.4ms | 623.7MB | 0.991 |
| oneInternalHook | gateway, one configured internal hook | 3375.2ms | 3568.9ms | 2946.8ms | 3156.0ms | 2915.4ms | 94.7ms | 606.0MB | 1.121 |
| allInternalHooks | gateway, all internal hooks | 3941.0ms | 4198.1ms | 3279.1ms | 3494.4ms | 3233.5ms | 107.5ms | 641.6MB | 1.135 |
| fiftyPlugins | gateway, 50 manifest plugins | 3865.6ms | 4040.1ms | 3545.3ms | 3684.9ms | 3500.7ms | 104.0ms | 591.4MB | 1.074 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4099.5ms | 4263.3ms | 3855.1ms | 3945.8ms | 3805.1ms | 117.0ms | 552.8MB | 1.173 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 507.7MB | 597.2MB | +89.4MB (+17.6%) | +93.8MB (+33.1%) | stable |
| gateway boot | skipChannels | 492.4MB | 608.4MB | +116.0MB (+23.6%) | +83.9MB (+38.5%) | watch |
| gateway boot | preparedRuntimeCatalogStall | 505.1MB | 536.9MB | +31.8MB (+6.3%) | -13.4MB (-4.9%) | stable |
| gateway boot | preparedRuntimeScaleOne | 488.2MB | 543.5MB | +55.3MB (+11.3%) | +32.4MB (+13.8%) | stable |
| gateway boot | preparedRuntimeScaleMany | 516.9MB | 623.7MB | +106.8MB (+20.7%) | +56.8MB (+21.8%) | watch |
| gateway boot | oneInternalHook | 531.6MB | 606.0MB | +74.5MB (+14.0%) | +83.5MB (+38.2%) | stable |
| gateway boot | allInternalHooks | 499.7MB | 641.6MB | +141.9MB (+28.4%) | +86.6MB (+40.3%) | watch |
| gateway boot | fiftyPlugins | 515.7MB | 591.4MB | +75.8MB (+14.7%) | +80.0MB (+33.6%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 511.1MB | 552.8MB | +41.7MB (+8.1%) | +45.9MB (+19.3%) | stable |
| cli | gatewayHealthJsonWarmState | 184.1MB | 183.7MB | -0.4MB (-0.2%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 182.9MB | 183.8MB | +1.0MB (+0.5%) | n/a | stable |
| cli | configGetGatewayPort | 183.0MB | 182.5MB | -0.5MB (-0.3%) | n/a | stable |
| mock hello | gateway RSS delta avg | 82.0MB | 37.5MB | -44.6MB (-54.3%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.4MB | 0.0MB | ok |
| all 151 bundled plugins | 860.4MB | 814.0MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| codex | 665.6MB | 619.2MB | ok |
| migrate-hermes | 603.6MB | 557.3MB | ok |
| clickclack | 602.4MB | 556.0MB | ok |
| workboard | 595.0MB | 548.6MB | ok |
| active-memory | 589.6MB | 543.3MB | ok |
| copilot | 586.3MB | 540.0MB | ok |
| llm-task | 585.5MB | 539.1MB | ok |
| canvas | 576.8MB | 530.4MB | ok |
| deepinfra | 488.7MB | 442.4MB | ok |
| opencode | 430.9MB | 384.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2932.9ms | 2999.7ms |
| default | cli.main.gateway-run-bootstrap | 1993.0ms | 2092.7ms |
| default | cli.bootstrap.legacy-state-migrations | 1193.1ms | 1271.7ms |
| default | runtime.post-attach | 449.0ms | 460.4ms |
| default | cli.main.gateway-run-select-environment | 428.0ms | 484.9ms |
| skipChannels | process.bootstrap | 2491.6ms | 2548.1ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1687.4ms | 1757.6ms |
| skipChannels | cli.bootstrap.legacy-state-migrations | 1023.4ms | 1053.6ms |
| skipChannels | cli.main.gateway-run-select-environment | 366.5ms | 399.0ms |
| skipChannels | plugins.runtime-post-bind | 151.0ms | 170.9ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2298.2ms | 2398.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1620.8ms | 1710.3ms |
| preparedRuntimeCatalogStall | cli.bootstrap.legacy-state-migrations | 921.0ms | 969.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 322.3ms | 328.7ms |
| preparedRuntimeCatalogStall | state.ownership | 100.2ms | 111.7ms |
| preparedRuntimeScaleOne | process.bootstrap | 2468.1ms | 2500.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1696.8ms | 1785.9ms |
| preparedRuntimeScaleOne | cli.bootstrap.legacy-state-migrations | 925.9ms | 995.8ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 378.3ms | 378.7ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 125.3ms | 128.8ms |
| preparedRuntimeScaleMany | process.bootstrap | 2798.5ms | 2801.4ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 2026.0ms | 2029.5ms |
| preparedRuntimeScaleMany | cli.bootstrap.legacy-state-migrations | 1012.1ms | 1053.3ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 409.5ms | 412.7ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 242.8ms | 246.6ms |
| oneInternalHook | process.bootstrap | 2346.9ms | 2421.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1599.5ms | 1658.6ms |
| oneInternalHook | cli.bootstrap.legacy-state-migrations | 967.7ms | 977.3ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 363.2ms | 364.3ms |
| oneInternalHook | plugins.runtime-post-bind | 124.8ms | 127.2ms |
| allInternalHooks | process.bootstrap | 2451.4ms | 2732.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1674.1ms | 1857.1ms |
| allInternalHooks | cli.bootstrap.legacy-state-migrations | 970.7ms | 1120.1ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 391.2ms | 433.7ms |
| allInternalHooks | post-ready.gateway-data.plugins | 175.9ms | 212.7ms |
| fiftyPlugins | process.bootstrap | 2863.5ms | 2998.7ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2027.5ms | 2106.4ms |
| fiftyPlugins | cli.bootstrap.legacy-state-migrations | 1092.8ms | 1128.7ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 423.2ms | 446.7ms |
| fiftyPlugins | state.ownership | 123.1ms | 128.5ms |
| fiftyStartupLazyPlugins | process.bootstrap | 3089.2ms | 3212.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2179.2ms | 2356.7ms |
| fiftyStartupLazyPlugins | cli.bootstrap.legacy-state-migrations | 1216.8ms | 1227.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 413.1ms | 462.6ms |
| fiftyStartupLazyPlugins | state.ownership | 128.0ms | 134.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 7717.0ms | 0.130 | 598.9MB | 626.7MB | 27.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 7736.0ms | 0.129 | 586.6MB | 643.1MB | 56.5MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 7561.0ms | 0.132 | 620.7MB | 648.8MB | 28.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 717.2ms | 737.3ms | 183.7MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 683.9ms | 756.0ms | 183.8MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1240.1ms | 1250.4ms | 182.5MB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 15 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 239.0ms |
| baseline | v2 | smoke | 3.53.3 | 15 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 278.7ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.1ms | -63.3% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.7ms | 1.8ms | 1000 | 20 | 2.2ms | -17.3% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.5ms | -6.1% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.4ms | -15.3% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -26.2% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -13.9% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -16.9% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -19.4% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | -20.1% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -40.7% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.3ms | -28.1% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.2ms | 0.3ms | 256 | 20 | 0.5ms | -43.4% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

