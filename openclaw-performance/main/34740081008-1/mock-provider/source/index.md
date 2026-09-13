# OpenClaw Source Performance

Generated: 2026-09-13T05:31:16.187Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4294.7ms | 4345.1ms | 4294.5ms | 3572.1ms | 4222.7ms | 89.8ms | 589.9MB | 0.974 |
| skipChannels | gateway, skip channels | 4161.2ms | 4275.9ms | 3342.8ms | 3519.3ms | 3293.3ms | 88.9ms | 610.5MB | 0.968 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3505.2ms | 3539.2ms | 3280.2ms | 3380.0ms | 3232.8ms | 86.0ms | 505.7MB | 0.858 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3905.8ms | 3919.6ms | 3472.3ms | 3569.9ms | 3419.9ms | 90.9ms | 506.9MB | 0.807 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5246.8ms | 5334.5ms | 4254.2ms | 4349.2ms | 4196.4ms | 94.2ms | 574.2MB | 0.957 |
| oneInternalHook | gateway, one configured internal hook | 4580.8ms | 4650.1ms | 3648.6ms | 3847.6ms | 3595.8ms | 96.7ms | 607.5MB | 0.882 |
| allInternalHooks | gateway, all internal hooks | 4306.2ms | 4378.5ms | 3382.4ms | 3569.5ms | 3329.4ms | 92.3ms | 599.4MB | 0.954 |
| fiftyPlugins | gateway, 50 manifest plugins | 4302.9ms | 4338.2ms | 3397.8ms | 3591.1ms | 3347.4ms | 88.2ms | 540.2MB | 0.937 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3639.9ms | 3704.7ms | 3415.4ms | 3498.4ms | 3362.6ms | 94.2ms | 506.8MB | 0.824 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 622.5MB | 589.9MB | -32.6MB (-5.2%) | -40.6MB (-10.8%) | stable |
| gateway boot | skipChannels | 657.4MB | 610.5MB | -46.9MB (-7.1%) | -32.2MB (-11.6%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 553.4MB | 505.7MB | -47.7MB (-8.6%) | -47.9MB (-16.3%) | stable |
| gateway boot | preparedRuntimeScaleOne | 556.4MB | 506.9MB | -49.5MB (-8.9%) | -36.8MB (-13.0%) | stable |
| gateway boot | preparedRuntimeScaleMany | 619.0MB | 574.2MB | -44.8MB (-7.2%) | -51.4MB (-17.1%) | stable |
| gateway boot | oneInternalHook | 639.1MB | 607.5MB | -31.6MB (-4.9%) | -33.1MB (-11.9%) | stable |
| gateway boot | allInternalHooks | 641.3MB | 599.4MB | -41.9MB (-6.5%) | -32.7MB (-11.7%) | stable |
| gateway boot | fiftyPlugins | 584.8MB | 540.2MB | -44.6MB (-7.6%) | -50.8MB (-16.9%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 556.1MB | 506.8MB | -49.3MB (-8.9%) | -51.7MB (-17.2%) | stable |
| cli | gatewayHealthJsonWarmState | 64.2MiB | 63.9MiB | -0.4MiB (-0.5%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 63.7MiB | 63.7MiB | +0.1MiB (+0.1%) | n/a | stable |
| cli | configGetGatewayPort | 64.0MiB | 63.9MiB | -0.1MiB (-0.2%) | n/a | stable |
| mock hello | gateway RSS delta avg | 159.7MB | 292.3MB | +132.6MB (+83.0%) | n/a | watch |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 152 bundled plugins | 592.7MB | 546.4MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 343.6MB | 297.4MB | ok |
| workboard | 341.9MB | 295.7MB | ok |
| migrate-hermes | 341.0MB | 294.8MB | ok |
| llm-task | 334.1MB | 287.8MB | ok |
| clickclack | 324.3MB | 278.1MB | ok |
| discord | 318.4MB | 272.1MB | ok |
| policy | 313.1MB | 266.9MB | ok |
| copilot | 274.8MB | 228.6MB | ok |
| deepinfra | 273.5MB | 227.3MB | ok |
| canvas | 272.3MB | 226.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2676.3ms | 2680.3ms |
| default | cli.main.gateway-run-bootstrap | 1963.6ms | 1974.7ms |
| default | runtime.post-attach | 783.5ms | 833.6ms |
| default | sidecars.model-runtime | 465.7ms | 516.1ms |
| default | sidecars.model-runtime-build.workspaceFactsMs | 444.7ms | 494.2ms |
| skipChannels | process.bootstrap | 2569.0ms | 2619.8ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1863.9ms | 1918.3ms |
| skipChannels | sidecars.model-runtime | 466.0ms | 467.7ms |
| skipChannels | sidecars.model-runtime-build.workspaceFactsMs | 439.3ms | 448.2ms |
| skipChannels | sidecars.model-runtime-build.runtimePluginMs | 432.3ms | 440.8ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2513.1ms | 2534.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1839.2ms | 1848.4ms |
| preparedRuntimeCatalogStall | cli.bootstrap.legacy-state-migrations | 360.5ms | 362.7ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 247.8ms | 248.1ms |
| preparedRuntimeCatalogStall | gateway.shutdown-runtime-import | 122.6ms | 124.6ms |
| preparedRuntimeScaleOne | process.bootstrap | 2651.5ms | 2655.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1947.9ms | 1961.0ms |
| preparedRuntimeScaleOne | cli.bootstrap.legacy-state-migrations | 369.7ms | 379.5ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 250.2ms | 264.0ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 143.9ms | 145.3ms |
| preparedRuntimeScaleMany | process.bootstrap | 3385.8ms | 3445.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 2609.0ms | 2619.2ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 449.8ms | 459.2ms |
| preparedRuntimeScaleMany | cli.bootstrap.legacy-state-migrations | 409.4ms | 420.6ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 331.4ms | 334.8ms |
| oneInternalHook | process.bootstrap | 2806.9ms | 2813.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2053.4ms | 2080.3ms |
| oneInternalHook | sidecars.model-runtime | 485.5ms | 510.3ms |
| oneInternalHook | sidecars.model-runtime-build.workspaceFactsMs | 463.1ms | 488.3ms |
| oneInternalHook | sidecars.model-runtime-build.runtimePluginMs | 455.0ms | 481.1ms |
| allInternalHooks | process.bootstrap | 2604.3ms | 2737.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1914.7ms | 1985.2ms |
| allInternalHooks | sidecars.model-runtime | 433.6ms | 561.2ms |
| allInternalHooks | sidecars.model-runtime-build.workspaceFactsMs | 415.0ms | 534.0ms |
| allInternalHooks | sidecars.model-runtime-build.runtimePluginMs | 408.5ms | 525.2ms |
| fiftyPlugins | process.bootstrap | 2634.7ms | 2654.4ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1944.9ms | 1954.4ms |
| fiftyPlugins | cli.bootstrap.legacy-state-migrations | 366.0ms | 372.8ms |
| fiftyPlugins | sidecars.reply-runtime | 346.8ms | 364.0ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 247.6ms | 253.0ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2651.1ms | 2688.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1940.2ms | 1977.5ms |
| fiftyStartupLazyPlugins | cli.bootstrap.legacy-state-migrations | 368.3ms | 370.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 254.7ms | 255.8ms |
| fiftyStartupLazyPlugins | gateway.shutdown-runtime-import | 120.8ms | 126.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9976.0ms | 0.100 | 765.2MB | 1050.6MB | 285.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9842.0ms | 0.102 | 747.3MB | 1043.1MB | 295.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10004.0ms | 0.200 | 750.7MB | 1046.5MB | 295.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 369.7ms | 374.5ms | 63.9MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 365.8ms | 367.3ms | 63.7MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 718.0ms | 735.7ms | 63.9MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 17 | 20 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 203.2ms |
| baseline | v2 | smoke | 3.53.3 | 17 | 20 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 215.2ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -30.4% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.5ms | 1.6ms | 1000 | 20 | 1.8ms | -9.8% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.5ms | -11.1% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | +5.2% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -11.1% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -23.5% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +5.7% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +1.9% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | -7.0% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +6.3% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | -11.3% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | -7.1% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

