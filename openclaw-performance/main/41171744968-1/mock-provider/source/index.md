# OpenClaw Source Performance

Generated: 2026-10-31T05:25:08.071Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5376.9ms | 5511.1ms | 3826.1ms | 4611.9ms | 5366.0ms | 535.1ms | 1281.7MB | 1.488 |
| skipChannels | gateway, skip channels | 5121.4ms | 5340.3ms | 3662.6ms | 4500.9ms | 5118.3ms | 544.9ms | 1263.6MB | 1.498 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4950.2ms | 4993.2ms | 3850.8ms | 4484.9ms | 4948.2ms | 564.0ms | 1274.8MB | 1.414 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4606.8ms | 4705.0ms | 3472.1ms | 4061.3ms | 4593.1ms | 488.6ms | 1272.6MB | 1.325 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4999.4ms | 5328.0ms | 3606.3ms | 4282.1ms | 4987.8ms | 514.6ms | 1279.4MB | 1.445 |
| oneInternalHook | gateway, one configured internal hook | 4877.9ms | 5014.3ms | 3538.0ms | 4271.2ms | 4860.7ms | 504.3ms | 1279.0MB | 1.442 |
| allInternalHooks | gateway, all internal hooks | 4768.5ms | 4850.6ms | 3447.0ms | 4176.3ms | 4757.3ms | 512.7ms | 1261.3MB | 1.468 |
| fiftyPlugins | gateway, 50 manifest plugins | 4579.8ms | 4663.6ms | 3306.5ms | 4117.2ms | 4557.0ms | 485.4ms | 1272.2MB | 1.330 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4367.5ms | 4397.9ms | 3381.1ms | 3933.2ms | 4361.5ms | 479.8ms | 1283.9MB | 1.379 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1270.0MB | 1281.7MB | +11.8MB (+0.9%) | 0.0MB (0.0%) | stable |
| gateway boot | skipChannels | 1257.8MB | 1263.6MB | +5.9MB (+0.5%) | +4.9MB (+2.0%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1249.6MB | 1274.8MB | +25.2MB (+2.0%) | -5.4MB (-2.2%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1257.6MB | 1272.6MB | +14.9MB (+1.2%) | +11.2MB (+4.6%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1259.2MB | 1279.4MB | +20.3MB (+1.6%) | +17.4MB (+6.8%) | stable |
| gateway boot | oneInternalHook | 1271.7MB | 1279.0MB | +7.3MB (+0.6%) | -13.2MB (-5.2%) | stable |
| gateway boot | allInternalHooks | 1257.4MB | 1261.3MB | +3.9MB (+0.3%) | +12.4MB (+5.2%) | stable |
| gateway boot | fiftyPlugins | 1259.7MB | 1272.2MB | +12.5MB (+1.0%) | -11.9MB (-4.7%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1226.5MB | 1283.9MB | +57.4MB (+4.7%) | -11.8MB (-4.7%) | stable |
| cli | gatewayHealthJsonWarmState | 67.5MiB | 67.8MiB | +0.3MiB (+0.4%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 67.6MiB | 67.6MiB | -0.0MiB (-0.0%) | n/a | stable |
| cli | configGetGatewayPort | 67.1MiB | 67.3MiB | +0.2MiB (+0.3%) | n/a | stable |
| mock hello | gateway RSS delta avg | -76.0MB | 18.1MB | +94.1MB (-123.8%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.3MB | 0.0MB | ok |
| all 177 bundled plugins | 572.9MB | 528.6MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 398.4MB | 354.0MB | ok |
| knowledge | 387.7MB | 343.3MB | ok |
| active-memory | 384.7MB | 340.4MB | ok |
| workboard | 380.4MB | 336.1MB | ok |
| agentsapi | 338.8MB | 294.5MB | ok |
| muse | 337.4MB | 293.1MB | ok |
| policy | 335.7MB | 291.4MB | ok |
| team-reports | 326.8MB | 282.4MB | ok |
| admin-http-rpc | 319.3MB | 274.9MB | ok |
| copilot | 317.7MB | 273.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 5170.4ms | 5289.6ms |
| default | process.bootstrap | 2454.5ms | 2673.4ms |
| default | runtime.post-attach | 1002.5ms | 1007.0ms |
| default | cli.main.gateway-run-bootstrap | 781.3ms | 928.2ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 781.3ms | 928.2ms |
| skipChannels | cli.main.gateway-run-parse | 4640.2ms | 4840.9ms |
| skipChannels | process.bootstrap | 2402.7ms | 2452.5ms |
| skipChannels | cli.main.gateway-run-bootstrap | 744.6ms | 799.1ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 744.6ms | 799.1ms |
| skipChannels | cli.command.config-ready | 743.3ms | 797.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 4336.8ms | 4414.5ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2588.2ms | 2717.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 837.7ms | 854.2ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 837.7ms | 854.2ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 836.3ms | 852.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 4133.9ms | 4209.5ms |
| preparedRuntimeScaleOne | process.bootstrap | 2292.7ms | 2301.5ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 714.3ms | 724.9ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 714.3ms | 724.9ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 712.9ms | 723.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 4488.8ms | 4761.2ms |
| preparedRuntimeScaleMany | process.bootstrap | 2391.6ms | 2612.3ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 789.1ms | 855.2ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 789.1ms | 855.2ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 787.7ms | 853.7ms |
| oneInternalHook | cli.main.gateway-run-parse | 4405.6ms | 4575.5ms |
| oneInternalHook | process.bootstrap | 2375.7ms | 2411.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 772.9ms | 784.1ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 772.9ms | 784.1ms |
| oneInternalHook | cli.command.config-ready | 771.6ms | 782.9ms |
| allInternalHooks | cli.main.gateway-run-parse | 4268.3ms | 4346.5ms |
| allInternalHooks | process.bootstrap | 2305.1ms | 2325.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 720.9ms | 731.9ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 720.9ms | 731.9ms |
| allInternalHooks | cli.command.config-ready | 719.8ms | 730.7ms |
| fiftyPlugins | cli.main.gateway-run-parse | 4127.5ms | 4193.2ms |
| fiftyPlugins | process.bootstrap | 2226.0ms | 2267.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 716.5ms | 735.8ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 716.5ms | 735.8ms |
| fiftyPlugins | cli.command.config-ready | 715.3ms | 734.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 3907.5ms | 3928.1ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2249.0ms | 2290.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 719.2ms | 791.2ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 719.2ms | 791.2ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 717.8ms | 790.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10893.0ms | 0.367 | 2066.2MB | 2049.5MB | -16.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10874.0ms | 0.368 | 2063.0MB | 2098.8MB | 35.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11572.0ms | 0.432 | 2052.8MB | 2087.9MB | 35.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 762.2ms | 790.1ms | 67.8MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 651.7ms | 758.5ms | 67.6MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 716.2ms | 723.8ms | 67.3MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 36 | 39 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 276.5ms |
| baseline | v2 | smoke | 3.53.4 | 36 | 38 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 247.3ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +5.0% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.4ms | 1.5ms | 1000 | 20 | 1.5ms | +2.1% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.5ms | -17.2% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | +4.3% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +0.9% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | 0.0% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +3.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +1.9% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | -2.5% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +5.3% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.1ms | +5.0% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.7ms | 2.1ms | 256 | 20 | 2.0ms | +7.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

