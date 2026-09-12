# OpenClaw Source Performance

Generated: 2026-09-12T05:27:54.351Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4315.3ms | 4509.9ms | 4315.0ms | 3444.1ms | 4201.3ms | 88.5ms | 622.5MB | 1.197 |
| skipChannels | gateway, skip channels | 4063.9ms | 4218.7ms | 3150.8ms | 3341.5ms | 3095.7ms | 92.2ms | 657.4MB | 1.422 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3156.0ms | 3181.5ms | 2930.9ms | 3019.2ms | 2874.6ms | 92.4ms | 553.4MB | 0.959 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3280.4ms | 3364.6ms | 2849.1ms | 2938.7ms | 2800.1ms | 83.0ms | 556.4MB | 0.919 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5309.6ms | 5868.3ms | 3936.7ms | 4033.9ms | 3865.8ms | 85.5ms | 619.0MB | 1.144 |
| oneInternalHook | gateway, one configured internal hook | 3759.1ms | 3920.6ms | 2921.1ms | 3101.8ms | 2869.8ms | 84.5ms | 639.1MB | 1.087 |
| allInternalHooks | gateway, all internal hooks | 4462.5ms | 5245.9ms | 3346.4ms | 3561.4ms | 3284.4ms | 93.9ms | 641.3MB | 1.162 |
| fiftyPlugins | gateway, 50 manifest plugins | 4130.8ms | 4461.1ms | 3210.3ms | 3399.3ms | 3155.3ms | 95.5ms | 584.8MB | 1.121 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3568.3ms | 3578.4ms | 3315.8ms | 3402.5ms | 3259.7ms | 93.8ms | 556.1MB | 1.123 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 585.6MB | 622.5MB | +37.0MB (+6.3%) | +27.5MB (+7.9%) | stable |
| gateway boot | skipChannels | 587.0MB | 657.4MB | +70.4MB (+12.0%) | -9.6MB (-3.3%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 562.3MB | 553.4MB | -8.8MB (-1.6%) | +5.8MB (+2.0%) | stable |
| gateway boot | preparedRuntimeScaleOne | 556.0MB | 556.4MB | +0.4MB (+0.1%) | -5.6MB (-1.9%) | stable |
| gateway boot | preparedRuntimeScaleMany | 624.9MB | 619.0MB | -5.8MB (-0.9%) | +7.2MB (+2.4%) | stable |
| gateway boot | oneInternalHook | 589.1MB | 639.1MB | +49.9MB (+8.5%) | -8.9MB (-3.1%) | stable |
| gateway boot | allInternalHooks | 586.4MB | 641.3MB | +54.9MB (+9.4%) | -11.7MB (-4.0%) | stable |
| gateway boot | fiftyPlugins | 564.6MB | 584.8MB | +20.2MB (+3.6%) | +7.2MB (+2.5%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 571.8MB | 556.1MB | -15.7MB (-2.7%) | +7.4MB (+2.5%) | stable |
| cli | gatewayHealthJsonWarmState | 63.7MiB | 64.2MiB | +0.5MiB (+0.7%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 63.7MiB | 63.7MiB | -0.1MiB (-0.1%) | n/a | stable |
| cli | configGetGatewayPort | 63.6MiB | 64.0MiB | +0.4MiB (+0.6%) | n/a | stable |
| mock hello | gateway RSS delta avg | 190.5MB | 159.7MB | -30.8MB (-16.2%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 151 bundled plugins | 636.7MB | 590.5MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| migrate-hermes | 380.0MB | 333.7MB | ok |
| active-memory | 365.8MB | 319.5MB | ok |
| llm-task | 364.6MB | 318.4MB | ok |
| workboard | 361.7MB | 315.5MB | ok |
| policy | 338.6MB | 292.3MB | ok |
| discord | 336.7MB | 290.4MB | ok |
| clickclack | 325.3MB | 279.0MB | ok |
| copilot | 325.2MB | 278.9MB | ok |
| deepinfra | 316.0MB | 269.8MB | ok |
| amazon-bedrock | 313.6MB | 267.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2457.1ms | 2527.2ms |
| default | cli.main.gateway-run-bootstrap | 1710.7ms | 1766.8ms |
| default | runtime.post-attach | 912.3ms | 1022.5ms |
| default | sidecars.model-runtime | 548.0ms | 598.0ms |
| default | sidecars.model-runtime-build.workspaceFactsMs | 525.2ms | 575.6ms |
| skipChannels | process.bootstrap | 2378.7ms | 2383.1ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1642.6ms | 1644.7ms |
| skipChannels | sidecars.model-runtime | 508.2ms | 586.8ms |
| skipChannels | sidecars.model-runtime-build.workspaceFactsMs | 487.2ms | 560.2ms |
| skipChannels | sidecars.model-runtime-build.runtimePluginMs | 479.5ms | 550.3ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2181.6ms | 2259.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1507.9ms | 1560.4ms |
| preparedRuntimeCatalogStall | cli.bootstrap.legacy-state-migrations | 275.1ms | 282.9ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 260.7ms | 261.9ms |
| preparedRuntimeCatalogStall | gateway.shutdown-runtime-import | 128.3ms | 130.9ms |
| preparedRuntimeScaleOne | process.bootstrap | 2152.7ms | 2206.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1504.2ms | 1555.3ms |
| preparedRuntimeScaleOne | cli.bootstrap.legacy-state-migrations | 269.2ms | 271.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 244.3ms | 253.4ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 136.4ms | 137.9ms |
| preparedRuntimeScaleMany | process.bootstrap | 2941.7ms | 3956.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 2180.9ms | 2887.1ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 543.3ms | 734.2ms |
| preparedRuntimeScaleMany | cli.bootstrap.legacy-state-migrations | 357.4ms | 379.1ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 282.5ms | 312.2ms |
| oneInternalHook | process.bootstrap | 2189.2ms | 2317.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1497.6ms | 1604.2ms |
| oneInternalHook | sidecars.model-runtime | 464.4ms | 465.6ms |
| oneInternalHook | sidecars.model-runtime-build.workspaceFactsMs | 445.4ms | 446.9ms |
| oneInternalHook | sidecars.model-runtime-build.runtimePluginMs | 438.3ms | 439.4ms |
| allInternalHooks | process.bootstrap | 2541.4ms | 2831.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1794.3ms | 1981.9ms |
| allInternalHooks | sidecars.model-runtime | 643.5ms | 715.9ms |
| allInternalHooks | sidecars.model-runtime-build.workspaceFactsMs | 618.7ms | 688.0ms |
| allInternalHooks | sidecars.model-runtime-build.runtimePluginMs | 607.5ms | 674.8ms |
| fiftyPlugins | process.bootstrap | 2467.7ms | 2597.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1726.6ms | 1803.2ms |
| fiftyPlugins | sidecars.reply-runtime | 387.7ms | 401.5ms |
| fiftyPlugins | cli.bootstrap.legacy-state-migrations | 292.5ms | 317.8ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 273.4ms | 281.3ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2524.3ms | 2540.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1775.2ms | 1785.2ms |
| fiftyStartupLazyPlugins | cli.bootstrap.legacy-state-migrations | 299.8ms | 302.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 285.8ms | 289.0ms |
| fiftyStartupLazyPlugins | gateway.shutdown-runtime-import | 141.9ms | 146.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9412.0ms | 0.106 | 606.1MB | 751.6MB | 145.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9241.0ms | 0.108 | 626.1MB | 784.2MB | 158.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9165.0ms | 0.109 | 604.9MB | 780.5MB | 175.6MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 397.1ms | 408.2ms | 64.2MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 402.7ms | 446.2ms | 63.7MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 811.9ms | 835.7ms | 64.0MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 17 | 20 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 215.2ms |
| baseline | v2 | smoke | 3.53.3 | 17 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 215.6ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +15.0% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.7ms | 1.8ms | 1000 | 20 | 1.8ms | -1.7% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.5ms | 250 | 20 | 0.5ms | -7.0% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | -2.4% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -8.0% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.1ms | +24.1% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -11.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -10.2% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | -16.8% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -30.4% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | +4.1% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | +2.1% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

