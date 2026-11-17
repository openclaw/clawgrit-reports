# OpenClaw Source Performance

Generated: 2026-11-17T05:26:36.247Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4819.4ms | 4982.8ms | 3399.0ms | 4383.8ms | 4804.1ms | 379.4ms | 1093.6MB | 1.276 |
| skipChannels | gateway, skip channels | 4609.3ms | 4721.3ms | 3356.1ms | 4262.8ms | 4598.7ms | 355.2ms | 1116.3MB | 1.326 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4663.9ms | 4696.5ms | 3460.5ms | 4351.0ms | 4636.3ms | 364.8ms | 1080.9MB | 1.286 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4045.4ms | 4340.7ms | 3015.2ms | 3787.6ms | 4025.8ms | 335.8ms | 1076.1MB | 1.244 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4107.5ms | 4108.5ms | 3041.7ms | 3803.8ms | 4099.1ms | 329.4ms | 1093.0MB | 1.230 |
| oneInternalHook | gateway, one configured internal hook | 4647.2ms | 4727.1ms | 3273.1ms | 4193.4ms | 4636.3ms | 364.0ms | 1122.5MB | 1.291 |
| allInternalHooks | gateway, all internal hooks | 4542.6ms | 4631.1ms | 3184.4ms | 4119.9ms | 4531.6ms | 338.5ms | 1114.4MB | 1.321 |
| fiftyPlugins | gateway, 50 manifest plugins | 4405.0ms | 4709.8ms | 3170.2ms | 4109.4ms | 4384.9ms | 356.4ms | 1126.9MB | 1.274 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3989.3ms | 4020.5ms | 2984.7ms | 3708.1ms | 3967.3ms | 330.3ms | 1076.7MB | 1.256 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1058.1MB | 1093.6MB | +35.4MB (+3.3%) | +2.3MB (+0.8%) | stable |
| gateway boot | skipChannels | 1068.4MB | 1116.3MB | +47.9MB (+4.5%) | -3.6MB (-1.6%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1035.4MB | 1080.9MB | +45.5MB (+4.4%) | -12.1MB (-5.1%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1041.3MB | 1076.1MB | +34.8MB (+3.3%) | -12.1MB (-5.1%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1054.6MB | 1093.0MB | +38.4MB (+3.6%) | +10.3MB (+4.1%) | stable |
| gateway boot | oneInternalHook | 1076.6MB | 1122.5MB | +45.9MB (+4.3%) | -22.1MB (-8.8%) | stable |
| gateway boot | allInternalHooks | 1093.7MB | 1114.4MB | +20.7MB (+1.9%) | -7.0MB (-2.8%) | stable |
| gateway boot | fiftyPlugins | 1085.5MB | 1126.9MB | +41.4MB (+3.8%) | +39.4MB (+16.9%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1029.2MB | 1076.7MB | +47.5MB (+4.6%) | -4.0MB (-1.7%) | stable |
| cli | gatewayHealthJsonWarmState | 68.1MiB | 67.6MiB | -0.5MiB (-0.8%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 67.6MiB | 67.2MiB | -0.4MiB (-0.6%) | n/a | stable |
| cli | configGetGatewayPort | 67.8MiB | 67.3MiB | -0.5MiB (-0.7%) | n/a | stable |
| mock hello | gateway RSS delta avg | 188.9MB | 276.5MB | +87.6MB (+46.4%) | n/a | watch |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.3MB | 0.0MB | ok |
| all 184 bundled plugins | 550.5MB | 506.2MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 364.1MB | 319.8MB | ok |
| active-memory | 342.2MB | 297.9MB | ok |
| clickclack | 335.6MB | 291.2MB | ok |
| agentsapi | 335.4MB | 291.0MB | ok |
| knowledge | 333.4MB | 289.1MB | ok |
| workboard | 330.0MB | 285.7MB | ok |
| muse | 325.8MB | 281.5MB | ok |
| telegram | 320.3MB | 276.0MB | ok |
| copilot | 316.9MB | 272.6MB | ok |
| policy | 316.5MB | 272.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 4636.6ms | 4848.3ms |
| default | process.bootstrap | 2336.2ms | 2398.0ms |
| default | runtime.post-attach | 947.7ms | 977.7ms |
| default | cli.main.gateway-run-bootstrap | 816.6ms | 817.6ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 816.6ms | 817.6ms |
| skipChannels | cli.main.gateway-run-parse | 4207.8ms | 4332.5ms |
| skipChannels | process.bootstrap | 2296.3ms | 2300.3ms |
| skipChannels | cli.main.gateway-run-bootstrap | 788.0ms | 807.9ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 788.0ms | 807.9ms |
| skipChannels | cli.command.config-ready | 785.6ms | 806.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 4256.8ms | 4275.2ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2363.5ms | 2414.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 806.1ms | 841.0ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 806.1ms | 841.0ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 804.6ms | 839.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 3684.6ms | 3945.9ms |
| preparedRuntimeScaleOne | process.bootstrap | 2066.6ms | 2234.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 714.0ms | 756.4ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 714.0ms | 756.4ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 712.7ms | 754.9ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 3736.4ms | 3740.7ms |
| preparedRuntimeScaleMany | process.bootstrap | 2074.7ms | 2079.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 722.7ms | 726.3ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 722.7ms | 726.3ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 721.4ms | 724.9ms |
| oneInternalHook | cli.main.gateway-run-parse | 4244.4ms | 4335.9ms |
| oneInternalHook | process.bootstrap | 2261.7ms | 2278.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 787.1ms | 805.3ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 787.1ms | 805.3ms |
| oneInternalHook | cli.command.config-ready | 785.4ms | 803.9ms |
| allInternalHooks | cli.main.gateway-run-parse | 4169.0ms | 4286.7ms |
| allInternalHooks | process.bootstrap | 2109.4ms | 2156.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 729.2ms | 744.5ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 729.2ms | 744.5ms |
| allInternalHooks | cli.command.config-ready | 727.9ms | 742.6ms |
| fiftyPlugins | cli.main.gateway-run-parse | 4063.8ms | 4320.7ms |
| fiftyPlugins | process.bootstrap | 2164.7ms | 2467.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 758.1ms | 921.2ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 758.1ms | 921.2ms |
| fiftyPlugins | cli.command.config-ready | 756.8ms | 919.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 3621.2ms | 3667.4ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2049.9ms | 2056.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 711.9ms | 717.0ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 711.9ms | 717.0ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 710.5ms | 715.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10987.0ms | 0.455 | 1792.2MB | 2139.3MB | 347.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10730.0ms | 0.466 | 1776.3MB | 2119.6MB | 343.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11140.0ms | 0.449 | 1962.6MB | 2101.8MB | 139.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 576.5ms | 683.5ms | 67.6MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 521.1ms | 523.4ms | 67.2MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 614.4ms | 635.0ms | 67.3MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 40 | 42 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 293.3ms |
| baseline | v2 | smoke | 3.53.4 | 40 | 42 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 519.5ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -51.3% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.8ms | 4.5ms | 1000 | 20 | 7.5ms | -40.7% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.5ms | -20.4% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.4ms | -21.0% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -22.2% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -22.1% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -23.2% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -21.0% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.4ms | -23.5% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -38.9% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.2ms | -21.9% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.6ms | 1.9ms | 256 | 20 | 2.8ms | -30.0% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

