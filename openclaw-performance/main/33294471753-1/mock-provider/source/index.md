# OpenClaw Source Performance

Generated: 2026-08-30T05:25:48.658Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 2178.2ms | 2215.8ms | 2178.0ms | 1984.2ms | 2138.6ms | 80.9ms | 539.5MB | 0.919 |
| skipChannels | gateway, skip channels | 3178.6ms | 3189.7ms | 1902.6ms | 2096.1ms | 1872.9ms | 82.4ms | 719.0MB | 1.260 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 2069.7ms | 2070.7ms | 1864.6ms | 1964.0ms | 1833.6ms | 80.0ms | 524.4MB | 0.967 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3279.7ms | 3308.6ms | 1954.0ms | 2054.3ms | 1919.2ms | 86.3ms | 662.8MB | 1.227 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 3678.9ms | 3721.4ms | 3063.0ms | 3155.0ms | 3028.5ms | 87.1ms | 609.4MB | 1.088 |
| oneInternalHook | gateway, one configured internal hook | 3168.5ms | 3255.9ms | 1889.6ms | 2088.2ms | 1860.2ms | 83.9ms | 689.5MB | 1.273 |
| allInternalHooks | gateway, all internal hooks | 3273.0ms | 3303.7ms | 1902.6ms | 2113.8ms | 1873.2ms | 82.4ms | 723.3MB | 1.253 |
| fiftyPlugins | gateway, 50 manifest plugins | 3145.0ms | 3192.7ms | 1936.0ms | 2075.0ms | 1903.1ms | 82.3ms | 678.5MB | 1.288 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 2144.3ms | 2157.6ms | 1928.6ms | 2027.1ms | 1895.2ms | 84.7ms | 518.7MB | 0.942 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 504.1MB | 539.5MB | +35.4MB (+7.0%) | +27.1MB (+9.6%) | stable |
| gateway boot | skipChannels | 684.6MB | 719.0MB | +34.4MB (+5.0%) | +39.5MB (+16.2%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 478.6MB | 524.4MB | +45.8MB (+9.6%) | +5.0MB (+2.1%) | stable |
| gateway boot | preparedRuntimeScaleOne | 662.1MB | 662.8MB | +0.6MB (+0.1%) | +12.7MB (+5.2%) | stable |
| gateway boot | preparedRuntimeScaleMany | 604.1MB | 609.4MB | +5.3MB (+0.9%) | +0.9MB (+0.3%) | stable |
| gateway boot | oneInternalHook | 682.7MB | 689.5MB | +6.8MB (+1.0%) | +38.7MB (+15.9%) | stable |
| gateway boot | allInternalHooks | 693.5MB | 723.3MB | +29.8MB (+4.3%) | +39.7MB (+16.3%) | stable |
| gateway boot | fiftyPlugins | 664.7MB | 678.5MB | +13.9MB (+2.1%) | +5.1MB (+2.1%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 496.0MB | 518.7MB | +22.7MB (+4.6%) | +43.1MB (+17.6%) | stable |
| cli | gatewayHealthJsonWarmState | 195.2MB | 195.0MB | -0.2MB (-0.1%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 195.1MB | 195.0MB | -0.1MB (-0.0%) | n/a | stable |
| cli | configGetGatewayPort | 195.1MB | 194.6MB | -0.6MB (-0.3%) | n/a | stable |
| mock hello | gateway RSS delta avg | 93.3MB | 105.9MB | +12.5MB (+13.4%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 150 bundled plugins | 828.3MB | 782.1MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 616.3MB | 570.1MB | ok |
| migrate-hermes | 599.7MB | 553.5MB | ok |
| codex | 598.7MB | 552.4MB | ok |
| active-memory | 596.5MB | 550.2MB | ok |
| memory-lancedb | 596.0MB | 549.7MB | ok |
| beam | 595.5MB | 549.3MB | ok |
| clickclack | 594.0MB | 547.8MB | ok |
| llm-task | 590.5MB | 544.3MB | ok |
| github-copilot | 590.4MB | 544.2MB | ok |
| copilot | 583.6MB | 537.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap | 456.5ms | 469.4ms |
| default | cli.main.gateway-run-select-environment | 316.4ms | 335.0ms |
| default | runtime.post-attach | 293.8ms | 305.2ms |
| default | plugins.runtime-post-bind | 110.1ms | 126.6ms |
| default | gateway.server-start-import | 107.4ms | 113.5ms |
| skipChannels | cli.main.gateway-run-bootstrap | 448.1ms | 449.6ms |
| skipChannels | cli.main.gateway-run-select-environment | 324.8ms | 342.1ms |
| skipChannels | post-ready.gateway-data.plugins | 199.6ms | 202.1ms |
| skipChannels | plugins.runtime-post-bind | 112.9ms | 116.7ms |
| skipChannels | gateway.server-start-import | 109.9ms | 118.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 423.4ms | 437.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 302.3ms | 317.4ms |
| preparedRuntimeCatalogStall | gateway.server-start-import | 109.4ms | 118.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 88.9ms | 97.4ms |
| preparedRuntimeCatalogStall | cli.bootstrap.config-snapshot | 79.8ms | 80.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 458.4ms | 459.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 330.4ms | 331.7ms |
| preparedRuntimeScaleOne | post-ready.gateway-data.plugins | 185.8ms | 198.9ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 137.1ms | 139.6ms |
| preparedRuntimeScaleOne | sidecars.model-runtime-build.workspaceFactsMs | 124.8ms | 127.0ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1520.9ms | 1557.1ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 876.8ms | 925.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 377.8ms | 383.7ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 261.4ms | 264.4ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 240.0ms | 240.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 443.4ms | 467.8ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 327.2ms | 333.8ms |
| oneInternalHook | post-ready.gateway-data.plugins | 187.6ms | 190.6ms |
| oneInternalHook | gateway.server-start-import | 111.3ms | 118.0ms |
| oneInternalHook | plugins.runtime-post-bind | 109.5ms | 110.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 444.0ms | 466.4ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 327.0ms | 330.8ms |
| allInternalHooks | post-ready.gateway-data.plugins | 177.2ms | 193.2ms |
| allInternalHooks | gateway.server-start-import | 117.4ms | 122.3ms |
| allInternalHooks | plugins.runtime-post-bind | 115.9ms | 125.5ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 469.3ms | 475.0ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 328.1ms | 331.2ms |
| fiftyPlugins | post-ready.gateway-data.plugins | 139.7ms | 182.3ms |
| fiftyPlugins | gateway.server-start-import | 112.9ms | 125.7ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 96.3ms | 98.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 465.1ms | 476.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 337.7ms | 338.6ms |
| fiftyStartupLazyPlugins | gateway.server-start-import | 110.1ms | 119.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 96.2ms | 96.4ms |
| fiftyStartupLazyPlugins | cli.bootstrap.config-snapshot | 95.7ms | 96.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9336.0ms | 0.107 | 935.3MB | 1039.7MB | 104.3MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9434.0ms | 0.106 | 934.6MB | 1040.4MB | 105.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9347.0ms | 0.107 | 929.1MB | 1036.5MB | 107.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 920.9ms | 939.7ms | 195.0MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 953.5ms | 959.2ms | 195.0MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1335.2ms | 1350.4ms | 194.6MB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 15 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 215.0ms |
| baseline | v2 | smoke | 3.53.3 | 13 | 18 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 220.6ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -6.3% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 2.0ms | 2.0ms | 1000 | 20 | 2.0ms | +1.1% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.5ms | 250 | 20 | 0.5ms | -6.9% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | +4.8% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +7.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -0.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +1.0% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +1.0% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +2.3% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | 0.0% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | -5.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | -4.5% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

