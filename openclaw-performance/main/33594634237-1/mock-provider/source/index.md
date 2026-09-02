# OpenClaw Source Performance

Generated: 2026-09-02T05:32:52.826Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 2444.7ms | 2518.2ms | 2444.3ms | 2217.0ms | 2395.5ms | 99.1ms | 507.7MB | 1.191 |
| skipChannels | gateway, skip channels | 2433.2ms | 2516.0ms | 2032.0ms | 2228.5ms | 1994.3ms | 97.7ms | 492.4MB | 0.824 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 2186.7ms | 2219.1ms | 2012.6ms | 2107.7ms | 1973.5ms | 95.0ms | 505.1MB | 0.919 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 2406.8ms | 2465.5ms | 2046.7ms | 2153.5ms | 2012.2ms | 98.9ms | 488.2MB | 0.845 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 3034.2ms | 3271.1ms | 2468.0ms | 2553.9ms | 2417.9ms | 104.0ms | 516.9MB | 1.056 |
| oneInternalHook | gateway, one configured internal hook | 2457.3ms | 2877.3ms | 2006.1ms | 2228.0ms | 1968.2ms | 104.0ms | 531.6MB | 1.043 |
| allInternalHooks | gateway, all internal hooks | 2451.4ms | 2703.5ms | 1990.0ms | 2219.3ms | 1954.9ms | 100.9ms | 499.7MB | 1.110 |
| fiftyPlugins | gateway, 50 manifest plugins | 2750.1ms | 2933.1ms | 2385.1ms | 2535.9ms | 2342.6ms | 108.4ms | 515.7MB | 1.109 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 2701.1ms | 2918.4ms | 2461.9ms | 2567.1ms | 2422.8ms | 116.9ms | 511.1MB | 1.154 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 506.0MB | 507.7MB | +1.7MB (+0.3%) | +49.0MB (+20.9%) | stable |
| gateway boot | skipChannels | 700.2MB | 492.4MB | -207.8MB (-29.7%) | -25.1MB (-10.3%) | improved |
| gateway boot | preparedRuntimeCatalogStall | 626.4MB | 505.1MB | -121.3MB (-19.4%) | +29.8MB (+12.1%) | improved |
| gateway boot | preparedRuntimeScaleOne | 667.2MB | 488.2MB | -179.0MB (-26.8%) | -9.4MB (-3.9%) | improved |
| gateway boot | preparedRuntimeScaleMany | 591.5MB | 516.9MB | -74.6MB (-12.6%) | -28.3MB (-9.8%) | improved |
| gateway boot | oneInternalHook | 694.0MB | 531.6MB | -162.4MB (-23.4%) | -25.1MB (-10.3%) | improved |
| gateway boot | allInternalHooks | 697.0MB | 499.7MB | -197.3MB (-28.3%) | -28.3MB (-11.6%) | improved |
| gateway boot | fiftyPlugins | 672.7MB | 515.7MB | -157.0MB (-23.3%) | -9.4MB (-3.8%) | improved |
| gateway boot | fiftyStartupLazyPlugins | 626.8MB | 511.1MB | -115.7MB (-18.5%) | -9.6MB (-3.9%) | improved |
| cli | gatewayHealthJsonWarmState | 216.1MB | 184.1MB | -32.0MB (-14.8%) | n/a | improved |
| cli | gatewayHealthJsonFreshState | 215.4MB | 182.9MB | -32.5MB (-15.1%) | n/a | improved |
| cli | configGetGatewayPort | 215.6MB | 183.0MB | -32.6MB (-15.1%) | n/a | improved |
| mock hello | gateway RSS delta avg | 104.5MB | 82.0MB | -22.4MB (-21.5%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 151 bundled plugins | 957.4MB | 911.2MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| codex | 665.3MB | 619.1MB | ok |
| llm-task | 600.2MB | 554.0MB | ok |
| clickclack | 596.4MB | 550.2MB | ok |
| workboard | 593.8MB | 547.6MB | ok |
| migrate-hermes | 591.4MB | 545.1MB | ok |
| active-memory | 589.3MB | 543.1MB | ok |
| canvas | 585.2MB | 538.9MB | ok |
| copilot | 583.7MB | 537.5MB | ok |
| opencode | 427.7MB | 381.4MB | ok |
| google | 426.1MB | 379.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 1403.6ms | 1408.2ms |
| default | cli.main.gateway-run-bootstrap | 426.6ms | 434.4ms |
| default | cli.main.gateway-run-select-environment | 398.6ms | 405.0ms |
| default | runtime.post-attach | 337.3ms | 345.9ms |
| default | state.ownership | 136.3ms | 138.3ms |
| skipChannels | process.bootstrap | 1343.4ms | 1397.7ms |
| skipChannels | cli.main.gateway-run-bootstrap | 442.5ms | 456.5ms |
| skipChannels | cli.main.gateway-run-select-environment | 359.1ms | 371.9ms |
| skipChannels | state.ownership | 137.8ms | 141.4ms |
| skipChannels | gateway.server-start-import | 130.1ms | 134.8ms |
| preparedRuntimeCatalogStall | process.bootstrap | 1339.5ms | 1341.9ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 418.8ms | 430.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 358.0ms | 367.2ms |
| preparedRuntimeCatalogStall | gateway.server-start-import | 129.4ms | 146.1ms |
| preparedRuntimeCatalogStall | plugins.bootstrap-imports | 107.5ms | 109.1ms |
| preparedRuntimeScaleOne | process.bootstrap | 1380.9ms | 1397.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 453.3ms | 469.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 358.0ms | 358.9ms |
| preparedRuntimeScaleOne | gateway.server-start-import | 129.2ms | 132.8ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 126.8ms | 138.4ms |
| preparedRuntimeScaleMany | process.bootstrap | 1707.6ms | 1741.9ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 624.0ms | 632.8ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 419.9ms | 425.5ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 245.3ms | 262.0ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 220.5ms | 228.4ms |
| oneInternalHook | process.bootstrap | 1339.2ms | 1389.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 415.6ms | 435.3ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 378.7ms | 383.4ms |
| oneInternalHook | post-ready.gateway-data.plugins | 140.1ms | 140.1ms |
| oneInternalHook | state.ownership | 135.7ms | 138.2ms |
| allInternalHooks | process.bootstrap | 1331.2ms | 1483.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 409.4ms | 495.7ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 363.0ms | 383.1ms |
| allInternalHooks | plugins.runtime-post-bind | 133.0ms | 139.7ms |
| allInternalHooks | gateway.server-start-import | 128.6ms | 129.6ms |
| fiftyPlugins | process.bootstrap | 1630.5ms | 1681.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 550.0ms | 599.0ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 413.9ms | 424.9ms |
| fiftyPlugins | gateway.server-start-import | 150.2ms | 153.6ms |
| fiftyPlugins | state.ownership | 126.8ms | 147.6ms |
| fiftyStartupLazyPlugins | process.bootstrap | 1694.7ms | 1818.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 570.3ms | 615.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 457.2ms | 489.8ms |
| fiftyStartupLazyPlugins | gateway.server-start-import | 141.7ms | 156.5ms |
| fiftyStartupLazyPlugins | plugins.bootstrap-imports | 135.9ms | 142.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10791.0ms | 0.093 | 604.2MB | 674.0MB | 69.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10289.0ms | 0.097 | 600.7MB | 691.8MB | 91.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9455.0ms | 0.106 | 589.2MB | 674.3MB | 85.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 1209.2ms | 1367.1ms | 184.1MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 1306.8ms | 1366.3ms | 182.9MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1576.1ms | 1577.7ms | 183.0MB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 15 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 278.7ms |
| baseline | v2 | smoke | 3.53.3 | 15 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 282.0ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.1ms | 13 | 20 | 0.0ms | +200.0% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.8ms | 2.2ms | 1000 | 20 | 2.1ms | +0.5% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.5ms | 250 | 20 | 0.6ms | -20.9% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.4ms | 696 | 20 | 0.5ms | -16.8% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -7.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.2ms | -12.2% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -16.2% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -28.3% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.4ms | -17.3% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +42.1% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.3ms | 256 | 20 | 0.3ms | +13.6% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.3ms | 0.5ms | 256 | 20 | 0.3ms | +42.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

