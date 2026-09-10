# OpenClaw Source Performance

Generated: 2026-09-10T05:29:27.615Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4242.9ms | 4246.4ms | 4242.5ms | 3983.3ms | 4169.1ms | 95.8ms | 585.6MB | 1.004 |
| skipChannels | gateway, skip channels | 4364.2ms | 4482.6ms | 3920.3ms | 4116.3ms | 3864.8ms | 95.5ms | 587.0MB | 0.958 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4089.0ms | 4163.2ms | 3875.4ms | 3963.9ms | 3824.6ms | 84.8ms | 562.3MB | 1.012 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4226.0ms | 4359.4ms | 3850.9ms | 3939.6ms | 3797.7ms | 95.9ms | 556.0MB | 0.957 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5009.6ms | 5063.5ms | 4277.1ms | 4365.0ms | 4226.0ms | 90.2ms | 624.9MB | 0.999 |
| oneInternalHook | gateway, one configured internal hook | 4009.1ms | 4193.8ms | 3629.5ms | 3815.7ms | 3582.7ms | 89.9ms | 589.1MB | 1.000 |
| allInternalHooks | gateway, all internal hooks | 4086.6ms | 5298.2ms | 3688.4ms | 3876.6ms | 3638.5ms | 90.4ms | 586.4MB | 0.996 |
| fiftyPlugins | gateway, 50 manifest plugins | 4066.2ms | 4325.0ms | 3762.4ms | 3892.7ms | 3714.5ms | 87.9ms | 564.6MB | 0.990 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4497.9ms | 5185.1ms | 4183.9ms | 4270.8ms | 4122.9ms | 88.9ms | 571.8MB | 0.983 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 577.4MB | 585.6MB | +8.2MB (+1.4%) | +12.6MB (+3.7%) | stable |
| gateway boot | skipChannels | 579.2MB | 587.0MB | +7.8MB (+1.3%) | +15.1MB (+5.5%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 561.7MB | 562.3MB | +0.6MB (+0.1%) | +13.9MB (+5.1%) | stable |
| gateway boot | preparedRuntimeScaleOne | 566.0MB | 556.0MB | -10.0MB (-1.8%) | +12.9MB (+4.7%) | stable |
| gateway boot | preparedRuntimeScaleMany | 613.1MB | 624.9MB | +11.8MB (+1.9%) | +14.4MB (+5.2%) | stable |
| gateway boot | oneInternalHook | 619.4MB | 589.1MB | -30.3MB (-4.9%) | +15.4MB (+5.7%) | stable |
| gateway boot | allInternalHooks | 570.3MB | 586.4MB | +16.0MB (+2.8%) | -15.9MB (-5.2%) | stable |
| gateway boot | fiftyPlugins | 570.7MB | 564.6MB | -6.1MB (-1.1%) | +15.1MB (+5.4%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 569.8MB | 571.8MB | +2.1MB (+0.4%) | +15.8MB (+5.7%) | stable |
| cli | gatewayHealthJsonWarmState | 55.4MiB | 63.7MiB | +8.4MiB (+15.1%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 55.5MiB | 63.7MiB | +8.3MiB (+14.9%) | n/a | stable |
| cli | configGetGatewayPort | 55.4MiB | 63.6MiB | +8.3MiB (+14.9%) | n/a | stable |
| mock hello | gateway RSS delta avg | 155.5MB | 190.5MB | +35.0MB (+22.5%) | n/a | watch |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 150 bundled plugins | 601.6MB | 555.4MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| migrate-hermes | 377.0MB | 330.7MB | ok |
| llm-task | 374.8MB | 328.6MB | ok |
| discord | 362.6MB | 316.4MB | ok |
| workboard | 361.8MB | 315.5MB | ok |
| clickclack | 357.8MB | 311.6MB | ok |
| active-memory | 346.4MB | 300.1MB | ok |
| copilot | 325.2MB | 278.9MB | ok |
| policy | 322.0MB | 275.7MB | ok |
| canvas | 321.6MB | 275.4MB | ok |
| deepinfra | 315.8MB | 269.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 3049.0ms | 3133.7ms |
| default | cli.main.gateway-run-bootstrap | 2242.6ms | 2347.2ms |
| default | cli.bootstrap.legacy-state-migrations | 796.1ms | 814.7ms |
| default | runtime.post-attach | 336.6ms | 337.2ms |
| default | cli.main.gateway-run-select-environment | 271.1ms | 276.0ms |
| skipChannels | process.bootstrap | 3015.9ms | 3226.5ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2243.4ms | 2448.3ms |
| skipChannels | cli.bootstrap.legacy-state-migrations | 806.0ms | 888.8ms |
| skipChannels | cli.main.gateway-run-select-environment | 274.9ms | 285.5ms |
| skipChannels | gateway.shutdown-runtime-import | 132.9ms | 136.7ms |
| preparedRuntimeCatalogStall | process.bootstrap | 3066.4ms | 3183.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 2310.0ms | 2432.4ms |
| preparedRuntimeCatalogStall | cli.bootstrap.legacy-state-migrations | 808.7ms | 860.8ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 261.7ms | 264.1ms |
| preparedRuntimeCatalogStall | gateway.server-start-import | 135.6ms | 137.6ms |
| preparedRuntimeScaleOne | process.bootstrap | 3033.9ms | 3182.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 2302.5ms | 2433.4ms |
| preparedRuntimeScaleOne | cli.bootstrap.legacy-state-migrations | 785.0ms | 877.2ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 266.3ms | 284.9ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 128.7ms | 136.5ms |
| preparedRuntimeScaleMany | process.bootstrap | 3497.7ms | 3547.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 2730.2ms | 2739.3ms |
| preparedRuntimeScaleMany | cli.bootstrap.legacy-state-migrations | 796.7ms | 804.6ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 270.2ms | 273.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 261.0ms | 284.4ms |
| oneInternalHook | process.bootstrap | 2891.0ms | 3012.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2185.7ms | 2241.2ms |
| oneInternalHook | cli.bootstrap.legacy-state-migrations | 769.0ms | 786.0ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 257.5ms | 262.1ms |
| oneInternalHook | gateway.shutdown-runtime-import | 128.6ms | 128.8ms |
| allInternalHooks | process.bootstrap | 2919.7ms | 3559.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2187.2ms | 2697.8ms |
| allInternalHooks | cli.bootstrap.legacy-state-migrations | 788.8ms | 1089.8ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 246.0ms | 256.7ms |
| allInternalHooks | gateway.shutdown-runtime-import | 130.7ms | 172.2ms |
| fiftyPlugins | process.bootstrap | 3039.4ms | 3247.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2265.8ms | 2452.2ms |
| fiftyPlugins | cli.bootstrap.legacy-state-migrations | 751.2ms | 801.4ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 271.9ms | 275.5ms |
| fiftyPlugins | gateway.shutdown-runtime-import | 123.9ms | 134.4ms |
| fiftyStartupLazyPlugins | process.bootstrap | 3258.8ms | 3684.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2463.4ms | 2823.6ms |
| fiftyStartupLazyPlugins | cli.bootstrap.legacy-state-migrations | 817.5ms | 964.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 266.6ms | 301.7ms |
| fiftyStartupLazyPlugins | gateway.shutdown-runtime-import | 164.7ms | 182.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10354.0ms | 0.097 | 633.7MB | 847.6MB | 213.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10222.0ms | 0.098 | 633.0MB | 813.6MB | 180.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10898.0ms | 0.092 | 637.1MB | 814.2MB | 177.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 389.2ms | 393.1ms | 63.7MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 384.0ms | 388.9ms | 63.7MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 805.4ms | 815.0ms | 63.6MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 17 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 215.6ms |
| baseline | v2 | smoke | 3.53.3 | 16 | 19 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 201.9ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +42.9% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.7ms | 1.8ms | 1000 | 20 | 1.5ms | +17.4% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.5ms | 250 | 20 | 0.4ms | +20.6% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | +17.0% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +26.9% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +13.2% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +17.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +15.7% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +27.3% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +35.3% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | +4.8% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.3ms | -16.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

