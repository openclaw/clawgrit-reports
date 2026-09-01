# OpenClaw Source Performance

Generated: 2026-09-01T05:33:34.406Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4280.4ms | 4586.3ms | 4280.1ms | 3862.5ms | 4158.3ms | 148.5ms | 506.0MB | 1.207 |
| skipChannels | gateway, skip channels | 5140.7ms | 5791.9ms | 3024.5ms | 3263.3ms | 2971.8ms | 123.1ms | 700.2MB | 1.249 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 2957.1ms | 3191.0ms | 2703.9ms | 2806.4ms | 2649.2ms | 124.8ms | 626.4MB | 1.068 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4525.4ms | 5640.1ms | 2521.8ms | 2647.5ms | 2466.2ms | 108.8ms | 667.2MB | 1.326 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5709.0ms | 6011.8ms | 4987.0ms | 5088.8ms | 4942.0ms | 124.1ms | 591.5MB | 1.331 |
| oneInternalHook | gateway, one configured internal hook | 4668.4ms | 4864.1ms | 2474.0ms | 2708.3ms | 2434.3ms | 107.2ms | 694.0MB | 1.285 |
| allInternalHooks | gateway, all internal hooks | 4708.0ms | 5034.4ms | 2565.7ms | 2806.8ms | 2510.7ms | 101.2ms | 697.0MB | 1.288 |
| fiftyPlugins | gateway, 50 manifest plugins | 4287.6ms | 4896.8ms | 2525.6ms | 2668.5ms | 2471.6ms | 116.0ms | 672.7MB | 1.225 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 2678.3ms | 2759.2ms | 2428.8ms | 2528.3ms | 2385.2ms | 104.3ms | 626.8MB | 1.152 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 517.5MB | 506.0MB | -11.4MB (-2.2%) | -18.6MB (-7.3%) | stable |
| gateway boot | skipChannels | 699.6MB | 700.2MB | +0.6MB (+0.1%) | -43.8MB (-15.3%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 473.4MB | 626.4MB | +153.0MB (+32.3%) | +3.5MB (+1.4%) | watch |
| gateway boot | preparedRuntimeScaleOne | 660.4MB | 667.2MB | +6.8MB (+1.0%) | -0.5MB (-0.2%) | stable |
| gateway boot | preparedRuntimeScaleMany | 601.3MB | 591.5MB | -9.8MB (-1.6%) | +7.6MB (+2.7%) | stable |
| gateway boot | oneInternalHook | 692.1MB | 694.0MB | +1.9MB (+0.3%) | +9.4MB (+4.0%) | stable |
| gateway boot | allInternalHooks | 699.2MB | 697.0MB | -2.2MB (-0.3%) | -10.1MB (-4.0%) | stable |
| gateway boot | fiftyPlugins | 666.9MB | 672.7MB | +5.8MB (+0.9%) | +11.0MB (+4.7%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 492.4MB | 626.8MB | +134.4MB (+27.3%) | +11.7MB (+5.0%) | watch |
| cli | gatewayHealthJsonWarmState | 212.9MB | 216.1MB | +3.1MB (+1.5%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 214.5MB | 215.4MB | +0.8MB (+0.4%) | n/a | stable |
| cli | configGetGatewayPort | 213.3MB | 215.6MB | +2.3MB (+1.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | 101.1MB | 104.5MB | +3.3MB (+3.3%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 150 bundled plugins | 866.7MB | 820.5MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 607.1MB | 560.8MB | ok |
| clickclack | 596.6MB | 550.4MB | ok |
| codex | 595.6MB | 549.4MB | ok |
| active-memory | 594.8MB | 548.6MB | ok |
| canvas | 594.2MB | 547.9MB | ok |
| migrate-hermes | 592.4MB | 546.1MB | ok |
| llm-task | 588.6MB | 542.4MB | ok |
| copilot | 550.2MB | 504.0MB | ok |
| opencode | 429.5MB | 383.2MB | ok |
| memory-core | 421.8MB | 375.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap | 860.3ms | 930.8ms |
| default | cli.main.gateway-run-select-environment | 598.0ms | 716.5ms |
| default | runtime.post-attach | 573.1ms | 646.3ms |
| default | gateway.server-start-import | 222.0ms | 231.1ms |
| default | plugins.runtime-post-bind | 218.7ms | 256.9ms |
| skipChannels | cli.main.gateway-run-bootstrap | 744.7ms | 785.1ms |
| skipChannels | cli.main.gateway-run-select-environment | 478.9ms | 553.7ms |
| skipChannels | post-ready.gateway-data.plugins | 280.0ms | 374.8ms |
| skipChannels | plugins.runtime-post-bind | 210.4ms | 217.0ms |
| skipChannels | gateway.server-start-import | 207.6ms | 212.8ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 608.9ms | 628.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 430.4ms | 498.4ms |
| preparedRuntimeCatalogStall | gateway.server-start-import | 167.2ms | 187.1ms |
| preparedRuntimeCatalogStall | cli.bootstrap.config-snapshot | 113.2ms | 118.5ms |
| preparedRuntimeCatalogStall | gateway.shutdown-runtime-import | 111.3ms | 135.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 623.8ms | 628.5ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 410.3ms | 416.7ms |
| preparedRuntimeScaleOne | post-ready.gateway-data.plugins | 213.7ms | 215.2ms |
| preparedRuntimeScaleOne | gateway.server-start-import | 159.1ms | 217.3ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 144.9ms | 147.8ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 2665.5ms | 2912.2ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 1841.1ms | 1971.9ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 486.7ms | 539.2ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 253.9ms | 254.7ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 226.1ms | 227.6ms |
| oneInternalHook | sidecars.internal-hooks | 1212.8ms | 1860.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 531.0ms | 554.0ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 383.7ms | 456.1ms |
| oneInternalHook | plugins.runtime-post-bind | 188.8ms | 237.4ms |
| oneInternalHook | post-ready.gateway-data.plugins | 182.9ms | 218.9ms |
| allInternalHooks | sidecars.internal-hooks | 1615.4ms | 1680.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 599.4ms | 603.4ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 465.3ms | 492.4ms |
| allInternalHooks | post-ready.gateway-data.plugins | 201.5ms | 236.5ms |
| allInternalHooks | plugins.runtime-post-bind | 191.0ms | 198.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 603.2ms | 626.7ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 432.3ms | 446.7ms |
| fiftyPlugins | post-ready.gateway-data.plugins | 185.9ms | 196.9ms |
| fiftyPlugins | gateway.server-start-import | 147.4ms | 212.5ms |
| fiftyPlugins | cli.bootstrap.config-snapshot | 119.1ms | 136.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 546.3ms | 555.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 415.7ms | 486.0ms |
| fiftyStartupLazyPlugins | gateway.server-start-import | 146.8ms | 155.2ms |
| fiftyStartupLazyPlugins | cli.bootstrap.config-snapshot | 102.9ms | 108.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 98.2ms | 103.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13915.0ms | 0.144 | 760.3MB | 863.9MB | 103.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 13927.0ms | 0.072 | 759.9MB | 865.8MB | 105.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12584.0ms | 0.159 | 764.6MB | 868.4MB | 103.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 1747.5ms | 1758.4ms | 216.1MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 2057.7ms | 2191.3ms | 215.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 2587.9ms | 2590.7ms | 215.6MB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 15 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 282.0ms |
| baseline | v2 | smoke | 3.53.3 | 15 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 227.2ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +5.3% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.9ms | 2.1ms | 1000 | 20 | 2.1ms | +0.7% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.6ms | 0.6ms | 250 | 20 | 0.6ms | +8.7% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.5ms | 0.5ms | 696 | 20 | 0.4ms | +11.6% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.1ms | +10.1% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.2ms | +11.0% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +11.3% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.1ms | +41.7% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.4ms | 0.4ms | 675 | 20 | 0.3ms | +33.9% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +11.8% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.3ms | 256 | 20 | 0.2ms | +40.0% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.3ms | 0.3ms | 256 | 20 | 0.3ms | +13.4% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

