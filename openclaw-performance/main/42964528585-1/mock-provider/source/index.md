# OpenClaw Source Performance

Generated: 2026-11-11T05:28:04.533Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5572.4ms | 5626.3ms | 4044.9ms | 4952.4ms | 5567.0ms | 553.5ms | 1168.6MB | 1.436 |
| skipChannels | gateway, skip channels | 5149.4ms | 5239.3ms | 3766.4ms | 4621.9ms | 5141.7ms | 517.1ms | 1183.6MB | 1.381 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 5685.8ms | 5724.6ms | 4311.6ms | 5115.8ms | 5682.2ms | 586.3ms | 1155.7MB | 1.407 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 5077.3ms | 5298.0ms | 3805.0ms | 4590.2ms | 5067.0ms | 553.0ms | 1170.3MB | 1.387 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5498.4ms | 5570.9ms | 4103.8ms | 4951.0ms | 5484.2ms | 579.5ms | 1161.2MB | 1.457 |
| oneInternalHook | gateway, one configured internal hook | 5631.0ms | 5674.7ms | 4044.0ms | 5021.1ms | 5617.3ms | 573.9ms | 1164.1MB | 1.430 |
| allInternalHooks | gateway, all internal hooks | 5852.7ms | 5895.6ms | 4163.3ms | 5190.8ms | 5847.8ms | 583.6ms | 1184.1MB | 1.390 |
| fiftyPlugins | gateway, 50 manifest plugins | 6275.4ms | 6287.0ms | 4538.7ms | 5715.6ms | 6254.0ms | 627.4ms | 1158.9MB | 1.438 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 5803.1ms | 5859.8ms | 4335.1ms | 5227.3ms | 5797.7ms | 599.7ms | 1154.2MB | 1.420 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1215.9MB | 1168.6MB | -47.3MB (-3.9%) | +6.7MB (+2.4%) | stable |
| gateway boot | skipChannels | 1193.5MB | 1183.6MB | -9.9MB (-0.8%) | +8.6MB (+4.0%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1164.8MB | 1155.7MB | -9.1MB (-0.8%) | +0.7MB (+0.3%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1161.6MB | 1170.3MB | +8.7MB (+0.7%) | +0.8MB (+0.4%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1168.0MB | 1161.2MB | -6.8MB (-0.6%) | -1.1MB (-0.4%) | stable |
| gateway boot | oneInternalHook | 1195.0MB | 1164.1MB | -30.8MB (-2.6%) | +1.5MB (+0.7%) | stable |
| gateway boot | allInternalHooks | 1210.6MB | 1184.1MB | -26.5MB (-2.2%) | +0.6MB (+0.3%) | stable |
| gateway boot | fiftyPlugins | 1193.2MB | 1158.9MB | -34.3MB (-2.9%) | +13.5MB (+6.7%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1166.2MB | 1154.2MB | -12.0MB (-1.0%) | +0.7MB (+0.3%) | stable |
| cli | gatewayHealthJsonWarmState | 67.4MiB | 67.3MiB | -0.1MiB (-0.2%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 67.3MiB | 67.2MiB | -0.1MiB (-0.2%) | n/a | stable |
| cli | configGetGatewayPort | 67.3MiB | 67.2MiB | -0.1MiB (-0.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | -87.3MB | -22.7MB | +64.6MB (-74.0%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.5MB | 0.0MB | ok |
| all 181 bundled plugins | 557.4MB | 512.9MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 356.4MB | 311.9MB | ok |
| knowledge | 356.2MB | 311.7MB | ok |
| active-memory | 349.6MB | 305.1MB | ok |
| agentsapi | 339.9MB | 295.4MB | ok |
| clickclack | 339.4MB | 294.9MB | ok |
| workboard | 338.9MB | 294.4MB | ok |
| muse | 333.8MB | 289.3MB | ok |
| policy | 318.6MB | 274.1MB | ok |
| copilot | 314.4MB | 269.9MB | ok |
| skill-workshop | 307.3MB | 262.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 5383.9ms | 5384.4ms |
| default | process.bootstrap | 2657.9ms | 2658.3ms |
| default | runtime.post-attach | 978.8ms | 998.7ms |
| default | cli.main.gateway-run-bootstrap | 885.0ms | 914.3ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 885.0ms | 914.3ms |
| skipChannels | cli.main.gateway-run-parse | 4660.2ms | 4674.6ms |
| skipChannels | process.bootstrap | 2433.0ms | 2581.8ms |
| skipChannels | cli.main.gateway-run-bootstrap | 858.1ms | 892.8ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 858.1ms | 892.8ms |
| skipChannels | cli.command.config-ready | 856.7ms | 891.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 5040.1ms | 5130.3ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2807.8ms | 2842.8ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 943.3ms | 963.5ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 943.3ms | 963.5ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 941.6ms | 959.5ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 4520.4ms | 4706.7ms |
| preparedRuntimeScaleOne | process.bootstrap | 2471.0ms | 2700.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 840.5ms | 915.5ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 840.5ms | 915.5ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 839.2ms | 913.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 4900.3ms | 4992.3ms |
| preparedRuntimeScaleMany | process.bootstrap | 2682.8ms | 2696.7ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 939.3ms | 949.0ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 939.3ms | 949.0ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 937.8ms | 947.6ms |
| oneInternalHook | cli.main.gateway-run-parse | 5055.7ms | 5056.4ms |
| oneInternalHook | process.bootstrap | 2666.9ms | 2674.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 922.0ms | 939.8ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 922.0ms | 939.8ms |
| oneInternalHook | cli.command.config-ready | 920.4ms | 938.3ms |
| allInternalHooks | cli.main.gateway-run-parse | 5281.9ms | 5310.2ms |
| allInternalHooks | process.bootstrap | 2677.2ms | 2758.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 917.0ms | 943.6ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 917.0ms | 943.6ms |
| allInternalHooks | cli.command.config-ready | 915.7ms | 942.1ms |
| fiftyPlugins | cli.main.gateway-run-parse | 5697.3ms | 5721.4ms |
| fiftyPlugins | process.bootstrap | 2987.9ms | 3091.3ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1012.8ms | 1072.0ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1012.8ms | 1072.0ms |
| fiftyPlugins | cli.command.config-ready | 1011.3ms | 1069.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 5229.3ms | 5285.9ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2858.6ms | 2868.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 984.3ms | 992.6ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 984.3ms | 992.6ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 982.7ms | 991.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12829.0ms | 0.390 | 1891.1MB | 1904.0MB | 12.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12381.0ms | 0.323 | 1905.9MB | 1859.6MB | -46.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12218.0ms | 0.327 | 1990.9MB | 1956.1MB | -34.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 710.2ms | 731.4ms | 67.3MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 690.5ms | 707.4ms | 67.2MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 766.2ms | 789.9ms | 67.2MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 39 | 41 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 320.7ms |
| baseline | v2 | smoke | 3.53.4 | 39 | 41 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 260.7ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +27.8% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.6ms | 1.7ms | 1000 | 20 | 1.4ms | +15.7% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.5ms | 250 | 20 | 0.4ms | +13.2% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | +12.8% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +44.7% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +16.7% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +20.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +42.3% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.4ms | 675 | 20 | 0.3ms | +32.6% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +18.2% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.1ms | +23.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 2.2ms | 5.2ms | 256 | 20 | 2.8ms | +83.8% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

