# OpenClaw Source Performance

Generated: 2026-08-31T05:29:27.809Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 2132.2ms | 2169.0ms | 2131.9ms | 1947.8ms | 2090.6ms | 83.4ms | 517.5MB | 0.942 |
| skipChannels | gateway, skip channels | 3419.2ms | 3445.4ms | 1952.1ms | 2156.0ms | 1914.9ms | 86.8ms | 699.6MB | 1.184 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 2141.7ms | 2155.2ms | 1937.3ms | 2033.7ms | 1900.1ms | 87.8ms | 473.4MB | 0.934 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3268.7ms | 3304.3ms | 1904.9ms | 2000.1ms | 1867.3ms | 89.6ms | 660.4MB | 1.246 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 3760.9ms | 3856.5ms | 3173.1ms | 3270.2ms | 3136.0ms | 87.7ms | 601.3MB | 1.296 |
| oneInternalHook | gateway, one configured internal hook | 3369.9ms | 3431.2ms | 1917.6ms | 2136.1ms | 1881.9ms | 87.7ms | 692.1MB | 1.216 |
| allInternalHooks | gateway, all internal hooks | 3223.9ms | 3231.3ms | 1847.9ms | 2052.9ms | 1812.7ms | 83.6ms | 699.2MB | 1.254 |
| fiftyPlugins | gateway, 50 manifest plugins | 3370.2ms | 3441.4ms | 1999.4ms | 2132.2ms | 1959.8ms | 85.3ms | 666.9MB | 1.187 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 2244.9ms | 2268.6ms | 2031.1ms | 2122.7ms | 1988.6ms | 88.9ms | 492.4MB | 0.896 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 539.5MB | 517.5MB | -22.0MB (-4.1%) | -56.0MB (-18.1%) | stable |
| gateway boot | skipChannels | 719.0MB | 699.6MB | -19.3MB (-2.7%) | +3.8MB (+1.3%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 524.4MB | 473.4MB | -51.0MB (-9.7%) | -5.5MB (-2.2%) | stable |
| gateway boot | preparedRuntimeScaleOne | 662.8MB | 660.4MB | -2.4MB (-0.4%) | -11.9MB (-4.7%) | stable |
| gateway boot | preparedRuntimeScaleMany | 609.4MB | 601.3MB | -8.1MB (-1.3%) | -6.5MB (-2.3%) | stable |
| gateway boot | oneInternalHook | 689.5MB | 692.1MB | +2.6MB (+0.4%) | -48.3MB (-17.1%) | stable |
| gateway boot | allInternalHooks | 723.3MB | 699.2MB | -24.1MB (-3.3%) | -30.0MB (-10.6%) | stable |
| gateway boot | fiftyPlugins | 678.5MB | 666.9MB | -11.6MB (-1.7%) | -13.9MB (-5.6%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 518.7MB | 492.4MB | -26.3MB (-5.1%) | -52.5MB (-18.2%) | stable |
| cli | gatewayHealthJsonWarmState | 195.0MB | 212.9MB | +18.0MB (+9.2%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 195.0MB | 214.5MB | +19.5MB (+10.0%) | n/a | stable |
| cli | configGetGatewayPort | 194.6MB | 213.3MB | +18.7MB (+9.6%) | n/a | stable |
| mock hello | gateway RSS delta avg | 105.9MB | 101.1MB | -4.7MB (-4.5%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 150 bundled plugins | 833.9MB | 787.7MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| clickclack | 621.3MB | 575.1MB | ok |
| codex | 599.2MB | 552.9MB | ok |
| workboard | 597.0MB | 550.8MB | ok |
| github-copilot | 597.0MB | 550.8MB | ok |
| active-memory | 592.9MB | 546.6MB | ok |
| migrate-hermes | 590.2MB | 544.0MB | ok |
| llm-task | 587.6MB | 541.4MB | ok |
| copilot | 575.0MB | 528.7MB | ok |
| canvas | 525.1MB | 478.8MB | ok |
| opencode | 437.4MB | 391.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap | 415.7ms | 419.2ms |
| default | cli.main.gateway-run-select-environment | 309.7ms | 312.9ms |
| default | runtime.post-attach | 287.6ms | 290.7ms |
| default | plugins.runtime-post-bind | 119.1ms | 131.5ms |
| default | plugins.gateway-load.loadMs | 116.1ms | 126.6ms |
| skipChannels | cli.main.gateway-run-bootstrap | 428.0ms | 453.7ms |
| skipChannels | cli.main.gateway-run-select-environment | 335.7ms | 355.0ms |
| skipChannels | post-ready.gateway-data.plugins | 145.4ms | 151.8ms |
| skipChannels | gateway.server-start-import | 126.5ms | 132.0ms |
| skipChannels | plugins.runtime-post-bind | 125.2ms | 134.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 433.5ms | 453.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 329.1ms | 338.4ms |
| preparedRuntimeCatalogStall | gateway.server-start-import | 130.2ms | 131.5ms |
| preparedRuntimeCatalogStall | gateway.shutdown-runtime-import | 77.1ms | 78.8ms |
| preparedRuntimeCatalogStall | cli.bootstrap.config-snapshot | 76.8ms | 80.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 449.7ms | 454.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 320.6ms | 325.9ms |
| preparedRuntimeScaleOne | post-ready.gateway-data.plugins | 181.3ms | 189.2ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 128.5ms | 134.7ms |
| preparedRuntimeScaleOne | gateway.server-start-import | 121.8ms | 125.3ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1605.0ms | 1666.0ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 964.4ms | 1033.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 366.4ms | 368.1ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 254.7ms | 256.6ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 232.1ms | 233.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 429.4ms | 435.8ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 328.1ms | 331.7ms |
| oneInternalHook | post-ready.gateway-data.plugins | 144.7ms | 191.8ms |
| oneInternalHook | plugins.runtime-post-bind | 124.1ms | 133.9ms |
| oneInternalHook | plugins.gateway-load.loadMs | 119.9ms | 129.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 419.7ms | 422.5ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 312.9ms | 315.9ms |
| allInternalHooks | post-ready.gateway-data.plugins | 152.1ms | 184.2ms |
| allInternalHooks | plugins.runtime-post-bind | 117.9ms | 121.9ms |
| allInternalHooks | gateway.server-start-import | 117.5ms | 120.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 444.2ms | 461.7ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 336.4ms | 339.4ms |
| fiftyPlugins | post-ready.gateway-data.plugins | 251.0ms | 346.1ms |
| fiftyPlugins | gateway.server-start-import | 129.4ms | 135.5ms |
| fiftyPlugins | cli.bootstrap.config-snapshot | 84.8ms | 88.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 470.5ms | 472.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 335.0ms | 342.2ms |
| fiftyStartupLazyPlugins | gateway.server-start-import | 128.6ms | 129.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 88.4ms | 91.5ms |
| fiftyStartupLazyPlugins | cli.bootstrap.config-snapshot | 87.2ms | 90.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9271.0ms | 0.108 | 858.8MB | 966.5MB | 107.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9549.0ms | 0.105 | 865.8MB | 963.6MB | 97.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9631.0ms | 0.104 | 861.9MB | 959.7MB | 97.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 1037.0ms | 1043.0ms | 212.9MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 1011.8ms | 1037.6ms | 214.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1405.3ms | 1408.6ms | 213.3MB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 15 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 227.2ms |
| baseline | v2 | smoke | 3.53.3 | 15 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 215.0ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +26.7% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.7ms | 2.1ms | 1000 | 20 | 2.0ms | +7.4% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.5ms | 0.6ms | 250 | 20 | 0.5ms | +14.7% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.4ms | 0.4ms | 696 | 20 | 0.3ms | +36.7% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +26.4% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.1ms | +28.1% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +30.4% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +29.4% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +15.7% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +6.3% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | +7.7% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.3ms | 0.3ms | 256 | 20 | 0.2ms | +34.6% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

