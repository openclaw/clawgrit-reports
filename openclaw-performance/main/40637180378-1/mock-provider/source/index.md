# OpenClaw Source Performance

Generated: 2026-10-28T05:30:03.122Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5596.7ms | 5619.6ms | 3609.7ms | 4342.9ms | 5587.7ms | 276.7ms | 1479.6MB | 1.512 |
| skipChannels | gateway, skip channels | 5050.1ms | 5232.4ms | 3192.3ms | 3973.1ms | 5035.8ms | 266.4ms | 1476.9MB | 1.394 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4756.9ms | 5113.3ms | 3245.4ms | 3817.5ms | 4748.9ms | 258.8ms | 1485.3MB | 1.476 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4838.1ms | 5100.7ms | 3188.5ms | 3768.8ms | 4834.7ms | 254.5ms | 1425.9MB | 1.452 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5334.9ms | 5637.9ms | 3525.8ms | 4141.2ms | 5315.0ms | 275.2ms | 1469.5MB | 1.500 |
| oneInternalHook | gateway, one configured internal hook | 5381.8ms | 5410.1ms | 3585.4ms | 4342.9ms | 5377.5ms | 279.1ms | 1477.1MB | 1.505 |
| allInternalHooks | gateway, all internal hooks | 5193.4ms | 5316.1ms | 3430.9ms | 4141.3ms | 5186.0ms | 271.2ms | 1472.8MB | 1.505 |
| fiftyPlugins | gateway, 50 manifest plugins | 5223.7ms | 5292.7ms | 3415.5ms | 4257.1ms | 5207.7ms | 263.3ms | 1389.2MB | 1.511 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4982.8ms | 5028.3ms | 3409.4ms | 3976.9ms | 4973.3ms | 266.2ms | 1436.0MB | 1.441 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1845.1MB | 1479.6MB | -365.5MB (-19.8%) | +24.9MB (+8.9%) | improved |
| gateway boot | skipChannels | 1832.4MB | 1476.9MB | -355.6MB (-19.4%) | +7.8MB (+3.5%) | improved |
| gateway boot | preparedRuntimeCatalogStall | 1854.0MB | 1485.3MB | -368.7MB (-19.9%) | +5.6MB (+2.5%) | improved |
| gateway boot | preparedRuntimeScaleOne | 1795.2MB | 1425.9MB | -369.4MB (-20.6%) | +8.8MB (+4.0%) | improved |
| gateway boot | preparedRuntimeScaleMany | 2049.9MB | 1469.5MB | -580.5MB (-28.3%) | +17.7MB (+8.3%) | improved |
| gateway boot | oneInternalHook | 1821.6MB | 1477.1MB | -344.5MB (-18.9%) | +13.8MB (+6.2%) | improved |
| gateway boot | allInternalHooks | 1826.6MB | 1472.8MB | -353.8MB (-19.4%) | +8.2MB (+3.7%) | improved |
| gateway boot | fiftyPlugins | 1762.4MB | 1389.2MB | -373.2MB (-21.2%) | +7.8MB (+3.5%) | improved |
| gateway boot | fiftyStartupLazyPlugins | 1845.9MB | 1436.0MB | -409.9MB (-22.2%) | +7.9MB (+3.4%) | improved |
| cli | gatewayHealthJsonWarmState | 67.2MiB | 67.8MiB | +0.6MiB (+0.9%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 67.7MiB | 67.6MiB | -0.1MiB (-0.2%) | n/a | stable |
| cli | configGetGatewayPort | 68.0MiB | 67.6MiB | -0.3MiB (-0.5%) | n/a | stable |
| mock hello | gateway RSS delta avg | 108.6MB | 58.1MB | -50.5MB (-46.5%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.5MB | 0.0MB | ok |
| all 176 bundled plugins | 566.5MB | 522.0MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 405.2MB | 360.7MB | ok |
| knowledge | 381.8MB | 337.4MB | ok |
| workboard | 380.2MB | 335.8MB | ok |
| active-memory | 371.4MB | 326.9MB | ok |
| agentsapi | 342.9MB | 298.4MB | ok |
| muse | 341.4MB | 296.9MB | ok |
| policy | 336.2MB | 291.7MB | ok |
| clickclack | 318.8MB | 274.3MB | ok |
| copilot | 316.9MB | 272.4MB | ok |
| admin-http-rpc | 312.7MB | 268.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 5510.9ms | 5570.2ms |
| default | process.bootstrap | 2260.9ms | 2401.1ms |
| default | runtime.post-attach | 888.0ms | 921.7ms |
| default | cli.main.gateway-run-bootstrap | 850.1ms | 888.8ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 850.1ms | 888.8ms |
| skipChannels | cli.main.gateway-run-parse | 5005.1ms | 5164.6ms |
| skipChannels | process.bootstrap | 2123.7ms | 2281.2ms |
| skipChannels | cli.main.gateway-run-bootstrap | 809.3ms | 853.3ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 809.3ms | 853.3ms |
| skipChannels | cli.command.config-ready | 807.9ms | 851.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 4703.7ms | 5104.4ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2094.5ms | 2107.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 762.7ms | 801.4ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 762.7ms | 801.4ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 761.7ms | 799.8ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 4814.2ms | 5034.4ms |
| preparedRuntimeScaleOne | process.bootstrap | 2082.1ms | 2232.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 780.2ms | 821.6ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 780.2ms | 821.6ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 778.9ms | 820.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 5244.3ms | 5520.7ms |
| preparedRuntimeScaleMany | process.bootstrap | 2264.8ms | 2407.4ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 866.8ms | 889.1ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 866.8ms | 889.1ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 865.0ms | 887.6ms |
| oneInternalHook | cli.main.gateway-run-parse | 5302.1ms | 5332.6ms |
| oneInternalHook | process.bootstrap | 2274.3ms | 2343.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 873.1ms | 877.5ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 873.1ms | 877.5ms |
| oneInternalHook | cli.command.config-ready | 871.2ms | 875.9ms |
| allInternalHooks | cli.main.gateway-run-parse | 5144.0ms | 5239.4ms |
| allInternalHooks | process.bootstrap | 2237.7ms | 2276.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 845.3ms | 855.6ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 845.3ms | 855.6ms |
| allInternalHooks | cli.command.config-ready | 843.7ms | 853.9ms |
| fiftyPlugins | cli.main.gateway-run-parse | 5193.2ms | 5265.4ms |
| fiftyPlugins | process.bootstrap | 2233.4ms | 2245.3ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 870.3ms | 874.4ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 870.3ms | 874.4ms |
| fiftyPlugins | cli.command.config-ready | 868.7ms | 872.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 4882.7ms | 5003.9ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2149.2ms | 2172.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 794.9ms | 814.8ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 794.9ms | 814.8ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 792.9ms | 813.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11931.0ms | 0.335 | 1912.4MB | 2187.9MB | 275.5MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11921.0ms | 0.252 | 2016.3MB | 1990.8MB | -25.5MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11436.0ms | 0.262 | 2058.0MB | 1982.3MB | -75.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 589.9ms | 606.0ms | 67.8MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 576.7ms | 582.0ms | 67.6MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 589.5ms | 628.9ms | 67.6MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 35 | 38 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 273.9ms |
| baseline | v2 | smoke | 3.53.4 | 34 | 37 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 251.4ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -13.6% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.5ms | 1.5ms | 1000 | 20 | 1.5ms | +6.0% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.4ms | +7.2% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | +11.1% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +3.5% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +7.9% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +5.7% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -4.2% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | -0.7% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -4.5% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.1ms | 0.0% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.7ms | 2.2ms | 256 | 20 | 2.1ms | +5.6% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

