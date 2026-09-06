# OpenClaw Source Performance

Generated: 2026-09-06T05:29:46.291Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 2946.5ms | 2949.9ms | 2946.2ms | 2703.2ms | 2885.4ms | 90.2ms | 610.2MB | 1.026 |
| skipChannels | gateway, skip channels | 3013.4ms | 3030.2ms | 2632.5ms | 2806.0ms | 2594.0ms | 88.2ms | 614.0MB | 1.011 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 2872.3ms | 2897.9ms | 2669.6ms | 2763.4ms | 2632.2ms | 90.4ms | 539.5MB | 1.045 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3037.8ms | 3041.6ms | 2686.2ms | 2782.7ms | 2649.6ms | 91.0ms | 591.7MB | 0.998 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 3593.8ms | 3663.8ms | 2924.0ms | 3020.7ms | 2887.8ms | 91.4ms | 655.8MB | 1.114 |
| oneInternalHook | gateway, one configured internal hook | 3013.1ms | 3078.5ms | 2629.1ms | 2812.3ms | 2592.0ms | 89.8ms | 607.8MB | 0.998 |
| allInternalHooks | gateway, all internal hooks | 3045.6ms | 3054.4ms | 2647.0ms | 2831.4ms | 2611.1ms | 90.7ms | 608.3MB | 0.997 |
| fiftyPlugins | gateway, 50 manifest plugins | 3050.1ms | 3062.3ms | 2763.7ms | 2898.6ms | 2726.1ms | 89.0ms | 599.9MB | 0.997 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 2969.7ms | 2988.7ms | 2759.8ms | 2853.8ms | 2723.3ms | 90.7ms | 600.0MB | 1.013 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 622.7MB | 610.2MB | -12.5MB (-2.0%) | +11.5MB (+3.1%) | stable |
| gateway boot | skipChannels | 625.0MB | 614.0MB | -11.0MB (-1.8%) | -8.1MB (-2.4%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 587.6MB | 539.5MB | -48.1MB (-8.2%) | -47.3MB (-14.7%) | stable |
| gateway boot | preparedRuntimeScaleOne | 592.2MB | 591.7MB | -0.4MB (-0.1%) | +8.3MB (+2.6%) | stable |
| gateway boot | preparedRuntimeScaleMany | 615.4MB | 655.8MB | +40.4MB (+6.6%) | -6.2MB (-1.8%) | stable |
| gateway boot | oneInternalHook | 610.4MB | 607.8MB | -2.6MB (-0.4%) | +16.9MB (+5.5%) | stable |
| gateway boot | allInternalHooks | 623.4MB | 608.3MB | -15.1MB (-2.4%) | -7.1MB (-2.1%) | stable |
| gateway boot | fiftyPlugins | 621.9MB | 599.9MB | -22.0MB (-3.5%) | -16.3MB (-4.7%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 622.4MB | 600.0MB | -22.4MB (-3.6%) | -24.6MB (-7.0%) | stable |
| cli | gatewayHealthJsonWarmState | 186.2MB | 180.4MB | -5.8MB (-3.1%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 186.4MB | 179.1MB | -7.2MB (-3.9%) | n/a | stable |
| cli | configGetGatewayPort | 186.8MB | 178.9MB | -7.9MB (-4.2%) | n/a | stable |
| mock hello | gateway RSS delta avg | 157.4MB | 142.2MB | -15.1MB (-9.6%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 149 bundled plugins | 931.8MB | 885.6MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| codex | 667.4MB | 621.2MB | ok |
| llm-task | 602.8MB | 556.6MB | ok |
| clickclack | 600.3MB | 554.1MB | ok |
| active-memory | 595.3MB | 549.1MB | ok |
| migrate-hermes | 594.8MB | 548.6MB | ok |
| workboard | 594.4MB | 548.2MB | ok |
| copilot | 589.4MB | 543.2MB | ok |
| canvas | 588.3MB | 542.1MB | ok |
| voice-call | 442.0MB | 395.7MB | ok |
| discord | 434.8MB | 388.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2022.7ms | 2071.6ms |
| default | cli.main.gateway-run-bootstrap | 1354.4ms | 1360.0ms |
| default | cli.bootstrap.legacy-state-migrations | 743.9ms | 761.7ms |
| default | cli.main.gateway-run-select-environment | 324.0ms | 348.9ms |
| default | runtime.post-attach | 298.1ms | 306.1ms |
| skipChannels | process.bootstrap | 2026.1ms | 2027.4ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1341.3ms | 1363.4ms |
| skipChannels | cli.bootstrap.legacy-state-migrations | 739.6ms | 741.5ms |
| skipChannels | cli.main.gateway-run-select-environment | 320.2ms | 330.8ms |
| skipChannels | plugins.runtime-post-bind | 100.0ms | 102.2ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2058.7ms | 2066.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1395.3ms | 1413.2ms |
| preparedRuntimeCatalogStall | cli.bootstrap.legacy-state-migrations | 737.2ms | 737.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 320.1ms | 321.8ms |
| preparedRuntimeCatalogStall | gateway.server-start-import | 79.7ms | 82.0ms |
| preparedRuntimeScaleOne | process.bootstrap | 2074.9ms | 2092.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1430.5ms | 1438.6ms |
| preparedRuntimeScaleOne | cli.bootstrap.legacy-state-migrations | 744.4ms | 759.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 313.2ms | 320.1ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 122.3ms | 123.0ms |
| preparedRuntimeScaleMany | process.bootstrap | 2311.3ms | 2313.8ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1625.2ms | 1632.7ms |
| preparedRuntimeScaleMany | cli.bootstrap.legacy-state-migrations | 751.2ms | 759.4ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 353.7ms | 366.5ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 236.1ms | 236.6ms |
| oneInternalHook | process.bootstrap | 2031.5ms | 2086.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1351.3ms | 1397.6ms |
| oneInternalHook | cli.bootstrap.legacy-state-migrations | 751.5ms | 765.6ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 336.9ms | 339.8ms |
| oneInternalHook | plugins.runtime-post-bind | 98.9ms | 98.9ms |
| allInternalHooks | process.bootstrap | 2028.6ms | 2045.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1362.5ms | 1369.2ms |
| allInternalHooks | cli.bootstrap.legacy-state-migrations | 741.7ms | 750.0ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 321.4ms | 327.5ms |
| allInternalHooks | plugins.runtime-post-bind | 101.1ms | 103.8ms |
| fiftyPlugins | process.bootstrap | 2151.4ms | 2183.5ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1480.7ms | 1500.9ms |
| fiftyPlugins | cli.bootstrap.legacy-state-migrations | 739.8ms | 767.5ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 325.0ms | 335.9ms |
| fiftyPlugins | gateway.server-start-import | 86.8ms | 86.8ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2148.7ms | 2149.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1481.0ms | 1482.7ms |
| fiftyStartupLazyPlugins | cli.bootstrap.legacy-state-migrations | 753.2ms | 758.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 328.8ms | 333.1ms |
| fiftyStartupLazyPlugins | cli.bootstrap.config-snapshot | 85.3ms | 89.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 7504.0ms | 0.133 | 646.0MB | 766.5MB | 120.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 7515.0ms | 0.133 | 646.3MB | 798.6MB | 152.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 7521.0ms | 0.133 | 624.2MB | 778.2MB | 154.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 697.8ms | 702.4ms | 180.4MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 696.7ms | 724.1ms | 179.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1155.1ms | 1163.5ms | 178.9MB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 16 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 207.6ms |
| baseline | v2 | smoke | 3.53.3 | 15 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 208.9ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +6.7% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.6ms | 1.6ms | 1000 | 20 | 1.6ms | -2.5% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.5ms | 250 | 20 | 0.4ms | +7.4% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | -9.1% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +1.0% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | 0.0% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -2.9% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -1.0% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +4.0% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -5.6% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | -18.3% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | -2.5% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

