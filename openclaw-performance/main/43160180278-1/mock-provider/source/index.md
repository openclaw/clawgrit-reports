# OpenClaw Source Performance

Generated: 2026-11-12T05:27:11.475Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4834.5ms | 4839.0ms | 3536.8ms | 4248.3ms | 4825.6ms | 487.6ms | 1204.1MB | 1.272 |
| skipChannels | gateway, skip channels | 5229.0ms | 5331.7ms | 3728.4ms | 4663.1ms | 5199.6ms | 522.3ms | 1160.2MB | 1.372 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 5104.2ms | 5428.2ms | 3969.8ms | 4701.5ms | 5095.1ms | 565.7ms | 1162.4MB | 1.371 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 5102.7ms | 5244.5ms | 3950.3ms | 4658.1ms | 5082.9ms | 540.5ms | 1151.0MB | 1.376 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5044.4ms | 5247.6ms | 3831.5ms | 4553.7ms | 5031.8ms | 529.1ms | 1173.7MB | 1.394 |
| oneInternalHook | gateway, one configured internal hook | 5546.2ms | 5638.9ms | 4045.0ms | 4981.6ms | 5534.5ms | 540.2ms | 1161.9MB | 1.319 |
| allInternalHooks | gateway, all internal hooks | 4969.8ms | 5060.7ms | 3621.9ms | 4465.5ms | 4961.3ms | 492.5ms | 1174.5MB | 1.412 |
| fiftyPlugins | gateway, 50 manifest plugins | 5087.2ms | 5256.2ms | 3709.0ms | 4632.5ms | 5061.2ms | 514.0ms | 1160.7MB | 1.382 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4704.7ms | 4735.1ms | 3645.4ms | 4287.5ms | 4699.6ms | 511.0ms | 1155.1MB | 1.280 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1168.6MB | 1204.1MB | +35.5MB (+3.0%) | +17.9MB (+6.2%) | stable |
| gateway boot | skipChannels | 1183.6MB | 1160.2MB | -23.4MB (-2.0%) | +7.1MB (+3.2%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1155.7MB | 1162.4MB | +6.7MB (+0.6%) | -14.8MB (-6.4%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1170.3MB | 1151.0MB | -19.3MB (-1.6%) | +15.5MB (+7.2%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1161.2MB | 1173.7MB | +12.5MB (+1.1%) | -12.2MB (-4.9%) | stable |
| gateway boot | oneInternalHook | 1164.1MB | 1161.9MB | -2.2MB (-0.2%) | +14.5MB (+6.7%) | stable |
| gateway boot | allInternalHooks | 1184.1MB | 1174.5MB | -9.6MB (-0.8%) | +15.3MB (+7.1%) | stable |
| gateway boot | fiftyPlugins | 1158.9MB | 1160.7MB | +1.8MB (+0.2%) | +2.7MB (+1.3%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1154.2MB | 1155.1MB | +0.9MB (+0.1%) | +2.8MB (+1.3%) | stable |
| cli | gatewayHealthJsonWarmState | 67.3MiB | 67.8MiB | +0.5MiB (+0.7%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 67.2MiB | 67.4MiB | +0.3MiB (+0.4%) | n/a | stable |
| cli | configGetGatewayPort | 67.2MiB | 67.1MiB | -0.1MiB (-0.2%) | n/a | stable |
| mock hello | gateway RSS delta avg | -22.7MB | -39.1MB | -16.4MB (+72.0%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.3MB | 0.0MB | ok |
| all 184 bundled plugins | 562.6MB | 518.2MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 374.1MB | 329.7MB | ok |
| knowledge | 357.2MB | 312.8MB | ok |
| active-memory | 351.6MB | 307.2MB | ok |
| agentsapi | 343.3MB | 298.9MB | ok |
| workboard | 342.9MB | 298.6MB | ok |
| telegram | 342.9MB | 298.5MB | ok |
| clickclack | 341.4MB | 297.1MB | ok |
| deepinfra | 323.7MB | 279.4MB | ok |
| muse | 317.9MB | 273.5MB | ok |
| policy | 316.8MB | 272.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 4610.3ms | 4644.8ms |
| default | process.bootstrap | 2312.5ms | 2338.5ms |
| default | runtime.post-attach | 828.6ms | 832.2ms |
| default | cli.main.gateway-run-bootstrap | 794.6ms | 827.0ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 794.6ms | 827.0ms |
| skipChannels | cli.main.gateway-run-parse | 4685.3ms | 4819.8ms |
| skipChannels | process.bootstrap | 2496.5ms | 2589.5ms |
| skipChannels | cli.main.gateway-run-bootstrap | 862.4ms | 932.9ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 862.4ms | 932.9ms |
| skipChannels | cli.command.config-ready | 860.6ms | 931.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 4511.6ms | 4697.4ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2657.5ms | 2907.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 927.6ms | 973.0ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 927.6ms | 973.0ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 925.5ms | 970.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 4541.3ms | 4684.8ms |
| preparedRuntimeScaleOne | process.bootstrap | 2566.8ms | 2595.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 888.8ms | 927.0ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 888.8ms | 927.0ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 887.5ms | 925.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 4529.3ms | 4694.0ms |
| preparedRuntimeScaleMany | process.bootstrap | 2560.2ms | 2624.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 907.4ms | 929.3ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 907.4ms | 929.3ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 906.0ms | 927.9ms |
| oneInternalHook | cli.main.gateway-run-parse | 5028.1ms | 5068.6ms |
| oneInternalHook | process.bootstrap | 2661.5ms | 2684.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 920.8ms | 944.7ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 920.8ms | 944.7ms |
| oneInternalHook | cli.command.config-ready | 919.0ms | 943.2ms |
| allInternalHooks | cli.main.gateway-run-parse | 4463.5ms | 4560.1ms |
| allInternalHooks | process.bootstrap | 2409.5ms | 2438.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 838.9ms | 856.2ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 838.9ms | 856.2ms |
| allInternalHooks | cli.command.config-ready | 837.6ms | 855.0ms |
| fiftyPlugins | cli.main.gateway-run-parse | 4585.3ms | 4778.3ms |
| fiftyPlugins | process.bootstrap | 2484.0ms | 2537.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 879.6ms | 911.5ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 879.6ms | 911.5ms |
| fiftyPlugins | cli.command.config-ready | 878.4ms | 910.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 4167.1ms | 4220.1ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2417.4ms | 2456.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 852.2ms | 880.8ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 852.2ms | 880.8ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 851.0ms | 879.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11665.0ms | 0.257 | 2024.5MB | 1963.4MB | -61.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11167.0ms | 0.269 | 2045.9MB | 1964.2MB | -81.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10882.0ms | 0.368 | 1892.3MB | 1917.8MB | 25.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 713.3ms | 729.7ms | 67.8MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 666.8ms | 686.1ms | 67.4MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 774.5ms | 801.5ms | 67.1MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 39 | 41 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 305.7ms |
| baseline | v2 | smoke | 3.53.4 | 39 | 41 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 320.7ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -8.7% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.6ms | 1.7ms | 1000 | 20 | 1.7ms | +1.9% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.5ms | -2.4% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.5ms | 696 | 20 | 0.3ms | +59.5% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.1ms | +19.5% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.1ms | +46.9% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -4.1% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -24.3% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.4ms | -19.5% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -3.8% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.2ms | 256 | 20 | 0.2ms | -8.6% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 2.2ms | 3.8ms | 256 | 20 | 5.2ms | -26.7% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

