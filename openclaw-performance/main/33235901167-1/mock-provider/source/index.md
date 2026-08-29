# OpenClaw Source Performance

Generated: 2026-08-29T05:24:47.487Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 2241.9ms | 2261.0ms | 2241.7ms | 2037.9ms | 2203.9ms | 83.5ms | 504.1MB | 0.902 |
| skipChannels | gateway, skip channels | 3352.5ms | 3355.8ms | 1997.7ms | 2177.7ms | 1963.4ms | 85.8ms | 684.6MB | 1.209 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 2124.3ms | 2164.1ms | 1919.3ms | 2020.1ms | 1884.9ms | 85.6ms | 478.6MB | 0.956 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3190.1ms | 3214.5ms | 1903.4ms | 2003.6ms | 1869.3ms | 84.5ms | 662.1MB | 1.264 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 3752.4ms | 3822.5ms | 3114.5ms | 3210.2ms | 3080.6ms | 85.1ms | 604.1MB | 1.067 |
| oneInternalHook | gateway, one configured internal hook | 3611.9ms | 5469.4ms | 2336.3ms | 2525.7ms | 2303.9ms | 123.4ms | 682.7MB | 1.280 |
| allInternalHooks | gateway, all internal hooks | 3264.6ms | 3272.7ms | 1921.0ms | 2115.7ms | 1887.4ms | 83.1ms | 693.5MB | 1.265 |
| fiftyPlugins | gateway, 50 manifest plugins | 3132.3ms | 3185.9ms | 1962.2ms | 2102.9ms | 1927.7ms | 84.5ms | 664.7MB | 1.277 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 2128.1ms | 2143.8ms | 1906.7ms | 2011.0ms | 1874.3ms | 82.9ms | 496.0MB | 0.961 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 481.9MB | 504.1MB | +22.1MB (+4.6%) | +51.6MB (+22.4%) | stable |
| gateway boot | skipChannels | 662.7MB | 684.6MB | +21.9MB (+3.3%) | +55.7MB (+29.6%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 644.5MB | 478.6MB | -165.8MB (-25.7%) | +1.3MB (+0.5%) | improved |
| gateway boot | preparedRuntimeScaleOne | 644.4MB | 662.1MB | +17.7MB (+2.7%) | +2.3MB (+1.0%) | stable |
| gateway boot | preparedRuntimeScaleMany | 575.5MB | 604.1MB | +28.7MB (+5.0%) | -18.9MB (-6.2%) | stable |
| gateway boot | oneInternalHook | 671.5MB | 682.7MB | +11.2MB (+1.7%) | +15.4MB (+6.7%) | stable |
| gateway boot | allInternalHooks | 666.3MB | 693.5MB | +27.2MB (+4.1%) | +60.3MB (+32.9%) | stable |
| gateway boot | fiftyPlugins | 679.1MB | 664.7MB | -14.4MB (-2.1%) | -6.8MB (-2.7%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 644.5MB | 496.0MB | -148.5MB (-23.0%) | -7.2MB (-2.9%) | improved |
| cli | gatewayHealthJsonWarmState | 194.9MB | 195.2MB | +0.2MB (+0.1%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 194.7MB | 195.1MB | +0.4MB (+0.2%) | n/a | stable |
| cli | configGetGatewayPort | 195.0MB | 195.1MB | +0.1MB (+0.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | 77.8MB | 93.3MB | +15.5MB (+19.9%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 150 bundled plugins | 847.5MB | 801.1MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| codex | 605.4MB | 559.1MB | ok |
| workboard | 600.3MB | 554.0MB | ok |
| opencode | 597.3MB | 550.9MB | ok |
| github-copilot | 591.4MB | 545.1MB | ok |
| memory-lancedb | 590.0MB | 543.6MB | ok |
| llm-task | 589.6MB | 543.3MB | ok |
| beam | 587.9MB | 541.5MB | ok |
| xai | 584.5MB | 538.2MB | ok |
| copilot | 569.1MB | 522.8MB | ok |
| active-memory | 558.2MB | 511.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap | 456.1ms | 466.6ms |
| default | cli.main.gateway-run-select-environment | 326.7ms | 331.9ms |
| default | runtime.post-attach | 306.7ms | 311.2ms |
| default | gateway.server-start-import | 123.1ms | 123.7ms |
| default | sidecars.model-runtime | 112.7ms | 116.4ms |
| skipChannels | cli.main.gateway-run-bootstrap | 467.5ms | 485.5ms |
| skipChannels | cli.main.gateway-run-select-environment | 333.2ms | 352.5ms |
| skipChannels | post-ready.gateway-data.plugins | 133.2ms | 133.6ms |
| skipChannels | gateway.server-start-import | 128.5ms | 129.1ms |
| skipChannels | sidecars.model-runtime | 113.5ms | 126.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 442.1ms | 469.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 320.1ms | 323.3ms |
| preparedRuntimeCatalogStall | gateway.server-start-import | 123.4ms | 124.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 91.1ms | 92.1ms |
| preparedRuntimeCatalogStall | cli.bootstrap.config-snapshot | 83.8ms | 88.8ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 448.3ms | 452.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 314.9ms | 321.1ms |
| preparedRuntimeScaleOne | post-ready.gateway-data.plugins | 138.5ms | 183.2ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 138.1ms | 138.2ms |
| preparedRuntimeScaleOne | sidecars.model-runtime-build.workspaceFactsMs | 126.4ms | 126.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1560.9ms | 1600.3ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 941.0ms | 948.9ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 367.4ms | 372.0ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 265.8ms | 266.4ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 241.8ms | 242.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 554.8ms | 854.8ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 531.5ms | 585.5ms |
| oneInternalHook | post-ready.gateway-data.plugins | 198.1ms | 218.3ms |
| oneInternalHook | cli.main.gateway-run-pre-bootstrap | 140.3ms | 151.0ms |
| oneInternalHook | gateway.server-start-import | 125.6ms | 182.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 451.6ms | 456.4ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 325.4ms | 328.6ms |
| allInternalHooks | post-ready.gateway-data.plugins | 137.7ms | 182.1ms |
| allInternalHooks | gateway.server-start-import | 119.9ms | 127.2ms |
| allInternalHooks | sidecars.model-runtime | 112.7ms | 113.9ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 465.6ms | 475.7ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 328.0ms | 330.0ms |
| fiftyPlugins | post-ready.gateway-data.plugins | 159.3ms | 183.2ms |
| fiftyPlugins | gateway.server-start-import | 123.6ms | 129.1ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 96.0ms | 100.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 450.0ms | 466.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 318.6ms | 333.5ms |
| fiftyStartupLazyPlugins | gateway.server-start-import | 118.0ms | 120.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 93.3ms | 95.1ms |
| fiftyStartupLazyPlugins | cli.bootstrap.config-snapshot | 90.5ms | 97.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10065.0ms | 0.000 | 1050.7MB | 1092.1MB | 41.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9521.0ms | 0.105 | 978.0MB | 1110.2MB | 132.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9539.0ms | 0.105 | 1008.9MB | 1115.2MB | 106.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 909.5ms | 911.1ms | 195.2MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 930.7ms | 946.1ms | 195.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1312.4ms | 1325.1ms | 195.1MB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 13 | 18 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 220.6ms |
| baseline | v2 | smoke | 3.53.3 | 13 | 17 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 426.9ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -55.6% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 2.0ms | 2.0ms | 1000 | 20 | 2.5ms | -22.4% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.5ms | 250 | 20 | 0.6ms | -17.1% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.5ms | -41.2% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -37.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -29.9% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -49.2% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -46.6% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.4ms | -37.9% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -42.9% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.4ms | -50.1% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.4ms | -43.3% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

